import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'
import { getModuleById, isModuleUnlocked } from '../data/modules.js'

export default function ModulePage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { user, markVideoWatched } = useAuth()
  const [videoComplete, setVideoComplete] = useState(false)

  const mod = getModuleById(moduleId)
  const progress = user?.progress || {}

  // Check if video was already watched
  const alreadyWatched = progress[moduleId]?.videoWatched === true
  const alreadyPassed = progress[moduleId]?.quizPassed === true

  useEffect(() => {
    if (alreadyWatched) setVideoComplete(true)
  }, [alreadyWatched])

  if (!mod) {
    return (
      <div>
        <h1 className="page-title">Module not found</h1>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    )
  }

  if (!isModuleUnlocked(moduleId, progress)) {
    return (
      <div>
        <div className="breadcrumb">
          <Link to="/dashboard">Dashboard</Link> / Locked
        </div>
        <div className="card" style={{ textAlign: 'center', marginTop: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h2>Module Locked</h2>
          <p style={{ color: 'var(--gray-400)', marginTop: 8 }}>
            Complete the previous module to unlock this one.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 20 }} onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  async function handleVideoComplete() {
    setVideoComplete(true)
    if (!alreadyWatched) {
      await markVideoWatched(moduleId)
    }
  }

  return (
    <div className="module-page">
      <div className="module-page-header">
        <div className="breadcrumb">
          <Link to="/dashboard">Dashboard</Link> / Module {mod.number}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
          <span style={{ fontSize: 28 }}>{mod.icon}</span>
          <h1>{mod.title}</h1>
        </div>
        <p style={{ color: 'var(--gray-400)', marginTop: 6, fontSize: 14 }}>{mod.description}</p>
      </div>

      {/* Video Player */}
      <VideoPlayer
        moduleId={moduleId}
        scenes={mod.scenes}
        onComplete={handleVideoComplete}
      />

      {/* Assessment Gate */}
      <div className={`assessment-gate ${!videoComplete ? 'gate-locked' : ''}`}>
        {videoComplete ? (
          <>
            <div className="gate-icon">📝</div>
            <h3>Module Assessment</h3>
            <p>
              Test your knowledge of {mod.title} with 10 multiple-choice questions.
              You need 70% or higher to pass and unlock the next module.
            </p>
            {alreadyPassed ? (
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '10px 20px', background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.3)', borderRadius: 8,
                  color: 'var(--green)', fontSize: 14, fontWeight: 600
                }}>
                  ✓ Passed — Score: {progress[moduleId]?.quizScore}%
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => navigate(`/assessment/${moduleId}`)}
                >
                  Retake Assessment
                </button>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                style={{ maxWidth: 280, margin: '0 auto' }}
                onClick={() => navigate(`/assessment/${moduleId}`)}
              >
                Start Assessment →
              </button>
            )}
          </>
        ) : (
          <>
            <div className="gate-icon" style={{ filter: 'grayscale(1)' }}>🔒</div>
            <h3>Assessment Locked</h3>
            <p>Watch the complete video lesson above to unlock the module assessment.</p>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 8,
              fontSize: 13,
              color: 'var(--gray-500)'
            }}>
              Complete the video to unlock
            </div>
          </>
        )}
      </div>
    </div>
  )
}
