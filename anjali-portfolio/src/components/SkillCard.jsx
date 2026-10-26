export default function SkillCard({ category, items }) {
  return (
    <div className="glass glass-cyan p-5 transition hover:-translate-y-1 hover:border-cyan hover:shadow-cyan">
      <h3 className="font-display text-lg font-bold text-neon">{category}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => <li key={s} className="rounded-lg border border-white/10 bg-midnight/60 px-3 py-1.5 text-sm transition hover:border-neon hover:text-blush">{s}</li>)}
      </ul>
    </div>
  )
}
