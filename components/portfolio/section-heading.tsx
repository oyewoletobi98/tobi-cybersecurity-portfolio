import { Reveal } from './reveal'

export function SectionHeading({
  index,
  label,
  title,
  id,
}: {
  index: string
  label: string
  title: string
  id: string
}) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3 md:self-start md:pt-4">
        <span className="text-primary">{index}</span>
        <span className="h-px w-6 bg-border" aria-hidden="true" />
        {label}
      </p>
      <h2
        id={id}
        className="text-balance text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:col-span-9 md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
    </Reveal>
  )
}
