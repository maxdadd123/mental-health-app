import { CRISIS_RESOURCES } from '../data/resources'

export function Resources() {
  return (
    <div>
      <h1 className="page-title">Get Support</h1>
      <p className="page-subtitle">
        This app is a self-help companion, not a substitute for professional care. If you're in
        danger or thinking about suicide, please reach out right now.
      </p>

      <div className="disclaimer-banner">
        If you are in immediate danger, call your local emergency number (911 in the US, 999 in
        the UK, 112 in the EU) right away.
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Crisis lines</h2>
        {CRISIS_RESOURCES.map((r) => (
          <div className="resource-item" key={r.name}>
            <div className="resource-region">{r.region}</div>
            <div style={{ fontWeight: 700 }}>{r.name}</div>
            <div className="resource-contact">{r.contact}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{r.description}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1rem' }}>Finding ongoing support</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          A therapist, counselor, or doctor can offer support this app can't. If cost or access
          is a barrier, look into community mental health centers, university counseling
          services, employee assistance programs, or sliding-scale therapy directories in your
          area.
        </p>
      </div>
    </div>
  )
}
