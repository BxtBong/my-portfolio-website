

// 'use client'

// import { ExternalLink, Github } from 'lucide-react'
// import { useState, useEffect } from 'react'

// const projects = [
//   {
//     title: 'E-Commerce Furniture Website',
//     description: 'A full-featured e-commerce platform for furniture shopping with customer accounts, admin dashboard, and sales reporting.',
//     stack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
//     image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&q=80',
//     github: '#',
//     live: '#',
//   },
//   {
//     title: 'Company Internal Wiki',
//     description: 'RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
//     stack: ['React.js', 'TypeScript', 'Express.js', 'MySQL', 'Elasticsearch', 'Docker'],
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
//     github: '#',
//     live: '#',
//   },
//   {
//     title: 'Interview Form Management System',
//     description: 'Full-stack Next.js app for managing candidate interview forms with invitation codes, pre-filled forms, and admin dashboard.',
//     stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1'],
//     image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80',
//     github: '#',
//     live: 'https://interview-form-1.xiaothung-bong.workers.dev',
//   },
// ]

// export default function Projects() {
//   const [isDark, setIsDark] = useState(false)

//   // Theme Detection (保持不变)
//   useEffect(() => {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     setIsDark(prefersDark)

//     const handleThemeChange = () => {
//       const bodyBg = window.getComputedStyle(document.body).backgroundColor
//       const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,19)' || document.body.classList.contains('dark')
//       setIsDark(isDarkMode)
//     }

//     const observer = new MutationObserver(handleThemeChange)
//     observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] })
//     handleThemeChange()
//     return () => observer.disconnect()
//   }, [])

//   const titleColor = isDark ? '#f3f4f6' : '#171717'
//   const linkBaseClass = "w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-400/30"

//   return (
//     <section id="work" className="py-24 md:py-32 scroll-mt-20">
//       <div className="max-w-[1024px] mx-auto px-6">
//         {/* Header */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-12" style={{ color: titleColor }}>
//           Selected Projects
//         </h2>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="group">
//               {/* Project Card */}
//               <div className="relative aspect-video rounded-2xl overflow-hidden group focus-within:ring-4 focus-within:ring-lime-400/50">
//                 {/* Background Image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                 />
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
//                   {/* Title */}
//                   <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
//                     <h3 className="text-lg md:text-lg font-bold text-white mb-3">
//                       {project.title}
//                     </h3>
//                     {/* <p className="text-gray-300 text-base">
//                       {project.description}
//                     </p> */}
//                   </div>

//                   {/* Bottom Bar */}
//                   <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-200">
//                     {/* Tech Stack
//                     <div className="flex flex-wrap gap-2">
//                       {project.stack.slice(0, 4).map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-lime-400/20 backdrop-blur-sm text-lime-100 text-sm font-mono rounded-full border border-lime-400/30 shadow-md"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.stack.length > 4 && (
//                         <span className="px-3 py-1 bg-lime-400/20 backdrop-blur-sm text-lime-100 text-sm font-mono rounded-full border border-lime-400/30 shadow-md">
//                           +{project.stack.length - 4} More
//                         </span>
//                       )}
//                     </div> */}

//                     {/* Action Icons */}
//                     <div className="flex gap-3">
//                       {project.github && project.github !== '#' && (
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={linkBaseClass}
//                           onClick={(e) => e.stopPropagation()}
//                           aria-label="View GitHub repository"
//                         >
//                           <Github size={16} />
//                         </a>
//                       )}
//                       {project.live && project.live !== '#' && (
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={linkBaseClass}
//                           onClick={(e) => e.stopPropagation()}
//                           aria-label="View live demo"
//                         >
//                           <ExternalLink size={16} />
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Project Counter (显示总数) */}
//         <div className="text-center mt-12">
//           <p className="font-mono text-sm" style={{ color: titleColor }}>
//             Showing {projects.length} projects
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { ExternalLink, Github, Eye } from 'lucide-react' // 添加 Eye 图标
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation' // 添加路由

const projects = [
  {
    title: 'E-Commerce Furniture Website',
    description: 'A full-featured e-commerce platform for furniture shopping with customer accounts, admin dashboard, and sales reporting.',
    stack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    image: 'https://binus.ac.id/malang/wp-content/uploads/2020/09/Temukan-penjelasan-lengkap-tentang-apa-yang-membuat-furniture-berkualitas-baik.jpg',
    github: '#',
    live: 'https://drive.google.com/drive/folders/1X8pQGMCVesxqtFiPZr7ki_ETe0GyySWM',
    details: '/projects/ecommerce' // 添加详情页面路由
  },
  {
    title: 'Company Internal Wiki',
    description: 'RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
    stack: ['React.js', 'TypeScript', 'Express.js', 'MySQL', 'Elasticsearch', 'Docker'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    // github: '#',
    // live: '#',
    // details: '/projects/company-wiki' // 添加详情页面路由

  },
  {
    title: 'Interview Form Management System',
    description: 'Full-stack Next.js app for managing candidate interview forms with invitation codes, pre-filled forms, and admin dashboard.',
    stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80',
    github: '#',
    live: 'https://interview-form-1.xiaothung-bong.workers.dev',
    details: '/projects/interview-form' // 添加详情页面路由

  },
]

export default function Projects() {
  const [isDark, setIsDark] = useState(false)
  const router = useRouter() // 初始化路由

  // Theme Detection (保持不变)
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    const handleThemeChange = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor
      const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,19)' || document.body.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] })
    handleThemeChange()
    return () => observer.disconnect()
  }, [])

  const titleColor = isDark ? '#f3f4f6' : '#171717'
  const linkBaseClass = "w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-lime-400/30"

  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12" style={{ color: titleColor }}>
          Selected Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Card */}
              <div className="relative aspect-video rounded-2xl overflow-hidden group focus-within:ring-4 focus-within:ring-lime-400/50">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                  {/* Title */}
                  <div className="flex items-center  justify-between">
                    <h3 className="text-lg md:text-lg font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkBaseClass}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View GitHub repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkBaseClass}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {/* 添加 View Details 按钮 */}
                      {project.details && (
                        <button
                          onClick={() => router.push(project.details)}
                          className={linkBaseClass}
                          aria-label="View project details"
                        >
                          <Eye size={16} />
                        </button>
                      )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-12">
          <p className="font-mono text-sm" style={{ color: titleColor }}>
            Showing {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  )
}
