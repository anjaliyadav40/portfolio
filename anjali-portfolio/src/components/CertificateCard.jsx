import { Award } from 'lucide-react'
export default function CertificateCard({ c, onView }) {
  return (
    <article className="glass flex flex-col gap-3 p-4 transition hover:-translate-y-1 hover:border-neon hover:shadow-pink">
      <div className="grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-lav/40 bg-midnight/60 text-center text-xs text-muted">
        <div><Award className="mx-auto mb-1 text-lav" aria-hidden="true" />{c.file ? 'Preview available' : 'File not added yet'}</div>
      </div>
      <h3 className="font-display font-bold leading-snug">{c.title}</h3>
      <p className="text-xs text-muted">{c.issuer || 'Issuer to be confirmed'}{c.date ? ` · ${c.date}` : ''}</p>
      <button onClick={() => onView(c)} className="mt-auto min-h-[44px] rounded-full border border-cyan/50 px-4 text-sm hover:shadow-cyan">View certificate</button>
    </article>
  )
}
