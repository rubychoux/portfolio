import { Link } from 'react-router-dom'
import './InterOcciCaseStudy.css'
import interocciWeb from '../../assets/interocci-web.png'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    back: '← Back',
    subtitle: 'Immersive VR Art Exhibition Platform',
    demo: 'Live Demo ↗',
    github: 'GitHub ↗',
    stats: ['Delaware C-Corp', '100+ User Interviews', 'VR + Web'],
    originHeading: 'The Origin',
    origin:
      'I founded InterOcci in my sophomore year at Georgia Tech because I felt the gap between art and technology personally. Traditional online galleries like DeviantArt, ArtStation, and Instagram trap art in flat 2D grids. Physical exhibitions are inaccessible to most artists. I wanted to build the middle ground: a platform where any artist could create an immersive 3D exhibition and share it with the world, without needing a gallery or a budget.',
    productHeading: 'The Product',
    caption: 'React web platform, where art transcends space',
    techHeading: 'Technical Evolution',
    tech: [
      {
        h: 'V1: Unity + Meta Quest',
        p: 'Built the original VR platform in Unity with PUN Photon for real-time multiplayer networking, allowing multiple users to experience the same gallery simultaneously. Integrated Blender assets and custom lighting rigs. Shipped to the Meta Quest store.',
      },
      {
        h: 'V2: React + Three.js',
        p: 'Rebuilt as a web platform using React and React Three Fiber, making the experience accessible without a headset. Implemented custom lighting systems, animated artwork textures with useFrame, and an immersive projection mode where art wraps all room surfaces, inspired by Van Gogh exhibition experiences.',
      },
    ],
    journeyHeading: 'Founder Journey',
    journey:
      'Incorporated as a Delaware C-Corp in 2022. Conducted 100+ customer discovery interviews across Asia, Europe, and North America. Presented at CREATE-X Demo Day, where Georgia Tech President Angel Cabrera tried the product. Received a Presidential Undergraduate Research Award for the project.',
    footer: '← Back to portfolio',
  },
  ko: {
    back: '← 뒤로',
    subtitle: '몰입형 VR 아트 전시 플랫폼',
    demo: '라이브 데모 ↗',
    github: 'GitHub ↗',
    stats: ['델라웨어 C-Corp', '100회+ 사용자 인터뷰', 'VR + 웹'],
    originHeading: '시작',
    origin:
      '조지아텍 2학년 때 InterOcci를 창업했습니다. 예술과 기술 사이의 간극을 개인적으로 느꼈기 때문이에요. DeviantArt, ArtStation, 인스타그램 같은 전통적인 온라인 갤러리는 작품을 평평한 2D 그리드에 가둡니다. 물리적 전시는 대부분의 아티스트에게 접근하기 어렵죠. 저는 그 중간 지점을 만들고 싶었습니다. 어떤 아티스트든 갤러리나 예산 없이도 몰입형 3D 전시를 만들어 세상과 공유할 수 있는 플랫폼이요.',
    productHeading: '제품',
    caption: 'React 웹 플랫폼, 예술이 공간을 넘어서는 곳',
    techHeading: '기술적 변천',
    tech: [
      {
        h: 'V1: Unity + Meta Quest',
        p: '실시간 멀티플레이어 네트워킹을 위한 PUN Photon과 함께 Unity로 초기 VR 플랫폼을 만들어, 여러 사용자가 같은 갤러리를 동시에 경험할 수 있게 했습니다. Blender 에셋과 커스텀 조명 리그를 통합하고 메타 퀘스트 스토어에 출시했습니다.',
      },
      {
        h: 'V2: React + Three.js',
        p: 'React와 React Three Fiber를 사용해 웹 플랫폼으로 재구축하여, 헤드셋 없이도 경험할 수 있게 했습니다. 커스텀 조명 시스템, useFrame을 활용한 작품 텍스처 애니메이션, 그리고 작품이 방의 모든 면을 감싸는 몰입형 프로젝션 모드를 구현했습니다. 반 고흐 전시 경험에서 영감을 받았어요.',
      },
    ],
    journeyHeading: '창업 여정',
    journey:
      '2022년 델라웨어 C-Corp으로 법인을 설립했습니다. 아시아·유럽·북미에서 100회 이상의 고객 인터뷰를 진행했습니다. CREATE-X 데모데이에서 발표했고, 그 자리에서 조지아텍 총장 Angel Cabrera가 제품을 직접 사용해 봤습니다. 이 프로젝트로 Presidential Undergraduate Research Award를 받았습니다.',
    footer: '← 포트폴리오로 돌아가기',
  },
}

export default function InterOcciCaseStudy() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#projects" className="cs-back-link">{t.back}</Link>
          <h1 className="cs-title">InterOcci</h1>
          <p className="cs-subtitle">{t.subtitle}</p>
          <div className="cs-header-actions">
            <a
              href="https://interocci.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--primary"
            >
              {t.demo}
            </a>
            <a
              href="https://github.com/rubychoux/interocci"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-btn cs-btn--secondary"
            >
              {t.github}
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
          <h2 className="cs-section-heading">{t.originHeading}</h2>
          <p className="cs-prose">{t.origin}</p>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.productHeading}</h2>
          <div className="cs-screenshots">
            <figure className="cs-screenshot-figure">
              <img src={interocciWeb} alt="InterOcci web platform" className="screenshot-img" />
              <figcaption>{t.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.techHeading}</h2>
          <div className="cs-arch-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {t.tech.map((card, i) => (
              <div key={i} className="cs-arch-card">
                <span className="cs-arch-icon">{i === 0 ? '◈' : '⬡'}</span>
                <h3>{card.h}</h3>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-section-heading">{t.journeyHeading}</h2>
          <p className="cs-prose">{t.journey}</p>
        </section>

        <footer className="cs-footer">
          <Link to="/" className="cs-back-link">{t.footer}</Link>
        </footer>
      </div>
    </div>
  )
}
