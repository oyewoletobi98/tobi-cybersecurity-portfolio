import { experience } from '@/lib/content'
import { Disclosure } from './disclosure'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-title"
          index="02"
          label="Experience"
          title="Learning how risk is managed inside a major bank."
        />

        <ol className="mt-16 border-b border-border md:mt-24 md:pl-[25%]">
          {experience.map((item, i) => (
            <li key={item.company}>
              <Reveal delay={i * 80}>
                <div className="group grid gap-3 border-t border-border py-10 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:pt-2">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                      {item.role}{' '}
                      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-signal">
                        at {item.company}
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-foreground/80">{item.department}</p>
                    <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">{item.summary}</p>

                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Skills used">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <Disclosure label="View responsibilities" openLabel="Hide responsibilities" className="mt-8">
                      <ul className="mt-6 max-w-xl space-y-3">
                        {item.responsibilities.map((task) => (
                          <li key={task} className="flex gap-4 text-pretty leading-relaxed text-foreground/85">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-primary" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </Disclosure>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
