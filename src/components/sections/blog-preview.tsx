'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  ArrowUpRight,
  Clock3,
} from 'lucide-react'

import { Container } from '@/components/layout/container'
import { SectionTitle } from '@/components/ui/section-title'

const posts = [
  {
    title:
      'Designing modern interfaces with visual clarity',
    category: 'Web Design',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title:
      'Building elegant data visualization experiences',
    category: 'Data Visualization',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    title:
      'Modern frontend interaction inspired by Framer',
    category: 'Frontend',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
]

export function BlogPreview() {
  return (
    <section className="section-spacing section-divider">

      <Container>

        <SectionTitle
          eyebrow="Insights"
          title="Latest Articles & Creative Thoughts"
          description="Exploring modern web design, frontend interaction, and meaningful digital experiences."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          {posts.map((post) => (
            <motion.article
              key={post.title}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                glass-card
                overflow-hidden
                rounded-[32px]
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  width={700}
                  height={500}
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                " />

                {/* CATEGORY */}
                <div className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  bg-white/70
                  px-4
                  py-2
                  backdrop-blur-xl
                ">
                  <p className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-wide
                    text-zinc-800
                  ">
                    {post.category}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                ">
                  <Clock3 className="h-4 w-4" />

                  <span>{post.readTime}</span>
                </div>

                <h3 className="
                  mt-5
                  text-2xl
                  font-semibold
                  leading-snug
                  tracking-tight
                  text-zinc-900
                  transition-colors
                  duration-300
                  group-hover:text-[#7B61FF]
                ">
                  {post.title}
                </h3>

                <div className="mt-8 flex items-center justify-between">

                  <p className="
                    text-sm
                    font-medium
                    text-zinc-600
                  ">
                    Read Article
                  </p>

                  <div className="
                    rounded-full
                    bg-[#7B61FF]/10
                    p-3
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  ">
                    <ArrowUpRight className="
                      h-5
                      w-5
                      text-[#7B61FF]
                    " />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}