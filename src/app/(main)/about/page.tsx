'use client'

import Image from 'next/image'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

import {
  BarChart3,
  Globe,
  Palette,
  Briefcase,
} from 'lucide-react'

import { Container } from '@/components/layout/container'
import { AnimatedCounter } from '@/components/animations/animated-counter'

export default function AboutPage() {

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const rect =
      e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    mouseX.set((x - centerX) / 20)
    mouseY.set(-(y - centerY) / 20)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <main className="pt-40 pb-24">

      <Container>

        {/* HERO */}
        <section className="
          grid
          items-center
          gap-20
          lg:grid-cols-2
        ">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#7B61FF]
            ">
              About Me
            </p>

            <h1 className="
              mt-6
              text-3xl md:text-5xl
              font-bold
              leading-[1.2]
              tracking-tight
              text-zinc-900
            ">
              Frontend designer with
              industrial systems &
              data visualization background.
            </h1>

            <p className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              I combine modern web design,
              frontend interaction, and operational
              systems thinking to create meaningful
              digital experiences.
            </p>

            <p className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              With experience in production planning,
              maintenance operations, and industrial workflows,
              I bring a unique perspective into UI design,
              analytics dashboards, and data visualization systems.
            </p>

            <div className="
              mt-12
              grid
              gap-6
              sm:grid-cols-3
            ">

              <div className="
                glass-card
                rounded-[28px]
                p-6
              ">
                <h3 className="
                  text-3xl md:text-5xl
                  font-bold
                  text-zinc-900
                ">
                  <AnimatedCounter value={3} suffix="+" />
                </h3>

                <p className="
                  mt-2
                  text-sm
                  text-zinc-500
                ">
                  Years Digital Experience
                </p>
              </div>

              <div className="
                glass-card
                rounded-[28px]
                p-6
              ">
                <h3 className="
                  text-3xl md:text-5xl
                  font-bold
                  text-zinc-900
                ">
                  <AnimatedCounter value={15} suffix="+" />
                </h3>

                <p className="
                  mt-2
                  text-sm
                  text-zinc-500
                ">
                  Years Industrial Experience
                </p>
              </div>

              <div className="
                glass-card
                rounded-[28px]
                p-6
              ">
                <h3 className="
                  text-3xl md:text-5xl
                  font-bold
                  text-zinc-900
                ">
                  <AnimatedCounter value={20} suffix="+" />
                </h3>

                <p className="
                  mt-2
                  text-sm
                  text-zinc-500
                ">
                  Creative Projects
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* GLOW */}
            <div className="
              absolute
              inset-0
              rounded-full
              bg-[#7B61FF]/20
              blur-3xl
            " />

            <div className="
              glass-card
              relative
              overflow-hidden
              rounded-[40px]
              p-5
              shadow-[0_20px_80px_rgba(123,97,255,0.2)]
            ">

              <Image
                src="/images/profilehero.jpeg"
                alt="About"
                width={700}
                height={900}
                className="
                  rounded-[32px]
                  object-cover
                "
              />
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="
          section-spacing
          section-divider
        ">

          <div className="
            grid
            gap-6
            lg:grid-cols-4
          ">

            {[
              {
                title: 'Modern Web Design',
                description:
                  'Elegant modern interface inspired by Framer and Apple aesthetics.',
                icon: Palette,
              },
              {
                title: 'Frontend Experience',
                description:
                  'Building interactive responsive websites with modern frameworks.',
                icon: Globe,
              },
              {
                title: 'Data Visualization',
                description:
                  'Transforming operational data into clean visual dashboards.',
                icon: BarChart3,
              },
              {
                title: 'Systems Thinking',
                description:
                  'Combining industrial workflow understanding with digital solutions.',
                icon: Briefcase,
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    hover-glow
                    glass-card
                    rounded-[32px]
                    p-5 md:p-8
                  "
                >

                  <div className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#7B61FF]/10
                  ">
                    <Icon className="
                      h-7
                      w-7
                      text-[#7B61FF]
                    " />
                  </div>

                  <h3 className="
                    mt-8
                    text-2xl
                    font-semibold
                    text-zinc-900
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-4
                    leading-relaxed
                    text-zinc-600
                  ">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </section>

      </Container>

    </main>
  )
}