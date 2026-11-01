import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/content'
import { CopyEmail } from './copy-email'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">08</span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-10 text-balance text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]"
          >
            {"Let's start a "}
            <span className="text-gradient">conversation.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 text-2xl font-medium tracking-[-0.03em] md:text-4xl"
            >
              <span className="link-underline pb-1">{profile.email}</span>
              <ArrowUpRight className="size-6 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1 md:size-8" />
            </a>
            <div className="mt-6">
              <CopyEmail email={profile.email} />
            </div>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
            Particularly interested in opportunities across cybersecurity governance, risk and compliance, AI
            governance, and identity and access management.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
