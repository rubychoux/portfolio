import { Link } from 'react-router-dom'
import './Hero.css'
import profilePhoto from '../../assets/profile.jpg'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    headline: ['Entrepreneur.', 'Engineer.', 'Creator.'],
    subtext:
      'Georgia Tech CS grad and serial entrepreneur building AI products end to end. Caramel Lab is live with paying users, Meve is coming soon, and I share the journey with 50K+ on Instagram. Previously founded InterOcci, a VR art platform.',
    storyBtn: 'My Founder Story',
    buildBtn: "What I'm Building",
  },
  ko: {
    headline: ['창업가.', '엔지니어.', '크리에이터.'],
    subtext:
      '조지아텍 CS 졸업, AI 제품을 처음부터 끝까지 직접 만드는 창업가입니다. 카라멜랩은 유료 사용자와 함께 운영 중이고, Meve도 곧 출시합니다. 그 여정을 인스타그램 5만+ 팔로워와 나누고 있어요. 이전에는 VR 아트 플랫폼 InterOcci를 창업했습니다.',
    storyBtn: '창업 스토리',
    buildBtn: '내가 만드는 것',
  },
}

export default function Hero() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-eyebrow">Ruby Choux Kim</p>

          <h1 className="hero-headline">
            {t.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className="hero-subtext">{t.subtext}</p>

          <div className="hero-ctas">
            <Link to="/founder" className="btn btn-primary">
              {t.storyBtn}
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              {t.buildBtn}
            </Link>
          </div>
        </div>

        <div className="hero-photo-col">
          <img src={profilePhoto} alt="Ruby Choux Kim" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
