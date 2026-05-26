'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

export function HeroSection() {

  return (

    <section
      className="
        relative
        overflow-hidden
        pt-28
        md:pt-36
        lg:pt-44
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.18),transparent_45%)]
        "
      />

      <Container>

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              z-10
              order-2
              lg:order-1
            "
          >

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/70
                px-4
                py-2
                text-xs
                text-zinc-700
                shadow-lg
                backdrop-blur-xl
                sm:text-sm
              "
            >

              <Sparkles
                className="
                  h-4
                  w-4
                  text-[#7B61FF]
                "
              />

              Available for freelance & creative projects

            </div>

            {/* TITLE */}
            <h1
              className="
                mt-6
                max-w-[620px]
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-zinc-900
                sm:text-[48px]
                md:text-[58px]
              "
            >
              Modern web design
              <br />
              & meaningful data
              <br />
              visualization experiences.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[560px]
                text-base
                leading-relaxed
                text-zinc-600
                md:text-lg
              "
            >
              Helping brands and businesses create modern websites,
              clean interfaces, and meaningful digital experiences
              through thoughtful design and visual interaction.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >

              <Link
                href="/projects"
                className="w-full sm:w-w-full md:w-auto"
              >

                <Button
                  className="
                    h-12
                    w-full
                    rounded-full
                    bg-[#7B61FF]
                    px-8
                    text-sm
                    hover:bg-[#6848ff]
                    md:h-14
                    md:text-base
                  "
                >

                  Explore Projects

                  <ArrowRight
                    className="
                      ml-2
                      h-4
                      w-4
                    "
                  />

                </Button>

              </Link>

              <a
                href="/resume/Agung_Bahtiar_Resume.pdf"
                download
                className="w-full sm:w-w-full md:w-auto"
              >

                <Button
                  className="
                    h-12
                    w-full
                    rounded-full
                    border
                    border-[#7B61FF]/30
                    bg-white/60
                    px-8
                    text-sm
                    text-zinc-900
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_30px_rgba(123,97,255,0.25)]
                    md:h-14
                    md:text-base
                  "
                >

                  Download Resume

                </Button>

              </a>

            </div>

            {/* TAGS */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >

              {[
                'Web Design',
                'Data Visualization',
                'Wix Studio',
                'Framer',
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    bg-white/70
                    px-2.5
                    py-1
                    text-xs
                    text-zinc-700
                    shadow-sm
                    backdrop-blur-xl
                    md:text-sm
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={(e) => {

              if (window.innerWidth < 1024) return

              const rect =
                e.currentTarget.getBoundingClientRect()

              const x =
                (e.clientX -
                  rect.left -
                  rect.width / 2) / 12

              const y =
                (e.clientY -
                  rect.top -
                  rect.height / 2) / 12

              e.currentTarget.style.transform = `
                perspective(1400px)
                rotateX(${-y}deg)
                rotateY(${x}deg)
                translateZ(20px)
                scale3d(1.04,1.04,1.04)
              `
            }}
            onMouseLeave={(e) => {

              e.currentTarget.style.transform = `
                perspective(1400px)
                rotateX(0deg)
                rotateY(0deg)
                translateZ(0px)
                scale3d(1,1,1)
              `
            }}
            className="
              relative
              order-1
              mx-auto
              w-full
              max-w-[320px]
              transition-transform
              duration-150
              will-change-transform
              sm:max-w-[440px]
              md:max-w-[620px]
              lg:order-2
            "
          >

            {/* IMAGE WRAPPER */}
            <div
              className="
                glass-card
                relative
                overflow-hidden
                rounded-[28px]
                p-3
                shadow-[0_20px_80px_rgba(123,97,255,0.18)]
                md:rounded-[40px]
                md:p-4
              "
            >

              <Image
                src="/images/profilehero.jpeg"
                alt="Agung Bahtiar"
                width={700}
                height={820}
                priority
                className="
                  h-auto
                  w-full
                  rounded-[22px]
                  object-cover
                  object-top
                  md:rounded-[32px]
                "
              />

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-4
                  top-4
                  rounded-2xl
                  bg-white/85
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  md:left-5
                  md:top-5
                  md:px-5
                  md:py-4
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-zinc-900
                    md:text-3xl
                  "
                >
                  3+
                </h3>

                <p
                  className="
                    text-xs
                    text-zinc-500
                    md:text-sm
                  "
                >
                  Years Experience
                </p>

              </motion.div>

              {/* FLOATING LABEL */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-4
                  right-4
                  rounded-full
                  bg-white/85
                  px-4
                  py-2
                  shadow-xl
                  backdrop-blur-xl
                  md:bottom-5
                  md:right-5
                  md:px-5
                  md:py-3
                "
              >

                <p
                  className="
                    text-xs
                    font-medium
                    text-zinc-600
                    md:text-sm
                  "
                >
                  Data Visualization
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>

  )
}