'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/lib/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [active, setActive] = useState<string>('top')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const ids = ['top', ...navItems.map((item) => item.id)]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const measure = useCallback(() => {
    const el = linkRefs.current[active]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
    else setIndicator((prev) => ({ ...prev, visible: false }))
  }, [active])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="hero-fade fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6" style={{ ['--i' as string]: 0 }}>
      <div
        className={cn(
          'mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 pl-5 transition-[background-color,border-color,box-shadow] duration-500',
          scrolled || open
            ? 'border-border bg-background/70 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="relative flex size-7 items-center justify-center rounded-full border border-border font-mono text-[10px] tracking-wider text-foreground transition-colors duration-300 group-hover:border-primary/60">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="relative flex items-center">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 rounded-full bg-secondary ring-1 ring-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
            {navItems.slice(0, -1).map((item) => (
              <li key={item.id}>
                <a
                  ref={(el) => {
                    linkRefs.current[item.id] = el
                  }}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300',
                    active === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            ref={(el) => {
              linkRefs.current.contact = el
            }}
            href="#contact"
            className={cn(
              'group hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 md:inline-flex',
              active === 'contact'
                ? 'bg-foreground text-background'
                : 'bg-primary text-primary-foreground hover:bg-foreground',
            )}
          >
            {"Let's talk"}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-10 items-center justify-center rounded-full text-foreground xl:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-border bg-background/90 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden',
          open ? 'max-h-[36rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col p-3">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg tracking-tight text-foreground hover:bg-secondary"
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
