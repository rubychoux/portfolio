import './About.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'About',
    bio: [
      "People are often surprised that the person modeling in one photo is the engineer who built the product in the next. The short answer: I never accepted that creativity and technical depth have to live in separate worlds. I grew up immersed in art, and when I arrived at Georgia Tech for computer science I felt the tension right away, a deeply technical world with little room for creative thinking. I didn't want to pick a side.",
      'So I built at the intersection instead. In 2022 I founded InterOcci, a VR art exhibition platform, incorporated it as a Delaware C-Corp, ran 100+ customer interviews across three continents, and received a Presidential Undergraduate Research Award for it. Then I taught myself to build for real and co-founded Caramel Lab as its CTO, writing the entire AI stack solo, from the Google Gemini pipelines to the payments. It reached 10,000 users within two months of launch, with Meve coming next.',
      'That tension is the throughline, not a contradiction. As a founder I shape the vision, as an engineer I build the product myself, and as a creator I share the whole journey, the building and the founder life and everything in between, with a community of 50K+ on Instagram, alongside my modeling and art. Three sides, one person who refuses to choose.',
    ],
    currentlyTitle: 'Currently',
    currently: [
      'Co-founder & CTO, Caramel Lab (live AI SaaS)',
      'Building Meve, launching soon',
      'Creator, 50K+ on Instagram',
      'Based in Seoul, Korea',
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      'Caramel Lab, 10,000 users within two months of launch',
      'InterOcci Inc., VR art platform (2022)',
      'Georgia Tech CREATE-X alumni',
      'Presidential Research Award recipient',
      '100+ customer discovery interviews',
    ],
  },
  ko: {
    label: '소개',
    bio: [
      '한 사진에서는 모델로, 다음 사진에서는 제품을 만든 엔지니어로 있는 게 신기하다는 말을 자주 들어요. 짧게 답하면, 저는 창의성과 기술적 깊이가 서로 다른 세계에 있어야 한다고 한 번도 받아들이지 않았습니다. 어릴 때부터 예술과 함께 자랐고, 컴퓨터과학을 공부하러 조지아텍에 와서는 곧바로 긴장을 느꼈어요. 창의적 사고가 들어설 자리가 거의 없는 고도로 기술적인 환경이었죠. 저는 한쪽을 고르고 싶지 않았습니다.',
      '그래서 그 교차점에서 만들기 시작했습니다. 2022년에는 VR 아트 전시 플랫폼 InterOcci를 창업해 델라웨어 C-Corp으로 법인을 세우고, 세 대륙에서 100회 이상의 고객 인터뷰를 진행했으며, 이 프로젝트로 Presidential Undergraduate Research Award를 받았습니다. 그다음엔 제대로 만드는 법을 스스로 익혀, 카라멜랩을 공동창업하고 CTO로서 Google Gemini 파이프라인부터 결제까지 전체 AI 스택을 혼자 작성했습니다. 이 제품은 런칭 두 달 만에 유저 1만 명을 달성했고, 다음으로 Meve를 준비하고 있어요.',
      '그 긴장은 모순이 아니라 저를 관통하는 하나의 선입니다. 창업가로서 비전을 그리고, 엔지니어로서 제품을 직접 만들며, 크리에이터로서 그 모든 여정을, 만드는 과정과 창업가의 삶과 그 사이의 모든 것을 인스타그램 5만+ 커뮤니티와 나눕니다. 모델 활동과 미술도 함께요. 세 가지 모습, 그리고 그중 하나를 고르길 거부하는 한 사람입니다.',
    ],
    currentlyTitle: '현재',
    currently: [
      '카라멜랩 공동창업자 & CTO (라이브 AI SaaS)',
      'Meve 개발 중, 곧 출시',
      '크리에이터, 인스타그램 5만+',
      '대한민국 서울 거주',
    ],
    highlightsTitle: '주요 이력',
    highlights: [
      '카라멜랩, 런칭 두 달 만에 유저 1만 명',
      'InterOcci Inc., VR 아트 플랫폼 (2022)',
      '조지아텍 CREATE-X 동문',
      'Presidential Research Award 수상',
      '100회 이상 고객 인터뷰 진행',
    ],
  },
}

export default function About() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="about" id="about">
      <div className="about-inner container">
        <p className="section-label">{t.label}</p>

        <div className="about-grid">
          <div className="about-bio">
            {t.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className="about-sidebar">
            <div className="about-card">
              <p className="about-card-title">{t.currentlyTitle}</p>
              <ul className="about-card-list">
                {t.currently.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <p className="about-card-title">{t.highlightsTitle}</p>
              <ul className="about-card-list">
                {t.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
