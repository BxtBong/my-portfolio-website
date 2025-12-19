'use client'

import { Code, Calendar, Layers, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  {
    label: "Projects Completed",
    value: "8+",
    suffix: "",
    icon: <Code size={24} />,
    color: "#84cc16"
  },
  {
    label: "Months Experience",
    value: "4+",
    suffix: "",
    icon: <Calendar size={24} />,
    color: "#3b82f6"
  },
  {
    label: "Tech Stack",
    value: "15+",
    suffix: "technologies",
    icon: <Layers size={24} />,
    color: "#8b5cf6"
  },
  {
    label: "Code Commits",
    value: "200+",
    suffix: "",
    icon: <Zap size={24} />,
    color: "#ef4444"
  }
]

export default function Stats() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    const handleThemeChange = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor
      const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,19)'
      setIsDark(isDarkMode)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })
    handleThemeChange()
    return () => observer.disconnect()
  }, [])

  const bgColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
  const textColor = isDark ? '#f3f4f6' : '#171717'
  const secondaryTextColor = isDark ? '#9ca3af' : '#6b7280'

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="p-6 rounded-2xl backdrop-blur-sm border"
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-right"
                >
                  <div className="text-3xl font-bold" style={{ color: textColor }}>
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-lg ml-1" style={{ color: secondaryTextColor }}>
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="text-sm" style={{ color: secondaryTextColor }}>
                {stat.label}
              </div>
              
              {/* 进度条动画 */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                className="h-1 mt-4 rounded-full"
                style={{ backgroundColor: `${stat.color}40` }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${70 + index * 10}%` }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: stat.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}