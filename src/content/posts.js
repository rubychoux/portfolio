import fm from 'front-matter'

// Drop a .md file into ./blog or ./books and it shows up automatically — no code change.
const blogFiles = import.meta.glob('./blog/*.md', { eager: true, query: '?raw', import: 'default' })
const bookFiles = import.meta.glob('./books/*.md', { eager: true, query: '?raw', import: 'default' })

function parse(files, fallbackCategory) {
  return Object.entries(files).map(([path, raw]) => {
    const { attributes, body } = fm(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const words = body.trim().split(/\s+/).filter(Boolean).length
    return {
      ...attributes,
      category: attributes.category || fallbackCategory,
      slug,
      body,
      readingTime: Math.max(1, Math.round(words / 200)),
    }
  })
}

export const POSTS = [...parse(blogFiles, 'blog'), ...parse(bookFiles, 'book')].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
)

export const getPost = (slug) => POSTS.find((p) => p.slug === slug)
