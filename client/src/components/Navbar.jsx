import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  const progress = user?.progress || {}
  const totalModules = 8
  const completed = Object.values(progress).filter(p => p?.completed).length

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <h2>Capital Markets</h2>
        <span>Learning Portal</span>
      </div>

      <div className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
          <span className="nav-icon">🏠</span>
          Dashboard
        </NavLink>

        <NavLink to="/learning-path" className={({ isActive }) => isActive ? 'active' : ''}>
          <span className="nav-icon">🗺️</span>
          Learning Path
        </NavLink>

        <div className="sidebar-divider" />

        <div style={{ padding: '8px 12px', fontSize: '11px', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Progress
        </div>

        <div style={{ padding: '4px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--gray-400)', marginBottom: '6px' }}>
            <span>{completed} of {totalModules} complete</span>
            <span style={{ color: 'var(--gold)' }}>{Math.round(completed / totalModules * 100)}%</span>
          </div>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${(completed / totalModules) * 100}%`,
              background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              borderRadius: '2px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-user-name">{user?.name}</div>
        <div className="sidebar-user-email">{user?.email}</div>
        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
      </div>
    </nav>
  )
}
