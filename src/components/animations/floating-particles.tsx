'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const particles = Array.from({ length: 12 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 4 + Math.random() * 6,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
          }}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-[#7B61FF]/30
            blur-sm
          "
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  )
}