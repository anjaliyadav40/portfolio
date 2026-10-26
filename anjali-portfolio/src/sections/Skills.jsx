import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h" className="bg-grid px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-h">SKILLS &amp; TECH I USE ☆</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map((s) => <SkillCard key={s.category} {...s} />)}</div>
      </div>
    </section>
  )
}
