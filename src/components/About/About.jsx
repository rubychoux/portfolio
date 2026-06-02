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
              Today I wear a few hats. I'm a founder who builds AI products myself — I designed,
              shipped, and now operate Caramel Lab, a live AI SaaS for STEM and science students in
              Korea, with Meve launching next. I wrote the entire stack solo, from the Google Gemini
              pipelines that power its AI features to the payment and subscription system behind them.
              And I'm a creator: I share the building, the founder life, and everything in between
              with a community of 50K+ on Instagram. I'm not a founder who hands the building to
              someone else — I'm a founder who can build it, and tell the story too.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="about-card">
              <p className="about-card-title">Currently</p>
              <ul className="about-card-list">
                <li>Founder, Caramel Lab — live AI SaaS</li>
                <li>Building Meve — launching soon</li>
                <li>Creator — 50K+ on Instagram</li>
                <li>Based in Seoul, Korea</li>
              </ul>
            </div>

            <div className="about-card">
              <p className="about-card-title">Highlights</p>
              <ul className="about-card-list">
                <li>Caramel Lab — shipped AI product with paying users</li>
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
