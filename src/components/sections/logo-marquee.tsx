'use client'

import { motion } from 'framer-motion'

const logos = [
  'Wix Studio',
  'HTML',
  'Framer',
  'Tailwind CSS',
  'CSS',
  'Sanity CMS',
  'Figma',
  'Power BI',
  'Ms. Excel',
]

export function LogoMarquee() {
  return (
    <section className="overflow-hidden py-10">

      <div className="
        relative
        flex
        overflow-hidden
      ">

        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex min-w-full shrink-0 gap-6"
        >

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="
                glass-card
                flex
                items-center
                rounded-full
                border
                border-white/20
                px-8
                py-4
                whitespace-nowrap
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-300/40
                hover:shadow-[0_0_30px_rgba(123,97,255,0.15)]
              "
            >
              <p className="
                text-sm
                font-medium
                tracking-wide
                text-zinc-700
              ">
                {logo}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}