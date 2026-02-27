import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner container">
        <p className="section-label">About</p>

        <div className="about-grid">
          <div className="about-bio">
            <h2 className="about-title">
              Engineer by training.<br />
              Founder by conviction.
            </h2>

            <p>
              I graduated from Georgia Tech with a B.S. in Computer Science, concentrating in
              Artificial Intelligence and Machine Learning. GT gave me a rigorous foundation in
              systems thinking, algorithm design, and building software that scales — paired with
              the curiosity to ask what software should do next.
            </p>
            <p>
              Right now I'm focused on landing a Frontend Engineering role where I can work on
              product that real people depend on. I'm specifically drawn to Ramp's mission —
              bringing genuine financial intelligence to businesses — and I want to help build
              the interfaces that make that intelligence feel effortless.
            </p>
            <p>
              In parallel, I'm building AURA, an AI-powered human optimization platform aimed at
              the Korean beauty and wellness market. It's a long-term bet: I believe the next
              generation of consumer AI will be deeply personal and category-specific, and beauty
              is one of the most underserved verticals. I'm developing it independently in Seoul,
              learning the market from the ground up.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="currently-card">
              <p className="currently-label">Currently</p>
              <ul className="currently-list">
                <li>
                  <span className="currently-dot" aria-hidden="true" />
                  Applying to Frontend roles
                </li>
                <li>
                  <span className="currently-dot" aria-hidden="true" />
                  Building AURA (AI beauty platform)
                </li>
                <li>
                  <span className="currently-dot" aria-hidden="true" />
                  Based in Seoul, Korea
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
