import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <p className="hero-eyebrow">Ruby Choux Kim</p>

        <h1 className="hero-headline">
          <span>Frontend Engineer.</span>
          <span>AI Founder.</span>
        </h1>

        <p className="hero-subtext">
          Georgia Tech CS grad building at the intersection of fintech and AI.
        </p>

        <div className="hero-ctas">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary"
          >
            See my work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-secondary"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
