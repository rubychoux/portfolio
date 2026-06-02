import { Link } from 'react-router-dom'
import './Projects.css'
import caramelThumb from '../../assets/caramel-thumb.png'
import interocciThumb from '../../assets/interocci-web.png'

const PROJECTS = [
  {
    id: 1,
    title: 'Caramel Lab',
    description:
      'A live AI SaaS for Korean STEM and science students — AI lab-report generation, paper analysis, a thesis-writing chatbot ("카라멜 조교"), AI feedback and grading, figure generation, and a community lounge. Built solo full-stack on Supabase with row-level security and Google Gemini, with NicePay payments and real paying subscribers.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Gemini'],
    live: 'https://caramellab.org',
    caseStudy: '/projects/caramel',
    thumbnail: caramelThumb,
  },
  {
    id: 2,
    title: 'InterOcci',
    description:
      '3D immersive art gallery built with React and Three.js. Features a walkable gallery space with custom lighting, animated artwork textures, and an immersive projection mode where art wraps all room surfaces.',
    tags: ['React', 'Three.js', 'WebGL', 'React Three Fiber'],
    live: 'https://interocci.vercel.app',
    github: 'https://github.com/rubychoux/interocci',
    caseStudy: '/projects/interocci',
    thumbnail: interocciThumb,
  },
  {
    id: 3,
    title: 'Meve',
    description:
      'My next AI product — currently in the build. More to share soon. Launching 2026.',
    tags: ['AI', 'SaaS', 'In progress'],
    comingSoon: true,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">What I'm Building</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`project-card${project.caseStudy ? ' project-card--linkable' : ''}`}
            >
              {project.caseStudy && (
                <Link
                  to={project.caseStudy}
                  className="project-card-cover-link"
                  aria-label={`View ${project.title} case study`}
                />
              )}
              <div
                className={`project-thumb${project.thumbnail ? '' : ' project-thumb--placeholder'}`}
              >
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} />
                ) : (
                  <span className="project-thumb-badge">Coming Soon</span>
                )}
              </div>
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.comingSoon ? (
                    <span className="project-link project-link--soon">Coming Soon</span>
                  ) : (
                    <>
                      <a
                        href={project.live}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live ↗
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </>
                  )}
                </div>
                {project.caseStudy && (
                  <span className="project-case-study-hint">View Case Study →</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
