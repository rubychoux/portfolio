import { Link } from 'react-router-dom'
import '../CaseStudy/CaseStudy.shared.css'
import './Writing.css'
import { QUOTES } from '../../content/quotes'

export default function QuotesPage() {
  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#writing" className="cs-back-link">← Back to writing</Link>
          <h1 className="cs-title">Quotes</h1>
          <p className="cs-subtitle">Lines I keep coming back to.</p>
        </div>
      </header>

      <div className="cs-body">
        <div className="quotes-grid">
          {QUOTES.map((quote, i) => (
            <blockquote key={i} className="quote-card">
              <p className="quote-text">“{quote.text}”</p>
              <footer className="quote-attr">
                — {quote.author}
                {quote.source && <span className="quote-source">, {quote.source}</span>}
              </footer>
            </blockquote>
          ))}
        </div>

        <footer className="cs-footer">
          <Link to="/#writing" className="cs-back-link">← Back to writing</Link>
        </footer>
      </div>
    </div>
  )
}
