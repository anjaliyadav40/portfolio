import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import { experiences } from '../data/experiences'
export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="bg-navy/60 px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="exp-h" note="Small steps, big achievements.">MY JOURNEY SO FAR ✧</SectionHeading>
        <ol>{experiences.map((e) => <TimelineItem key={e.title} e={e} />)}</ol>
      </div>
    </section>
  )
}
