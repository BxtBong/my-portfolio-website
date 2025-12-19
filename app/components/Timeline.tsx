'use client'

import { Calendar, Code, GraduationCap, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const timelineData = [
  {
    year: "2023",
    title: "开始编程之旅",
    description: "开始系统学习HTML, CSS, JavaScript基础",
    icon: <Code size={20} />,
    color: "#84cc16"
  },
  {
    year: "2024 Q1",
    title: "深入学习前端技术",
    description: "掌握React, Next.js, TypeScript等现代前端框架",
    icon: <GraduationCap size={20} />,
    color: "#3b82f6"
  },
  {
    year: "2024 Q2",
    title: "后端技术探索",
    description: "学习Node.js, Express, 数据库设计, RESTful API开发",
    icon: <Code size={20} />,
    color: "#8b5cf6"
  },
  {
    year: "2024 Q3",
    title: "第一个完整项目",
    description: "独立开发并部署了E-Commerce Furniture Website全栈项目",
    icon: <Briefcase size={20} />,
    color: "#ef4444"
  },
  {
    year: "2024 Q4",
    title: "持续学习和优化",
    description: "关注性能优化, 用户体验, 学习DevOps和部署最佳实践",
    icon: <GraduationCap size={20} />,
    color: "#f59e0b"
  }
]

export default function Timeline() {
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

  const textColor = isDark ? '#f3f4f6' : '#171717'
  const secondaryTextColor = isDark ? '#9ca3af' : '#6b7280'
  const borderColor = isDark ? '#374151' : '#d1d5db'
  const bgColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'

  return (
    <section className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: textColor }}>
            Learning Journey
          </h2>

          <div className="relative">
            {/* 时间轴线 */}
            <div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
              style={{ backgroundColor: borderColor }}
            />

            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative mb-12 flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* 时间节点 */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 transform -translate-x-1/2"
                    style={{ 
                      backgroundColor: item.color,
                      border: `3px solid ${bgColor}`
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* 内容卡片 */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div 
                      className="p-6 rounded-2xl border backdrop-blur-sm"
                      style={{
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} style={{ color: item.color }} />
                        <span className="font-semibold" style={{ color: item.color }}>
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2" style={{ color: textColor }}>
                        {item.title}
                      </h3>
                      
                      <p className="text-base" style={{ color: secondaryTextColor }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* 连接线 (只在桌面显示) */}
                  <div className="hidden md:block absolute left-1/2 top-4 w-6 h-0.5" 
                    style={{ 
                      backgroundColor: borderColor,
                      left: 'calc(50% - 3px)'
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}