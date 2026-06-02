import { Link } from 'react-router-dom'
import '../CaseStudy/CaseStudy.shared.css'
import './Writing.css'
import { QUOTES } from '../../content/quotes'
import { useLang } from '../../i18n/LanguageContext'

const UI = {
  en: { back: '← Back to writing', title: 'Quotes', subtitle: 'Lines I keep coming back to.' },
  ko: { back: '← 글 목록으로', title: '인용구', subtitle: '자꾸 다시 찾게 되는 문장들.' },
}

export default function QuotesPage() {
  const { lang } = useLang()
  const ui = UI[lang]

  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#writing" className="cs-back-link">{ui.back}</Link>
          <h1 className="cs-title">{ui.title}</h1>
          <p className="cs-subtitle">{ui.subtitle}</p>
        </div>
      </header>

      <div className="cs-body">
        <div className="quotes-grid">
          {QUOTES.map((quote, i) => (
            <blockquote key={i} className="quote-card">
              <p className="quote-text">“{quote.text}”</p>
              <footer className="quote-attr">
                {quote.author}
                {quote.source && <span className="quote-source">, {quote.source}</span>}
              </footer>
            </blockquote>
          ))}
        </div>

        <footer className="cs-footer">
          <Link to="/#writing" className="cs-back-link">{ui.back}</Link>
        </footer>
      </div>
    </div>
  )
}
