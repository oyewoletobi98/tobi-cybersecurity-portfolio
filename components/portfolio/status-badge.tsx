import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StatusBadge({
  status,
  label,
}: {
  status: 'in-progress' | 'completed' | 'planned'
  label?: string
}) {
  if (status === 'planned') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-foreground/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        <span className="size-1.5 rounded-full border border-muted-foreground" aria-hidden="true" />
        {label ?? 'Planned'}
      </span>
    )
  }

  const inProgress = status === 'in-progress'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em]',
        inProgress ? 'border-signal/30 text-signal' : 'border-border text-foreground/85',
      )}
    >
      {inProgress ? (
        <span className="relative flex size-1.5" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
        </span>
      ) : (
        <Check className="size-3 text-primary" aria-hidden="true" />
      )}
      {label ?? (inProgress ? 'In progress' : 'Completed')}
    </span>
  )
}
