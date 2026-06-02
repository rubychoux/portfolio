import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../CaseStudy/CaseStudy.shared.css'
import './WritingPost.css'
import { getPost } from '../../content/posts'
import { useLang } from '../../i18n/LanguageContext'

const UI = {
  en: { back: '← Back to writing', readTime: 'min read', notFound: 'Post not found', notFoundDesc: "This piece doesn't exist (or was moved)." },
  ko: { back: '← 글 목록으로', readTime: '분 분량', notFound: '글을 찾을 수 없어요', notFoundDesc: '이 글은 존재하지 않거나 이동되었습니다.' },
}

function formatDate(date, lang) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WritingPost() {
  const { slug } = useParams()
  const { lang } = useLang()
  const ui = UI[lang]
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="case-study">
        <div className="cs-body">
          <h1 className="cs-title">{ui.notFound}</h1>
          <p className="cs-prose">{ui.notFoundDesc}</p>
          <footer className="cs-footer">
            <Link to="/#writing" className="cs-back-link">{ui.back}</Link>
          </footer>
        </div>
      </div>
    )
  }

  const subtitleParts = [formatDate(post.date, lang), `${post.readingTime} ${ui.readTime}`]
  if (post.category === 'book' && post.bookAuthor) {
    subtitleParts.unshift(post.bookAuthor)
  }

  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#writing" className="cs-back-link">{ui.back}</Link>
          <h1 className="cs-title">{post.title}</h1>
          <p className="cs-subtitle">{subtitleParts.filter(Boolean).join(' · ')}</p>
        </div>
      </header>

      <div className="cs-body">
        <div className="post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        <footer className="cs-footer">
          <Link to="/#writing" className="cs-back-link">{ui.back}</Link>
        </footer>
      </div>
    </div>
  )
}
