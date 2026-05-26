'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { ArrowUpRight } from 'lucide-react'


import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaBehance,
} from 'react-icons/fa'

import { Container } from './container'

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export function Footer() {
  return (
    <footer className="
      relative
      overflow-hidden
      pt-24
      pb-10
    ">

      {/* GLOW */}
      <div className="
        absolute
        left-1/2
        top-0
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-[#7B61FF]/20
        blur-3xl
      " />

      <Container>

        {/* TOP */}
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
            glass-card
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/20
            px-8
            py-14
            md:px-14
          "
        >

          <div className="
            grid
            gap-12
            lg:grid-cols-2
          ">

            {/* LEFT */}
            <div>

              <p className="
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#7B61FF]
              ">
                Portfolio
              </p>

              <h2 className="
                mt-6
                max-w-xl
                text-3xl md:text-5xl
                font-bold
                leading-tight
                tracking-tight
                text-zinc-900
              ">
                Building modern digital experiences.
              </h2>

              <p className="
                mt-6
                max-w-lg
                leading-relaxed
                text-zinc-600
              ">
                Focused on elegant interfaces,
                meaningful visual storytelling,
                and premium frontend interaction.
              </p>
            </div>

            {/* RIGHT */}
            <div className="
              flex
              flex-col
              items-start
              justify-between
              gap-10
              lg:items-end
            ">

              {/* NAV */}
              <div className="
                flex
                flex-wrap
                gap-4
              ">

                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      rounded-full
                      bg-white/60
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-zinc-700
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:shadow-lg
                    "
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* SOCIAL */}
              <div className="
                
                flex flex-wrap items-center justify-center gap-3 md:justify-start
              
              ">

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/bahtiaragungcs"
                  target="_blank"
                  className="
                    glass-card
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_25px_rgba(123,97,255,0.25)]
                  "
                >
                  <FaInstagram className="
                    h-5
                    w-5
                  " />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://linkedin.com/in/bahtiaragung/"
                  target="_blank"
                  className="
                    glass-card
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_25px_rgba(123,97,255,0.25)]
                  "
                >
                  <FaLinkedinIn className="
                    h-5
                    w-5
                  " />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/bahtiaragung"
                  target="_blank"
                  className="
                    glass-card
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_25px_rgba(123,97,255,0.25)]
                  "
                >
                  <FaGithub className="
                    h-5
                    w-5
                  " />
                </a>

                {/* BEHANCE */}
                <a
                  href="https://www.behance.net/agungbahtiar1/"
                  target="_blank"
                  className="
                    glass-card
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_25px_rgba(123,97,255,0.25)]
                  "
                >
                  <FaBehance className="
                    h-5
                    w-5
                  " />
                </a>

                {/* DRIBBLE */}
                <a
                  href="https://dribbble.com/aynaraconcepts"
                  target="_blank"
                  className="
                    glass-card
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#7B61FF]
                    hover:text-zinc-900
                    hover:shadow-[0_0_25px_rgba(123,97,255,0.25)]
                  "
                >
                  <FaDribbble className="
                    h-5
                    w-5
                  " />
                </a>

                {/* CTA */}

              <a
                href="https://wa.me/6281285036202"
                target="_blank"
              >
                <div className="
                  ml-2
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#7B61FF]
                  px-6
                  py-4
                  text-zinc-900
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#6848ff]
                  hover:shadow-[0_0_30px_rgba(123,97,255,0.35)]
                ">
                  <span className="text-sm font-medium">
                    Let’s Connect
                  </span>

                  <ArrowUpRight className="
                    h-4
                    w-4
                  " />
                </div>
                
              </a>
                

              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="
          mt-10
          flex
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-white/10
          pt-6
          text-sm
          text-zinc-500
          flex-col gap-6 md:flex-row md:items-center md:justify-between
          w-full md:w-auto
        ">

          <p>
            © 2026 Agung Bahtiar. All rights reserved.
          </p>

          <p>
            Designed with passion & modern interaction.
          </p>
        </div>
      </Container>
    </footer>
  )
}