'use client'

import { motion } from 'framer-motion'

export function BackgroundOrbs() {
  return (
    <div className="
      pointer-events-none
      fixed
      inset-0
      z-[-1]
      overflow-hidden
    ">

      {/* ORB 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[-10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7B61FF]/20
          blur-3xl
        "
      />

      {/* ORB 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[-10%]
          top-[40%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#9F7AEA]/20
          blur-3xl
        "
      />

      {/* ORB 3 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-10%]
          left-[30%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#7B61FF]/10
          blur-3xl
        "
      />
    </div>
  )
}