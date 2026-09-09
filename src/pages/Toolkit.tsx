import { useState } from 'react'
import { CATEGORIES, COPING_STRATEGIES, type CopingStrategy } from '../data/copingStrategies'

export function Toolkit() {
  const [activeCategory, setActiveCategory] = useState<CopingStrategy['category'] | 'All'>('All')

  const filtered =
    activeCategory === 'All'
      ? COPING_STRATEGIES
      : COPING_STRATEGIES.filter((s) => s.category === activeCategory)

  return (
    <div>
      <h1 className="page-title">Coping Toolkit</h1>
      <p className="page-subtitle">
        Pick what matches how you feel right now and follow the steps at your own pace.
      </p>

      <div className="category-pills">
        <button
          type="button"
          className={`pill${activeCategory === 'All' ? ' active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`pill${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((strategy) => (
        <div className="card" key={strategy.id}>
          <h2 style={{ fontSize: '1rem' }}>{strategy.title}</h2>
          <ol className="strategy-steps">
            {strategy.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}
