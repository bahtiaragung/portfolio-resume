'use client'

import { useEffect, useState } from 'react'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

export function CursorGlow() {
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  useEffect(() => {
    setMounted(true)

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <>
      {/* GLOW */}
      <motion.div
        className="
          pointer-events-none
          fixed
          z-999
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#7B61FF]/20
          blur-3xl
        "
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* RING */}
      <motion.div
        className="
          pointer-events-none
          fixed
          z-999
          h-8
          w-8
          rounded-full
          border
          border-white/40
          backdrop-blur-sm
        "
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}