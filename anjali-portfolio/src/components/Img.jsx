import { useState } from 'react'
// Shows the real image when it exists; otherwise a clearly labelled placeholder.
export default function Img({ src, alt, label, className = '', ...rest }) {
  const [failed, setFailed] = useState(!src)
  if (failed) {
    return (
      <div role="img" aria-label={`${alt} (image not added yet)`}
        className={`flex flex-col items-center justify-center gap-1 bg-navy/80 text-center text-xs text-muted p-3 bg-grid ${className}`}>
        <span className="text-neon text-lg" aria-hidden="true">✦</span>
        <span>{label || 'Image slot'}</span>
        {src && <code className="font-mono text-[10px] break-all text-cyan">{src}</code>}
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} {...rest} />
}
