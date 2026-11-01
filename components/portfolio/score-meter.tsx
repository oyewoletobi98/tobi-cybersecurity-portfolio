'use client'

import { useEffect, useRef, useState } from 'react'

export function ScoreMeter({ value, title, label }: { value: number; title: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setActive(true)
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplay(value)
          return
        }
        const start = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          setDisplay(Math.round(eased * value))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <div ref={ref} className="group">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{label}</p>
        </div>
        <p
          className="text-[clamp(3.5rem,9vw,7rem)] font-medium leading-none tracking-[-0.05em] tabular-nums"
          aria-label={`${value}%`}
        >
          <span aria-hidden="true">
            {display}
            <span className="text-gradient">%</span>
          </span>
        </p>
      </div>
      <div
        className="mt-6 h-px w-full bg-border"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${title} result`}
      >
        <div
          className="h-px origin-left bg-gradient-to-r from-primary to-signal transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{ width: `${value}%`, transform: `scaleX(${active ? 1 : 0})` }}
        />
      </div>
    </div>
  )
}
