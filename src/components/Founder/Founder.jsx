import './Founder.css'
import pitchPhoto from '../../assets/pitch.jpg'
import demodayPhoto from '../../assets/demoday.jpg'
import { useLang } from '../../i18n/LanguageContext'

const T = {
  en: {
    label: 'Founder Journey',
    title: 'Building before I knew how to build.',
    intro: [
      'I started InterOcci in my sophomore year at Georgia Tech, before I had a CS degree, before I knew how to ship production software. What I had was a clear problem I cared about, the stubbornness to figure it out, and the conviction that art and technology didn\'t have to live in separate worlds.',
      'That first company taught me how to run user interviews and pitch a vision. Then I taught myself to build, and now I design, ship, and operate Caramel Lab entirely on my own, from the AI pipelines to the payments. I went from a founder with an idea to a founder who can build the whole thing.',
    ],
    pitchCaption: 'Founder pitch at Ygnite Conference, San Jose, January 2023',
    demodayCaption:
      'Georgia Tech President Angel Cabrera experiencing InterOcci at CREATE-X Demo Day, 2022',
    milestones: [
      { year: '2022', desc: 'Founded InterOcci Inc. as a Delaware C-Corp' },
      { year: '2026', desc: 'Founded Caramel Lab, an AI SaaS for STEM students (March 2026)' },
      { year: '2026', desc: 'Shipped Caramel Lab to production with paying subscribers' },
    ],
  },
  ko: {
    label: '창업 여정',
    title: '어떻게 만드는지 알기도 전에, 만들기 시작했다.',
    intro: [
      '조지아텍 2학년 때 InterOcci를 시작했습니다. CS 학위도 없었고, 프로덕션 소프트웨어를 어떻게 출시하는지도 몰랐죠. 제가 가진 것은 진심으로 신경 쓰는 명확한 문제, 끝까지 파고드는 고집, 그리고 예술과 기술이 따로 떨어져 있을 필요가 없다는 확신이었습니다.',
      '그 첫 회사에서 사용자 인터뷰를 진행하고 비전을 피칭하는 법을 배웠습니다. 그다음엔 스스로 만드는 법을 익혔고, 이제는 AI 파이프라인부터 결제까지 카라멜랩을 온전히 혼자 설계하고 출시하고 운영합니다. 아이디어만 있던 창업가에서, 전부를 직접 만들 수 있는 창업가가 되었습니다.',
    ],
    pitchCaption: 'Ygnite 컨퍼런스 창업 피칭, 미국 산호세, 2023년 1월',
    demodayCaption:
      'CREATE-X 데모데이에서 InterOcci를 체험하는 조지아텍 총장 Angel Cabrera, 2022년',
    milestones: [
      { year: '2022', desc: 'InterOcci Inc.를 델라웨어 C-Corp으로 설립' },
      { year: '2026', desc: 'STEM 학생을 위한 AI SaaS, 카라멜랩 창업 (2026년 3월)' },
      { year: '2026', desc: '카라멜랩을 프로덕션에 출시, 유료 구독자 확보' },
    ],
  },
}

export default function Founder() {
  const { lang } = useLang()
  const t = T[lang]

  return (
    <section className="founder" id="founder">
      <div className="founder-inner container">
        <p className="section-label">{t.label}</p>

        <h2 className="founder-title">{t.title}</h2>

        {t.intro.map((para, i) => (
          <p key={i} className="founder-intro">{para}</p>
        ))}

        <div className="founder-photos">
          <figure className="founder-photo-figure">
            <img
              src={pitchPhoto}
              alt="Founder pitch at Ygnite Conference"
              className="founder-photo"
            />
            <figcaption>{t.pitchCaption}</figcaption>
          </figure>
          <figure className="founder-photo-figure">
            <img
              src={demodayPhoto}
              alt="InterOcci Demo Day"
              className="founder-photo"
            />
            <figcaption>{t.demodayCaption}</figcaption>
          </figure>
        </div>

        <div className="founder-timeline">
          {t.milestones.map(({ year, desc }, i) => (
            <div key={i} className="founder-milestone">
              <p className="founder-milestone-year">{year}</p>
              <p className="founder-milestone-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
