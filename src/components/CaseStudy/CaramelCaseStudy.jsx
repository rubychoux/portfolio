import { Link } from 'react-router-dom'
import './CaramelCaseStudy.css'

export default function CaramelCaseStudy() {
  return (
    <div className="case-study">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#projects" className="cs-back-link">← Back</Link>
          <h1 className="cs-title">Caramel Lab</h1>
          <p className="cs-subtitle">An AI SaaS for STEM &amp; Science Students</p>
          <div className="cs-header-actions">
            <a
              href="https://caramellab.org"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              Visit caramellab.org ↗
            </a>
          </div>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="cs-body">

        {/* Overview stats */}
        <div className="cs-stats">
          <span className="cs-stat">Live in Production</span>
          <span className="cs-stat">Paying Subscribers</span>
          <span className="cs-stat">Co-founder/CTO</span>
          <span className="cs-stat">AI SaaS</span>
        </div>

        {/* The Problem */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Problem</h2>
          <p className="cs-prose">
            Korean STEM and science students are buried in lab reports, papers, and theses — with
            almost no tooling built for how they actually work. General-purpose AI tools don't
            understand experimental write-ups, scientific figures, or the structure of an academic
            paper, and they aren't built for the Korean academic context. I built Caramel Lab to be
            the AI workspace I wished existed for science students: one place to generate lab
            reports, analyze papers, write theses, and get AI feedback on their work.
          </p>
        </section>

        {/* The Product */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Product</h2>
          <div className="cs-arch-cards">
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◈</span>
              <h3>AI Lab Reports</h3>
              <p>
                Generates structured experiment reports from a student's data and notes, and
                produces publication-style figures on demand — turning raw results into a finished
                write-up.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⬡</span>
              <h3>Paper Analysis &amp; 카라멜 조교</h3>
              <p>
                Breaks down dense research papers into clear summaries, and pairs students with
                "카라멜 조교" — a thesis-writing chatbot that helps draft, structure, and refine
                academic writing.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◇</span>
              <h3>Feedback · Figures · Lounge</h3>
              <p>
                AI feedback and grading on submitted work, figure generation for reports, and a
                community "lounge" (라운지) where students share, ask, and learn together.
              </p>
            </div>
          </div>
        </section>

        {/* How It's Built */}
        <section className="cs-section">
          <h2 className="cs-section-heading">How It's Built</h2>
          <div className="cs-arch-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◈</span>
              <h3>Full-Stack Solo</h3>
              <p>
                Designed, built, and shipped entirely on my own in <code>Next.js 16</code>,{' '}
                <code>React 19</code>, and <code>TypeScript</code> — from the database schema to the
                UI to every API route.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⬡</span>
              <h3>AI Pipeline</h3>
              <p>
                Built on <code>Supabase</code> with row-level security for multi-tenant data, with
                <code>Google Gemini</code> powering report generation, paper analysis, the
                thesis chatbot, grading, and figure generation.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◇</span>
              <h3>Real Payments</h3>
              <p>
                Integrated <code>NicePay</code> for payments and recurring subscriptions — handling
                real billing, plans, and access control for paying users end to end.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">▲</span>
              <h3>Shipped &amp; Running</h3>
              <p>
                Caramel Lab is live in production at <code>caramellab.org</code> today, serving real
                students with paying subscribers — not a prototype, an operating product.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Why It Matters</h2>
          <p className="cs-prose">
            Caramel Lab is proof of how I work as a founder: I don't just have ideas, I build and
            run them. I took it from an empty repo to a live AI product with paying subscribers
            alone — designing the experience, writing the full stack, wiring up the Gemini pipelines,
            and shipping a real payment system. It's the foundation for everything I want to build
            next in AI for education and science.
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
