import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: '🏠', end: true },
  { to: '/mood', label: 'Mood', icon: '📊', end: false },
  { to: '/breathe', label: 'Breathe', icon: '🌬️', end: false },
  { to: '/toolkit', label: 'Toolkit', icon: '🧰', end: false },
  { to: '/journal', label: 'Journal', icon: '📓', end: false },
]

export function NavBar() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
