import { achievements } from '@/lib/content'
import { Reveal } from './reveal'
import { ScoreMeter } from './score-meter'
import { SectionHeading } from './section-heading'

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="achievements-title"
          index="05"
          label="Academic achievements"
          title="Strongest where the work is hands-on."
        />

        <div className="mt-16 flex flex-col gap-16 md:mt-24 md:pl-[25%]">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <ScoreMeter value={item.value} title={item.title} label={item.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
