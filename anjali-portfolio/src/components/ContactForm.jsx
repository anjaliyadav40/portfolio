import { useState } from 'react'
import { Send } from 'lucide-react'
import { supabase, supabaseReady } from '../lib/supabase'
import { site } from '../data/site'

const empty = { name: '', email: '', subject: '', message: '', website: '' } // `website` = honeypot
function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  if (v.message.length > 2000) e.message = 'Keep the message under 2000 characters.'
  return e
}
export default function ContactForm() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', msg: '' })
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  async function submit(ev) {
    ev.preventDefault()
    const errs = validate(v); setErrors(errs)
    if (Object.keys(errs).length) return
    if (!supabaseReady) { setStatus({ state: 'error', msg: `The contact form isn't connected yet. Please email ${site.email} directly.` }); return }
    setStatus({ state: 'loading', msg: '' })
    const { error } = await supabase.rpc('submit_contact', { p_name: v.name, p_email: v.email, p_subject: v.subject, p_message: v.message, p_website: v.website })
    if (error) {
      const limited = /rate/i.test(error.message)
      setStatus({ state: 'error', msg: limited ? 'Too many messages from this address. Please try again later or email me directly.' : `Message not sent. Please try again or email ${site.email}.` })
    } else { setStatus({ state: 'success', msg: 'Message sent. Thank you, I will reply soon.' }); setV(empty) }
  }
  const field = 'w-full rounded-lg border border-white/15 bg-midnight/70 px-3 py-2.5 text-white placeholder:text-muted/70 focus:border-cyan'
  const F = ({ k, label, type = 'text', area }) => (
    <div>
      <label htmlFor={`f-${k}`} className="mb-1 block text-sm text-blush">{label}</label>
      {area ? <textarea id={`f-${k}`} rows={5} value={v[k]} onChange={set(k)} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} />
            : <input id={`f-${k}`} type={type} value={v[k]} onChange={set(k)} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} />}
      {errors[k] && <p id={`e-${k}`} className="mt-1 text-sm text-neon">{errors[k]}</p>}
    </div>
  )
  return (
    <form onSubmit={submit} noValidate className="glass glass-cyan space-y-4 p-6">
      {!supabaseReady && <p className="rounded-lg border border-lav/40 bg-lav/10 p-3 text-sm">Form delivery isn't configured on this deployment. Email me at <a className="text-cyan underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>}
      <F k="name" label="Name" /><F k="email" label="Email" type="email" /><F k="subject" label="Subject" /><F k="message" label="Message" area />
      <div className="absolute -left-[9999px]" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} /></label></div>
      <button disabled={status.state === 'loading'} className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-neon to-lav px-6 font-semibold text-midnight shadow-pink disabled:opacity-60">
        {status.state === 'loading' ? 'Sending…' : 'Send message'} <Send size={16} aria-hidden="true" />
      </button>
      <p role="status" aria-live="polite" className={`text-sm ${status.state === 'success' ? 'text-cyan' : 'text-neon'}`}>{status.msg}</p>
    </form>
  )
}
