import React, { useState, useEffect, useRef, useCallback } from 'react'
import SceneRenderer from './SceneRenderer.jsx'
import { NARRATIONS } from '../data/narrations.js'

const TICK_MS = 100

// ── Speech engine ─────────────────────────────────────────────────────────────
// Uses a small FIFO queue so cues never interrupt each other mid-sentence.
// Only explicit user actions (pause / seek / mute) flush the queue.

const synth = window.speechSynthesis
let preferredVoice = null

function loadVoice() {
  const voices = synth.getVoices()
  if (!voices.length) return
  preferredVoice =
    voices.find(v => v.name === 'Google US English') ||
    voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
    voices.find(v => v.name === 'Samantha' || v.name === 'Daniel') ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en')) ||
    null
}
loadVoice()
if (typeof synth.onvoiceschanged !== 'undefined') synth.onvoiceschanged = loadVoice

// Shared speech queue — persists across re-renders
const queue = { items: [], busy: false }

function flushQueue() {
  synth.cancel()
  queue.items = []
  queue.busy = false
}

function enqueue(text, rate = 0.88) {
  queue.items.push({ text, rate })
  if (!queue.busy) drainQueue()
}

function drainQueue() {
  if (!queue.items.length) { queue.busy = false; return }
  queue.busy = true
  const { text, rate } = queue.items.shift()
  const utt = new SpeechSynthesisUtterance(text)
  utt.rate = rate
  utt.pitch = 1.0
  utt.volume = 1.0
  if (preferredVoice) utt.voice = preferredVoice
  utt.onend = drainQueue
  utt.onerror = drainQueue   // don't stall on error
  synth.speak(utt)
}

// ── Speech-timing utilities ───────────────────────────────────────────────────
// Estimate speaking time for a piece of text at rate 0.88 (~132 wpm).
const WORDS_PER_MIN = 132
const CUE_GAP_SECS  = 0.5   // breath pause between consecutive cues
const SCENE_BUFFER  = 6     // extra seconds after last cue before scene advances

function estimateSpeechSecs(text) {
  return (text.trim().split(/\s+/).length / WORDS_PER_MIN) * 60
}

// Start time (seconds) of each cue within a scene.
// cue[0] = 0 (immediate); cue[i] fires after cue[i-1] is estimated done.
function getCueTimes(cues) {
  const times = [0]
  let t = 0
  for (let i = 0; i < cues.length - 1; i++) {
    t += estimateSpeechSecs(cues[i]) + CUE_GAP_SECS
    times.push(t)
  }
  return times
}

