import SectionHeading from '../components/SectionHeading'
import NeonButton from '../components/NeonButton'
import { profiles } from '../data/profiles'
export default function CodingProfiles() {
  return (
    <section id="profiles" aria-labelledby="prof-h" className="bg-grid px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="prof-h">FIND ME ON THE INTERNET ♡</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {profiles.map((p) => (
            <article key={p.name} className="glass flex flex-col items-center gap-2 p-6 text-center transition hover:-translate-y-1 hover:border-cyan hover:shadow-cyan">
              <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-neon bg-midnight font-display text-xl font-bold text-neon" aria-hidden="true">{p.mark}</div>
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="font-mono text-sm text-cyan">{p.handle}</p>
              <p className="text-sm text-muted">{p.blurb}</p>
              <NeonButton href={p.url} external variant="secondary" className="mt-3" aria-label={`Visit ${p.name} profile (opens in new tab)`}>Visit Profile</NeonButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
