'use client'

import Link from 'next/link'

import { useState } from 'react'

import {
  AnimatePresence,
  motion,
} from 'framer-motion'

import {
  Briefcase,
  FileText,
  Home,
  Mail,
  Menu,
  Moon,
  User,
  X,
} from 'lucide-react'

import { useTheme } from 'next-themes'

const navigation = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'About',
    href: '/about',
    icon: User,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: Briefcase,
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: FileText,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail,
  },
]

export function Navbar() {

  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.div
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          fixed
          top-8
          left-1/2
          z-50
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <div className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-white/70
          px-4
          py-4
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
        ">

          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-full
                  px-5
                  py-3
                  transition-all
                  duration-300
                  hover:bg-white/80
                "
              >
                <Icon className="
                  h-5
                  w-5
                  text-zinc-700
                " />

                <span className="
                  text-base
                  font-medium
                  text-zinc-700
                ">
                  {item.label}
                </span>
              </Link>
            )
          })}

          {/* THEME BUTTON */}
          {/*<button
              onClick={() =>
                setTheme(
                  theme === 'dark'
                    ? 'light'
                    : 'dark'
                )
              }
              className="
                ml-2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/80
                transition-all
                duration-300
                hover:scale-105
                dark:bg-zinc-900
              "
            >
              <Moon className="
                h-5
                w-5
                text-zinc-700
                dark:text-zinc-900
              " />
            </button>*/}
        </div>
      </motion.div>

      {/* MOBILE NAV */}
      <div className="
        fixed
        top-6
        left-1/2
        z-50
        flex
        w-[92%]
        -translate-x-1/2
        items-center
        justify-between
        rounded-full
        border
        border-white/20
        bg-white/70
        px-5
        py-4
        shadow-[0_8px_40px_rgba(0,0,0,0.08)]
        backdrop-blur-2xl
        md:hidden
      ">

        <Link
          href="/"
          className="
            text-lg
            font-bold
            tracking-tight
            text-zinc-900
          "
        >
          Agung.
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/70
          "
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-100
              bg-black/40
              backdrop-blur-xl
            "
          >
            <motion.div
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -40,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-10
              "
            >

              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-8
                  right-8
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                "
              >
                <X className="
                  h-5
                  w-5
                  text-zinc-900
                " />
              </button>

              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-4xl
                    font-bold
                    tracking-tight
                    text-zinc-900
                  "
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}