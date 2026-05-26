'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  title: string
  description: string
}

export function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
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
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      ">
        <div className="
          absolute
          -top-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-[#7B61FF]/20
          blur-3xl
        " />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-zinc-900">
          {title}
        </h3>

        <p className="mt-5 leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </motion.div>
  )
}