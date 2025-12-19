// 'use client'

// import { Download, CornerDownRight } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'

// const TERMINAL_COLOR = 'text-lime-400'
// const BORDER_COLOR = 'border-lime-400'
// const SHADOW_COLOR = 'shadow-lime-400/30'

// interface ProfileData {
//   name: string
//   age: number
//   role: string
//   skills: string[]
//   experience: string
//   quickLearner: boolean
//   problemSolver: boolean
// }

// interface ColorMap {
//   keyword: string
//   variable: string
//   string: string
//   boolean: string
//   property: string
//   number: string
//   comment: string
// }

// const profileData: ProfileData = {
//   name: "Bong Xiao Thung",
//   age: 20,
//   role: "Software Engineer",
//   skills: ["Frontend", "Backend", "Database", "Tools"],
//   experience: '4 months',
//   quickLearner: true,
//   problemSolver: true,
// }

// const colors: ColorMap = {
//   keyword: 'text-white dark:text-white',
//   variable: TERMINAL_COLOR,
//   string: 'text-white dark:text-white',
//   boolean: TERMINAL_COLOR,
//   property: 'text-lime-200',
//   number: 'text-white dark:text-white',
//   comment: 'text-gray-600',
// }

// const formatCode = (data: ProfileData, colors: ColorMap, codeTerminalLine: string) => [
//   { content: `<span class="${colors.comment}">// Executing JS Module: profile.js</span>` },
//   { content: `<span class="${colors.keyword}">const</span> <span class="${colors.variable}">personalInfo</span> = <span class="${colors.keyword}">{"{"}</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">name</span>: <span class="${colors.string}">"${data.name}"</span>,</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">age</span>: <span class="${colors.number}">${data.age}</span>,</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">role</span>: <span class="${colors.string}">"${data.role}"</span>,</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">skills</span>: [ <span class="${colors.string}">"${data.skills.join('" , "')}"</span> ],</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">experience</span>: <span class="${colors.string}">"${data.experience}"</span>,</span>` },
//   { content: `<span class="ml-4"><span class="${colors.property}">isAvailable</span>: <span class="${colors.variable}">()</span> <span class="${colors.keyword}">=></span> <span class="${colors.keyword}">{"{"}</span></span>` },
//   { content: `<span class="ml-8"><span class="${colors.keyword}">return</span> <span class="${colors.boolean}">${data.quickLearner}</span> <span class="${colors.keyword}">&&</span> <span class="${colors.boolean}">${data.problemSolver}</span>;</span>` },
//   { content: `<span class="ml-4">},</span>` },
//   { content: `<span class="${colors.keyword}">}</span>;</span>` },
//   { content: `<span class="${colors.comment}">// Object successfully initialized.</span>` },
//   { content: `<span class="mt-4 ${codeTerminalLine}">EXECUTION COMPLETE.</span>` },
// ]

// export default function About() {
//   const [isCodeVisible, setIsCodeVisible] = useState(false)
//   useEffect(() => {
//     const timer = setTimeout(() => setIsCodeVisible(true), 100)
//     return () => clearTimeout(timer)
//   }, [])

//   const handleDownloadCV = () => {
//     const link = document.createElement('a')
//     link.href = '/cv.pdf'
//     link.download = 'Bong_Xiao_Thung_CV.pdf'
//     link.click()
//   }

//   const codeLines = formatCode(profileData, colors, TERMINAL_COLOR)

//   return (
//     <section id="about" className="py-24 md:py-32 scroll-mt-20">
//       <div className="max-w-[1024px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

//         {/* 左侧文本 */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-8"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">
//             About Me
//           </h2>
//           <p className="text-xl leading-relaxed text-gray-900 dark:text-gray-500 border-l-4 pl-4">
//             I'm a full-stack developer who improves through hands-on project building. I enjoy turning ideas into working products and learning step by step how to make websites faster, more intuitive, and more user-friendly.
//           </p>

//           <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
//             <motion.button
//               onClick={handleDownloadCV}
//               className={`px-6 py-3 bg-transparent ${TERMINAL_COLOR} rounded-md transition-all flex items-center space-x-2 
//               font-semibold border-2 ${BORDER_COLOR} hover:bg-lime-400/20 hover:shadow-lg ${SHADOW_COLOR}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Download size={20} />
//               <span>Download CV.pdf</span>
//             </motion.button>

//             <a
//               href="/cv_online"
//               className={`text-gray-600 dark:text-gray-400 hover:${TERMINAL_COLOR} transition-colors flex items-center space-x-1 font-mono text-lg`}
//             >
//               <CornerDownRight size={18} className="mt-0.5" />
//               <span className="hover:underline">View interactive data</span>
//             </a>
//           </div>
//         </motion.div>

//         {/* 右侧代码 */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className={`bg-black p-4 rounded-xl font-mono text-base leading-relaxed 
//             border ${BORDER_COLOR} h-[450px] overflow-y-scroll hide-scrollbar`}
//         >
//           <p className={`${TERMINAL_COLOR} font-bold mb-4`}>
//             $ dev-console --profile BongXiaoThung
//           </p>

