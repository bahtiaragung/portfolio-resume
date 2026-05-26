'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import {
  ArrowRight,
  Mail,
} from 'lucide-react'

import { Container } from '@/components/layout/container'

import { Button } from '@/components/ui/button'

import { MagneticButton } from '@/components/animations/magnetic-button'

export function ContactCTA() {
  return (
    <section className="section-spacing">

      <Container>

        <motion.div
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
            duration: 0.7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/20
            bg-white/60
            px-8
            py-20
            shadow-[0_20px_80px_rgba(0,0,0,0.06)]
            backdrop-blur-2xl
            md:px-16
          "
        >

          {/* BACKGROUND GLOW */}
          <div className="
            absolute
            top-0
            left-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-[#7B61FF]/20
            blur-3xl
          " />

          {/* CONTENT */}
          <div className="
            relative
            mx-auto
            max-w-4xl
            text-center
          ">

            {/* ICON */}
            <div className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-[#7B61FF]/10
            ">
              <Mail className="
                h-8
                w-8
                text-[#7B61FF]
              " />
            </div>

            {/* TITLE */}
            <h2 className="
              mt-10
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-zinc-900
              md:text-6xl
            ">
              Let’s create something
              meaningful together.
            </h2>

            {/* DESCRIPTION */}
            <p className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-600
            ">
              Available for modern website design,
              frontend collaboration, creative projects,
              and data visualization experiences.
            </p>

            {/* BUTTON */}

            <a href="/contact">
            <div className="mt-12">

              <MagneticButton>
                <Button className="
                  h-14
                  rounded-full
                  bg-[#7B61FF]
                  px-10
                  text-base
                  hover:bg-[#6848ff]
                ">
                  Start a Project

                  <ArrowRight className="
                    ml-2
                    h-4
                    w-4
                  " />
                </Button>
              </MagneticButton>
            </div>
            </a>

            
          </div>
        </motion.div>
      </Container>
    </section>
  )
}