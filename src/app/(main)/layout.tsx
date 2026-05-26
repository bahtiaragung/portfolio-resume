import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import '@/app/globals.css'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

import { CursorGlow } from '@/components/animations/cursor-glow'
import { FloatingParticles } from '@/components/animations/floating-particles'
import { ScrollProgress } from '@/components/animations/scroll-progress'
import { BackgroundOrbs } from '@/components/animations/background-orbs'

import { BackToTop } from '@/components/ui/back-to-top'

import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Agung Portfolio',
  description: 'Modern portfolio website',
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>

        <ThemeProvider>

          <div className="gradient-bg" />

          <CursorGlow />

          <FloatingParticles />

          <ScrollProgress />

          <BackgroundOrbs />

          <Navbar />

          <main>
            {children}
          </main>

          <BackToTop />

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  )
}