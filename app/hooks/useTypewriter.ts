'use client'
import { useEffect, useRef, useState } from 'react'

interface TypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

const DEFAULT_OPTIONS: Required<TypewriterOptions> = {
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseTime: 1500,
}

export function useTypewriter(
  texts: string[],
  userOptions?: TypewriterOptions
) {
  const options = { ...DEFAULT_OPTIONS, ...userOptions }

  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const current = texts[currentIndex]

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, options.typingSpeed)
      } else {
        timerRef.current = setTimeout(
          () => setIsDeleting(true),
          options.pauseTime
        )
      }
    } else {
      if (displayText.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1))
        }, options.deletingSpeed)
      } else {
        setIsDeleting(false)
        setCurrentIndex((i) => (i + 1) % texts.length)
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [
    displayText,
    isDeleting,
    currentIndex,
    texts,
    options.typingSpeed,
    options.deletingSpeed,
    options.pauseTime,
  ])

  return displayText
}
