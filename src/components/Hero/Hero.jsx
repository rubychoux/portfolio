import { Link } from 'react-scroll'
import './Hero.css'
import profilePhoto from '../../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-eyebrow">Ruby Choux Kim</p>

          <h1 className="hero-headline">
            <span>Frontend Engineer.</span>
            <span>AI Founder.</span>
          </h1>

          <p className="hero-subtext">
            Georgia Tech CS grad. Frontend engineer and founder — building across fintech, AI, immersive tech, and beauty.
          </p>

          <div className="hero-ctas">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="founder"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-secondary"
            >
              My Founder Story
            </Link>
          </div>
        </div>

        <div className="hero-photo-col">
          <img src={profilePhoto} alt="Ruby Choux Kim" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
