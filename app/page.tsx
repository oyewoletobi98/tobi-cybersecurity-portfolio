import { About } from '@/components/portfolio/about'
import { Achievements } from '@/components/portfolio/achievements'
import { AmbientBackground } from '@/components/portfolio/ambient-background'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { PageLoader } from '@/components/portfolio/page-loader'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { Skills } from '@/components/portfolio/skills'
import { Work } from '@/components/portfolio/work'

export default function Page() {
  return (
    <>
      <PageLoader />
      <AmbientBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
