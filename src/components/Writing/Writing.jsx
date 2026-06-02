import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Writing.css'
import { POSTS } from '../../content/posts'
import { QUOTES } from '../../content/quotes'

const TABS = [
  { key: 'blog', label: 'Blog' },
  { key: 'books', label: 'Books' },
  { key: 'quotes', label: 'Quotes' },
]

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function PostCard({ post }) {
  return (
    <Link to={`/writing/${post.slug}`} className="writing-card">
      <div className="writing-card-meta">
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTime} min read</span>
      </div>
      <h3 className="writing-card-title">{post.title}</h3>
      {post.category === 'book' && post.bookAuthor && (
        <p className="writing-card-author">
          {post.bookAuthor}
          {post.rating ? ` · ${'★'.repeat(post.rating)}` : ''}
        </p>
      )}
      <p className="writing-card-excerpt">{post.excerpt}</p>
      <span className="writing-card-hint">Read →</span>
    </Link>
  )
}

function QuoteCard({ quote }) {
  return (
    <blockquote className="quote-card">
      <p className="quote-text">“{quote.text}”</p>
      <footer className="quote-attr">
        — {quote.author}
        {quote.source && <span className="quote-source">, {quote.source}</span>}
      </footer>
    </blockquote>
  )
}

export default function Writing() {
  const [tab, setTab] = useState('blog')

  const blogPosts = POSTS.filter((p) => p.category === 'blog')
  const bookPosts = POSTS.filter((p) => p.category === 'book')

  return (
    <section className="writing" id="writing">
      <div className="writing-inner container">
        <p className="section-label">Writing</p>
        <h2 className="section-title">Words &amp; Ideas</h2>

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
              blogPosts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <p className="writing-empty">No posts yet — coming soon.</p>
            )}
          </div>
        )}

        {tab === 'books' && (
          <div className="writing-grid">
            {bookPosts.length ? (
              bookPosts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <p className="writing-empty">No reviews yet — coming soon.</p>
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
                View all quotes →
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  )
}
