import { Link } from 'react-router-dom'
import './AURACaseStudy.css'

export default function AURACaseStudy() {
  return (
    <div className="case-study">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#projects" className="cs-back-link">← Back</Link>
          <h1 className="cs-title">AURA</h1>
          <p className="cs-subtitle">AI Human Optimization Platform</p>
          <div className="cs-header-actions">
            <a
              href="https://aura-ruby.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/rubychoux/aura"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="cs-body">

        {/* Overview stats */}
        <div className="cs-stats">
          <span className="cs-stat">Multi-step Onboarding</span>
          <span className="cs-stat">Personalization Engine</span>
          <span className="cs-stat">Real-time Simulator</span>
          <span className="cs-stat">TypeScript</span>
        </div>

        {/* The Vision */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Vision</h2>
          <p className="cs-prose">
            AURA is an AI-powered human optimization platform being built for the Korean beauty
            market. The core idea: instead of generic beauty advice, give users a personalized
            protocol based on their actual data — skin type, lifestyle, climate, goals. The engine
            generates optimization scores and protocols entirely in pure TypeScript functions, fully
            decoupled from the React UI layer.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Technical Architecture</h2>
          <div className="cs-arch-cards">
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◈</span>
              <h3>Personalization Engine</h3>
              <p>
                Built as pure TypeScript functions with zero React dependencies. Scores skin, sleep,
                fitness, and lifestyle with weighted algorithms. Independently testable and
                extractable to a backend without touching any UI code.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⬡</span>
              <h3>Context + useReducer State</h3>
              <p>
                Profile state managed with useReducer and localStorage persistence so users never
                lose progress. A type guard narrows{' '}
                <code>Partial&lt;UserProfile&gt;</code> to{' '}
                <code>UserProfile</code> before passing to the engine, preventing invalid state from
                reaching scoring logic.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⊞</span>
              <h3>useMemo-gated Simulation</h3>
              <p>
                The real-time What If simulator recalculates optimization scores live as users adjust
                variables. Wrapped in <code>useMemo</code> with the profile as the dependency array
                so the engine only runs when something actually changes.
              </p>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Status</h2>
          <p className="cs-prose">
            AURA is currently in active development. Case study and live demo coming soon.
          </p>
        </section>

        {/* Footer nav */}
        <footer className="cs-footer">
          <Link to="/" className="cs-back-link">← Back to portfolio</Link>
        </footer>

      </div>
    </div>
  )
}
