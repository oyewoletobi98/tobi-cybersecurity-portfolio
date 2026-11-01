import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/content'
import { LocalTime } from './local-time'

export function SiteFooter() {
  return (
    <footer className="px-6 pb-8 md:px-10">
      <div className="mx-auto max-w-6xl border-t border-border pt-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lg font-medium tracking-tight">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.role}, {profile.institution}
            </p>
          </div>

          <nav aria-label="Social" className="md:col-span-4">
            <ul className="flex flex-col gap-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-underline">{social.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:col-span-3 md:items-end">
            <p>
              Local time <span className="font-mono text-foreground"><LocalTime timeZone={profile.timeZone} /></span>
            </p>
            <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              Back to top
              <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <p>{`© ${new Date().getFullYear()} ${profile.name}`}</p>
          <p>Designed & built with care</p>
        </div>
      </div>
    </footer>
  )
}
