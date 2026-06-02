import { useState } from 'react'
import './Creator.css'
import { useLang } from '../../i18n/LanguageContext'

// Drop photos into these folders and they fill the matching tab automatically:
//   src/assets/creator/modeling/   and   src/assets/creator/art/
const modelingModules = import.meta.glob(
  '../../assets/creator/modeling/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
)
const artModules = import.meta.glob(
  '../../assets/creator/art/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
)
const MODELING = Object.values(modelingModules)
const ART = Object.values(artModules)

const T = {
  en: {
    label: 'Creator',
    title: 'My creative side',
    intro:
      "Outside the codebase, I'm a beauty model, an influencer, and an artist. I share the building, the founder life, and the creative work with a community of 50K+ on Instagram. It's the same instinct that drives my products: make something people feel.",
    igCta: 'Follow on Instagram (50K+)',
    tabs: { modeling: 'Modeling', art: 'Artwork' },
    note: 'More on Instagram.',
    placeholder: 'Photo coming soon',
  },
  ko: {
    label: '크리에이터',
    title: '나의 창작',
    intro:
      '코드 밖에서 저는 뷰티 모델이자 인플루언서, 그리고 아티스트입니다. 만드는 과정과 창업가의 삶, 그리고 창작 작업을 인스타그램 5만+ 커뮤니티와 나눕니다. 제품을 만드는 것과 같은 본능이에요. 사람들이 느끼는 무언가를 만드는 것.',
    igCta: '인스타그램에서 팔로우 (5만+)',
    tabs: { modeling: '모델링', art: '작품' },
    note: '더 많은 건 인스타그램에서.',
    placeholder: '사진 준비 중',
  },
}

const PLACEHOLDER_COUNT = 6

function Gallery({ photos, placeholder }) {
  return (
    <div className="creator-gallery">
      {photos.length
        ? photos.map((src, i) => (
            <div key={i} className="creator-tile">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))
        : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div key={i} className="creator-tile creator-tile--placeholder">
              <span>{placeholder}</span>
            </div>
          ))}
    </div>
  )
}

export default function Creator() {
  const { lang } = useLang()
  const t = T[lang]
  const [tab, setTab] = useState('modeling')

  const TABS = [
    { key: 'modeling', label: t.tabs.modeling },
    { key: 'art', label: t.tabs.art },
  ]

  return (
    <section className="creator" id="creator">
      <div className="creator-inner container">
        <p className="section-label">{t.label}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="creator-intro">{t.intro}</p>

        <a
          href="https://instagram.com/rubychoux"
          target="_blank"
          rel="noopener noreferrer"
          className="creator-ig"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          {t.igCta}
        </a>

        <div className="creator-tabs" role="tablist">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              className={`creator-tab${tab === key ? ' active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'modeling' && <Gallery photos={MODELING} placeholder={t.placeholder} />}
        {tab === 'art' && <Gallery photos={ART} placeholder={t.placeholder} />}

        <p className="creator-gallery-note">{t.note}</p>
      </div>
    </section>
  )
}
