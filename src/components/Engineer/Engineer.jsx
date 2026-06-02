import './Engineer.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'Engineer',
    title: 'How I build',
    intro:
      'I ship entire products solo, from database schema to UI to AI pipelines. Here is some of what I have built, and the stack I reach for.',
    builtTitle: 'What I have built',
    builds: [
      {
        name: 'Caramel Lab',
        desc: 'Full-stack AI SaaS, built solo. Next.js, React, TypeScript, Supabase with row-level security, Google Gemini pipelines, and NicePay billing. Reached 10,000 users in two months.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Gemini'],
      },
      {
        name: 'InterOcci',
        desc: '3D immersive art platform in React and React Three Fiber, with custom lighting and an art-wrapping projection mode. Originally a Unity + Meta Quest app.',
        tags: ['React', 'Three.js', 'WebGL', 'Unity'],
      },
      {
        name: 'Megazone Cloud Dashboard',
        desc: 'Enterprise React + TypeScript dashboard tracking 5,000+ usage records, with Azure OpenAI and AWS service integrations and memoized table rendering.',
        tags: ['React', 'TypeScript', 'Azure OpenAI', 'AWS'],
      },
      {
        name: 'Microsoft Mesh Environments',
        desc: 'Component-based 3D immersive environments in Microsoft Mesh, shipped 15% ahead of schedule, with a scalable metadata-driven asset-tagging system.',
        tags: ['3D', 'Microsoft Mesh', 'Metadata'],
      },
      {
        name: 'This Portfolio',
        desc: 'The bilingual site you are looking at, built in React + Vite with a markdown-driven writing engine.',
        tags: ['React', 'Vite', 'i18n'],
      },
    ],
    expTitle: 'Core experience',
    experience: [
      { role: 'Co-founder & CTO, Caramel Lab', period: '2026 – Present' },
      { role: 'Software Engineer Intern, Megazone Cloud', period: '2025' },
      { role: 'Lead Developer & PM, Microsoft / GT OIT', period: '2023 – 2024' },
      { role: 'B.S. Computer Science, Georgia Tech', period: '2025' },
    ],
    stackTitle: 'Stack',
    stack: ['React', 'Next.js', 'TypeScript', 'Python', 'Google Gemini', 'Supabase', 'Postgres', 'Three.js', 'Node', 'Vercel'],
  },
  ko: {
    label: '엔지니어',
    title: '내가 만드는 방식',
    intro:
      '데이터베이스 스키마부터 UI, AI 파이프라인까지 제품 전체를 혼자 만들어 출시합니다. 제가 만든 작업물과 즐겨 쓰는 기술 스택을 소개합니다.',
    builtTitle: '내가 만든 것',
    builds: [
      {
        name: 'Caramel Lab',
        desc: '풀스택 AI SaaS를 혼자 구축. Next.js, React, TypeScript, row-level security를 적용한 Supabase, Google Gemini 파이프라인, NicePay 결제까지. 런칭 두 달 만에 유저 1만 명 달성.',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'Gemini'],
      },
      {
        name: 'InterOcci',
        desc: 'React와 React Three Fiber로 만든 3D 몰입형 아트 플랫폼. 커스텀 조명과 작품이 공간을 감싸는 프로젝션 모드를 구현. 초기에는 Unity + Meta Quest 앱이었습니다.',
        tags: ['React', 'Three.js', 'WebGL', 'Unity'],
      },
      {
        name: 'Megazone Cloud 대시보드',
        desc: '5,000건 이상의 사용 기록을 추적하는 엔터프라이즈 React + TypeScript 대시보드. Azure OpenAI·AWS 서비스 연동과 메모이제이션 기반 테이블 렌더링.',
        tags: ['React', 'TypeScript', 'Azure OpenAI', 'AWS'],
      },
      {
        name: 'Microsoft Mesh 환경',
        desc: 'Microsoft Mesh의 컴포넌트 기반 3D 몰입형 환경. 일정보다 15% 앞당겨 배포했고, 메타데이터 기반의 확장 가능한 에셋 태깅 시스템을 구축.',
        tags: ['3D', 'Microsoft Mesh', 'Metadata'],
      },
      {
        name: '이 포트폴리오',
        desc: '지금 보고 계신 한·영 이중언어 사이트. React + Vite와 마크다운 기반 글쓰기 엔진으로 직접 만들었습니다.',
        tags: ['React', 'Vite', 'i18n'],
      },
    ],
    expTitle: '핵심 경력',
    experience: [
      { role: '카라멜랩 공동창업자 & CTO', period: '2026년 – 현재' },
      { role: '소프트웨어 엔지니어 인턴, Megazone Cloud', period: '2025년' },
      { role: '리드 개발자 & PM, Microsoft / GT OIT', period: '2023년 – 2024년' },
      { role: '컴퓨터과학 학사, Georgia Tech', period: '2025년' },
    ],
    stackTitle: '기술 스택',
    stack: ['React', 'Next.js', 'TypeScript', 'Python', 'Google Gemini', 'Supabase', 'Postgres', 'Three.js', 'Node', 'Vercel'],
  },
}

export default function Engineer() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="engineer" id="engineer">
      <div className="engineer-inner container">
        <p className="section-label">{t.label}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="engineer-intro">{t.intro}</p>

        <h3 className="engineer-subhead">{t.builtTitle}</h3>
        <div className="engineer-builds">
          {t.builds.map((b, i) => (
            <article key={i} className="build-card">
              <h4 className="build-name">{b.name}</h4>
              <p className="build-desc">{b.desc}</p>
              <div className="build-tags">
                {b.tags.map((tag) => (
                  <span key={tag} className="build-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 className="engineer-subhead">{t.expTitle}</h3>
        <ul className="engineer-exp">
          {t.experience.map((e, i) => (
            <li key={i} className="engineer-exp-item">
              <span className="engineer-exp-role">{e.role}</span>
              <span className="engineer-exp-period">{e.period}</span>
            </li>
          ))}
        </ul>

        <h3 className="engineer-subhead">{t.stackTitle}</h3>
        <div className="engineer-stack">
          {t.stack.map((s) => (
            <span key={s} className="stack-chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
