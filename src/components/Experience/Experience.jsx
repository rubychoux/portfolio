import './Experience.css'

const EXPERIENCES = [
  {
    id: 1,
    org: 'Georgia Tech',
    title: 'B.S. Computer Science — AI/ML Concentration',
    period: 'Graduated July 2024',
    description:
      'Studied algorithms, systems, and intelligent systems at one of the top CS programs in the country. Coursework spanned machine learning, computer vision, data structures, and software engineering — with a concentration that pushed me toward the intersection of applied math and real-world systems.',
    type: 'education',
  },
  {
    id: 2,
    org: 'AURA',
    title: 'Founder & Frontend Engineer',
    period: '2024 — Present',
    description:
      'Designing and building an AI-powered human optimization platform as an independent product exploration in Seoul, Korea. Leading all product, engineering, and design decisions from zero to working prototype — including a real-time personalization engine, multi-step onboarding, and a "What If" feature simulator built on pure TypeScript logic fully decoupled from the UI layer.',
    type: 'work',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-inner container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Background</h2>

        <div className="timeline">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-org">{exp.org}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-title">{exp.title}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
