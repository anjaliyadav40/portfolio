import { useState, useEffect } from 'react'
import NeonButton from '../components/NeonButton'
import SectionHeading from '../components/SectionHeading'
import Img from '../components/Img'
import FloatingSticker from '../components/FloatingSticker'
import { site } from '../data/site'

export default function About() {
  const [open, setOpen] = useState(false)
  useEffect(() => { if (!open) return; const k = (e) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [open])
  return (
    <section id="about" aria-labelledby="about-h" className="relative bg-navy/60 px-4 py-24">
      <FloatingSticker src="/assets/stickers/butterfly.png" glyph="🦋" size={80} rotate={8} className="right-6 top-10 hidden md:block" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="about-h" note="Curious mind. Creative hands. Bigger dreams.">A LITTLE ABOUT ME ♡</SectionHeading>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <figure className="relative mx-auto max-w-sm -rotate-2 transition hover:rotate-0">
            <span className="tape -top-3 left-6" aria-hidden="true" />
            <div className="rounded-lg border-4 border-neon bg-white p-3 pb-12 shadow-pink">
              <Img src="/assets/portraits/about-me.png" alt="Illustration of a girl working at a computer" label="Add about-me.png" width="400" height="400" className="aspect-square w-full object-cover" />
            </div>
            <figcaption className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-midnight">Same girl, bigger dreams ♡</figcaption>
          </figure>
          <div>
            <h3 className="font-display text-3xl font-bold">Hi, I'm Anjali!</h3>
            <p className="mt-4 text-muted leading-relaxed max-w-prose">{site.about}</p>
            <p className="mt-4 font-hand text-3xl text-neon">Curious mind. Creative hands. Bigger dreams.</p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.facts.map(([k, v]) => <div key={k} className="glass glass-cyan p-3"><dt className="text-xs text-cyan">{k}</dt><dd className="text-sm">{v}</dd></div>)}
            </dl>
            <div className="mt-6"><NeonButton onClick={() => setOpen(true)} aria-haspopup="dialog">More About Me</NeonButton></div>
          </div>
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="about-modal" className="fixed inset-0 z-[60] grid place-items-center bg-midnight/80 p-4" onClick={() => setOpen(false)}>
          <div className="glass max-h-[85vh] w-full max-w-lg overflow-auto p-6" onClick={(e) => e.stopPropagation()}>
            <h3 id="about-modal" className="font-display text-2xl font-bold">More about me</h3>
            <p className="mt-3 text-muted">I want to build meaningful technology, grow into an independent professional, and pursue opportunities internationally, including postgraduate study in Austria. I'm aiming for roles such as Software Engineer, AI Engineer, Cloud Engineer or Full-Stack Developer.</p>
            <p className="mt-3 text-muted">I'm creative, ambitious, curious and determined, and I enjoy experimenting with technology and visual design.</p>
            <button autoFocus onClick={() => setOpen(false)} className="mt-5 min-h-[44px] rounded-full border border-cyan/60 px-5">Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
