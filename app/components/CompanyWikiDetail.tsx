'use client'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'


export default function ComputerWikiDetail() {
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)

  const getThemeColors = () => {

    const titleColor = isDark ? '#f3f4f6' : '#171717'
    const textColor = isDark ? '#d1d5db' : '#4b5563'
    const bgColor = isDark ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.8)'
    const borderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(209, 213, 219, 0.5)'

    return { titleColor, textColor, bgColor, borderColor }
  }

  const getTechColors = () => {
    const textColor = isDark ? '#84cc16' : '#4d7c0f'
    const bgColor = isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)'
    const borderColor = isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)'

    return { textColor, bgColor, borderColor }
  }

  const colors = getThemeColors()
  const techColors = getTechColors()

  return (
    <div className="min-h-screen py-8 md:py-12 px-3 md:px-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 p-2 md:p-3 rounded-full border backdrop-blur-sm hover:bg-white/10 transition-all group"
        style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor}}>

      </button>
    </div>
  )
}