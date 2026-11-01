import { skillGroups } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="skills-title" index="04" label="Technical skills" title="The toolkit I'm building on." />

        <ul className="mt-16 border-b border-border md:mt-24">
          {skillGroups.map((group, i) => (
            <li key={group.title}>
              <Reveal delay={i * 60}>
                <div className="group relative grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-6 md:py-10">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-signal transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <span className="font-mono text-xs text-muted-foreground md:col-span-1 md:pt-2">0{i + 1}</span>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 md:text-3xl">
                      {group.title}
                    </h3>
                    {group.context && (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-signal/80">
                        {group.context}
                      </p>
                    )}
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-4">{group.description}</p>
                  <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-foreground/15 group-hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
