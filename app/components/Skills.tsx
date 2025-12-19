'use client'

import { Zap, Code, Layout, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react'

const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
  { name: 'Cloudflare', logo: 'https://logo.svgcdn.com/logos/cloudflare.svg' },
  { name: 'Canva', logo: 'https://logo.svgcdn.com/devicon/canva-original.svg' },
  { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
  { name: 'RESTful API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Xampp', logo: 'https://www.svgrepo.com/show/354575/xampp.svg' },
]

const developmentApproach = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable and readable code',
    icon: Code,
  },
  {
    title: 'User Experience',
    description: 'Focusing on intuitive and accessible design',
    icon: Layout,
  },
  {
    title: 'Performance',
    description: 'Optimizing for speed and efficiency',
    icon: Zap,
  },
  {
    title: 'Best Practices',
    description: 'Following industry standards and patterns',
    icon: TrendingUp,
  },
];

export default function Skills() {
  // 只复制2次就够了，因为用JavaScript控制
  const duplicatedSkills = [...skills, ...skills]

  const [isDark, setIsDark] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollPosRef = useRef(0)
  const animationFrameRef = useRef<number>()

  // 主题检测
  // 主题检测（使用和 Hero 一样的方式）
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


  // JavaScript 滚动动画
  useEffect(() => {
    const scrollContent = scrollRef.current
    if (!scrollContent) return

    const scroll = () => {
      if (!isPaused) {
        scrollPosRef.current += 1 // 调整这个数字来改变速度

        // 当滚动到一半时重置（因为我们复制了2次）
        const halfWidth = scrollContent.scrollWidth / 2
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current = 0
        }

        scrollContent.style.transform = `translateX(-${scrollPosRef.current}px)`
      }

      animationFrameRef.current = requestAnimationFrame(scroll)
    }

    animationFrameRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPaused])

  const fadeColor = isDark ? '#090c13' : '#ffffff';

  return (
    <section
      id="skills"
      className="py-20 md:py-32 scroll-mt-20 overflow-hidden"
    >
      {/* Technical Skills Logo 滚动区域 */}
      <div className="mb-16">
        <div className="animate-[fadeIn_0.5s_ease-in_forwards]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-16 text-center">
            Technical Skills
          </h2>
        </div>

        <div className="relative overflow-hidden py-4">
          {/* 左侧渐变遮罩 */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          />

          {/* 右侧渐变遮罩 */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          />

          {/* 滚动容器 */}
          <div
            ref={scrollRef}
            className="flex gap-8 items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer flex flex-col items-center"
                title={skill.name}
              >
                <div className="w-24 h-24 flex items-center justify-center p-2 rounded-lg border border-gray-700 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300 hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <p
                  className="text-lg text-center mt-2 transition-colors whitespace-nowrap group-hover:text-lime-400"
                  style={{ color: isDark ? '#BDBDBD' : '#656565' }}
                >
                  {skill.name}
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Approach */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-bold mb-12 text-center">
          Development Approach
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {developmentApproach.map((approach) => {
            const IconComponent = approach.icon;
            return (
              <div
                key={approach.title}
                className="group relative p-8 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 shadow-xl hover:border-lime-400 dark:hover:border-lime-400"
              >
                <div className="absolute inset-0 bg-lime-400/5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] z-0" />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div   className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-400/10 text-lime-600 dark:text-lime-400 mr-3 transition-colors duration-300 group-hover:text-black"
                    style={{ color: isDark ? '#84cc16' : '#656565' }}
                    >
                      <IconComponent size={16} strokeWidth={3} stroke='currentColor'/>
                    </div>
                    <p className="font-semibold mb-2 text-lime-400 text-lg"
                    style={{ color: isDark ? '#84cc16' : '#656565' }}>{approach.title}</p>
                  </div>
                  <p className="text-base text-gray-500 transition-colors duration-300"
                  style={{ color: isDark ? '#BDBDBD' : '#656565' }}>
                    {approach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS 动画 */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}