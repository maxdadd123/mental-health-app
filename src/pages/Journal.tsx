import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { JOURNAL_PROMPTS } from '../data/resources'
import type { JournalEntry } from '../types'

function randomPrompt(exclude?: string) {
  const options = JOURNAL_PROMPTS.filter((p) => p !== exclude)
  return options[Math.floor(Math.random() * options.length)] ?? JOURNAL_PROMPTS[0]
}

export function Journal() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>('journal-entries', [])
  const [prompt, setPrompt] = useState(() => randomPrompt())
  const [text, setText] = useState('')

  function handleSave() {
    if (!text.trim()) return
    const entry: JournalEntry = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      prompt,
      text: text.trim(),
    }
    setEntries((prev) => [...prev, entry])
    setText('')
    setPrompt(randomPrompt(prompt))
  }

  const sorted = [...entries].sort((a, b) => b.timestamp - a.timestamp)

  return (
    <div>
      <h1 className="page-title">Journal</h1>
      <p className="page-subtitle">
        Writing things down can help untangle thoughts. Everything here stays on your device.
      </p>

      <div className="card">
        <div className="prompt-box">{prompt}</div>
        <button
          type="button"
          className="btn secondary"
          style={{ marginBottom: '0.75rem' }}
          onClick={() => setPrompt(randomPrompt(prompt))}
        >
          Try a different prompt
        </button>
        <textarea
          rows={6}
          placeholder="Start writing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="btn-row" style={{ marginTop: '0.75rem' }}>
          <button type="button" className="btn" disabled={!text.trim()} onClick={handleSave}>
            Save entry
          </button>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Past entries</h2>
        {sorted.length === 0 ? (
          <p className="empty-state">Your journal entries will appear here.</p>
        ) : (
          <div className="entry-list">
            {sorted.map((e) => (
              <div className="entry" key={e.id} style={{ flexDirection: 'column' }}>
                <div className="entry-meta">
                  {new Date(e.timestamp).toLocaleString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </div>
                <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  {e.prompt}
                </div>
                <div className="entry-note">{e.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
