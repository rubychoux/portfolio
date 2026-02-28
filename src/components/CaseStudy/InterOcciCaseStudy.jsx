import { Link } from 'react-router-dom'
import './InterOcciCaseStudy.css'

export default function InterOcciCaseStudy() {
  return (
    <div className="case-study">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#projects" className="cs-back-link">← Back</Link>
          <h1 className="cs-title">InterOcci</h1>
          <p className="cs-subtitle">Immersive VR Art Exhibition Platform</p>
          <div className="cs-header-actions">
            <a
              href="https://interocci.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/rubychoux/interocci"
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
          <span className="cs-stat">Delaware C-Corp</span>
          <span className="cs-stat">$30K Raised</span>
          <span className="cs-stat">100+ User Interviews</span>
          <span className="cs-stat">VR + Web</span>
        </div>

        {/* The Origin */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Origin</h2>
          <p className="cs-prose">
            I founded InterOcci in my sophomore year at Georgia Tech because I felt the gap
            between art and technology personally. Traditional online galleries — DeviantArt,
            ArtStation, Instagram — trap art in flat 2D grids. Physical exhibitions are inaccessible
            to most artists. I wanted to build the middle ground: a platform where any artist could
            create an immersive 3D exhibition and share it with the world, without needing a gallery
            or a budget.
          </p>
        </section>

        {/* The Product */}
        <section className="cs-section">
          <h2 className="cs-section-heading">The Product</h2>
          <div className="cs-screenshots">
            <figure className="cs-screenshot-figure">
              <img
                src="/src/assets/interocci-poster.png"
                alt="InterOcci product overview"
                className="screenshot-img"
              />
              <figcaption>Original product vision — Explore, Visit, Network</figcaption>
            </figure>
            <figure className="cs-screenshot-figure">
              <img
                src="/src/assets/interocci-web.png"
                alt="InterOcci web platform"
                className="screenshot-img"
              />
              <figcaption>React web platform — Where Art Transcends Space</figcaption>
            </figure>
          </div>
        </section>

        {/* Technical Evolution */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Technical Evolution</h2>
          <div className="cs-arch-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">◈</span>
              <h3>V1 — Unity + Meta Quest</h3>
              <p>
                Built the original VR platform in Unity with PUN Photon for real-time multiplayer
                networking, allowing multiple users to experience the same gallery simultaneously.
                Integrated Blender assets and custom lighting rigs. Shipped to the Meta Quest store.
              </p>
            </div>
            <div className="cs-arch-card">
              <span className="cs-arch-icon">⬡</span>
              <h3>V2 — React + Three.js</h3>
              <p>
                Rebuilt as a web platform using React and React Three Fiber, making the experience
                accessible without a headset. Implemented custom lighting systems, animated artwork
                textures with <code>useFrame</code>, and an immersive projection mode where art
                wraps all room surfaces — inspired by Van Gogh exhibition experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Journey */}
        <section className="cs-section">
          <h2 className="cs-section-heading">Founder Journey</h2>
          <p className="cs-prose">
            Incorporated as a Delaware C-Corp in 2022. Raised $30K from Georgia Tech CREATE-X and
            angel investor Chris Klaus. Conducted 100+ customer discovery interviews across Asia,
            Europe, and North America. Presented at CREATE-X Demo Day — Georgia Tech President Angel
            Cabrera tried the product. Pitched at Ygnite Conference in San Jose and Startup Exchange
            in Atlanta. Received a Presidential Undergraduate Research Award for the project.
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
