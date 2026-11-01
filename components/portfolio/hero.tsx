'use client'

import { useRef, type PointerEvent } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/content'

const lines = [
  { text: 'Security is', gradient: false },
  { text: 'about people, risk', gradient: false },
  { text: 'and trust.', gradient: true },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={handleMove}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pb-10 pt-32 md:px-10 md:pb-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-orb" />
      </div>
      <div aria-hidden="true" className="spotlight pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p
          className="hero-fade mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          style={{ ['--i' as string]: 0 }}
        >
          <span className="h-px w-8 bg-gradient-to-r from-primary to-signal" aria-hidden="true" />
          {profile.role} — {profile.institution}
        </p>

        <h1 className="text-balance text-[clamp(2.75rem,8.5vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.045em]">
          {lines.map((line, i) => (
            <span key={line.text} className="hero-line" style={{ ['--i' as string]: i }}>
              <span className={line.gradient ? 'text-gradient' : undefined}>{line.text}</span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <p
            className="hero-fade max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            {"I'm "}
            <span className="text-foreground">{profile.name}</span>
            {
              ', a Cyber Security undergraduate at the University of Staffordshire with internship experience in NatWest’s Treasury & Risk department, focused on GRC, AI governance and identity & access management.'
            }
          </p>

          <div
            className="hero-fade flex flex-wrap items-center gap-3 md:col-span-4 md:col-start-6"
            style={{ ['--i' as string]: 2 }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View experience
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/30 hover:bg-secondary"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div
            className="hero-fade flex items-center gap-2.5 text-sm text-muted-foreground md:col-span-3 md:col-start-10 md:justify-end"
            style={{ ['--i' as string]: 3 }}
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            {profile.availability}
          </div>
        </div>

        <div
          className="hero-fade mt-14 flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          style={{ ['--i' as string]: 4 }}
        >
          <span>Portfolio — 2026</span>
          <span className="hidden sm:inline">GRC · AI Governance · IAM</span>
          <span className="flex items-center gap-2">
            Scroll
            <span className="relative h-6 w-px overflow-hidden bg-border" aria-hidden="true">
              <span className="absolute inset-x-0 top-0 h-2 animate-[scroll-cue_2s_ease-in-out_infinite] bg-foreground" />
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
