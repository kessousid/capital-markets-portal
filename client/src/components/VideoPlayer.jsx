import React, { useState, useEffect, useRef, useCallback } from 'react'
import SceneRenderer from './SceneRenderer.jsx'

const TICK_MS = 100

// ── Web Speech API helper ─────────────────────────────────────────────────────
const synth = window.speechSynthesis

function speak(text, { rate = 0.92, pitch = 1.0, volume = 1.0 } = {}) {
  synth.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.rate = rate
  utt.pitch = pitch
  utt.volume = volume
  // Prefer a natural-sounding English voice if available
  const voices = synth.getVoices()
  const preferred = voices.find(v =>
    v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Daniel') || v.name.includes('Samantha'))
  ) || voices.find(v => v.lang.startsWith('en'))
  if (preferred) utt.voice = preferred
  synth.speak(utt)
  return utt
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function VideoPlayer({ scenes, onComplete }) {
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [muted, setMuted] = useState(false)

  const intervalRef = useRef(null)
  const elapsedRef = useRef(0)
  const prevSceneIdxRef = useRef(-1)
  const prevBulletCountRef = useRef(0)
  const mutedRef = useRef(false)

  const totalDuration = scenes.reduce((s, sc) => s + sc.duration, 0)

  // Keep refs in sync so interval callbacks see latest values
  useEffect(() => { elapsedRef.current = elapsed }, [elapsed])
  useEffect(() => { mutedRef.current = muted }, [muted])

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
  const bulletInterval = scene.bullets.length > 0 ? scene.duration / (scene.bullets.length + 1) : scene.duration
  const visibleBullets = Math.min(
    Math.floor(sceneElapsed / bulletInterval),
    scene.bullets.length
  )

  // ── TTS: speak narration when scene changes ───────────────────────────────
  useEffect(() => {
    if (!playing) return
    if (sceneIdx === prevSceneIdxRef.current) return
    prevSceneIdxRef.current = sceneIdx
    prevBulletCountRef.current = 0

    if (!mutedRef.current) {
      speak(`${scene.title}. ${scene.narration}`)
    }
  }, [sceneIdx, playing, scene])

  // ── TTS: speak each bullet as it appears ─────────────────────────────────
  useEffect(() => {
    if (!playing) return
    if (visibleBullets <= prevBulletCountRef.current) return
    const newBulletIdx = visibleBullets - 1
    prevBulletCountRef.current = visibleBullets

    if (!mutedRef.current && scene.bullets[newBulletIdx]) {
      // Short delay so bullet animation is visible first
      setTimeout(() => {
        if (!mutedRef.current) speak(scene.bullets[newBulletIdx], { rate: 0.88 })
      }, 300)
    }
  }, [visibleBullets, playing, scene])

  // ── Cancel speech when muted ──────────────────────────────────────────────
  useEffect(() => {
    if (muted) synth.cancel()
  }, [muted])

  // ── Controls ──────────────────────────────────────────────────────────────
  function formatTime(s) {
    const m = Math.floor(s / 60)
    const ss = Math.floor(s % 60)
    return `${m}:${ss.toString().padStart(2, '0')}`
  }

  function handlePlayPause() {
    if (!playing) {
      // Resuming — if we're at the start of a scene, re-speak narration
      prevSceneIdxRef.current = -1
    }
    setPlaying(p => !p)
  }

  function handleReset() {
    synth.cancel()
    setElapsed(0)
    setCompleted(false)
    setPlaying(false)
    prevSceneIdxRef.current = -1
    prevBulletCountRef.current = 0
  }

  function seekTo(pct) {
    synth.cancel()
    prevSceneIdxRef.current = -1
    prevBulletCountRef.current = 0
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
    const pct = (e.clientX - rect.left) / rect.width
    seekTo(Math.max(0, Math.min(1, pct)))
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

        {/* Narration */}
        <div className="scene-narration">
          <em>{scene.narration}</em>
        </div>
      </div>

      {/* Controls */}
      <div className="video-controls">
        <button className="ctrl-btn" onClick={handlePlayPause}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
        <button className="ctrl-btn" onClick={handleReset} title="Restart">
          ↺
        </button>

        {/* Progress bar */}
        <div className="progress-bar-wrap">
          <div className="progress-bar-bg" onClick={handleProgressClick}>
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <span className="time-display">{formatTime(elapsed)} / {formatTime(totalDuration)}</span>

        {/* Mute toggle */}
        <button
          className="ctrl-btn"
          onClick={() => setMuted(m => !m)}
          title={muted ? 'Unmute narration' : 'Mute narration'}
          style={{ minWidth: 36 }}
        >
          {muted ? '🔇' : '🔊'}
        </button>

        {/* Scene chips */}
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

      {/* Completion banner */}
      {completed && (
        <div className="video-complete-banner">
          <span className="check-icon">✅</span>
          <p>Video lesson complete! You can now take the assessment below.</p>
        </div>
      )}
    </div>
  )
}
