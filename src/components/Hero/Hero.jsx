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
            <span>Entrepreneur.</span>
            <span>Engineer.</span>
            <span>Creator.</span>
          </h1>

          <p className="hero-subtext">
            Georgia Tech CS grad and serial entrepreneur building AI products end-to-end. Caramel Lab
            is live with paying users, Meve is coming soon — and I share the journey with 50K+ on
            Instagram. Previously raised $30K with InterOcci.
          </p>

          <div className="hero-ctas">
            <Link
              to="founder"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary"
            >
              My Founder Story
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-secondary"
            >
              What I'm Building
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
