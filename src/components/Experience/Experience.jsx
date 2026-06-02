import './Experience.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'Experience',
    title: 'Background',
    items: [
      {
        org: 'Megazone Cloud',
        title: 'Software Engineer Intern, Frontend & AI Systems',
        period: 'May 2025 – Aug 2025',
        description:
          'Built a React + TypeScript enterprise dashboard with paginated transaction tables, filtering, and CSV export for finance and operations teams monitoring 5,000+ usage records. Integrated Azure OpenAI and AWS service APIs, modeling async request states with strict TypeScript unions and optimizing table rendering through memoization and derived state.',
      },
      {
        org: 'Caramel Lab',
        title: 'Co-founder & CTO',
        period: '2026 – Present',
        description:
          'Co-founder and CTO of Caramel Lab (caramellab.org), a live AI SaaS for Korean STEM and science students. Built the entire product solo in Next.js 16, React 19, and TypeScript on Supabase with row-level security, powered by Google Gemini: AI lab-report generation, paper analysis, a thesis-writing chatbot ("카라멜 조교"), AI feedback and grading, figure generation, and a community lounge. Integrated NicePay for payments and subscriptions. Launched and reached 10,000 users within two months, now in production with paying subscribers.',
      },
      {
        org: 'Georgia Tech',
        title: 'B.S. Computer Science, AI/Media Concentration',
        period: 'Graduated July 2025',
        description:
          'Studied algorithms, systems, and intelligent systems at one of the top CS programs in the country. Coursework spanned machine learning, computer vision, data structures, and software engineering, with a concentration that pushed me toward the intersection of applied math and real-world systems.',
      },
      {
        org: 'Microsoft, GT OIT',
        title: 'Lead Developer & Product Manager',
        period: 'Aug 2023 – Jan 2024',
        description:
          'Led frontend development of component-based 3D environments in Microsoft Mesh, managing interactive UI state across complex immersive experiences deployed 15% ahead of schedule. Built a scalable asset-tagging and retrieval system using structured metadata to support content discovery across a library of 3D assets.',
      },
      {
        org: 'InterOcci Inc.',
        title: 'Founder & CEO',
        period: 'May 2022 – Aug 2024',
        description:
          'Founded and led a VR art exhibition platform as a Delaware C-Corp. Built the original web platform in React with TypeScript, designing modular dashboards, type-safe filtering systems, and scalable content discovery interfaces. Architected frontend state management and API contracts to support personalization and creator analytics.',
      },
    ],
  },
  ko: {
    label: '경력',
    title: '이력',
    items: [
      {
        org: 'Megazone Cloud',
        title: '소프트웨어 엔지니어 인턴, 프론트엔드 & AI 시스템',
        period: '2025년 5월 – 2025년 8월',
        description:
          '5,000건 이상의 사용 기록을 모니터링하는 재무·운영 팀을 위해 페이지네이션 거래 테이블, 필터링, CSV 내보내기를 갖춘 React + TypeScript 엔터프라이즈 대시보드를 구축했습니다. Azure OpenAI와 AWS 서비스 API를 연동하고, 엄격한 TypeScript 유니온으로 비동기 요청 상태를 모델링했으며, 메모이제이션과 파생 상태로 테이블 렌더링을 최적화했습니다.',
      },
      {
        org: 'Caramel Lab',
        title: '공동창업자 & CTO',
        period: '2026년 – 현재',
        description:
          '한국 STEM·과학 학생을 위한 라이브 AI SaaS인 카라멜랩(caramellab.org)의 공동창업자이자 CTO입니다. Next.js 16, React 19, TypeScript와 row-level security를 적용한 Supabase 위에서 Google Gemini로 구동되는 전체 제품을 혼자 만들었습니다. AI 실험 리포트 생성, 논문 분석, 논문 작성 챗봇("카라멜 조교"), AI 피드백·채점, 그림 생성, 커뮤니티 라운지를 구현했고, NicePay로 결제·구독을 연동했습니다. 런칭 두 달 만에 유저 1만 명을 달성했고, 현재 유료 구독자와 함께 프로덕션에서 운영 중입니다.',
      },
      {
        org: 'Georgia Tech',
        title: '컴퓨터과학 학사, AI/미디어 집중',
        period: '2025년 7월 졸업',
        description:
          '미국 최상위 CS 프로그램 중 하나에서 알고리즘, 시스템, 지능형 시스템을 공부했습니다. 머신러닝, 컴퓨터 비전, 자료구조, 소프트웨어 공학을 아울렀고, 응용 수학과 실제 시스템의 교차점으로 저를 이끈 집중 트랙을 밟았습니다.',
      },
      {
        org: 'Microsoft, GT OIT',
        title: '리드 개발자 & 프로덕트 매니저',
        period: '2023년 8월 – 2024년 1월',
        description:
          'Microsoft Mesh에서 컴포넌트 기반 3D 환경의 프론트엔드 개발을 이끌며, 복잡한 몰입형 경험 전반의 인터랙티브 UI 상태를 관리해 일정보다 15% 앞당겨 배포했습니다. 구조화된 메타데이터를 활용한 확장 가능한 에셋 태깅·검색 시스템을 구축해 3D 에셋 라이브러리의 콘텐츠 탐색을 지원했습니다.',
      },
      {
        org: 'InterOcci Inc.',
        title: '창업자 & CEO',
        period: '2022년 5월 – 2024년 8월',
        description:
          'VR 아트 전시 플랫폼을 델라웨어 C-Corp으로 설립하고 이끌었습니다. React와 TypeScript로 초기 웹 플랫폼을 만들며 모듈형 대시보드, 타입 안전 필터링 시스템, 확장 가능한 콘텐츠 탐색 인터페이스를 설계했습니다. 개인화와 크리에이터 분석을 지원하도록 프론트엔드 상태 관리와 API 계약을 설계했습니다.',
      },
    ],
  },
}

export default function Experience() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="experience" id="experience">
      <div className="experience-inner container">
        <p className="section-label">{t.label}</p>
        <h2 className="section-title">{t.title}</h2>

        <div className="timeline">
          {t.items.map((exp, i) => (
            <div key={i} className="timeline-item">
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
