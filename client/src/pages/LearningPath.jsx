import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { MODULES, isModuleUnlocked, getModuleProgress } from '../data/modules.js'

export default function LearningPath() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const progress = user?.progress || {}

  function handleClick(mod) {
    if (!isModuleUnlocked(mod.id, progress)) return
    navigate(`/module/${mod.id}`)
  }

  return (
    <div className="learning-path">
      <h1 className="page-title">Learning Path</h1>
      <p>Complete each module in sequence to unlock the next. Passing the assessment unlocks the next module.</p>

      <div className="path-timeline" style={{ marginTop: 32 }}>
        {MODULES.map(mod => {
          const unlocked = isModuleUnlocked(mod.id, progress)
          const { status } = getModuleProgress(mod.id, progress)
          const isCompleted = status === 'completed'
          const isActive = unlocked && !isCompleted

          return (
            <div
              key={mod.id}
              className={`path-item ${!unlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => handleClick(mod)}
            >
              <div className={`path-dot ${isCompleted ? 'done' : isActive ? 'active' : ''}`}>
                {isCompleted && <span style={{ fontSize: 8, color: 'white' }}>✓</span>}
              </div>

              <div className="path-item-header">
                <span style={{ fontSize: 20 }}>{mod.icon}</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--gray-500)', fontWeight: 600, marginBottom: 2 }}>
                    Module {mod.number}
                  </div>
                  <h3>{mod.title}</h3>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, padding: '2px 8px',
                    borderRadius: 12,
                    background: isCompleted ? 'rgba(34,197,94,0.15)' : isActive ? 'rgba(79,142,247,0.15)' : 'rgba(255,255,255,0.05)',
                    color: isCompleted ? 'var(--green)' : isActive ? 'var(--blue)' : 'var(--gray-500)'
                  }}>
                    {isCompleted ? '✓ Complete' : isActive ? 'In Progress' : '🔒 Locked'}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--gray-500)' }}>⏱ {mod.duration}</span>
                </div>
              </div>

              <p>{mod.description}</p>

              {progress[mod.id]?.quizScore !== undefined && (
                <div style={{ marginTop: 8, fontSize: '12px' }}>
                  <span style={{ color: progress[mod.id].quizPassed ? 'var(--green)' : 'var(--red)' }}>
                    Assessment score: {progress[mod.id].quizScore}%
                    {progress[mod.id].quizPassed ? ' ✓ Passed' : ' ✗ Not passed'}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
