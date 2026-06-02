import { Link } from 'react-router-dom'
import './CaramelCaseStudy.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    back: '← Back',
    subtitle: 'An AI SaaS for STEM & Science Students',
    visit: 'Visit caramellab.org ↗',
    stats: ['Live in Production', 'Paying Subscribers', 'Co-founder/CTO', 'AI SaaS'],
    problemHeading: 'The Problem',
    problem:
      "Korean STEM and science students are buried in lab reports, papers, and theses, with almost no tooling built for how they actually work. General-purpose AI tools don't understand experimental write-ups, scientific figures, or the structure of an academic paper, and they aren't built for the Korean academic context. I built Caramel Lab to be the AI workspace I wished existed for science students: one place to generate lab reports, analyze papers, write theses, and get AI feedback on their work.",
    productHeading: 'The Product',
    product: [
      {
        h: 'AI Lab Reports',
        p: "Generates structured experiment reports from a student's data and notes, and produces publication-style figures on demand, turning raw results into a finished write-up.",
      },
      {
        h: 'Paper Analysis & 카라멜 조교',
        p: 'Breaks down dense research papers into clear summaries, and pairs students with "카라멜 조교", a thesis-writing chatbot that helps draft, structure, and refine academic writing.',
      },
      {
        h: 'Feedback · Figures · Lounge',
        p: 'AI feedback and grading on submitted work, figure generation for reports, and a community "lounge" (라운지) where students share, ask, and learn together.',
      },
    ],
    builtHeading: "How It's Built",
    built: [
      {
        h: 'Full-Stack Solo',
        p: ['Designed, built, and shipped entirely on my own in ', ', from the database schema to the UI to every API route.'],
        code: ['Next.js 16', 'React 19', 'TypeScript'],
      },
      {
        h: 'AI Pipeline',
        p: ['Built on ', ' with row-level security for multi-tenant data, with ', ' powering report generation, paper analysis, the thesis chatbot, grading, and figure generation.'],
        code: ['Supabase', 'Google Gemini'],
      },
      {
        h: 'Real Payments',
        p: ['Integrated ', ' for payments and recurring subscriptions, handling real billing, plans, and access control for paying users end to end.'],
        code: ['NicePay'],
      },
      {
        h: 'Shipped & Running',
        p: ['Caramel Lab is live in production at ', ' today, serving real students with paying subscribers. Not a prototype, an operating product.'],
        code: ['caramellab.org'],
      },
    ],
    whyHeading: 'Why It Matters',
    why:
      "Caramel Lab is proof of how I work as a founder: I don't just have ideas, I build and run them. I took it from an empty repo to a live AI product with paying subscribers alone, designing the experience, writing the full stack, wiring up the Gemini pipelines, and shipping a real payment system. It's the foundation for everything I want to build next in AI for education and science.",
    footer: '← Back to portfolio',
  },
  ko: {
    back: '← 뒤로',
    subtitle: 'STEM·과학 학생을 위한 AI SaaS',
    visit: 'caramellab.org 방문 ↗',
    stats: ['프로덕션 운영 중', '유료 구독자', '공동창업자/CTO', 'AI SaaS'],
    problemHeading: '문제',
    problem:
      '한국의 STEM·과학 학생들은 실험 리포트, 논문, 학위논문에 파묻혀 있지만, 그들이 실제로 일하는 방식에 맞춰 만들어진 도구는 거의 없습니다. 범용 AI 도구는 실험 보고서나 과학 그림, 학술 논문의 구조를 이해하지 못하고, 한국의 학술 맥락에 맞게 만들어지지도 않았습니다. 저는 과학 학생을 위해 있었으면 했던 AI 작업 공간으로 카라멜랩을 만들었습니다. 실험 리포트를 생성하고, 논문을 분석하고, 학위논문을 쓰고, 자기 작업에 대한 AI 피드백을 받는 것을 한곳에서 할 수 있게요.',
    productHeading: '제품',
    product: [
      {
        h: 'AI 실험 리포트',
        p: '학생의 데이터와 메모로부터 구조화된 실험 리포트를 생성하고, 필요할 때 논문 수준의 그림을 만들어 줍니다. 날것의 결과를 완성된 보고서로 바꿔 줍니다.',
      },
      {
        h: '논문 분석 & 카라멜 조교',
        p: '난해한 연구 논문을 명확한 요약으로 풀어 주고, 학생을 "카라멜 조교"와 연결합니다. 초안 작성, 구조 잡기, 글 다듬기를 돕는 논문 작성 챗봇이에요.',
      },
      {
        h: '피드백 · 그림 · 라운지',
        p: '제출한 과제에 대한 AI 피드백과 채점, 리포트용 그림 생성, 그리고 학생들이 함께 공유하고 묻고 배우는 커뮤니티 "라운지"를 제공합니다.',
      },
    ],
    builtHeading: '어떻게 만들었나',
    built: [
      {
        h: '풀스택 단독 개발',
        p: ['데이터베이스 스키마부터 UI, 모든 API 라우트까지 ', '로 전부 혼자 설계하고 만들어 출시했습니다.'],
        code: ['Next.js 16', 'React 19', 'TypeScript'],
      },
      {
        h: 'AI 파이프라인',
        p: ['멀티테넌트 데이터를 위한 row-level security를 적용한 ', ' 위에 구축했고, ', '가 리포트 생성, 논문 분석, 논문 챗봇, 채점, 그림 생성을 구동합니다.'],
        code: ['Supabase', 'Google Gemini'],
      },
      {
        h: '실제 결제',
        p: ['결제와 정기 구독을 위해 ', '를 연동해, 유료 사용자의 실제 청구, 플랜, 접근 제어를 처음부터 끝까지 처리합니다.'],
        code: ['NicePay'],
      },
      {
        h: '출시 & 운영 중',
        p: ['카라멜랩은 오늘도 ', '에서 프로덕션으로 운영되며 실제 학생과 유료 구독자에게 서비스합니다. 프로토타입이 아니라 운영되는 제품입니다.'],
        code: ['caramellab.org'],
      },
    ],
    whyHeading: '왜 중요한가',
    why:
      '카라멜랩은 제가 창업가로서 일하는 방식의 증거입니다. 아이디어만 있는 게 아니라 직접 만들고 운영합니다. 빈 저장소에서 유료 구독자를 가진 라이브 AI 제품까지 혼자 끌고 왔습니다. 경험을 설계하고, 전체 스택을 작성하고, Gemini 파이프라인을 연결하고, 실제 결제 시스템을 출시했습니다. 교육과 과학을 위한 AI 분야에서 다음에 만들고 싶은 모든 것의 토대입니다.',
    footer: '← 포트폴리오로 돌아가기',
  },
}

