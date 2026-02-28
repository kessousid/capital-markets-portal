import React, { useState, useEffect, useRef, useCallback } from 'react'
import SceneRenderer from './SceneRenderer.jsx'
import { NARRATIONS } from '../data/narrations.js'

const TICK_MS = 100

// ── Speech engine ─────────────────────────────────────────────────────────────
// Wraps Web Speech API with:
//  • preferred voice selection (runs once after voices load)
//  • never cancels a sentence mid-way within a scene (only on explicit stop/seek)
//  • Chrome "15-second pause" bug workaround via periodic resume()

const synth = window.speechSynthesis
let preferredVoice = null

function loadVoice() {
  const voices = synth.getVoices()
  if (!voices.length) return
  // Priority order: Google Natural, Google US, Apple Samantha/Daniel, any en-US, any en
  preferredVoice =
    voices.find(v => v.name === 'Google US English') ||
    voices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) ||
    voices.find(v => v.name === 'Samantha' || v.name === 'Daniel') ||
    voices.find(v => v.lang === 'en-US') ||
    voices.find(v => v.lang.startsWith('en')) ||
    null
}

// Voices load asynchronously in Chrome
loadVoice()
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = loadVoice
}

function speakText(text, { rate = 0.88, pitch = 1.0, onEnd } = {}) {
  synth.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.rate = rate
  utt.pitch = pitch
  utt.volume = 1.0
  if (preferredVoice) utt.voice = preferredVoice
  if (onEnd) utt.onend = onEnd
  synth.speak(utt)
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function VideoPlayer({ moduleId, scenes, onComplete }) {
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [muted, setMuted] = useState(false)

  const intervalRef = useRef(null)
  const elapsedRef = useRef(0)
  const mutedRef = useRef(false)
  const prevSceneIdxRef = useRef(-1)
  // Track the utterance that is currently scheduled so we can cancel only on
  // explicit user action (pause / seek), not on every bullet reveal
  const speakTimerRef = useRef(null)

  const totalDuration = scenes.reduce((s, sc) => s + sc.duration, 0)

  useEffect(() => { elapsedRef.current = elapsed }, [elapsed])
  useEffect(() => { mutedRef.current = muted }, [muted])

  // ── Chrome bug workaround: speech synthesis silently pauses after ~15 s ──
  useEffect(() => {
    const id = setInterval(() => {
      if (synth.speaking && synth.paused) synth.resume()
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // ── Timer ─────────────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const next = elapsedRef.current + TICK_MS / 1000
    if (next >= totalDuration) {
      setElapsed(totalDuration)
      setPlaying(false)
      setCompleted(true)
      clearInterval(intervalRef.current)
      synth.cancel()
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
      // Pause speech when player pauses — don't cancel entirely so resuming
      // could continue, but synth.pause() is unreliable in Chrome, so cancel.
      synth.cancel()
    }
    return () => clearInterval(intervalRef.current)
  }, [playing, tick])

  // ── Derive active scene ───────────────────────────────────────────────────
  let sceneIdx = 0
  let cumTime = 0
  for (let i = 0; i < scenes.length; i++) {
    cumTime += scenes[i].duration
    if (elapsed < cumTime || i === scenes.length - 1) {
      sceneIdx = i
      break
    }
  }
  const scene = scenes[sceneIdx]

  const prevCum = scenes.slice(0, sceneIdx).reduce((s, sc) => s + sc.duration, 0)
  const sceneElapsed = elapsed - prevCum
  const bulletInterval = scene.bullets.length > 0
    ? scene.duration / (scene.bullets.length + 1)
    : scene.duration
  const visibleBullets = Math.min(
    Math.floor(sceneElapsed / bulletInterval),
    scene.bullets.length
  )

  // ── TTS: speak expanded narration when scene changes ─────────────────────
  // We deliberately do NOT read bullet text — the user can read the slides.
  // Instead we speak the richer contextual narration from narrations.js.
  useEffect(() => {
    if (!playing) return
    if (sceneIdx === prevSceneIdxRef.current) return

    prevSceneIdxRef.current = sceneIdx

    // Clear any pending speak timer from a previous scene transition
    clearTimeout(speakTimerRef.current)

    if (!mutedRef.current) {
      // Small delay so the scene transition animation completes first
      speakTimerRef.current = setTimeout(() => {
        if (mutedRef.current) return
        const text = NARRATIONS[moduleId]?.[sceneIdx] || scene.narration
        speakText(text, { rate: 0.88 })
      }, 600)
    }

    return () => clearTimeout(speakTimerRef.current)
  }, [sceneIdx, playing, moduleId, scene.narration])

  // ── Cancel speech when muted ──────────────────────────────────────────────
  useEffect(() => {
    if (muted) {
      clearTimeout(speakTimerRef.current)
      synth.cancel()
    }
  }, [muted])

  // Cleanup on unmount
  useEffect(() => () => {
    synth.cancel()
    clearTimeout(speakTimerRef.current)
  }, [])

  // ── Controls ──────────────────────────────────────────────────────────────
  function formatTime(s) {
    const m = Math.floor(s / 60)
    const ss = Math.floor(s % 60)
    return `${m}:${ss.toString().padStart(2, '0')}`
  }

  function handlePlayPause() {
    if (!playing) {
      // Force re-speak narration for current scene when resuming
      prevSceneIdxRef.current = -1
    }
    setPlaying(p => !p)
  }

  function handleReset() {
    clearTimeout(speakTimerRef.current)
    synth.cancel()
    prevSceneIdxRef.current = -1
    setElapsed(0)
    setCompleted(false)
    setPlaying(false)
  }

  function seekTo(pct) {
    clearTimeout(speakTimerRef.current)
    synth.cancel()
    prevSceneIdxRef.current = -1
    const newTime = pct * totalDuration
    setElapsed(newTime)
    if (newTime >= totalDuration) {
      setPlaying(false)
      setCompleted(true)
      if (onComplete) onComplete()
    }
  }

  function handleProgressClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    seekTo(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)))
  }

  function jumpToScene(idx) {
    const t = scenes.slice(0, idx).reduce((s, sc) => s + sc.duration, 0)
    seekTo(t / totalDuration)
  }

  const pct = totalDuration > 0 ? (elapsed / totalDuration) * 100 : 0

  return (
    <div className="video-section">
      <div className="video-player" style={{ background: scene.background }}>
        {/* Scene header */}
        <div className="scene-header">
          <h3>{scene.title}</h3>
          <span className="scene-counter">Scene {sceneIdx + 1} of {scenes.length}</span>
        </div>

        {/* Main content */}
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

        {/* Narration subtitle strip */}
        <div className="scene-narration">
          <em>{scene.narration}</em>
        </div>
      </div>

      {/* Controls */}
      <div className="video-controls">
        <button className="ctrl-btn" onClick={handlePlayPause}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
        <button className="ctrl-btn" onClick={handleReset} title="Restart from beginning">
          ↺
        </button>

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
