import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { site } from '../data/site'
export default function Footer() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <footer className="relative border-t border-neon/30 bg-navy/80 px-4 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-hand text-4xl text-white">{site.name} <span className="text-neon" aria-hidden="true">✦</span></p>
          <p className="font-hand text-xl text-blush">{site.headline}</p>
          <p className="mt-3 text-sm text-muted">Made with curiosity, creativity &amp; a little neon magic.</p>
          <p className="text-xs text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href={site.github} {...ext} className="grid h-11 w-11 place-items-center rounded-full border border-cyan/40 hover:shadow-cyan"><Github size={18} /></a>
          <a aria-label="LinkedIn" href={site.linkedin} {...ext} className="grid h-11 w-11 place-items-center rounded-full border border-cyan/40 hover:shadow-cyan"><Linkedin size={18} /></a>
          <a aria-label="Email" href={`mailto:${site.email}`} className="grid h-11 w-11 place-items-center rounded-full border border-cyan/40 hover:shadow-cyan"><Mail size={18} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-neon/60 px-4 text-sm hover:shadow-pink">Back to top <ArrowUp size={16} aria-hidden="true" /></button>
        </div>
      </div>
    </footer>
  )
}
