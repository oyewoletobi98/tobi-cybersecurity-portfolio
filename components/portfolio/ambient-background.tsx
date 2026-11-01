export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-a -left-[10%] -top-[20%] h-[55vh] w-[55vh] bg-primary/20" />
      <div className="orb orb-b right-[-10%] top-[10%] h-[45vh] w-[45vh] bg-signal/10" />
      <div className="noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
