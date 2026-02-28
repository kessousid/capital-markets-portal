import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { MODULES, isModuleUnlocked, getModuleProgress } from '../data/modules.js'

function ProgressRing({ value, max, size = 100 }) {
  const pct = max > 0 ? value / max : 0
  const radius = (size - 12) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDash = circumference * pct

  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="rgba(255,215,0,0.15)" strokeWidth={8}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#FFD700" strokeWidth={8}
          strokeDasharray={`${strokeDash} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
      </svg>
      <div className="progress-ring-label">
        <span className="ring-value">{value}</span>
        <span className="ring-sub">of {max}</span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const progress = user?.progress || {}

  const completedCount = Object.values(progress).filter(p => p?.completed).length
  const allComplete = completedCount === MODULES.length

  function handleModuleClick(mod) {
    if (!isModuleUnlocked(mod.id, progress)) return
    navigate(`/module/${mod.id}`)
  }

  return (
    <div>
      {/* Certificate banner */}
      {allComplete && (
        <div className="certificate-banner">
          <div className="cert-icon">🏆</div>
          <h2>Congratulations! You've completed all modules!</h2>
          <p>You've mastered the Capital Markets curriculum. You are now certified in Capital Markets fundamentals.</p>
        </div>
      )}

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Welcome back, <span>{user?.name?.split(' ')[0]}</span></h1>
          <p>Continue your capital markets education journey</p>
        </div>
        <ProgressRing value={completedCount} max={MODULES.length} size={110} />
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">{completedCount}</div>
          <div className="stat-label">Modules Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{MODULES.length - completedCount}</div>
          <div className="stat-label">Remaining</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{Math.round(completedCount / MODULES.length * 100)}%</div>
          <div className="stat-label">Course Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {Object.values(progress).filter(p => p?.quizScore !== undefined).length > 0
              ? Math.round(
                  Object.values(progress)
                    .filter(p => p?.quizScore !== undefined)
                    .reduce((s, p) => s + p.quizScore, 0) /
                  Object.values(progress).filter(p => p?.quizScore !== undefined).length
                ) + '%'
              : 'N/A'}
          </div>
          <div className="stat-label">Avg Quiz Score</div>
        </div>
      </div>

      {/* Modules grid */}
      <div className="modules-grid">
        {MODULES.map(mod => {
          const unlocked = isModuleUnlocked(mod.id, progress)
          const { status, percentage } = getModuleProgress(mod.id, progress)
          const modProgress = progress[mod.id]

          return (
            <div
              key={mod.id}
              className={`module-card ${!unlocked ? 'locked' : ''} ${status === 'completed' ? 'completed' : ''}`}
              onClick={() => handleModuleClick(mod)}
            >
              {/* Status badge */}
              <span className={`module-status ${
                status === 'completed' ? 'status-completed' :
                status === 'video-watched' ? 'status-in-progress' :
                unlocked ? 'status-in-progress' : 'status-locked'
              }`}>
                {status === 'completed' ? '✓ Complete' :
                 status === 'video-watched' ? 'In Progress' :
                 unlocked ? 'Available' : '🔒 Locked'}
              </span>

              <div className="module-card-header">
                <div className="module-icon" style={{ background: `${mod.color}20`, color: mod.color }}>
                  {mod.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-500)', fontWeight: 600, marginBottom: 2 }}>
                    Module {mod.number}
                  </div>
                  <h3>{mod.title}</h3>
                </div>
              </div>

              <p>{mod.description}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: '12px', color: 'var(--gray-500)' }}>
                <span>⏱ {mod.duration}</span>
                {modProgress?.quizScore !== undefined && (
                  <span style={{ color: modProgress.quizPassed ? 'var(--green)' : 'var(--red)' }}>
                    Quiz: {modProgress.quizScore}%
                  </span>
                )}
              </div>

              <div className="module-progress-bar">
                <div
                  className="module-progress-fill"
                  style={{ width: `${percentage}%`, background: status === 'completed' ? 'var(--green)' : mod.color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
