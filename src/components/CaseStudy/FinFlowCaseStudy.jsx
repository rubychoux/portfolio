import { Link } from 'react-router-dom'
import './FinFlowCaseStudy.css'
import dashboardImg from '../../assets/finflow-dashboard.png'
import tableImg from '../../assets/finflow-table.png'

export default function FinFlowCaseStudy() {
  return (
    <div className="case-study">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#projects" className="cs-back-link">← Back</Link>
          <h1 className="cs-title">FinFlow</h1>
          <p className="cs-subtitle">Financial Expense Management Dashboard</p>
          <div className="cs-header-actions">
            <a
              href="https://finflow-navy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/rubychoux/finflow"
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
          <span className="cs-stat">200 Transactions</span>
          <span className="cs-stat">7 Filter Types</span>
          <span className="cs-stat">14 Pages</span>
          <span className="cs-stat">CSV Export</span>
        </div>

        {/* The Problem */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Problem</h2>
          <p className="cs-prose">
            Corporate expense management tools are powerful but complex. I wanted to understand
            what it takes to build a data-heavy financial dashboard from scratch — one that handles
            real-world concerns like pagination, multi-dimensional filtering, monetary precision,
            and async state — the kinds of problems Ramp solves at scale.
          </p>
        </section>

        {/* Screenshots */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Screenshots</h2>
          <div className="cs-screenshots">
            <figure className="cs-screenshot-figure">
              <img src={dashboardImg} alt="FinFlow Dashboard" className="screenshot-img" />
              <figcaption>Transaction Dashboard with Budget Tracker</figcaption>
            </figure>
            <figure className="cs-screenshot-figure">
              <img src={tableImg} alt="FinFlow Table" className="screenshot-img" />
              <figcaption>Paginated Transaction Table (200 rows, 14 pages)</figcaption>
            </figure>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Technical Architecture</h2>
          <div className="cs-arch-cards">
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◈</span>
              <h3>Mock API Layer</h3>
              <p>
                Simulates real backend contracts with artificial latency, enabling UI development
                independent of any backend. Mirrors how production teams work.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⬡</span>
              <h3>Custom Hooks</h3>
              <p>
                All stateful logic extracted into useTransactions, useBudget, and useFilters hooks.
                Components are purely presentational — zero business logic in JSX.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⊞</span>
              <h3>Monetary Precision</h3>
              <p>
                All values stored as integers (cents) internally and formatted at render time to
                avoid floating point errors — the same pattern used in production fintech systems.
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Key Challenges</h2>
          <div className="cs-challenges">

            <div className="cs-challenge">
              <div className="cs-challenge-problem">
                <span className="cs-challenge-label">Problem</span>
                <h3>Multi-dimensional filtering</h3>
                <p>
                  Combining category filters, status filters, date ranges, and search simultaneously
                  without creating impossible filter states.
                </p>
              </div>
              <div className="cs-challenge-solution">
                <span className="cs-challenge-label cs-challenge-label--solution">Solution</span>
                <p>
                  Built a single <code>applyFilters</code> pure function that takes the full
                  transaction array and a filter state object, returning a derived filtered list.
                  All filters compose cleanly because they're applied sequentially in one pass.
                </p>
              </div>
            </div>

            <div className="cs-challenge">
              <div className="cs-challenge-problem">
                <span className="cs-challenge-label">Problem</span>
                <h3>Pagination with filtered data</h3>
                <p>
                  Page numbers needed to reset when filters changed, but not on every unrelated
                  state update.
                </p>
              </div>
              <div className="cs-challenge-solution">
                <span className="cs-challenge-label cs-challenge-label--solution">Solution</span>
                <p>
                  Used <code>useEffect</code> with the filter state as a dependency to reset page
                  to 1 only when filters actually changed. Separated pagination state from filter
                  state entirely.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* At Scale */}
        <section className="cs-section">
          <h2 className="cs-section-heading">At Scale</h2>
          <h3 className="cs-scale-title">What I'd do differently at scale.</h3>
          <div className="cs-scale-list">

            <div className="cs-scale-item">
              <h4 className="cs-scale-item-title">Virtual scrolling over pagination</h4>
              <p className="cs-scale-item-desc">
                Pagination works at 200 rows but breaks at 200,000. I'd replace the table with a
                virtualized list using react-virtual so only visible rows render in the DOM, keeping
                memory flat regardless of dataset size.
              </p>
            </div>

            <div className="cs-scale-item">
              <h4 className="cs-scale-item-title">Server-side filtering</h4>
              <p className="cs-scale-item-desc">
                All 200 transactions load upfront and filter client-side. At scale with millions of rows,
                filter state would need to serialize into query params sent
                to an API — the server does the heavy lifting and returns only the matching page.
              </p>
            </div>

            <div className="cs-scale-item">
              <h4 className="cs-scale-item-title">Optimistic UI updates</h4>
              <p className="cs-scale-item-desc">
                When a transaction status changes, the UI should update instantly and reconcile with
                the server in the background rather than waiting for a round trip. This is what makes
                data-heavy products feel fast.
              </p>
            </div>

            <div className="cs-scale-item">
              <h4 className="cs-scale-item-title">Debounced search</h4>
              <p className="cs-scale-item-desc">
                The search input currently filters on every keystroke. A <code>useDebounce</code> hook
                with a 300ms delay before triggering the filter pass would eliminate unnecessary
                re-renders at high data volumes.
              </p>
            </div>

            <div className="cs-scale-item">
              <h4 className="cs-scale-item-title">Memoized derived data</h4>
              <p className="cs-scale-item-desc">
                The filtered and sorted transaction list recomputes on every render. Wrapping it in{' '}
                <code>useMemo</code> with filter state and raw data as dependencies means it only
                recomputes when something actually changes.
              </p>
            </div>

          </div>
        </section>

        {/* What I'd build next */}
        <section className="cs-section">
          <h2 className="cs-section-heading">What I'd Build Next</h2>
          <p className="cs-prose">
            Real authentication with role-based access, backend API replacing the mock layer,
            chart visualizations for spend trends over time, and bulk transaction actions — the
            exact features that make tools like Ramp indispensable for finance teams.
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
