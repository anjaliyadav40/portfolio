import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Github, ArrowLeft } from 'lucide-react'
import Img from '../components/Img'
import { projects } from '../data/projects'
import NotFound from './NotFound'

const Empty = ({ children }) => <p className="rounded-lg border border-dashed border-lav/40 p-4 text-sm text-muted">{children}</p>
export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  useEffect(() => { window.scrollTo(0, 0); if (p) document.title = `${p.title} — Anjali Yadav` }, [p])
  if (!p) return <NotFound />
  return (
    <article className="bg-grid min-h-screen px-4 pb-24 pt-28">
      <div className="mx-auto max-w-4xl">
        <Link to="/#projects" className="inline-flex min-h-[44px] items-center gap-2 text-cyan"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{p.title}</h1>
        {p.full !== p.title && <p className="font-hand text-2xl text-blush">{p.full}</p>}
        <Img src={p.image} alt={`${p.title} screenshot`} label="Screenshot not added yet" width="1200" height="675" className="mt-6 aspect-video w-full rounded-2xl border border-neon/40 object-cover" />
        <p className="mt-6 text-lg text-muted">{p.description}</p>
        {p.tags.length > 0 && <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full border border-cyan/40 px-3 py-1 text-sm text-cyan">{t}</li>)}</ul>}
        <div className="mt-6 flex flex-wrap gap-3">
          {p.repo ? <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-neon to-lav px-5 font-semibold text-midnight"><Github size={16} aria-hidden="true" /> View repository</a> : <Empty>Repository link not added yet.</Empty>}
          {p.demo ? <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center rounded-full border border-cyan/60 px-5">Live demo</a> : <Empty>No live demo available.</Empty>}
        </div>
        {p.role && <section className="mt-10"><h2 className="font-display text-2xl font-bold">My role</h2><p className="mt-2 text-muted">{p.role}</p></section>}
        {p.details?.workflow && <section className="mt-10"><h2 className="font-display text-2xl font-bold">Project workflow</h2><ol className="mt-3 list-decimal space-y-1 pl-6 text-muted">{p.details.workflow.map((w) => <li key={w}>{w}</li>)}</ol></section>}
        <section className="mt-10"><h2 className="font-display text-2xl font-bold">Features, architecture and lessons learned</h2>
          <div className="mt-3"><Empty>Detailed write-up still to be added. It will cover implemented features, architecture and lessons learned once checked against the repository. Edit this project in <code className="text-cyan">src/data/projects.js</code>.</Empty></div></section>
      </div>
    </article>
  )
}
