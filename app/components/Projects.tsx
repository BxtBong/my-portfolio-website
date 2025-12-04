// 'use client'

// import { motion } from 'framer-motion'
// import { ExternalLink, Github, Eye } from 'lucide-react'

// const projects = [
//   {
//     title: 'E-Commerce Furniture Website',
//     description: 'A full-featured e-commerce platform for furniture shopping with customer accounts, admin dashboard, and sales reporting.',
//     stack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
//     github: '#',
//     live: '#',
//     details: '#',
//   },
//   {
//     title: 'Company Internal Wiki',
//     description: 'RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
//     stack: ['React.js', 'TypeScript', 'Express.js', 'MySQL', 'Elasticsearch', 'Docker'],
//     github: '#',
//     live: '#',
//     details: '#',
//   },
//   {
//     title: 'Interview Form Management System',
//     description: 'Full-stack Next.js app for managing candidate interview forms with invitation codes, pre-filled forms, and admin dashboard.',
//     stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1'],
//     github: '#',
//     live: 'https://interview-form-1.xiaothung-bong.workers.dev',
//     details: '#',
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="work" className="section-padding py-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-2xl md:text-3xl font-bold mb-12">
//           <span className="code-text mr-2">03.</span>
//           Selected Projects
//         </h2>

//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors hover-lift"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.stack.map((tech) => (
//                       <span
//                         key={tech}
//                         className="code-text px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex items-center space-x-4">
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                       >
//                         <Github size={18} />
//                         <span>Code</span>
//                       </a>
//                     )}
                    
//                     {project.live && (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                       >
//                         <ExternalLink size={18} />
//                         <span>Live Demo</span>
//                       </a>
//                     )}
                    
//                     {project.details && (
//                       <a
//                         href={project.details}
//                         className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
//                       >
//                         <Eye size={18} />
//                         <span>View Details</span>
//                       </a>
//                     )}
//                   </div>
//                 </div>

//                 {/* 项目图片占位符 */}
//                 <div className="lg:w-64 h-48 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
//                   <div className="text-center p-4">
//                     <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 dark:bg-gray-700 rounded-lg" />
//                     <p className="code-text text-sm">Project Preview</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Furniture Website',
    description: 'A full-featured e-commerce platform for furniture shopping with customer accounts, admin dashboard, and sales reporting.',
    stack: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    github: '#',
    live: '#',
    details: '#',
  },
  {
    title: 'Company Internal Wiki',
    description: 'RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
    stack: ['React.js', 'TypeScript', 'Express.js', 'MySQL', 'Elasticsearch', 'Docker'],
    github: '#',
    live: '#',
    details: '#',
  },
  {
    title: 'Interview Form Management System',
    description: 'Full-stack Next.js app for managing candidate interview forms with invitation codes, pre-filled forms, and admin dashboard.',
    stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1'],
    github: '#',
    live: 'https://interview-form-1.xiaothung-bong.workers.dev',
    details: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="section-padding py-20 scroll-mt-20">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          <span className="code-text mr-2">03.</span>
          Selected Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="code-text px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className="lg:w-64 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-80" />
                    <p className="code-text text-sm">Project Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}