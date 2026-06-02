import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero'
import './Home.css'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'About me',
    blurb:
      "I'm a Georgia Tech CS grad, entrepreneur, engineer, and creator. I build AI products end to end: Caramel Lab hit 10,000 users in two months, and Meve is coming soon. Before that I founded InterOcci, a VR art platform. I also share the journey with 50K+ on Instagram.",
    more: 'More about me →',
  },
  ko: {
    label: '소개',
    blurb:
      '조지아텍 CS를 졸업한 창업가이자 엔지니어, 크리에이터입니다. AI 제품을 처음부터 끝까지 직접 만듭니다. 카라멜랩은 런칭 두 달 만에 유저 1만 명을 달성했고, Meve도 곧 출시합니다. 그 전에는 VR 아트 플랫폼 InterOcci를 창업했어요. 그 여정은 인스타그램 5만+ 팔로워와 나누고 있습니다.',
    more: '더 알아보기 →',
  },
}

export default function Home() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <>
      <Hero />
      <section className="home-about">
        <div className="home-about-inner container">
          <p className="section-label">{t.label}</p>
          <p className="home-about-blurb">{t.blurb}</p>
          <Link to="/about" className="home-about-link">{t.more}</Link>
        </div>
      </section>
    </>
  )
}
