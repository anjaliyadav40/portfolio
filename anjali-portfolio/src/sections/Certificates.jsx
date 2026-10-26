import { useState, useMemo, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CertificateCard from '../components/CertificateCard'
import { certificates, certCategories } from '../data/certificates'

export default function Certificates() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(null)
  const closeRef = useRef(null)
  const list = useMemo(() => certificates.filter((c) => (cat === 'All' || c.category === cat) && c.title.toLowerCase().includes(q.toLowerCase())), [cat, q])
  useEffect(() => {
    if (!sel) return
    closeRef.current?.focus()
    const k = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [sel])
  const isPdf = sel?.file?.toLowerCase().endsWith('.pdf')
  return (
    <section id="certificates" aria-labelledby="cert-h" className="bg-grid px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="cert-h" note="Keep learning. Keep growing.">CERTIFICATES &amp; LEARNING JOURNEY</SectionHeading>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div role="group" aria-label="Filter certificates" className="flex flex-wrap gap-2">
            {certCategories.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-[40px] rounded-full border px-4 text-sm ${cat === c ? 'border-neon bg-neon/20' : 'border-white/20 text-muted hover:text-white'}`}>{c}</button>)}
          </div>
          <label className="relative block md:w-64"><span className="sr-only">Search certificates</span>
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search certificates…" className="w-full rounded-full border border-white/15 bg-midnight/70 py-2.5 pl-9 pr-3 text-sm" />
          </label>
        </div>
        {list.length === 0 ? <p className="text-muted">No certificates match. Try another filter or search term.</p>
          : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map((c) => <CertificateCard key={c.id} c={c} onView={setSel} />)}</div>}
      </div>
      {sel && (
        <div role="dialog" aria-modal="true" aria-labelledby="cert-modal" className="fixed inset-0 z-[60] grid place-items-center bg-midnight/85 p-4" onClick={() => setSel(null)}>
          <div className="glass w-full max-w-2xl p-5" onClick={(e) => e.stopPropagation()}>
            <h3 id="cert-modal" className="font-display text-xl font-bold">{sel.title}</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
              {!sel.file ? <p className="p-8 text-center text-muted">The certificate file hasn't been added yet. Place it in <code className="text-cyan">public/assets/certificates/</code> and set <code className="text-cyan">file</code> in <code className="text-cyan">src/data/certificates.js</code>.</p>
                : isPdf ? <iframe title={`${sel.title} certificate`} src={sel.file} className="h-[60vh] w-full" />
                : <img src={sel.file} alt={`Certificate: ${sel.title}`} className="max-h-[60vh] w-full object-contain" />}
            </div>
            <button ref={closeRef} onClick={() => setSel(null)} className="mt-4 min-h-[44px] rounded-full border border-cyan/60 px-5">Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
