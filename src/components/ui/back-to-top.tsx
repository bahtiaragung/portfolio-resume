'use client'

import { useEffect, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () =>
      window.removeEventListener(
        'scroll',
        toggleVisibility
      )
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollToTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/80
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            backdrop-blur-2xl
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <ArrowUp className="
            h-5
            w-5
            text-zinc-800
          " />
        </motion.button>
      )}
    </AnimatePresence>
  )
}