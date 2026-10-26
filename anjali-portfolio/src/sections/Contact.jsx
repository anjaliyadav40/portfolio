import { Github, Linkedin, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { site } from '../data/site'
export default function Contact() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' }
  const row = 'inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cyan/40 bg-navy/70 px-4 text-sm hover:shadow-cyan'
  return (
    <section id="contact" aria-labelledby="contact-h" className="relative isolate overflow-hidden px-4 py-24">
      <div className="absolute inset-0 -z-10 bg-[url('/assets/backgrounds/contact-city.png')] bg-cover bg-center" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight via-midnight/80 to-midnight/90" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <SectionHeading id="contact-h">LET'S CREATE SOMETHING AMAZING ♡</SectionHeading>
          <h3 className="font-display text-2xl font-bold">Have an idea? Let's build it.</h3>
          <p className="mt-3 max-w-md text-muted">I'm always interested in learning, collaborating on meaningful projects, and exploring new opportunities.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className={row} href={`mailto:${site.email}`}><Mail size={16} aria-hidden="true" /> {site.email}</a>
            <a className={row} href={site.linkedin} {...ext}><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
            <a className={row} href={site.github} {...ext}><Github size={16} aria-hidden="true" /> GitHub</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
