// 'use client'
// import { useEffect, useState } from "react";
// import { Github, Mail, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react'
// import { motion } from "framer-motion";


// export default function Footer() {
//   const [isDark, setIsDark] = useState(false)
//   const currentYear = new Date().getFullYear()

//   const primaryColor = '#84cc16'

//   const contactInfo = [

//     {
//       icon: <Mail size={20} />,
//       title: 'Email',
//       value: 'bongxiaothung@gmail.com',
//       href: 'mailto:bongxiaothung@gmail.com',
//       color: primaryColor,
//     },
//     {
//       icon: <Phone size={20} />,
//       title: 'Phone',
//       value: '+601129993353',
//       href: 'tel:+601129993353',
//       color: primaryColor,
//     },
//     {
//       icon: <MapPin size={20} />,
//       title: 'Location',
//       value: 'Malaysia',
//       href: '#',
//       color: primaryColor
//     },
//   ]

//   const socialLinks = [
//     {
//       icon: <Github size={20} />,
//       label: 'GitHub',
//       href: 'https://github.com/BxtBong',
//       color: primaryColor,
//     },
//     {
//       icon: <ExternalLink size={20} />,
//       label: 'Portfolio',
//       href: '#',
//       color: primaryColor,
//     },
//   ]

//   useEffect(() => {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     setIsDark(prefersDark)

//     const handleThemeChange = () => {
//       const bodyBg = window.getComputedStyle(document.body).backgroundColor
//       const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,9)'
//       setIsDark(isDarkMode)
//     }

//     const observer = new MutationObserver(handleThemeChange)
//     observer.observe(document.body, { attributes: true, attributeFilter: ['style']})
//     handleThemeChange()
//     return () => observer.disconnect()
//   }, [])

//   const textColor = isDark ? '#f3f4f6' : '#171717'
//   const secondaryTextColor = isDark ? '#9ca3af' : '#6b7280'
//   const borderColor = isDark ? '#374151' : '#d1d5db'

//   return (
//     <>
//     <section id="contact" className="py-24 md:py-32 scroll-mt-20">
//       <div className="max-w-[1024px] mx-auto px-6">
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-5" style={{ color: textColor }}>
//             Get In Touch
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <h3 className="text-xl font-semibold" style={{ color: primaryColor }}>
//                 Contact Information
//               </h3>

//               <div className="space-y-6">
//                 {contactInfo.map((item, index) => (
//                   <motion.a
//                   key={item.title}
//                   href={item.href}
//                   className="flex items-start space-x-4 group cursor-pointer"
//                   initial={{ opacity: 0, x: -20}}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ x: 5 }}
//                   >
//                     <div
//                     className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       backgroundColor: `${primaryColor}15`,
//                       border: `1px solid ${primaryColor}30`,
//                     }}>
//                       <div style={{ color: primaryColor }}>
//                         {item.icon}
//                       </div>
//                     </div>

//                     <div>
//                       <p className="font-medium" style={{ color: textColor }}>
//                         {item.title}
//                       </p>

//                       <p className="text-sm" style={{ color: secondaryTextColor }}>
//                         {item.value}
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-8">
//               <h3 className="text-xl font-semibold" style={{ color: primaryColor}}>
//                 Connect With Me
//               </h3>

