'use client'

import { motion } from 'framer-motion'

import { Quote } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionTitle } from '@/components/ui/section-title'

const testimonials = [
  {
    name: 'Creative Collaboration',
    role: 'Modern UI Project',
    content:
      'Agung has a strong eye for modern web aesthetics and elegant digital experiences.',
  },
  {
    name: 'Frontend Experience',
    role: 'Creative Web Design',
    content:
      'The interface quality, smooth interaction, and visual storytelling feel incredibly premium.',
  },
  {
    name: 'Data Visualization',
    role: 'Dashboard Exploration',
    content:
      'Complex information transformed into meaningful and beautiful visual experiences.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-spacing section-divider">

      <Container>

        <SectionTitle
          eyebrow="Testimonials"
          title="Creative Impressions"
          description="Thoughts, collaboration experiences, and creative feedback."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                glass-card
                relative
                overflow-hidden
                rounded-[32px]
                p-8
              "
            >

              {/* GLOW */}
              <div className="
                absolute
                top-0
                right-0
                h-40
                w-40
                rounded-full
                bg-[#7B61FF]/10
                blur-3xl
                transition-all
                duration-500
                group-hover:scale-125
              " />

              {/* ICON */}
              <div className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#7B61FF]/10
              ">
                <Quote className="h-6 w-6 text-[#7B61FF]" />
              </div>

              {/* CONTENT */}
              <div className="relative mt-8">

                <p className="
                  leading-relaxed
                  text-zinc-600
                ">
                  “{item.content}”
                </p>

                <div className="mt-8">

                  <h3 className="
                    text-lg
                    font-semibold
                    text-zinc-900
                  ">
                    {item.name}
                  </h3>

                  <p className="
                    mt-1
                    text-sm
                    text-zinc-500
                  ">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}