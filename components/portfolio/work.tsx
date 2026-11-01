import { plannedProjects, projects } from '@/lib/content'
import { PlannedProjectCard } from './planned-project-card'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Work() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-title"
          index="06"
          label="Selected projects"
          title="Practical work, assessed and completed."
        />

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.index} delay={i * 120} className={i % 2 === 1 ? 'md:mt-24' : undefined}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div aria-labelledby="building-title" role="region" className="mt-24 md:mt-36">
          <Reveal>
            <div className="flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-primary">Next</span> / Not yet started
                </p>
                <h3
                  id="building-title"
                  className="mt-4 text-balance text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:text-4xl"
                >
                  Currently Building
                </h3>
              </div>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:text-right">
                Planned projects aligned to my interests in GRC, AI governance and IAM. These are not yet started and
                will be updated as work progresses.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-6">
            {plannedProjects.map((project, i) => (
              <Reveal key={project.index} delay={i * 100}>
                <PlannedProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
