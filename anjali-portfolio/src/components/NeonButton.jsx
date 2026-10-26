import { ArrowRight } from 'lucide-react'
export default function NeonButton({ href, onClick, children, variant = 'primary', icon, external, className = '', ...rest }) {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition min-h-[44px]'
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-neon to-lav text-midnight shadow-pink hover:shadow-[0_0_32px_rgba(255,45,149,.7)] hover:-translate-y-0.5'
    : 'border border-cyan/60 bg-navy/60 text-white hover:shadow-cyan hover:border-cyan'
  const content = <>{children}{icon ?? <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden="true" />}</>
  const cls = `${base} ${styles} ${className}`
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return <a href={href} className={cls} {...ext} {...rest}>{content}</a>
  }
  return <button type="button" onClick={onClick} className={cls} {...rest}>{content}</button>
}
