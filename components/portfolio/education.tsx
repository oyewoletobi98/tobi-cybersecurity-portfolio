import { education } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { StatusBadge } from './status-badge'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="education-title"
          index="03"
          label="Education"
          title="A technical foundation, now deepening into security."
        />

        <ul className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          {education.map((item, i) => (
            <li key={item.qualification} className={i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}>
              <Reveal delay={i * 120} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-foreground/15 hover:shadow-[0_30px_80px_-40px_rgb(79_140_255/0.45)] md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <StatusBadge status={item.status} />
                    {item.period && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <h3
                    className={
                      i === 0
                        ? 'mt-12 text-balance text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:text-5xl'
                        : 'mt-12 text-balance text-2xl font-medium leading-[1.1] tracking-[-0.03em] md:text-3xl'
                    }
                  >
                    {item.qualification}
                  </h3>
                  {item.institution && <p className="mt-3 text-foreground/85">{item.institution}</p>}
                  <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
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
    </section>
  )
}
