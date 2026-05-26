'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
}: AnimatedCounterProps) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0

    const duration = 1500
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment

      if (start >= value) {
        setCount(value)

        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}