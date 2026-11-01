'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
    >
      <span className="relative size-4" aria-hidden="true">
        <Copy className={`absolute inset-0 size-4 transition-all duration-300 ${copied ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`} />
        <Check className={`absolute inset-0 size-4 text-signal transition-all duration-300 ${copied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
      </span>
      <span aria-live="polite">{copied ? 'Copied to clipboard' : 'Copy email'}</span>
    </button>
  )
}
