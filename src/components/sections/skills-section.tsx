'use client'

import {
  BarChart3,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Palette,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { Container } from '@/components/layout/container'

const skills = [
  {
    title: 'Web Design',
    description:
      'Designing elegant and modern website experiences.',
    icon: Palette,
  },
  {
    title: 'Frontend Development',
    description:
      'Building scalable interfaces using modern frontend technologies.',
    icon: Code2,
  },
  {
    title: 'Data Visualization',
    description:
      'Transforming complex data into meaningful visual insights.',
    icon: BarChart3,
  },
  {
    title: 'Dashboard Systems',
    description:
      'Creating modern admin panels and analytics interfaces.',
    icon: LayoutDashboard,
  },
  {
    title: 'CMS Integration',
    description:
      'Flexible headless CMS integration for scalable websites.',
    icon: Database,
  },
  {
    title: 'Modern Web Experience',
    description:
      'Crafting cinematic and interactive frontend experiences.',
    icon: Globe,
  },
]

export function SkillsSection() {
  return (
    <section className="py-24 md:py-40">

      <Container>

        {/* HEADER */}
        <div className="max-w-2xl">

          <p className="
            text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#7B61FF]
          ">
            Expertise
          </p>

          <h2 className="
            mt-5
            text-4xl
            font-bold
            tracking-tight
            text-zinc-900
            md:text-5xl
          ">
            Creative Digital Skills
          </h2>

          <p className="
            mt-5
            text-base
            leading-relaxed
            text-zinc-600
            md:text-lg
          ">
            Focused on modern frontend development,
            elegant interfaces, and meaningful digital experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="
          mt-14
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        ">

          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  hover-glow
                  glass-card
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  p-5
                  transition-all
                  duration-500
                  md:p-8
                "
              >

                {/* GLOW */}
                <div className="
                  absolute
                  right-0
                  top-0
                  h-32
                  w-32
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
                  <Icon className="
                    h-6
                    w-6
                    text-[#7B61FF]
                  " />
                </div>

                {/* CONTENT */}
                <div className="relative mt-6">

                  <h3 className="
                    text-xl
                    font-semibold
                    text-zinc-900
                    md:text-2xl
                  ">
                    {skill.title}
                  </h3>

                  <p className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-zinc-600
                    md:text-base
                  ">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}