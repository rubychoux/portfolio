import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../CaseStudy/CaseStudy.shared.css'
import './WritingPost.css'
import { getPost } from '../../content/posts'

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WritingPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className="case-study">
        <div className="cs-body">
          <h1 className="cs-title">Post not found</h1>
          <p className="cs-prose">This piece doesn't exist (or was moved).</p>
          <footer className="cs-footer">
            <Link to="/#writing" className="cs-back-link">← Back to writing</Link>
          </footer>
        </div>
      </div>
    )
  }

  const subtitleParts = [formatDate(post.date), `${post.readingTime} min read`]
  if (post.category === 'book' && post.bookAuthor) {
    subtitleParts.unshift(post.bookAuthor)
  }

  return (
    <div className="case-study">
      <header className="cs-header">
        <div className="cs-header-inner">
          <Link to="/#writing" className="cs-back-link">← Back to writing</Link>
          <h1 className="cs-title">{post.title}</h1>
          <p className="cs-subtitle">{subtitleParts.filter(Boolean).join(' · ')}</p>
        </div>
      </header>

      <div className="cs-body">
        <div className="post-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        <footer className="cs-footer">
          <Link to="/#writing" className="cs-back-link">← Back to writing</Link>
        </footer>
      </div>
    </div>
  )
}
