// 'use client'

// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail } from 'lucide-react'

// export default function Hero() {
//   const socialLinks = [
//     {
//       icon: <Github size={20} />,
//       href: 'https://github.com/BxtBong',
//       label: 'GitHub',
//     },
//     {
//       icon: <Linkedin size={20} />,
//       href: '#',
//       label: 'LinkedIn',
//     },
//     {
//       icon: <Mail size={20} />,
//       href: 'mailto:bongxiaothung@gmail.com',
//       label: 'Email',
//     },
//   ]

//   return (
//     <section id="hero" className="section-padding py-20 md:py-32">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl"
//       >
//         <p className="code-text mb-4">Hi, my name is</p>
        
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Bong Xiao Thung.
//         </h1>
        
//         <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-6">
//           Software Engineer.
//         </h2>
        
//         <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
//           I'm an early-stage developer passionate about creating simple, functional, 
//           and user-friendly web experiences.
//         </p>

//         {/* Social Links */}
//         <div className="flex items-center space-x-4">
//           {socialLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               aria-label={link.label}
//               className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hover-lift"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {link.icon}
//             </a>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/BxtBong',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:bongxiaothung@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <section id="hero" className="section-padding py-20 md:py-32 scroll-mt-20">
      <div className="max-w-4xl">
        <p className="code-text mb-4 animate-fade-in">Hi, my name is</p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Bong Xiao Thung.
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-6 animate-fade-in">
          Software Engineer.
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in">
          I'm an early-stage developer passionate about creating simple, functional, 
          and user-friendly web experiences.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hover-lift"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}