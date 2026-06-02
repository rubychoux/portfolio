import { Link } from 'react-router-dom'
import './Projects.css'
import caramelThumb from '../../assets/caramel-thumb.png'
import interocciThumb from '../../assets/interocci-web.png'
import { useLang } from '../../i18n/LanguageContext'

const PROJECTS = [
  {
    id: 1,
    title: 'Caramel Lab',
    description: {
      en: 'A live AI SaaS for Korean STEM and science students: AI lab-report generation, paper analysis, a thesis-writing chatbot ("카라멜 조교"), AI feedback and grading, figure generation, and a community lounge. Built solo full-stack on Supabase with row-level security and Google Gemini, with NicePay payments and real paying subscribers.',
      ko: '한국 STEM·과학 학생을 위한 라이브 AI SaaS입니다. AI 실험 리포트 생성, 논문 분석, 논문 작성 챗봇("카라멜 조교"), AI 피드백·채점, 그림 생성, 커뮤니티 라운지를 제공합니다. row-level security를 적용한 Supabase와 Google Gemini 위에서 풀스택을 혼자 만들었고, NicePay 결제와 실제 유료 구독자를 갖추고 있습니다.',
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Gemini'],
    live: 'https://caramellab.org',
    caseStudy: '/projects/caramel',
    thumbnail: caramelThumb,
  },
  {
    id: 2,
    title: 'InterOcci',
    description: {
      en: '3D immersive art gallery built with React and Three.js. Features a walkable gallery space with custom lighting, animated artwork textures, and an immersive projection mode where art wraps all room surfaces.',
      ko: 'React와 Three.js로 만든 3D 몰입형 아트 갤러리입니다. 커스텀 조명을 갖춘 걸어 다닐 수 있는 갤러리 공간, 애니메이션이 적용된 작품 텍스처, 작품이 방의 모든 면을 감싸는 몰입형 프로젝션 모드를 제공합니다.',
    },
    tags: ['React', 'Three.js', 'WebGL', 'React Three Fiber'],
    live: 'https://interocci.vercel.app',
    github: 'https://github.com/rubychoux/interocci',
    caseStudy: '/projects/interocci',
    thumbnail: interocciThumb,
  },
  {
    id: 3,
    title: 'Meve',
    description: {
      en: 'My next AI product, currently in the build. More to share soon. Launching 2026.',
      ko: '다음 AI 제품으로, 현재 개발 중입니다. 곧 더 공유할게요. 2026년 출시 예정.',
    },
    tags: ['AI', 'SaaS', 'In progress'],
    comingSoon: true,
  },
]

const UI = {
  en: { label: 'Projects', title: "What I'm Building", soon: 'Coming Soon', live: 'Live ↗', github: 'GitHub ↗', caseStudy: 'View Case Study →' },
  ko: { label: '프로젝트', title: '내가 만드는 것', soon: '출시 예정', live: '바로가기 ↗', github: 'GitHub ↗', caseStudy: '케이스 스터디 보기 →' },
}

export default function Projects() {
  const { lang } = useLang()
  const ui = UI[lang]

  return (
    <section className="projects" id="projects">
      <div className="projects-inner container">
        <p className="section-label">{ui.label}</p>
        <h2 className="section-title">{ui.title}</h2>

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
                  <span className="project-thumb-badge">{ui.soon}</span>
                )}
              </div>
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description[lang]}</p>
              </div>

              <div className="project-card-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.comingSoon ? (
                    <span className="project-link project-link--soon">{ui.soon}</span>
                  ) : (
                    <>
                      <a
                        href={project.live}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ui.live}
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ui.github}
                        </a>
                      )}
                    </>
                  )}
                </div>
                {project.caseStudy && (
                  <span className="project-case-study-hint">{ui.caseStudy}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