// Minimum scene duration so ALL speech finishes before the scene advances.
// = start of last cue  +  estimated duration of last cue  +  buffer.
function computeSceneDuration(cues) {
  if (!cues.length) return 90          // fallback for scenes with no narration
  const times   = getCueTimes(cues)
  const lastIdx = cues.length - 1
  return times[lastIdx] + estimateSpeechSecs(cues[lastIdx]) + SCENE_BUFFER
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function VideoPlayer({ moduleId, scenes, onComplete }) {
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [muted, setMuted] = useState(false)

  const intervalRef   = useRef(null)
  const elapsedRef    = useRef(0)
  const mutedRef      = useRef(false)
  const firedCuesRef  = useRef(new Set())
  const prevSceneRef  = useRef(-1)

  // ── Compute speech-driven scene durations ─────────────────────────────────
  // Each scene lasts at least as long as all its narration cues need to speak.
  // This replaces the static scene.duration values from modules.js so that a
  // scene NEVER advances while its audio is still playing.
  const sceneDurations = scenes.map((_, i) =>
    computeSceneDuration(NARRATIONS[moduleId]?.[i] ?? [])
  )
  const totalDuration = sceneDurations.reduce((s, d) => s + d, 0)

  useEffect(() => { elapsedRef.current = elapsed }, [elapsed])
  useEffect(() => { mutedRef.current = muted }, [muted])

  // Chrome: speech synthesis silently stalls after ~15 s — keep it alive
  useEffect(() => {
    const id = setInterval(() => {
      if (synth.speaking && synth.paused) synth.resume()
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Cleanup on unmount
  useEffect(() => () => flushQueue(), [])

  // ── Timer ─────────────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const next = elapsedRef.current + TICK_MS / 1000
    if (next >= totalDuration) {
      setElapsed(totalDuration)
      setPlaying(false)
      setCompleted(true)
      clearInterval(intervalRef.current)
      flushQueue()
      if (onComplete) onComplete()
    } else {
      setElapsed(next)
    }
  }, [totalDuration, onComplete])

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(tick, TICK_MS)
    } else {
      clearInterval(intervalRef.current)
      flushQueue()
    }
    return () => clearInterval(intervalRef.current)
  }, [playing, tick])

  // ── Derive active scene (using speech-driven durations) ───────────────────
  let sceneIdx = 0
  let cumTime  = 0
  for (let i = 0; i < scenes.length; i++) {
    cumTime += sceneDurations[i]
    if (elapsed < cumTime || i === scenes.length - 1) { sceneIdx = i; break }
  }
  const scene    = scenes[sceneIdx]
  const prevCum  = sceneDurations.slice(0, sceneIdx).reduce((s, d) => s + d, 0)
  const sceneElapsed = elapsed - prevCum

  // ── Cue times & bullet visibility ────────────────────────────────────────
  // cue[0] fires at t=0 (intro, no bullet yet).
  // cue[i>0] fires after cue[i-1] finishes → bullet[i-1] appears at that moment.
  const sceneCues  = NARRATIONS[moduleId]?.[sceneIdx] ?? []
  const cueTimes   = getCueTimes(sceneCues)

  const visibleBullets = Math.min(
    cueTimes.slice(1).filter(t => sceneElapsed >= t).length,
    scene.bullets.length
  )

  // ── Cue engine ────────────────────────────────────────────────────────────
  // Reset fired-cues set whenever the scene changes
  if (sceneIdx !== prevSceneRef.current) {
    prevSceneRef.current = sceneIdx
    firedCuesRef.current = new Set()
  }

  // Fire each cue at its estimated start time within the scene
  useEffect(() => {
    if (!playing || mutedRef.current) return

    const cues  = NARRATIONS[moduleId]?.[sceneIdx]
    if (!cues?.length) return

    const times = getCueTimes(cues)
    cues.forEach((text, idx) => {
      if (sceneElapsed >= times[idx] && !firedCuesRef.current.has(idx)) {
        firedCuesRef.current.add(idx)
        enqueue(text)
      }
    })
  // sceneElapsed / sceneIdx are derived from elapsed — intentional omission
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsed, playing])

  // Flush queue when muted
  useEffect(() => { if (muted) flushQueue() }, [muted])

  // ── Controls ──────────────────────────────────────────────────────────────
  function formatTime(s) {
    const m  = Math.floor(s / 60)
    const ss = Math.floor(s % 60)
    return `${m}:${ss.toString().padStart(2, '0')}`
  }

  function handlePlayPause() {
    if (!playing) {
      // On resume, allow already-passed cues to re-fire from current position
      firedCuesRef.current = new Set()
    }
    setPlaying(p => !p)
  }

  function handleReset() {
    flushQueue()
    firedCuesRef.current = new Set()
    prevSceneRef.current = -1
    setElapsed(0)
    setCompleted(false)
    setPlaying(false)
  }

  function seekTo(pct) {
    flushQueue()
    firedCuesRef.current = new Set()
    prevSceneRef.current = -1
    const newTime = Math.max(0, Math.min(1, pct)) * totalDuration
    setElapsed(newTime)
    if (newTime >= totalDuration) {
      setPlaying(false)
      setCompleted(true)
      if (onComplete) onComplete()
    }
  }

  function handleProgressClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    seekTo((e.clientX - rect.left) / rect.width)
  }

  function jumpToScene(idx) {
    const t = sceneDurations.slice(0, idx).reduce((s, d) => s + d, 0)
    seekTo(t / totalDuration)
  }

  const pct = totalDuration > 0 ? (elapsed / totalDuration) * 100 : 0

  return (
    <div className="video-section">
      <div className="video-player" style={{ background: scene.background }}>
        <div className="scene-header">
          <h3>{scene.title}</h3>
          <span className="scene-counter">Scene {sceneIdx + 1} of {scenes.length}</span>
        </div>

        <div className="scene-content">
          <div className="scene-svg-area">
            <SceneRenderer svgType={scene.svgType} svgData={scene.svgData} />
          </div>
          <div className="scene-bullets">
            {scene.bullets.map((b, i) => (
              <div key={i} className={`bullet-item ${i < visibleBullets ? 'visible' : ''}`}>
                <span className="bullet-dot">▸</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scene-narration">
          <em>{scene.narration}</em>
        </div>
      </div>

      <div className="video-controls">
        <button className="ctrl-btn" onClick={handlePlayPause}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
        <button className="ctrl-btn" onClick={handleReset} title="Restart">↺</button>

        <div className="progress-bar-wrap">
          <div className="progress-bar-bg" onClick={handleProgressClick}>
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <span className="time-display">{formatTime(elapsed)} / {formatTime(totalDuration)}</span>

        <button
          className="ctrl-btn"
          onClick={() => setMuted(m => !m)}
          title={muted ? 'Unmute narration' : 'Mute narration'}
          style={{ minWidth: 36 }}
        >
          {muted ? '🔇' : '🔊'}
        </button>

        <div className="scene-chips">
          {scenes.map((sc, i) => (
            <button
              key={i}
              className={`scene-chip ${sceneIdx === i ? 'active' : ''}`}
              onClick={() => jumpToScene(i)}
              title={sc.title}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {completed && (
        <div className="video-complete-banner">
          <span className="check-icon">✅</span>
          <p>Video lesson complete! You can now take the assessment below.</p>
        </div>
      )}
    </div>
  )
}
