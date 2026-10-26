import { useState } from 'react'
// Decorative only: aria-hidden, no pointer events. Falls back to a glyph if the PNG isn't there.
export default function FloatingSticker({ src, glyph = '✦', className = '', size = 80, rotate = 0, delay = 0 }) {
  const [failed, setFailed] = useState(false)
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute float select-none ${className}`}
      style={{ width: size, '--r': `${rotate}deg`, animationDelay: `${delay}s` }}>
      {failed
        ? <span className="block text-center text-neon drop-shadow-[0_0_12px_#FF2D95]" style={{ fontSize: size * 0.7, lineHeight: 1 }}>{glyph}</span>
        : <img src={src} alt="" width={size} loading="lazy" onError={() => setFailed(true)} className="w-full h-auto drop-shadow-[0_0_14px_rgba(255,45,149,.5)]" />}
    </div>
  )
}
