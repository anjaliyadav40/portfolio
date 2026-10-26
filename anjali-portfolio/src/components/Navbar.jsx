import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Star } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'

const ids = site.nav.map(([id]) => id)
export default function Navbar({ onHome }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  const link = (id) => `/#${id}`
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'bg-midnight/85 backdrop-blur border-neon/30' : 'border-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-hand text-3xl text-white" aria-label="Anjali, home">
          <Star className="text-neon fill-neon" size={18} aria-hidden="true" /> Anjali
        </Link>
        <ul className="hidden lg:flex items-center gap-1 rounded-full border border-cyan/30 bg-navy/70 px-2 py-1">
          {site.nav.map(([id, label]) => (
            <li key={id}>
              <Link to={link(id)} aria-current={onHome && active === id ? 'true' : undefined}
                className={`block rounded-full px-4 py-1.5 text-sm transition ${onHome && active === id ? 'bg-neon/20 text-white ring-1 ring-neon' : 'text-muted hover:text-white'}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to="/#contact" className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-neon to-lav px-4 py-2 text-sm font-semibold text-midnight shadow-pink">Let's Connect →</Link>
          <button className="lg:hidden min-h-[44px] min-w-[44px] grid place-items-center text-white" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-neon/30 bg-midnight/95 px-4">
            {site.nav.map(([id, label]) => (
              <li key={id}><Link to={link(id)} onClick={() => setOpen(false)} className="block py-3 text-lg text-white border-b border-white/5">{label}</Link></li>
            ))}
            <li className="py-3"><Link to="/#contact" onClick={() => setOpen(false)} className="text-neon font-semibold">Let's Connect →</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
