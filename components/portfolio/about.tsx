import { careerInterests, stats } from '@/lib/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-title"
          index="01"
          label="About"
          title="I'm building a career where security, risk and good governance meet."
        />

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
          <Reveal className="space-y-6 text-pretty leading-relaxed text-muted-foreground md:col-span-5 md:col-start-4">
            <p>
              I&apos;m a Cyber Security undergraduate at the University of Staffordshire, building on a foundation in
              IT from a Level 3 BTEC Extended Diploma.
            </p>
            <p>
              An internship in NatWest&apos;s Treasury &amp; Risk department gave me first-hand exposure to how a
              major bank analyses data, manages risk and documents its decisions — and sharpened my interest in the
              organisational side of security.
            </p>
            <p>
              Alongside my degree, I&apos;m studying towards the CCNA and CompTIA Security+.
            </p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3 md:col-start-10">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-border pt-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-4xl font-medium tracking-[-0.04em] text-foreground">{stat.value}</dd>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 md:mt-32 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Career interests</h3>
          </Reveal>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:col-span-9">
            {careerInterests.map((interest, i) => (
              <li key={interest.title} className="bg-background">
                <Reveal delay={i * 70} className="h-full">
                  <div className="group relative h-full p-6 transition-colors duration-500 hover:bg-card md:p-8">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-signal transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <p className="mt-6 text-xl font-medium tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      {interest.title}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
