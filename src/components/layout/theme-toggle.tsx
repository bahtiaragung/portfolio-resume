'use client'

import { useEffect, useState } from 'react'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="
        glass-card
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
      "
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-zinc-900" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-900" />
      )}
    </button>
  )
}