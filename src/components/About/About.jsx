import './About.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'About',
    bio: [
      "I'm a CS graduate from Georgia Tech with a background in AI/ML and a parallel life as a tech founder. I grew up with art, and when I arrived at Georgia Tech I felt the tension immediately: a deeply technical environment that had little space for creative thinking. I didn't want to accept that as normal.",
      'In 2022, I founded InterOcci, a VR art exhibition platform that let artists build immersive 3D galleries on Meta Quest. I incorporated as a Delaware C-Corp, conducted 100+ customer discovery interviews across Asia, Europe, and North America, competed in the Inventure Prize, and received a Presidential Undergraduate Research Award for the project.',
      "Today I wear a few hats. I'm a founder who builds AI products myself. I designed, shipped, and now operate Caramel Lab, a live AI SaaS for STEM and science students in Korea, with Meve launching next. I wrote the entire stack solo, from the Google Gemini pipelines that power its AI features to the payment and subscription system behind them. And I'm a creator: I share the building, the founder life, and everything in between with a community of 50K+ on Instagram. I'm not a founder who hands the building to someone else. I'm a founder who can build it, and tell the story too.",
    ],
    currentlyTitle: 'Currently',
    currently: [
      'Founder, Caramel Lab, live AI SaaS',
      'Building Meve, launching soon',
      'Creator, 50K+ on Instagram',
      'Based in Seoul, Korea',
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      'Caramel Lab, shipped AI product with paying users',
      'InterOcci Inc., VR art platform (2022)',
      'Georgia Tech CREATE-X alumni',
      'Presidential Research Award recipient',
      '100+ customer discovery interviews',
    ],
  },
  ko: {
    label: '소개',
    bio: [
      '조지아텍에서 컴퓨터과학을 전공하고 AI/ML을 공부했으며, 동시에 창업가의 삶을 살아왔습니다. 어릴 때부터 예술과 함께 자랐는데, 조지아텍에 와서 곧바로 긴장을 느꼈어요. 창의적 사고가 들어설 자리가 거의 없는 고도로 기술적인 환경이었죠. 저는 그걸 당연하게 받아들이고 싶지 않았습니다.',
      '2022년에는 아티스트가 메타 퀘스트에서 몰입형 3D 갤러리를 만들 수 있는 VR 아트 전시 플랫폼 InterOcci를 창업했습니다. 델라웨어 C-Corp으로 법인을 설립하고, 아시아·유럽·북미에서 100회 이상의 고객 인터뷰를 진행했으며, Inventure Prize에 출전하고 이 프로젝트로 Presidential Undergraduate Research Award를 받았습니다.',
      '지금은 여러 역할을 동시에 하고 있어요. 저는 AI 제품을 직접 만드는 창업가입니다. 한국 STEM·과학 학생을 위한 라이브 AI SaaS인 카라멜랩을 설계하고 출시해 직접 운영하고 있으며, 다음으로 Meve를 출시할 예정입니다. AI 기능을 구동하는 Google Gemini 파이프라인부터 그 뒤의 결제·구독 시스템까지 전체 스택을 혼자 작성했습니다. 그리고 저는 크리에이터이기도 합니다. 만드는 과정과 창업가의 삶, 그 사이의 모든 것을 인스타그램 5만+ 커뮤니티와 나눕니다. 저는 만드는 일을 남에게 맡기는 창업가가 아니라, 직접 만들 수 있고 그 이야기까지 전하는 창업가입니다.',
    ],
    currentlyTitle: '현재',
    currently: [
      '카라멜랩 창업자, 라이브 AI SaaS',
      'Meve 개발 중, 곧 출시',
      '크리에이터, 인스타그램 5만+',
      '대한민국 서울 거주',
    ],
    highlightsTitle: '주요 이력',
    highlights: [
      '카라멜랩, 유료 사용자를 가진 AI 제품 출시',
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
