import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner container">
        <p className="section-label">About</p>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              I'm a CS graduate from Georgia Tech with a background in AI/ML and a parallel life as
              a tech founder. I grew up with art — and when I arrived at Georgia Tech, I felt the
              tension immediately: a deeply technical environment that had little space for creative
              thinking. I didn't want to accept that as normal.
            </p>
            <p>
              In 2022, I co-founded InterOcci — a VR art exhibition platform that let artists build
              immersive 3D galleries on Meta Quest. I incorporated as a Delaware C-Corp, conducted
              100+ customer discovery interviews across Asia, Europe, and North America, and raised
              $30K from Georgia Tech CREATE-X and angel investor Chris Klaus. I pitched at Demo Day,
              presented at the Ygnite conference in San Jose, competed in the Inventure Prize, and
              received a Presidential Undergraduate Research Award for the project.
            </p>
            <p>
              I'm now a frontend engineer who builds with the same ownership mentality I had as a
              founder. Since 2024, I've been working as a beauty model in Seoul — giving me
              firsthand exposure to the Korean beauty industry from the inside. That experience is
              what's driving my next venture: building the AI-powered beauty platform I wished
              existed.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="about-card">
              <p className="about-card-title">Currently</p>
              <ul className="about-card-list">
                <li>Open to Frontend Engineering roles</li>
                <li>Exploring AI x beauty startup in Seoul</li>
                <li>Based in Seoul, Korea</li>
              </ul>
            </div>

            <div className="about-card">
              <p className="about-card-title">Highlights</p>
              <ul className="about-card-list">
                <li>$30K raised, InterOcci Inc. (2022)</li>
                <li>Georgia Tech CREATE-X alumni</li>
                <li>Presidential Research Award recipient</li>
                <li>100+ customer discovery interviews</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
