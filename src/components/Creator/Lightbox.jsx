import { useState, useEffect, useCallback } from 'react'
import './Lightbox.css'

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [i, setI] = useState(startIndex)
  const multi = images.length > 1

  const prev = useCallback(
    () => setI((n) => (n - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(() => setI((n) => (n + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      {multi && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img src={images[i]} alt="" className="lightbox-img" />

        {multi && (
          <div className="lightbox-meta">
            <span className="lightbox-counter">
              {i + 1} / {images.length}
            </span>
            <div className="lightbox-thumbs">
              {images.map((src, n) => (
                <button
                  key={n}
                  className={`lightbox-thumb${n === i ? ' active' : ''}`}
                  onClick={() => setI(n)}
                  aria-label={`Image ${n + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {multi && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>
  )
}
