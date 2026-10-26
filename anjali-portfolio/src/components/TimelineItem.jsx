import { ExternalLink } from 'lucide-react'
const badge = { hackathon: ['Hackathon', 'text-neon border-neon/50'], project: ['Project', 'text-cyan border-cyan/50'], training: ['Training', 'text-lav border-lav/50'], certification: ['Certification', 'text-blush border-blush/50'], award: ['Verified award', 'text-yellow-300 border-yellow-300/50'] }
export default function TimelineItem({ e }) {
  const [label, cls] = badge[e.category] || badge.project
  return (
    <li className="relative pl-8 pb-8 last:pb-0">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-neon shadow-pink" aria-hidden="true" />
      <span className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-neon to-cyan/20" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-lg font-bold">{e.title}</h3>
        <span className={`rounded-full border px-2 py-0.5 text-xs ${cls}`}>{label}</span>
        {e.date && <span className="ml-auto font-mono text-xs text-muted">{e.date}</span>}
      </div>
      <p className="mt-1 text-sm text-muted">{e.text}</p>
      {e.proof && <a href={e.proof} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-cyan hover:underline">View proof <ExternalLink size={13} aria-hidden="true" /></a>}
    </li>
  )
}
