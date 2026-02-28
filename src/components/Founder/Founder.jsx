import './Founder.css'

const MILESTONES = [
  {
    year: '2022',
    desc: 'Founded InterOcci Inc. as a Delaware C-Corp',
  },
  {
    year: '2022',
    desc: 'Raised $30K — Georgia Tech CREATE-X & angel investor Chris Klaus',
  },
  {
    year: '2022',
    desc: 'Showcased at CREATE-X Demo Day — GT President tried the product',
  },
  {
    year: '2023',
    desc: 'Pitched at Ygnite Conference, San Jose & Startup Exchange, Atlanta',
  },
]

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="founder-inner container">
        <p className="section-label">Founder Journey</p>

        <h2 className="founder-title">Building before I knew how to build.</h2>

        <p className="founder-intro">
          I started InterOcci in my sophomore year at Georgia Tech — before I had a CS degree,
          before I knew how to ship production software. What I had was a clear problem I cared
          about, the stubbornness to figure it out, and the conviction that art and technology
          didn't have to live in separate worlds.
        </p>

        <div className="founder-photos">
          <figure className="founder-photo-figure">
            <img
              src="/src/assets/pitch.jpg"
              alt="Founder pitch at Ygnite Conference"
              className="founder-photo"
            />
            <figcaption>Founder pitch at Ygnite Conference, San Jose — January 2023</figcaption>
          </figure>
          <figure className="founder-photo-figure">
            <img
              src="/src/assets/demoday.jpg"
              alt="InterOcci Demo Day"
              className="founder-photo"
            />
            <figcaption>
              Georgia Tech President Angel Cabrera experiencing InterOcci at CREATE-X Demo Day — 2022
            </figcaption>
          </figure>
        </div>

        <div className="founder-timeline">
          {MILESTONES.map(({ year, desc }, i) => (
            <div key={i} className="founder-milestone">
              <p className="founder-milestone-year">{year}</p>
              <p className="founder-milestone-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
