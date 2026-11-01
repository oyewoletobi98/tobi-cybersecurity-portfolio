import { certifications } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { StatusBadge } from './status-badge'

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="certifications-title"
          index="07"
          label="Certifications"
          title="Currently studying towards industry certifications."
        />

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Both are ongoing studies and have not yet been awarded. Completed qualifications are listed under{' '}
              <a href="#education" className="link-underline text-foreground">
                Education
              </a>
              .
            </p>
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2 md:col-span-9">
            {certifications.map((cert, i) => (
              <li key={cert.name}>
                <Reveal delay={i * 120} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-foreground/15 hover:shadow-[0_30px_80px_-40px_rgb(79_140_255/0.45)] md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {cert.issuer}
                      </span>
                      <StatusBadge status="in-progress" label={cert.status} />
                    </div>
                    <h3 className="mt-12 text-4xl font-medium tracking-[-0.04em] md:text-5xl">{cert.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cert.fullName}</p>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-signal transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