function withCode(parts, codes) {
  // Interleave text parts with <code> snippets: parts.length === codes.length + 1
  const nodes = []
  parts.forEach((text, i) => {
    nodes.push(<span key={`t${i}`}>{text}</span>)
    if (i < codes.length) nodes.push(<code key={`c${i}`}>{codes[i]}</code>)
  })
  return nodes
}

const ICONS = ['◈', '⬡', '◇', '▲']

export default function CaramelCaseStudy() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/founder" className="cs-back-link">{t.back}</Link>
          <h1 className="cs-title">Caramel Lab</h1>
          <p className="cs-subtitle">{t.subtitle}</p>
          <div className="cs-header-actions">
            <a
              href="https://caramellab.org"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              {t.visit}
            </a>
          </div>
        </div>
      </header>

      <div className="cs-body">
        <div className="cs-stats">
          {t.stats.map((s) => (
            <span key={s} className="cs-stat">{s}</span>
          ))}
        </div>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.problemHeading}</h2>
          <p className="cs-prose">{t.problem}</p>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.productHeading}</h2>
          <div className="cs-arch-cards">
            {t.product.map((card, i) => (
              <div key={i} className="cs-arch-card">
                <span className="cs-arch-icon">{ICONS[i]}</span>
                <h3>{card.h}</h3>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.builtHeading}</h2>
          <div className="cs-arch-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {t.built.map((card, i) => (
              <div key={i} className="cs-arch-card">
                <span className="cs-arch-icon">{ICONS[i]}</span>
                <h3>{card.h}</h3>
                <p>{withCode(card.p, card.code)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.whyHeading}</h2>
          <p className="cs-prose">{t.why}</p>
        </section>

        <footer className="cs-footer">
          <Link to="/" className="cs-back-link">{t.footer}</Link>
        </footer>
      </div>
    </div>
  )
}
