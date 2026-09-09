import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { MOOD_TAGS, MOODS, type MoodEntry, type MoodValue } from '../types'

function last7Days(entries: MoodEntry[]) {
  const days: { label: string; date: Date; avg: number | null }[] = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dayEntries = entries.filter(
      (e) => new Date(e.timestamp).toDateString() === d.toDateString()
    )
    const avg =
      dayEntries.length > 0
        ? dayEntries.reduce((sum, e) => sum + e.mood, 0) / dayEntries.length
        : null
    days.push({ label: d.toLocaleDateString(undefined, { weekday: 'short' }), date: d, avg })
  }
  return days
}

export function MoodTracker() {
  const [entries, setEntries] = useLocalStorage<MoodEntry[]>('mood-entries', [])
  const [selectedMood, setSelectedMood] = useState<MoodValue | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  function handleSave() {
    if (!selectedMood) return
    const entry: MoodEntry = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      mood: selectedMood,
      tags: selectedTags,
      note: note.trim(),
    }
    setEntries((prev) => [...prev, entry])
    setSelectedMood(null)
    setSelectedTags([])
    setNote('')
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const days = last7Days(entries)
  const sortedEntries = [...entries].sort((a, b) => b.timestamp - a.timestamp).slice(0, 20)

  return (
    <div>
      <h1 className="page-title">Mood Tracker</h1>
      <p className="page-subtitle">Log how you're feeling and notice your patterns over time.</p>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>How do you feel right now?</h2>
        <div className="mood-grid">
          {MOODS.map((m) => (
            <button
              key={m.value}
              type="button"
              className={`mood-btn${selectedMood === m.value ? ' selected' : ''}`}
              onClick={() => setSelectedMood(m.value)}
            >
              <span className="emoji">{m.emoji}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        <div className="tag-list">
          {MOOD_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag${selectedTags.includes(tag) ? ' selected' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <textarea
          rows={3}
          placeholder="Anything you want to note? (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className="btn-row" style={{ marginTop: '0.85rem' }}>
          <button type="button" className="btn" disabled={!selectedMood} onClick={handleSave}>
            Save check-in
          </button>
          {saved && <span style={{ alignSelf: 'center', color: 'var(--primary-dark)', fontSize: '0.85rem' }}>Saved ✓</span>}
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Last 7 days</h2>
        <div className="mood-bars">
          {days.map((d) => (
            <div className="mood-bar-col" key={d.label + d.date.toISOString()}>
              <div
                className="mood-bar"
                style={{ height: d.avg ? `${(d.avg / 5) * 100}%` : '4px', opacity: d.avg ? 1 : 0.25 }}
                title={d.avg ? d.avg.toFixed(1) : 'No entry'}
              />
              <div className="mood-bar-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Recent check-ins</h2>
        {sortedEntries.length === 0 ? (
          <p className="empty-state">No check-ins yet. Your history will show up here.</p>
        ) : (
          <div className="entry-list">
            {sortedEntries.map((e) => {
              const mood = MOODS.find((m) => m.value === e.mood)
              return (
                <div className="entry" key={e.id}>
                  <span className="emoji">{mood?.emoji}</span>
                  <div>
                    <div className="entry-meta">
                      {new Date(e.timestamp).toLocaleString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </div>
                    {e.note && <div className="entry-note">{e.note}</div>}
                    {e.tags.length > 0 && (
                      <div className="entry-tags">
                        {e.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
