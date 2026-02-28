import { Link } from 'react-router-dom'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'FinFlow',
    description:
      'Financial expense management dashboard with transaction tracking, budget analytics, multi-filter systems, sortable tables, and CSV export. Built with a mock API layer and custom hooks for clean separation of concerns.',
    tags: ['React', 'TypeScript', 'Vite', 'Custom Hooks'],
    live: 'https://finflow-navy.vercel.app',
    github: 'https://github.com/rubychoux/finflow',
    caseStudy: '/projects/finflow',
  },
  {
    id: 2,
    title: 'AURA',
    description:
      'AI human optimization platform with a personalization engine built as pure TypeScript functions fully decoupled from React. Features a real-time "What If" simulator with useMemo-gated scoring, multi-step onboarding, and Context + useReducer state with localStorage persistence.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Context API'],
    live: 'https://aura-ruby.vercel.app',
    github: 'https://github.com/rubychoux/aura',
  },
  {
    id: 3,
    title: 'InterOcci',
    description:
      '3D immersive art gallery built with React and Three.js. Features a walkable gallery space with custom lighting, animated artwork textures, and an immersive projection mode where art wraps all room surfaces.',
    tags: ['React', 'Three.js', 'WebGL', 'React Three Fiber'],
    live: 'https://interocci.vercel.app',
    github: 'https://github.com/rubychoux/interocci',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>

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
                  <a
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </a>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
