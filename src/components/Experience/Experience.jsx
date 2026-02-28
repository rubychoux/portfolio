import './Experience.css'

const EXPERIENCES = [
  {
    id: 1,
    org: 'Megazone Cloud',
    title: 'Software Engineer Intern — Frontend & AI Systems',
    period: 'May 2025 — Aug 2025',
    description:
      'Built a React + TypeScript enterprise dashboard with paginated transaction tables, filtering, and CSV export for finance and operations teams monitoring 5,000+ usage records. Integrated Azure OpenAI and AWS service APIs, modeling async request states with strict TypeScript unions and optimizing table rendering through memoization and derived state.',
  },
  {
    id: 2,
    org: 'AURA',
    title: 'Founder & Frontend Engineer',
    period: '2025 — Present',
    description:
      'After graduating, moved to Seoul to explore product-market fit in the AI x beauty space. Working as a beauty model since 2024 gave me firsthand exposure to the industry\'s gaps — fragmented advice, zero personalization, no data-driven tools. AURA is the platform I\'m building in response: an AI-powered personalization engine for the Korean beauty market.',
  },
  {
    id: 3,
    org: 'Georgia Tech',
    title: 'B.S. Computer Science — AI/Media Concentration',
    period: 'Graduated July 2025',
    description:
      'Studied algorithms, systems, and intelligent systems at one of the top CS programs in the country. Coursework spanned machine learning, computer vision, data structures, and software engineering — with a concentration that pushed me toward the intersection of applied math and real-world systems.',
  },
  {
    id: 4,
    org: 'Microsoft — GT OIT',
    title: 'Lead Developer & Product Manager',
    period: 'Aug 2023 — Jan 2024',
    description:
      'Led frontend development of component-based 3D environments in Microsoft Mesh, managing interactive UI state across complex immersive experiences deployed 15% ahead of schedule. Built a scalable asset-tagging and retrieval system using structured metadata to support content discovery across a library of 3D assets.',
  },
  {
    id: 5,
    org: 'InterOcci Inc.',
    title: 'Founder & CEO',
    period: 'May 2022 — Aug 2024',
    description:
      'Founded and led a VR art exhibition platform as a Delaware C-Corp. Built the original web platform in React with TypeScript, designing modular dashboards, type-safe filtering systems, and scalable content discovery interfaces. Architected frontend state management and API contracts to support personalization and creator analytics. Raised $30K from Georgia Tech CREATE-X and angel investor Chris Klaus.',
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
