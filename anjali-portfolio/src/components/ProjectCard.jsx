import { Link } from 'react-router-dom'
import { Github, ArrowUpRight } from 'lucide-react'
import Img from './Img'
export default function ProjectCard({ p }) {
  return (
    <article className="glass group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-neon hover:shadow-pink">
      <div className="aspect-video overflow-hidden">
        <Img src={p.image} alt={`${p.title} project screenshot`} label="Screenshot not added yet" width="640" height="360"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-bold">{p.title}</h3>
        <p className="text-sm text-muted">{p.description}</p>
        {p.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">{p.tags.map((t) => <li key={t} className="rounded-full border border-cyan/30 px-2 py-0.5 text-xs text-cyan">{t}</li>)}</ul>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1 text-sm text-white hover:text-neon"><Github size={16} aria-hidden="true" /> GitHub</a>}
          {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1 text-sm hover:text-neon">Live demo <ArrowUpRight size={14} aria-hidden="true" /></a>}
          <Link to={`/projects/${p.slug}`} className="ml-auto inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-neon">View details <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  )
}
