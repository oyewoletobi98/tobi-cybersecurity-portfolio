'use client'

import { useRef, type PointerEvent } from 'react'
import type { Project } from '@/lib/content'
import { Disclosure } from './disclosure'
import { StatusBadge } from './status-badge'

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null)

  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.setProperty('--rx', `${(0.5 - y) * 3}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 3}deg`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <article
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      aria-labelledby={`project-${project.index}`}
      className="tilt group relative isolate h-full overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-foreground/15 hover:shadow-[0_30px_80px_-40px_rgb(79_140_255/0.45)]"
    >
      <div aria-hidden="true" className="card-glow pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div aria-hidden="true" className="card-border pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex h-full flex-col p-6 md:p-10">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>
            <span className="text-primary">{project.index}</span> / {project.type}
          </span>
          <StatusBadge status="completed" label={project.status} />
        </div>

        <div className="mt-10 flex items-start justify-between gap-6">
          <h3
            id={`project-${project.index}`}
            className="text-balance text-2xl font-medium leading-[1.05] tracking-[-0.035em] md:text-3xl"
          >
            {project.title}
          </h3>
          {project.metric && (
            <div className="shrink-0 text-right">
              <p className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">{project.metric.value}</p>
              <p className="text-xs text-muted-foreground">{project.metric.label}</p>
            </div>
          )}
        </div>

        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-auto pt-8">
          <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>

          <Disclosure label="View details" className="mt-6 border-t border-border pt-6">
            <dl className="mt-6 grid gap-5 text-sm">
              {project.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{detail.label}</dt>
                  <dd className="mt-1.5 text-pretty leading-relaxed text-foreground/85">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </Disclosure>
        </div>
      </div>
    </article>
  )
}
