'use client'

import { motion } from 'framer-motion'

import { Container } from '@/components/layout/container'

const experiences = [
  {
    year: '2025 — Present',
    title: 'Web Designer & Digital Visualization Enthusiast',
    company: 'Self Employed',
    description:
      'Designing modern responsive websites, exploring dashboard systems, and crafting meaningful digital experiences through elegant interfaces and visual storytelling.',
  },

  {
    year: '2025 — Present',
    title: 'Maintenance Planner',
    company: 'PT. Exploitasi Energi Indonesia, Tbk',
    description:
      'Managing maintenance planning, operational documentation, spare part monitoring, and preventive scheduling to support efficient industrial operations.',
  },

  {
    year: '2010 — 2023',
    title: 'PPC | Materials Planner & Delivery Control',
    company: 'PT. Gajah Tunggal, Tbk',
    description:
      'Handled production planning, material scheduling, inventory coordination, and operational reporting to support manufacturing efficiency and supply chain operations.',
  },
]

export function ExperienceSection() {
  return (
    <section className="relative py-20 md:py-32">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7B61FF]/10
          blur-3xl
        "
      />

      <Container>

        {/* HEADER */}
        <div className="max-w-2xl">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#7B61FF]
            "
          >
            Experience
          </p>

          <h2
            className="
              mt-4
              text-3xl md:text-5xl
              font-bold
              tracking-tight
              text-zinc-900
            "
          >
            My Journey
          </h2>

          <p
            className="
              mt-4
              text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            A timeline of experience, planning,
            systems thinking, and modern digital exploration.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-[#7B61FF]/40
              lg:block
            "
          />

          <div className="space-y-24">

            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  relative
                  grid
                  items-center
                  gap-12
                  lg:grid-cols-2
                "
              >

                {/* RIGHT CARD */}
                {index % 2 === 0 ? (
                  <>
                    <div />

                    <div className="relative pl-16">

                      {/* DOT */}
                      <div
                        className="
                          absolute
                          left-[-34px]
                          top-1/2
                          z-20
                          h-5
                          w-5
                          -translate-y-1/2
                          rounded-full
                          border-4
                          border-white
                          bg-[#7B61FF]
                          shadow-lg
                        "
                      />

                      {/* CARD */}
                      <div
                        className="
                          glass-card
                          rounded-[32px]
                          p-6 md:p-8
                          shadow-xl
                        "
                      >
                        <p
                          className="
                            text-sm
                            font-semibold
                            text-[#7B61FF]
                          "
                        >
                          {item.year}
                        </p>

                        <h3
                          className="
                            mt-4
                            text-2xl md:text-4xl
                            font-bold
                            leading-tight
                            text-zinc-900
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-sm
                            text-zinc-500
                          "
                        >
                          {item.company}
                        </p>

                        <p
                          className="
                            mt-6
                            text-base
                            leading-relaxed
                            text-zinc-600
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* LEFT CARD */}
                    <div className="relative pr-16">

                      {/* DOT */}
                      <div
                        className="
                          absolute
                          right-[-34px]
                          top-1/2
                          z-20
                          h-5
                          w-5
                          -translate-y-1/2
                          rounded-full
                          border-4
                          border-white
                          bg-[#7B61FF]
                          shadow-lg
                        "
                      />

                      {/* CARD */}
                      <div
                        className="
                          glass-card
                          rounded-[32px]
                          p-8
                          shadow-xl
                        "
                      >
                        <p
                          className="
                            text-sm
                            font-semibold
                            text-[#7B61FF]
                          "
                        >
                          {item.year}
                        </p>

                        <h3
                          className="
                            mt-4
                            text-4xl
                            font-bold
                            leading-tight
                            text-zinc-900
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-sm
                            text-zinc-500
                          "
                        >
                          {item.company}
                        </p>

                        <p
                          className="
                            mt-6
                            text-base
                            leading-relaxed
                            text-zinc-600
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}