import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { MoodTracker } from './pages/MoodTracker'
import { Breathe } from './pages/Breathe'
import { Toolkit } from './pages/Toolkit'
import { Journal } from './pages/Journal'
import { Resources } from './pages/Resources'

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="top-bar">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true" />
            Calm Space
          </Link>
          <Link to="/resources" className="help-link">
            Need help now?
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mood" element={<MoodTracker />} />
            <Route path="/breathe" element={<Breathe />} />
            <Route path="/toolkit" element={<Toolkit />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
      <NavBar />
    </HashRouter>
  )
}

export default App