//               <p style={{ color: secondaryTextColor }}>
//                 Feel free to reach out for collaborations, opportunities, or just to say hello!
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 {socialLinks.map((link, index) => (
//                   <motion.a
//                   key={link.label}
//                   href={ link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium group"
//                   initial={{ opacity: 0, y: 20}}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{
//                     y: -3,
//                     scale: 1.05,
//                   }}
//                   style={{
//                     backgroundColor: `${primaryColor}15`,
//                     border: `1px solid ${primaryColor}30`,
//                     color: primaryColor,
//                   }}>
//                     {link.icon}
//                     <span>{link.label}</span>

//                     <div
//                     className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
//                     style={{ color: primaryColor }}
//                     >
//                       <ExternalLink size={16} />
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <footer
//     className="py-8 border-t backdrop-blur-sm"
//     style={{borderColor}}
//     >
//       <div className="max-w-[1024px] mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="">

//             <p 
//             className="font-mono text-sm"
//             style={{ color: secondaryTextColor }}
//             >
//               © {currentYear} Bong Xiao Thung. All rights reserved.
//             </p>
//           </div>

//           <div className="flex items-center space-x-6">
//             <a
//             href="#hero"
//             className="text-sm transition-all duration-300 hover:scale-105"
//             style={{ color: secondaryTextColor }}
//             >
//               Back to Top
//             </a>
//             <a
//             href="/Resume-BongXiaoThung.pdf"
//             className="text-sm transition-all duration-300 hover:scale-105"
//             style={{ color: secondaryTextColor }}
//             >
//               Download Resume
//             </a>
//             <div
//             className="w-1 h-1 rounded-full"
//             style={{ backgroundColor: secondaryTextColor}}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 pt-8 text-center" style={{ borderColor }}>
//         <p 
//         className="text-sm font-mono tracking-wider"
//         style={{ color: secondaryTextColor}}
//         >
//           Built with Next.js • Typescript • Tailwind CSS
//         </p>

//         <p
//         className="text-xs mt-2 opacity-75"
//         style={{ color: secondaryTextColor }}
//         >
//           Last updated: {new Date().toLocaleDateString('en-Us', { month: 'long', year: 'numeric' })}
//         </p>
//       </div>
//     </footer>
//     </>
//   )
// }

'use client'
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'; // 添加路由钩子
import { Github, Mail, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react'
import { motion } from "framer-motion";


export default function Footer() {
  const [isDark, setIsDark] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  const primaryColor = '#84cc16'

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'bongxiaothung@gmail.com',
      href: 'mailto:bongxiaothung@gmail.com',
      color: primaryColor,
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+601129993353',
      href: 'tel:+601129993353',
      color: primaryColor,
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Malaysia',
      href: '#',
      color: primaryColor
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/BxtBong',
      color: primaryColor,
    },
    {
      icon: <ExternalLink size={20} />,
      label: 'Portfolio',
      href: '#',
      color: primaryColor,
    },
  ]

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    const handleThemeChange = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor
      const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,9)'
      setIsDark(isDarkMode)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['style']})
    handleThemeChange()
    return () => observer.disconnect()
  }, [])

  // 🔧 处理导航点击
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 如果是外部链接或特殊链接，保持默认行为
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return
    }

    e.preventDefault()
    
    // 如果是 # 开头的锚点链接
    if (href.startsWith('#')) {
      const targetId = href.slice(1)
      
      // 如果不在主页，先跳转到主页
      if (pathname !== '/') {
        router.push(`/${href}`)
      } else {
        // 在主页直接滚动
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const textColor = isDark ? '#f3f4f6' : '#171717'
  const secondaryTextColor = isDark ? '#9ca3af' : '#6b7280'
  const borderColor = isDark ? '#374151' : '#d1d5db'

  return (
    <>
    <section id="contact" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-5" style={{ color: textColor }}>
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold" style={{ color: primaryColor }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                  key={item.title}
                  href={item.href}
                  className="flex items-start space-x-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20}}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <div
                    className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${primaryColor}15`,
                      border: `1px solid ${primaryColor}30`,
                    }}>
                      <div style={{ color: primaryColor }}>
                        {item.icon}
                      </div>
                    </div>

                    <div>
                      <p className="font-medium" style={{ color: textColor }}>
                        {item.title}
                      </p>

                      <p className="text-sm" style={{ color: secondaryTextColor }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold" style={{ color: primaryColor}}>
                Connect With Me
              </h3>

              <p style={{ color: secondaryTextColor }}>
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium group"
                  initial={{ opacity: 0, y: 20}}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  style={{
                    backgroundColor: `${primaryColor}15`,
                    border: `1px solid ${primaryColor}30`,
                    color: primaryColor,
                  }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.icon}
                    <span>{link.label}</span>

                    <div
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    style={{ color: primaryColor }}
                    >
                      <ExternalLink size={16} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <footer
    className="py-8 border-t backdrop-blur-sm"
    style={{borderColor}}
    >
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="">
            <p 
            className="font-mono text-sm"
            style={{ color: secondaryTextColor }}
            >
              © {currentYear} Bong Xiao Thung. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
            href="#hero"
            className="text-sm transition-all duration-300 hover:scale-105"
            style={{ color: secondaryTextColor }}
            onClick={(e) => handleNavClick(e, '#hero')}
            >
              Back to Top
            </a>
            <a
            href="/Resume-BongXiaoThung.pdf"
            className="text-sm transition-all duration-300 hover:scale-105"
            style={{ color: secondaryTextColor }}
            download
            >
              Download Resume
            </a>
            <div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: secondaryTextColor}}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 text-center" style={{ borderColor }}>
        <p 
        className="text-sm font-mono tracking-wider"
        style={{ color: secondaryTextColor}}
        >
          Built with Next.js • Typescript • Tailwind CSS
        </p>

        <p
        className="text-xs mt-2 opacity-75"
        style={{ color: secondaryTextColor }}
        >
          Last updated: {new Date().toLocaleDateString('en-Us', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </footer>
    </>
  )
}