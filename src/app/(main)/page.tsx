import { HeroSection } from '@/components/sections/hero-section'
import { LogoMarquee } from '@/components/sections/logo-marquee'
import { ExperienceSection } from '@/components/sections/experience-section'
import { SkillsSection } from '@/components/sections/skills-section'
import FeaturedProjects from '@/components/sections/featured-projects'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactCTA } from '@/components/sections/contact-cta'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <ExperienceSection />
      <SkillsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactCTA />
    </main>
  )
}