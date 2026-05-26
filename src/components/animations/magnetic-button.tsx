'use client'

import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

export function MagneticButton({
  children,
}: {
  children: React.ReactNode
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  })

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}