//           <pre className="whitespace-pre-wrap text-base">
//             {codeLines.map((line, index) => (
//               <p key={index} className={`leading-6 ${TERMINAL_COLOR}`}>
//                 <span dangerouslySetInnerHTML={{ __html: line.content }} />
//               </p>
//             ))}
//           </pre>
//         </motion.div>

//       </div>

//       <style>{`
//         /* 隐藏滚动条但允许滚动 */
//         .hide-scrollbar {
//           -ms-overflow-style: none;  /* IE 和 Edge */
//           scrollbar-width: none;  /* Firefox */
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;  /* Chrome, Safari 和 Opera */
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

// 确保在文件顶部引入了必要的图标
import { Zap, Code, Layout, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react'

// 技能的 Logo URLs (使用 CDN 或可访问的图片)
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
  { name: 'Cloudflare', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Cloudflare_logo.svg' },
  { name: 'Canva', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Canva_Logo.png' },
  { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
  { name: 'RESTful API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Xampp', logo: 'https://www.svgrepo.com/show/354575/xampp.svg' },
]

const developmentApproach = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable and readable code',
    icon: Code, // 💻 代码图标
  },
  {
    title: 'User Experience',
    description: 'Focusing on intuitive and accessible design',
    icon: Layout, // 🎨 布局/设计图标
  },
  {
    title: 'Performance',
    description: 'Optimizing for speed and efficiency',
    icon: Zap, // ⚡ 闪电图标
  },
  {
    title: 'Best Practices',
    description: 'Following industry standards and patterns',
    icon: TrendingUp, // ✅ 趋势/最佳实践图标
  },
];


export default function Skills() {
  // 💡 无缝滚动需要复制一份列表
  const duplicatedSkills = [...skills, ...skills]

  const [isDark, setIsDark] = useState(false)

  // --- Theme Detection Logic ---
  useEffect(() => {
    // 监听 prefers-color-scheme 和 body class
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      // 假设你的 Dark Mode 使用 'dark' class 或 prefers-color-scheme
      setIsDark(mediaQuery.matches || document.body.classList.contains('dark'));
    };

    updateTheme(); // 初始化

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, [])

  // 💡 动态计算渐变颜色 (假设背景色为 Dark Mode: #090c13, Light Mode: #ffffff)
  // 如果你的背景色不同，请修改这两个值
  const fadeColor = isDark ? '#090c13' : '#ffffff';
  const gradientLeft = `linear-gradient(to right, ${fadeColor} 0%, rgba(255,255,255,0) 100%)`;
  const gradientRight = `linear-gradient(to left, ${fadeColor} 0%, rgba(255,255,255,0) 100%)`;
  // -----------------------------


  return (
    <section
      id="skills"
      className="py-20 md:py-32 scroll-mt-20 overflow-hidden"
    >
      {/* ############################## Technical Skills Logo 滚动区域 ############################## */}
      <div className="mb-16">
        <div className="animate-[fadeIn_0.5s_ease-in_forwards]">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">Technical Skills</h2>
        </div>

        <div className="relative overflow-hidden py-4">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"></div>
          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"></div>

          {/* 滚动容器 */}
          <div className="flex gap-8 animate-scroll items-center">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer flex flex-col items-center"
                title={skill.name}
              >
                {/* Logo 容器大小 80px，悬停略微放大 */}
                <div className="w-24 h-24 flex items-center justify-center p-2 rounded-lg border border-gray-700 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300 hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <p className="text-lg text-center mt-2 text-gray-400 group-hover:text-lime-400 transition-colors whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ############################## Development Approach 网格 (新设计 & 动态颜色) ############################## */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-semibold mb-12 text-center">
          Development Approach
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {developmentApproach.map((approach) => {
            const IconComponent = approach.icon;
            return (
              <div
                key={approach.title}
                // 卡片边框颜色调整，并确保在亮模式下边框可见
                className="group relative p-8 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 shadow-xl hover:border-lime-400 dark:hover:border-lime-400"
              >
                {/* 1. 背景聚焦效果 */}
                <div
                  className="absolute inset-0 bg-lime-400/5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />

                {/* 2. 边框发光效果 */}
                <div
                  className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(132,204,22,0.5)] z-0"
                />

                {/* 3. 内容层 */}
                <div className="relative z-10">
                  {/* 💡 图标和标题水平对齐 */}
                  <div className="flex items-center mb-4">
                    {/* 图标容器 */}
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-400/10 text-lime-600 dark:text-lime-400 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black"
                    >
                      <IconComponent size={16} strokeWidth={3} />
                    </div>

                    {/* 标题 - 动态颜色调整 */}
                    <p className="font-semibold mb-2 text-lime-400 text-lg">{approach.title}</p>

                  </div>

                  {/* 描述 - 动态颜色调整 */}
                  <p className="text-base text-gray-500 transition-colors duration-300">
                    {approach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ############################## CSS 动画 ############################## */}
      <style jsx>{`
        /* 💡 Logo 滚动动画 (针对 2x 列表，无缝循环) */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        /* 标题进入动画 */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite; /* 40秒完成一次循环 */
        }

        /* 鼠标悬停时暂停滚动 */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}