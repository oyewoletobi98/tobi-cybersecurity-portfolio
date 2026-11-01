import { profile } from '@/lib/content'

export function PageLoader() {
  return (
    <div
      aria-hidden="true"
      className="loader fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="w-56">
        <div className="loader-text flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-foreground">{profile.name}</span>
          <span>Portfolio</span>
        </div>
        <div className="mt-4 h-px w-full bg-border">
          <div className="loader-bar h-px w-full bg-gradient-to-r from-primary to-signal" />
        </div>
      </div>
    </div>
  )
}
