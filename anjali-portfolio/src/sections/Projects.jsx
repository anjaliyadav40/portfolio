import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="proj-h" className="relative bg-navy/60 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="proj-h">THINGS I'VE BUILT ✦</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      </div>
    </section>
  )
}
