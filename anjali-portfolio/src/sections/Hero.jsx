import { ArrowDown } from 'lucide-react'
import NeonButton from '../components/NeonButton'
import FloatingSticker from '../components/FloatingSticker'
import Img from '../components/Img'
import { site } from '../data/site'

function Win({ title, items }) {
  return (
    <div className="glass glass-cyan w-full max-w-[240px] overflow-hidden">
      <div className="flex items-center justify-between border-b border-cyan/30 px-3 py-1.5 font-mono text-xs text-cyan"><span>{title} ✦</span><span aria-hidden="true">▢</span></div>
      <ul className="space-y-1 p-3 text-sm">{items.map((i) => <li key={i}><span className="text-neon" aria-hidden="true">✦ </span>{i}</li>)}</ul>
    </div>
  )
}
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-grid noise pt-24 pb-16 min-h-[100svh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[url('/assets/backgrounds/hero-city.png')] bg-cover bg-center opacity-25" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/60 via-midnight/70 to-midnight" aria-hidden="true" />
      <FloatingSticker src="/assets/stickers/butterfly.png" glyph="🦋" size={70} rotate={-12} className="left-[44%] top-28 hidden md:block" />
      <FloatingSticker src="/assets/stickers/holographic-cd.png" glyph="◎" size={90} className="bottom-6 left-[38%] hidden lg:block" delay={1} />
      <FloatingSticker src="/assets/stickers/chrome-star.png" glyph="★" size={80} rotate={10} className="bottom-4 right-[30%] hidden lg:block" delay={2} />
      <FloatingSticker src="/assets/stickers/retro-computer.png" glyph="▣" size={130} rotate={4} className="bottom-8 right-4 hidden xl:block" delay={.5} />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_1fr_.7fr]">
        <div className="rise">
          <p className="font-hand text-3xl text-white">Anjali</p>
          <h1 id="hero-title" className="name-text text-[22vw] sm:text-8xl xl:text-9xl"><span className="block">ANJALI</span><span className="block">YADAV</span></h1>
          <p className="mt-4 font-hand text-2xl text-neon">BCA Student · Developer · Dreamer</p>
          <p className="mt-3 max-w-md text-muted">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <NeonButton href="#projects">View My Work</NeonButton>
            <NeonButton href="/assets/resume.pdf" download="Anjali_Yadav_Resume.pdf" variant="secondary" icon={<ArrowDown size={16} aria-hidden="true" />}>Download Resume</NeonButton>
          </div>
          <p className="mt-5 text-neon tracking-[.5em]" aria-hidden="true">★★★★★</p>
        </div>
        <div className="relative mx-auto w-full max-w-sm rise" style={{ animationDelay: '.15s' }}>
          <div className="rotate-[3deg] rounded-2xl border-[6px] border-white bg-white p-0 shadow-[0_0_0_2px_#42D9FF,0_20px_50px_rgba(255,45,149,.45)]">
            <Img src="/assets/portraits/hero-portrait.png" alt="Illustration of a girl working at a computer in a dark, neon-lit room" label="Add hero-portrait.png" width="480" height="600" className="aspect-[4/5] w-full rounded-lg object-cover" />
          </div>
          <p className="absolute -top-6 left-0 font-hand text-2xl text-blush -rotate-6">{site.headline}</p>
          <p className="absolute -bottom-8 right-0 font-hand text-xl text-cyan rotate-3">Good code, brighter future</p>
        </div>
        <div className="flex flex-row flex-wrap gap-4 lg:flex-col lg:items-end">
          <Win title="Currently" items={site.currently} />
          <Win title="Goals" items={site.goals} />
        </div>
      </div>
    </section>
  )
}
