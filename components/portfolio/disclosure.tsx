'use client'

import { useId, useState, type ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Disclosure({
  label,
  openLabel = 'Hide details',
  children,
  className,
}: {
  label: string
  openLabel?: string
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
      >
        <Plus
          aria-hidden="true"
          className={cn('size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]', open && 'rotate-45 text-primary')}
        />
        {open ? openLabel : label}
      </button>
      <div
        id={id}
        inert={!open}
        className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
