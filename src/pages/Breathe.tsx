import { useEffect, useRef, useState } from 'react'

type Phase = 'inhale' | 'hold' | 'exhale' | 'holdEmpty'

const PHASES: { key: Phase; label: string; seconds: number }[] = [
  { key: 'inhale', label: 'Breathe in', seconds: 4 },
  { key: 'hold', label: 'Hold', seconds: 4 },
  { key: 'exhale', label: 'Breathe out', seconds: 4 },
  { key: 'holdEmpty', label: 'Hold', seconds: 4 },
]

export function Breathe() {
  const [running, setRunning] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(PHASES[0].seconds)
  const [cycles, setCycles] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return

    timerRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1
        setPhaseIndex((idx) => {
          const nextIndex = (idx + 1) % PHASES.length
          if (nextIndex === 0) setCycles((c) => c + 1)
          setSecondsLeft(PHASES[nextIndex].seconds)
          return nextIndex
        })
        return prev
      })
    }, 1000)

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [running])

  function start() {
    setPhaseIndex(0)
    setSecondsLeft(PHASES[0].seconds)
    setCycles(0)
    setRunning(true)
  }

  function stop() {
    setRunning(false)
    if (timerRef.current) window.clearInterval(timerRef.current)
  }

  const phase = PHASES[phaseIndex]

  return (
    <div>
      <h1 className="page-title">Breathe</h1>
      <p className="page-subtitle">
        Box breathing: 4 seconds in, 4 seconds hold, 4 seconds out, 4 seconds hold.
        Slowing your breath signals safety to your nervous system.
      </p>

      <div className="card breathe-stage">
        <div className="breathe-circle-wrap">
          <div className={`breathe-circle ${running ? phase.key : ''}`}>
            {running ? (
              <span>
                {phase.label}
                <br />
                {secondsLeft}
              </span>
            ) : (
              <span>Ready?</span>
            )}
          </div>
        </div>

        {running ? (
          <>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Cycles completed: {cycles}
            </p>
            <button type="button" className="btn secondary" onClick={stop}>
              Stop
            </button>
          </>
        ) : (
          <button type="button" className="btn" onClick={start}>
            Start breathing exercise
          </button>
        )}
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Why it helps</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Slow, controlled breathing activates your parasympathetic nervous system, which can
          lower your heart rate and ease feelings of anxiety or panic. Try a few cycles whenever
          you notice tension building — before a hard conversation, when your thoughts are
          racing, or before sleep.
        </p>
      </div>
    </div>
  )
}
