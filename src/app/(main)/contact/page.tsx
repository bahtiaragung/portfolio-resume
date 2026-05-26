'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

import { motion } from 'framer-motion'

import {
  Mail,
  MapPin,
  Send,
} from 'lucide-react'

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa'

import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export default function ContactPage() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (e: any) => {

    e.preventDefault()

    setLoading(true)

    try {

      const form = e.target

      await emailjs.sendForm(
        'service_310gczp',
        'template_vad54hq',
        form,
        'mWlE2TorLIhpwICYG'
      )

      setSuccess(true)

      form.reset()

    } catch (error) {

      console.log(error)

      alert('Something went wrong.')

    }

    setLoading(false)
  }

  return (
    <main className="pt-40 pb-24">

      <Container>

        <section className="grid items-start gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7B61FF]">
              Contact
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-none tracking-tight text-zinc-900">
              Let’s create something meaningful.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600">
              Available for modern website design,
              frontend collaboration, creative projects,
              and data visualization experiences.
            </p>

            {/* INFO */}
            <div className="mt-10 space-y-4">

              {/* EMAIL */}
              <div className="glass-card flex items-center gap-4 rounded-[28px] p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B61FF]/10">

                  <Mail className="h-5 w-5 text-[#7B61FF]" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-zinc-900">
                    bahtiaragungcs@gmail.com
                  </h3>

                </div>
              </div>

              {/* LOCATION */}
              <div className="glass-card flex items-center gap-4 rounded-[28px] p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7B61FF]/10">

                  <MapPin className="h-5 w-5 text-[#7B61FF]" />

                </div>

                <div>

                  <p className="text-sm text-zinc-500">
                    Location
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-zinc-900">
                    Indonesia
                  </h3>

                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8 flex items-center gap-3">

              <a
                href="https://instagram.com/bahtiaragungcs"
                target="_blank"
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B61FF] hover:text-zinc-900"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/bahtiaragung"
                target="_blank"
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B61FF] hover:text-zinc-900"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/bahtiaragung"
                target="_blank"
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B61FF] hover:text-zinc-900"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://behance.net/agungbahtiar1"
                target="_blank"
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B61FF] hover:text-zinc-900"
              >
                <FaBehance className="h-5 w-5" />
              </a>

              <a
                href="https://dribbble.com/aynaraconcepts"
                target="_blank"
                className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-[#7B61FF] hover:text-zinc-900"
              >
                <FaDribbble className="h-5 w-5" />
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-[40px] p-8 md:p-10"
          >

            <form
              onSubmit={sendEmail}
              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="mb-3 block text-sm font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-14 w-full rounded-2xl border border-white/20 bg-white/60 px-5 outline-none backdrop-blur-xl"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="mb-3 block text-sm font-medium text-zinc-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hello@email.com"
                  className="h-14 w-full rounded-2xl border border-white/20 bg-white/60 px-5 outline-none backdrop-blur-xl"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="mb-3 block text-sm font-medium text-zinc-700">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-white/20 bg-white/60 px-5 py-4 outline-none backdrop-blur-xl"
                />

              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="h-14 w-full rounded-full bg-[#7B61FF] text-base hover:bg-[#6848ff]"
              >

                {loading
                  ? 'Sending...'
                  : success
                  ? 'Message Sent ✓'
                  : 'Send Message'
                }

                <Send className="ml-2 h-4 w-4" />

              </Button>

            </form>
          </motion.div>

        </section>
      </Container>
    </main>
  )
}