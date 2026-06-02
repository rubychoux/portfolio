import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Writing.css'
import { POSTS } from '../../content/posts'
import { QUOTES } from '../../content/quotes'
import { useLang } from '../../i18n/LanguageContext'

const UI = {
  en: {
    label: 'Writing',
    title: 'Words & Ideas',
    tabs: { blog: 'Blog', books: 'Books', quotes: 'Quotes' },
    read: 'Read →',
    readTime: 'min read',
    noBlog: 'No posts yet, coming soon.',
    noBooks: 'No reviews yet, coming soon.',
    viewAll: 'View all quotes →',
  },
  ko: {
    label: '글',
    title: '글과 생각',
    tabs: { blog: '블로그', books: '독후감', quotes: '인용구' },
    read: '읽기 →',
    readTime: '분 분량',
    noBlog: '아직 글이 없어요. 곧 올라옵니다.',
    noBooks: '아직 독후감이 없어요. 곧 올라옵니다.',
    viewAll: '인용구 전체 보기 →',
  },
}

function formatDate(date, lang) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function PostCard({ post, lang, ui }) {
  return (
    <Link to={`/writing/${post.slug}`} className="writing-card">
      <div className="writing-card-meta">
        <span>{formatDate(post.date, lang)}</span>
        <span>{post.readingTime} {ui.readTime}</span>
      </div>
      <h3 className="writing-card-title">{post.title}</h3>
      {post.category === 'book' && post.bookAuthor && (
        <p className="writing-card-author">
          {post.bookAuthor}
          {post.rating ? ` · ${'★'.repeat(post.rating)}` : ''}
        </p>
      )}
      <p className="writing-card-excerpt">{post.excerpt}</p>
      <span className="writing-card-hint">{ui.read}</span>
    </Link>
  )
}

function QuoteCard({ quote }) {
  return (
    <blockquote className="quote-card">
      <p className="quote-text">“{quote.text}”</p>
      <footer className="quote-attr">
        {quote.author}
        {quote.source && <span className="quote-source">, {quote.source}</span>}
      </footer>
    </blockquote>
  )
}

export default function Writing() {
  const { lang } = useLang()
  const ui = UI[lang]
  const [tab, setTab] = useState('blog')

  const blogPosts = POSTS.filter((p) => p.category === 'blog')
  const bookPosts = POSTS.filter((p) => p.category === 'book')

  const TABS = [
    { key: 'blog', label: ui.tabs.blog },
    { key: 'books', label: ui.tabs.books },
    { key: 'quotes', label: ui.tabs.quotes },
  ]

  return (
    <section className="writing" id="writing">
      <div className="writing-inner container">
        <p className="section-label">{ui.label}</p>
        <h2 className="section-title">{ui.title}</h2>

        <div className="writing-tabs" role="tablist">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              className={`writing-tab${tab === key ? ' active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'blog' && (
          <div className="writing-grid">
            {blogPosts.length ? (
              blogPosts.map((post) => <PostCard key={post.slug} post={post} lang={lang} ui={ui} />)
            ) : (
              <p className="writing-empty">{ui.noBlog}</p>
            )}
          </div>
        )}

        {tab === 'books' && (
          <div className="writing-grid">
            {bookPosts.length ? (
              bookPosts.map((post) => <PostCard key={post.slug} post={post} lang={lang} ui={ui} />)
            ) : (
              <p className="writing-empty">{ui.noBooks}</p>
            )}
          </div>
        )}

        {tab === 'quotes' && (
          <>
            <div className="quotes-grid">
              {QUOTES.slice(0, 4).map((quote, i) => (
                <QuoteCard key={i} quote={quote} />
              ))}
            </div>
            {QUOTES.length > 4 && (
              <Link to="/quotes" className="writing-viewall">
                {ui.viewAll}
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  )
}
