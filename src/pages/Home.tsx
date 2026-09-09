import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { MOODS, type MoodEntry } from '../types'

function computeStreak(entries: MoodEntry[]): number {
  if (entries.length === 0) return 0
  const days = new Set(
    entries.map((e) => new Date(e.timestamp).toDateString())
  )
  let streak = 0
  const cursor = new Date()
  while (days.has(cursor.toDateString())) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

function greeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export function Home() {
  const [entries] = useLocalStorage<MoodEntry[]>('mood-entries', [])
  const streak = computeStreak(entries)
  const todayLogged = entries.some(
    (e) => new Date(e.timestamp).toDateString() === new Date().toDateString()
  )
  const latest = entries[entries.length - 1]

  return (
    <div>
      <h1 className="page-title">{greeting()}</h1>
      <p className="page-subtitle">
        A quiet space to check in with yourself, one small step at a time.
      </p>

      <div className="card">
        <div className="streak-row">
          <div className="stat">
            <div className="stat-value">{streak}</div>
            <div className="stat-label">day streak</div>
          </div>
          <div className="stat">
            <div className="stat-value">{entries.length}</div>
            <div className="stat-label">mood check-ins</div>
          </div>
          <div className="stat">
            <div className="stat-value">
              {latest ? MOODS.find((m) => m.value === latest.mood)?.emoji : '—'}
            </div>
            <div className="stat-label">last mood</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>{todayLogged ? "You've checked in today" : 'How are you, right now?'}</h2>
        <p className="page-subtitle" style={{ marginBottom: '0.75rem' }}>
          {todayLogged
            ? 'Feel free to log again if things have changed, or explore the toolkit below.'
            : 'Taking 30 seconds to name how you feel can make it easier to carry.'}
        </p>
        <Link to="/mood" className="btn">
          {todayLogged ? 'Log another mood' : 'Check in now'}
        </Link>
      </div>

      <h2 style={{ fontSize: '1.05rem', margin: '1.25rem 0 0.75rem' }}>Quick access</h2>
      <div className="quick-links">
        <Link to="/breathe" className="quick-link">
          <span className="icon">🌬️</span>
          <span className="title">Breathe</span>
          <span className="desc">A guided breathing exercise to calm your body</span>
        </Link>
        <Link to="/toolkit" className="quick-link">
          <span className="icon">🧰</span>
          <span className="title">Coping toolkit</span>
          <span className="desc">Grounding techniques for hard moments</span>
        </Link>
        <Link to="/journal" className="quick-link">
          <span className="icon">📓</span>
          <span className="title">Journal</span>
          <span className="desc">Write freely with a gentle prompt</span>
        </Link>
        <Link to="/resources" className="quick-link">
          <span className="icon">💬</span>
          <span className="title">Get support</span>
          <span className="desc">Crisis lines and professional resources</span>
        </Link>
      </div>
    </div>
  )
}
