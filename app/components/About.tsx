'use client'

import { Download, CornerDownRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const TERMINAL_COLOR = 'text-lime-400'
const BORDER_COLOR = 'border-lime-400'
const SHADOW_COLOR = 'shadow-lime-400/30'

interface ProfileData {
  name: string
  age: number
  role: string
  skills: string[]
  experience: string
  quickLearner: boolean
  problemSolver: boolean
}

interface ColorMap {
  keyword: string
  variable: string
  string: string
  boolean: string
  property: string
  number: string
  comment: string
}

const profileData: ProfileData = {
  name: "Bong Xiao Thung",
  age: 20,
  role: "Software Engineer",
  skills: ["Frontend", "Backend", "Database", "Tools"],
  experience: '4 months',
  quickLearner: true,
  problemSolver: true,
}

const colors: ColorMap = {
  keyword: 'text-white dark:text-white',
  variable: TERMINAL_COLOR,
  string: 'text-white dark:text-white',
  boolean: TERMINAL_COLOR,
  property: 'text-lime-200',
  number: 'text-white dark:text-white',
  comment: 'text-gray-600',
}

const formatCode = (data: ProfileData, colors: ColorMap, codeTerminalLine: string) => [
  { content: `<span class="${colors.comment}">// Executing JS Module: profile.js</span>` },
  { content: `<span class="${colors.keyword}">const</span> <span class="${colors.variable}">personalInfo</span> = <span class="${colors.keyword}">{"{"}</span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">name</span>: <span class="${colors.string}">"${data.name}"</span>,<span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">age</span>: <span class="${colors.number}">${data.age}</span>,</span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">role</span>: <span class="${colors.string}">${data.role}</span>,</span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">skills</span>: [ <span class="${colors.string}">${data.skills.join('" , "')}</span> ],</span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">experience</span>: <span class="${colors.string}">${data.experience}"</span>,</span>` },
  { content: `<span class="ml-4"><span class="${colors.property}">isAvailable</span>: <span class="${colors.variable}">()</span> <span class="${colors.keyword}">=></span> <span class="${colors.keyword}">{"{"}</span></span>` },
  { content: `<span class="ml-8"><span class="${colors.keyword}">return</span> <span class="${colors.boolean}">${data.quickLearner}</span> <span class="${colors.keyword}">&&</span> <span class="${colors.boolean}">${data.problemSolver}</span>;</span>` },
  { content: `<span class="ml-4">},</span>` },
  { content: `<span class="${colors.keyword}">}</span>;</span>` },
  { content: `<span class="${colors.comment}">// Object successfully initialized.</span>` },
  { content: `<span class="mt-4 ${codeTerminalLine}">EXECUTION COMPLETE.</span>` },
]

export default function About() {
  const [_isCodeVisible, setIsCodeVisible] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCodeVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

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

  const handleDownloadCV = () => {
    const link = document.createElement('a') // 1. 创建 <a>
    link.href = '/Resume-BongXiaoThung.pdf' // 2. 文件地址
    link.download = 'Bong_Xiao_Thung_Resume.pdf' // 3. 下载文件名
    link.click() // 4. 触发下载行为
  }

  const codeLines = formatCode(profileData, colors, TERMINAL_COLOR)
  const descriptionColor = isDark ? '#BDBDBD' : '#656565'

  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl leading-relaxed border-l-4 pl-4" style={{ color: descriptionColor, borderColor: descriptionColor }}>
            I'm a full-stack developer who improves through hands-on project building. I enjoy turning ideas into working products and learning step by step how to make websites faster, more intututive, and more user-friendly.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <motion.button
              onClick={handleDownloadCV}
              className={`px-6 py-3 bg-transparent ${TERMINAL_COLOR} rounded-md transition-all flex items-center space-x-2
            font-semibold border-2 ${BORDER_COLOR} hover:bg-lime-400/20 hover:shadow-lg ${SHADOW_COLOR}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ color: isDark ? '#84cc16' : '#656565' }}
            >
              <Download size={20} />
              <span>Download CV.pdf</span>
            </motion.button>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`bg-black p-4 rounded-xl font-mono text-base leading-relaxed
        border ${BORDER_COLOR} h-[450px] overflow-y-scroll hide-scrollbar`}
        >
          <p className={`${TERMINAL_COLOR} font-bold mb-4`}>
            $ dev-console --profile BongXiaoThung
          </p>

          <pre className="whitespace-pre-wrap text-base">
            {codeLines.map((line, index) => (
              <p key={index} className={`leading-6 ${TERMINAL_COLOR}`}>
                <span dangerouslySetInnerHTML={{ __html: line.content }} />
              </p>
            ))}
          </pre>
        </motion.div>
      </div>

      <style>{`
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .hide-scrollbar::-webkit-scrollbar {
      display: none;
      }
      `}
      </style>
    </section>
  )
}