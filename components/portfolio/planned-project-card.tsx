import type { PlannedProject } from '@/lib/content'
import { StatusBadge } from './status-badge'

export function PlannedProjectCard({ project }: { project: PlannedProject }) {
  return (
    <article
      aria-labelledby={`planned-${project.index}`}
      className="group relative flex h-full flex-col rounded-2xl border border-dashed border-border bg-card/30 p-6 transition-[border-color,background-color] duration-500 hover:border-primary/40 hover:bg-card/50 md:p-8"
    >
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          <span className="text-primary/80">{project.index}</span> / {project.area}
        </span>
        <StatusBadge status="planned" />
      </div>

      <h4
        id={`planned-${project.index}`}
        className="mt-10 text-balance text-xl font-medium leading-[1.1] tracking-[-0.03em] text-foreground/90 md:text-2xl"
      >
        {project.title}
      </h4>

      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-8" aria-label="Intended focus areas">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
