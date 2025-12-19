// 'use client'

// import { ArrowLeft, ExternalLink, Github, Database, Search, Shield, Users, FileText, Layers, History, Zap, Code, Layout, TrendingUp, Eye } from 'lucide-react'
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'

// const projectDetails = {
//   title: 'Company Internal Wiki Backend',
//   description: 'A RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
//   fullDescription: 'A comprehensive internal documentation system built with Express.js (TypeScript) + MySQL + Elasticsearch. Features include user authentication, role-based access control, full-text search, Markdown editing, categorization, tagging, and detailed audit logging.',
//   technologies: ['Express.js', 'TypeScript', 'MySQL', 'Elasticsearch', 'Node.js', 'JWT', 'Docker'],
  
//   coreFeatures: [
//     {
//       title: 'Authentication & Authorization',
//       description: 'JWT-based authentication with role-based permissions (admin/editor/viewer)',
//       icon: Shield,
//       details: 'Secure login system with refresh tokens and role-based access control'
//     },
//     {
//       title: 'Full-Text Search',
//       description: 'Elasticsearch-powered search across all articles',
//       icon: Search,
//       details: 'Real-time search with relevance scoring and filtering'
//     },
//     {
//       title: 'Markdown Editor',
//       description: 'Rich text editor with real-time preview',
//       icon: FileText,
//       details: 'Support for images, code blocks, tables, and embeds'
//     },
//     {
//       title: 'Activity Logging',
//       description: 'Comprehensive audit trail for all CRUD operations',
//       icon: History,
//       details: 'Track all changes with user attribution and timestamps'
//     }
//   ],

//   userRoles: [
//     {
//       role: 'Admin',
//       permissions: [
//         'Manage all articles (CRUD)',
//         'Manage categories and tags',
//         'User enrollment and management',
//         'View system logs and activity',
//         'Access to all dashboard features'
//       ],
//       color: '#84cc16'
//     },
//     {
//       role: 'Editor',
//       permissions: [
//         'Create and edit own articles',
//         'Delete own articles',
//         'Browse all articles',
//         'Use categories and tags',
//         'View limited dashboard'
//       ],
//       color: '#84cc16'
//     },
//     {
//       role: 'Viewer',
//       permissions: [
//         'Browse all articles',
//         'Search and filter content',
//         'Read-only access',
//         'View own profile'
//       ],
//       color: '#84cc16'
//     }
//   ],

//   apiEndpoints: {
//     auth: [
//       'POST /login - User authentication',
//       'POST /refresh-token - Refresh JWT tokens',
//       'POST /user/enroll - Register new users (admin only)',
//       'GET /me - Get current user info'
//     ],
//     articles: [
//       'GET /articles - List articles',
//       'POST /articles - Create new article',
//       'GET /articles/:id - Get article details',
//       'PUT /articles/:id - Update article',
//       'DELETE /articles/:id - Soft delete article',
//       'GET /articles/search - Full-text search',
//       'PATCH /articles/restore/:id - Restore deleted article'
//     ],
//     categories: [
//       'GET /categories - List categories',
//       'POST /categories - Create category',
//       'PUT /categories/:id - Update category',
//       'DELETE /categories/:id - Soft delete',
//       'PATCH /categories/restore/:id - Restore category'
//     ],
//     tags: [
//       'GET /tags - List tags',
//       'POST /tags - Create tag',
//       'PUT /tags/:id - Update tag',
//       'DELETE /tags/:id - Soft delete',
//       'PATCH /tags/restore/:id - Restore tag'
//     ],
//     logs: [
//       'GET /logs - View activity logs',
//       'GET /logs/:type/:id - View detailed log'
//     ]
//   },

//   technicalFeatures: [
//     {
//       name: 'TypeScript Support',
//       description: 'Full TypeScript implementation for type safety',
//       icon: Code,
//       details: 'Strict typing with proper interfaces and types'
//     },
//     {
//       name: 'Database Design',
//       description: 'Normalized MySQL database schema',
//       icon: Database,
//       details: 'Optimized tables with proper relationships and indexing'
//     },
//     {
//       name: 'Search Engine',
//       description: 'Elasticsearch integration for fast search',
//       icon: Search,
//       details: 'Indexes all content with real-time synchronization'
//     },
//     {
//       name: 'Security',
//       description: 'Comprehensive security measures',
//       icon: Shield,
//       details: 'JWT tokens, password hashing, input validation'
//     },
//     {
//       name: 'Audit Logging',
//       description: 'Detailed change tracking',
//       icon: History,
//       details: 'Records all CRUD operations with before/after data'
//     },
//     {
//       name: 'User Management',
//       description: 'Flexible role-based system',
//       icon: Users,
//       details: 'Three-tier permission model with granular controls'
//     }
//   ],

//   projectStructure: {
//     backend: {
//       src: [
//         'controllers/ - Business logic',
//         'middleware/ - Auth and validation',
//         'models/ - Database models',
//         'routes/ - API endpoints',
//         'services/ - Database services',
//         'utils/ - Helper functions',
//         'types/ - TypeScript definitions',
//         'app.ts - Express app entry'
//       ]
//     },
//     frontend: {
//       components: [
//         'Sidebar - Navigation and categories',
//         'Docs.tsx - Article listing',
//         'DocDetail.tsx - Article view',
//         'EditorPage.tsx - Markdown editor',
//         'Dashboard.tsx - Admin dashboard',
//         'TagsManagement.tsx - Tag management',
//         'LogDetailPage.tsx - Activity log viewer'
//       ]
//     }
//   },

//   deployment: {
//     docker: 'Docker Compose setup with multi-container architecture',
//     services: ['Backend API', 'MySQL Database', 'Elasticsearch', 'Frontend'],
//     environment: 'Development and production-ready configurations'
//   },

//   screenshots: [
//     {
//       title: 'Dashboard',
//       description: 'Admin dashboard with stats and management tools',
//       url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
//     },
//     {
//       title: 'Article View',
//       description: 'Markdown content with table of contents',
//       url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80'
//     },
//     {
//       title: 'Article Editor',
//       description: 'Rich text editor with live preview',
//       url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
//     },
//     {
//       title: 'Activity Logs',
//       description: 'Detailed audit trail and change history',
//       url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
//     }
//   ],

//   links: {
//     github: 'https://github.com/your-username/company-wiki-backend',
//     liveDemo: '#',
//     backendRepo: 'https://github.com/your-username/company-wiki-backend',
//     frontendRepo: 'https://github.com/your-username/company-wiki-frontend'
//   }
// }

// export default function CompanyWikiDetail() {
//   const router = useRouter()
//   const [isDark, setIsDark] = useState(false)
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)
//   const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'features' | 'structure'>('overview')

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
//   const textColor = isDark ? '#d1d5db' : '#4b5563'
//   const bgColor = isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)'
//   const borderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(209, 213, 219, 0.5)'

//   const renderFeatureCard = (feature: any) => {
//     const Icon = feature.icon
//     return (
//       <div className="p-6 rounded-xl border transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10 group"
//            style={{ backgroundColor: bgColor, borderColor }}>
//         <div className="flex items-start gap-4">
//           <div className="p-3 rounded-lg bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
//             <Icon size={20} className="text-lime-400" />
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-lg" style={{ color: titleColor }}>
//               {feature.title || feature.name}
//             </h4>
//             <p className="mb-2 text-sm" style={{ color: textColor }}>
//               {feature.description}
//             </p>
//             {feature.details && (
//               <p className="text-xs opacity-75" style={{ color: textColor }}>
//                 {feature.details}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderRoleCard = (role: any, index: number) => (
//     <div key={index} className="p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] group"
//          style={{ backgroundColor: bgColor, borderColor, borderLeft: `4px solid ${role.color}` }}>
//       <div className="flex items-center gap-3 mb-4">
//         <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
//              style={{ backgroundColor: role.color }}>
//           {role.role.charAt(0)}
//         </div>
//         <h3 className="font-bold text-xl" style={{ color: titleColor }}>{role.role}</h3>
//       </div>
//       <ul className="space-y-2">
//         {role.permissions.map((permission: string, idx: number) => (
//           <li key={idx} className="flex items-start gap-2">
//             <span className="text-lime-400 mt-1">✓</span>
//             <span className="text-sm" style={{ color: textColor }}>{permission}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )

//   const renderApiEndpoint = (category: string, endpoints: string[]) => (
//     <div className="mb-6">
//       <h4 className="font-semibold mb-3 text-lg" style={{ color: titleColor }}>
//         {category.toUpperCase()}
//       </h4>
//       <div className="space-y-2">
//         {endpoints.map((endpoint, idx) => (
//           <div key={idx} className="font-mono text-sm p-3 rounded border"
//                style={{ backgroundColor: isDark ? 'rgba(55, 65, 81, 0.3)' : 'rgba(243, 244, 246, 0.8)', borderColor }}>
//             {endpoint}
//           </div>
//         ))}
//       </div>
//     </div>
//   )

//   return (
//     <div className="min-h-screen py-12 px-4 md:px-6">
//       {/* Back Button */}
//       <button
//         onClick={() => router.back()}
//         className="fixed top-6 left-6 z-50 p-3 rounded-full border backdrop-blur-sm hover:bg-white/10 transition-all group"
//         style={{ backgroundColor: bgColor, borderColor }}
//       >
//         <ArrowLeft size={20} style={{ color: titleColor }} className="group-hover:-translate-x-1 transition-transform" />
//       </button>

//       {/* Header */}
//       <div className="max-w-6xl mx-auto mb-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: titleColor }}>
//             {projectDetails.title}
//           </h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: textColor }}>
//             {projectDetails.fullDescription}
//           </p>
          
//           {/* Tech Stack */}
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {projectDetails.technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 rounded-full border font-mono text-sm transition-all hover:scale-105"
//                 style={{ 
//                   backgroundColor: isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)',
//                   borderColor: isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)',
//                   color: isDark ? '#84cc16' : '#4d7c0f'
//                 }}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8 border-b" style={{ borderColor }}>
//           <div className="flex gap-2">
//             {[
//               { id: 'overview', label: 'Overview', icon: Eye },              
//               { id: 'structure', label: 'Structure', icon: Layout },
//               { id: 'features', label: 'Features', icon: Zap },
//               { id: 'api', label: 'API', icon: Code }
//             ].map((tab) => {
//               const Icon = tab.icon
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id as any)}
//                   className={`px-6 py-3 rounded-t-lg flex items-center gap-2 transition-all ${activeTab === tab.id ? 'border-b-2' : 'opacity-70 hover:opacity-100'}`}
//                   style={{ 
//                     color: activeTab === tab.id ? '#84cc16' : textColor,
//                     borderBottomColor: activeTab === tab.id ? '#84cc16' : 'transparent'
//                   }}
//                 >
//                   <Icon size={18} />
//                   {tab.label}
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto">
//         {activeTab === 'overview' && (
//           <div className="space-y-16">
//             {/* Core Features */}
//             <section>
//               <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: titleColor }}>
//                 Core Features
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {projectDetails.coreFeatures.map((feature, index) => renderFeatureCard(feature))}
//               </div>
//             </section>

//             {/* User Roles */}
//             <section>
//               <h2 className="text-2xl font-bold mb-8 text-center">
//                 User Roles & Permissions
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {projectDetails.userRoles.map((role, index) => renderRoleCard(role, index))}
//               </div>
//             </section>

//             {/* Deployment */}
//             <section className="max-w-3xl mx-auto">
//               <h2 className="text-2xl font-bold mb-8 text-center">
//                 Deployment
//               </h2>
//               <div className="p-8 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 rounded-lg bg-lime-400/10">
//                     <Layers size={24} className="text-lime-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold" style={{ color: titleColor }}>Docker Architecture</h3>
//                     <p className="mt-2" style={{ color: textColor }}>{projectDetails.deployment.docker}</p>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <h4 className="font-semibold mb-3" style={{ color: titleColor }}>Services:</h4>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                     {projectDetails.deployment.services.map((service, idx) => (
//                       <div key={idx} className="text-center p-3 rounded-lg border"
//                            style={{ borderColor }}>
//                         <span style={{ color: textColor }}>{service}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         )}

//         {activeTab === 'features' && (
//           <div className="space-y-16">
//             {/* Technical Features */}
//             <section>
//               <h2 className="text-2xl font-bold mb-8" style={{ color: titleColor }}>
//                 Technical Features
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {projectDetails.technicalFeatures.map((feature, index) => renderFeatureCard(feature))}
//               </div>
//             </section>

//             {/* Project Structure */}
//             <section>
//               <h2 className="text-2xl font-bold mb-8" style={{ color: titleColor }}>
//                 Project Structure
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="p-6 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
//                   <h3 className="font-semibold mb-4 text-lg" style={{ color: titleColor }}>Backend</h3>
//                   <ul className="space-y-2">
//                     {projectDetails.projectStructure.backend.src.map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <span className="text-lime-400 mt-1">•</span>
//                         <span style={{ color: textColor }}>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="p-6 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
//                   <h3 className="font-semibold mb-4 text-lg" style={{ color: titleColor }}>Frontend Components</h3>
//                   <ul className="space-y-2">
//                     {projectDetails.projectStructure.frontend.components.map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <span className="text-lime-400 mt-1">•</span>
//                         <span style={{ color: textColor }}>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         )}

//         {activeTab === 'api' && (
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: titleColor }}>
//               API Reference
//             </h2>
//             <div className="p-8 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
//               {Object.entries(projectDetails.apiEndpoints).map(([category, endpoints]) => 
//                 renderApiEndpoint(category, endpoints as string[])
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === 'structure' && (
//           <div className="space-y-16">
//             {/* Screenshots */}
//             {/* <section>
//               <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: titleColor }}>
//                 Screenshots
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {projectDetails.screenshots.map((screenshot, index) => (
//                   <div key={index} className="group cursor-pointer">
//                     <div 
//                       className="aspect-video rounded-lg overflow-hidden mb-4 border transition-all duration-300 hover:border-lime-400/50 hover:shadow-xl"
//                       style={{ borderColor }}
//                       onClick={() => setSelectedImage(screenshot.url)}
//                     >
//                       <img
//                         src={screenshot.url}
//                         alt={screenshot.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>
//                     <h3 className="font-semibold mb-2" style={{ color: titleColor }}>
//                       {screenshot.title}
//                     </h3>
//                     <p className="text-sm" style={{ color: textColor }}>
//                       {screenshot.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </section> */}

//             <section>
//           <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: titleColor }}>
//             Screenshots
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projectDetails.screenshots.map((screenshot, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div
//                   className="aspect-video rounded-lg overflow-hidden mb-4 border transition-all duration-300 hover:border-lime-400/50 hover:shadow-xl"
//                   style={{ borderColor }}
//                   onClick={() => setSelectedImage(screenshot.url)}
//                 >
//                   <img
//                     src={screenshot.url}
//                     alt={screenshot.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <h3 className="font-semibold mb-2" style={{ color: titleColor }}>
//                   {screenshot.title}
//                 </h3>
//                 <p className="text-sm" style={{ color: textColor }}>
//                   {screenshot.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//             {/* Key Components */}
//             <section>
//               <h2 className="text-2xl font-bold mb-8" style={{ color: titleColor }}>
//                 Key Components
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   {
//                     title: 'Dashboard.tsx',
//                     description: 'Admin dashboard with comprehensive statistics and management tools',
//                     features: ['Real-time stats', 'Activity logs', 'Category/Tag management', 'Deleted article recovery']
//                   },
//                   {
//                     title: 'TagsManagement.tsx',
//                     description: 'Complete tag management interface',
//                     features: ['CRUD operations', 'Sorting & filtering', 'Soft delete/restore', 'Audit logging']
//                   },
//                   {
//                     title: 'LogDetailPage.tsx',
//                     description: 'Detailed change log viewer',
//                     features: ['Before/after comparison', 'JSON/Markdown view', 'User attribution', 'Timeline tracking']
//                   },
//                   {
//                     title: 'EditorPage.tsx',
//                     description: 'Rich Markdown editor',
//                     features: ['Live preview', 'Category selection', 'Tag management', 'Auto-suggest']
//                   },
//                   {
//                     title: 'Sidebar.tsx',
//                     description: 'Navigation and category browser',
//                     features: ['Category hierarchy', 'Article browsing', 'Search functionality', 'User management']
//                   },
//                   {
//                     title: 'DocDetail.tsx',
//                     description: 'Article viewer with advanced features',
//                     features: ['Table of contents', 'Markdown rendering', 'Edit/Delete controls', 'Meta information']
//                   }
//                 ].map((component, idx) => (
//                   <div key={idx} className="p-6 rounded-xl border group hover:border-lime-400/50 transition-all"
//                        style={{ backgroundColor: bgColor, borderColor }}>
//                     <h3 className="font-bold text-lg mb-3" style={{ color: titleColor }}>{component.title}</h3>
//                     <p className="text-sm mb-4" style={{ color: textColor }}>{component.description}</p>
//                     <div className="space-y-2">
//                       {component.features.map((feature, fIdx) => (
//                         <div key={fIdx} className="flex items-center gap-2">
//                           <div className="w-2 h-2 rounded-full bg-lime-400"></div>
//                           <span className="text-xs" style={{ color: textColor }}>{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         )}
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-[80vh]">
//             <img
//               src={selectedImage}
//               alt="Enlarged view"
//               className="w-full h-full object-contain rounded-lg"
//             />
//             <button
//               className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
//               onClick={() => setSelectedImage(null)}
//             >
//               <span className="text-white">✕</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


'use client'

import { ArrowLeft, ExternalLink, Github, Database, Search, Shield, Users, FileText, Layers, History, Zap, Code, Layout, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const projectDetails = {
  title: 'Company Internal Wiki Backend',
  description: 'A RESTful internal wiki with role-based access control, full-text search, and Markdown editing for company documentation.',
  fullDescription: 'A comprehensive internal documentation system built with Express.js (TypeScript) + MySQL + Elasticsearch. Features include user authentication, role-based access control, full-text search, Markdown editing, categorization, tagging, and detailed audit logging.',
  technologies: ['Express.js', 'TypeScript', 'MySQL', 'Elasticsearch', 'Node.js', 'JWT', 'Docker'],
  
  coreFeatures: [
    {
      title: 'Authentication & Authorization',
      description: 'JWT-based authentication with role-based permissions (admin/editor/viewer)',
      icon: Shield,
      details: 'Secure login system with refresh tokens and role-based access control'
    },
    {
      title: 'Full-Text Search',
      description: 'Elasticsearch-powered search across all articles',
      icon: Search,
      details: 'Real-time search with relevance scoring and filtering'
    },
    {
      title: 'Markdown Editor',
      description: 'Rich text editor with real-time preview',
      icon: FileText,
      details: 'Support for images, code blocks, tables, and embeds'
    },
    {
      title: 'Activity Logging',
      description: 'Comprehensive audit trail for all CRUD operations',
      icon: History,
      details: 'Track all changes with user attribution and timestamps'
    }
  ],

  userRoles: [
    {
      role: 'Admin',
      permissions: [
        'Manage all articles (CRUD)',
        'Manage categories and tags',
        'User enrollment and management',
        'View system logs and activity',
        'Access to all dashboard features'
      ],
      color: '#84cc16'
    },
    {
      role: 'Editor',
      permissions: [
        'Create and edit own articles',
        'Delete own articles',
        'Browse all articles',
        'Use categories and tags',
        'View limited dashboard'
      ],
      color: '#84cc16'
    },
    {
      role: 'Viewer',
      permissions: [
        'Browse all articles',
        'Search and filter content',
        'Read-only access',
        'View own profile'
      ],
      color: '#84cc16'
    }
  ],

  apiEndpoints: {
    auth: [
      'POST /login - User authentication',
      'POST /refresh-token - Refresh JWT tokens',
      'POST /user/enroll - Register new users (admin only)',
      'GET /me - Get current user info'
    ],
    articles: [
      'GET /articles - List articles',
      'POST /articles - Create new article',
      'GET /articles/:id - Get article details',
      'PUT /articles/:id - Update article',
      'DELETE /articles/:id - Soft delete article',
      'GET /articles/search - Full-text search',
      'PATCH /articles/restore/:id - Restore deleted article'
    ],
    categories: [
      'GET /categories - List categories',
      'POST /categories - Create category',
      'PUT /categories/:id - Update category',
      'DELETE /categories/:id - Soft delete',
      'PATCH /categories/restore/:id - Restore category'
    ],
    tags: [
      'GET /tags - List tags',
      'POST /tags - Create tag',
      'PUT /tags/:id - Update tag',
      'DELETE /tags/:id - Soft delete',
      'PATCH /tags/restore/:id - Restore tag'
    ],
    logs: [
      'GET /logs - View activity logs',
      'GET /logs/:type/:id - View detailed log'
    ]
  },

  technicalFeatures: [
    {
      name: 'TypeScript Support',
      description: 'Full TypeScript implementation for type safety',
      icon: Code,
      details: 'Strict typing with proper interfaces and types'
    },
    {
      name: 'Database Design',
      description: 'Normalized MySQL database schema',
      icon: Database,
      details: 'Optimized tables with proper relationships and indexing'
    },
    {
      name: 'Search Engine',
      description: 'Elasticsearch integration for fast search',
      icon: Search,
      details: 'Indexes all content with real-time synchronization'
    },
    {
      name: 'Security',
      description: 'Comprehensive security measures',
      icon: Shield,
      details: 'JWT tokens, password hashing, input validation'
    },
    {
      name: 'Audit Logging',
      description: 'Detailed change tracking',
      icon: History,
      details: 'Records all CRUD operations with before/after data'
    },
    {
      name: 'User Management',
      description: 'Flexible role-based system',
      icon: Users,
      details: 'Three-tier permission model with granular controls'
    }
  ],

  projectStructure: {
    backend: {
      src: [
        'controllers/ - Business logic',
        'middleware/ - Auth and validation',
        'models/ - Database models',
        'routes/ - API endpoints',
        'services/ - Database services',
        'utils/ - Helper functions',
        'types/ - TypeScript definitions',
        'app.ts - Express app entry'
      ]
    },
    frontend: {
      components: [
        'Sidebar - Navigation and categories',
        'Docs.tsx - Article listing',
        'DocDetail.tsx - Article view',
        'EditorPage.tsx - Markdown editor',
        'Dashboard.tsx - Admin dashboard',
        'TagsManagement.tsx - Tag management',
        'LogDetailPage.tsx - Activity log viewer'
      ]
    }
  },

  deployment: {
    docker: 'Docker Compose setup with multi-container architecture',
    services: ['Backend API', 'MySQL Database', 'Elasticsearch', 'Frontend'],
    environment: 'Development and production-ready configurations'
  },

  screenshots: [
    {
      title: 'Dashboard',
      description: 'Admin dashboard with stats and management tools',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'Article View',
      description: 'Markdown content with table of contents',
      url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80'
    },
    {
      title: 'Article Editor',
      description: 'Rich text editor with live preview',
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      title: 'Activity Logs',
      description: 'Detailed audit trail and change history',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    }
  ],

  links: {
    github: 'https://github.com/your-username/company-wiki-backend',
    liveDemo: '#',
    backendRepo: 'https://github.com/your-username/company-wiki-backend',
    frontendRepo: 'https://github.com/your-username/company-wiki-frontend'
  }
}

export default function CompanyWikiDetail() {
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'features' | 'structure'>('overview')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    const handleThemeChange = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor
      const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,19)' || document.body.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] })
    handleThemeChange()
    
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const titleColor = isDark ? '#f3f4f6' : '#171717'
  const textColor = isDark ? '#d1d5db' : '#4b5563'
  const bgColor = isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)'
  const borderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(209, 213, 219, 0.5)'

  const renderFeatureCard = (feature: any) => {
    const Icon = feature.icon
    return (
      <div className="p-6 rounded-xl border transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10 group"
           style={{ backgroundColor: bgColor, borderColor }}>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
            <Icon size={20} className="text-lime-400" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg" style={{ color: titleColor }}>
              {feature.title || feature.name}
            </h4>
            <p className="mb-2 text-sm" style={{ color: textColor }}>
              {feature.description}
            </p>
            {feature.details && (
              <p className="text-xs opacity-75" style={{ color: textColor }}>
                {feature.details}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderRoleCard = (role: any, index: number) => (
    <div key={index} className="p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] group"
         style={{ backgroundColor: bgColor, borderColor, borderLeft: `4px solid ${role.color}` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
             style={{ backgroundColor: role.color }}>
          {role.role.charAt(0)}
        </div>
        <h3 className="font-bold text-xl" style={{ color: titleColor }}>{role.role}</h3>
      </div>
      <ul className="space-y-2">
        {role.permissions.map((permission: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-lime-400 mt-1">✓</span>
            <span className="text-sm" style={{ color: textColor }}>{permission}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderApiEndpoint = (category: string, endpoints: string[]) => (
    <div className="mb-6">
      <h4 className="font-semibold mb-3 text-lg" style={{ color: titleColor }}>
        {category.toUpperCase()}
      </h4>
      <div className="space-y-2">
        {endpoints.map((endpoint, idx) => (
          <div key={idx} className="font-mono text-sm p-3 rounded border"
               style={{ backgroundColor: isDark ? 'rgba(55, 65, 81, 0.3)' : 'rgba(243, 244, 246, 0.8)', borderColor }}>
            {endpoint}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen py-8 md:py-12 px-3 md:px-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 md:top-6 left-4 md:left-6 z-50 p-2 md:p-3 rounded-full border backdrop-blur-sm hover:bg-white/10 transition-all group"
        style={{ backgroundColor: bgColor, borderColor }}
      >
        <ArrowLeft size={18} className="md:size-[20px]" style={{ color: titleColor }} />
      </button>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6 md:mb-8 pt-12 md:pt-0">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: titleColor }}>
            {projectDetails.title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 px-2" style={{ color: textColor }}>
            {projectDetails.fullDescription}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-2">
            {projectDetails.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border font-mono text-xs md:text-sm transition-all hover:scale-105"
                style={{ 
                  backgroundColor: isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)',
                  borderColor: isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)',
                  color: isDark ? '#84cc16' : '#4d7c0f'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
            {projectDetails.links.github && (
              <a
                href={projectDetails.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:px-6 md:py-3 rounded-lg border flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
                style={{ 
                  backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)',
                  borderColor,
                  color: titleColor
                }}
              >
                <Github size={16} className="md:size-[18px]" />
                View Source Code
              </a>
            )}
            {projectDetails.links.liveDemo && (
              <a
                href={projectDetails.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 md:px-6 md:py-3 rounded-lg border flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
                style={{ 
                  backgroundColor: isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)',
                  borderColor: isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)',
                  color: isDark ? '#84cc16' : '#4d7c0f'
                }}
              >
                <ExternalLink size={16} className="md:size-[18px]" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Tabs - 修复响应式问题 */}
        <div className="mb-6 md:mb-8">
          {/* 移动端下拉菜单 */}
          <div className="md:hidden mb-4 px-2">
            <select 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as any)}
              className="w-full p-3 rounded-lg border backdrop-blur-sm"
              style={{ 
                backgroundColor: bgColor, 
                borderColor,
                color: titleColor
              }}
            >
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'structure', label: 'Structure' },
                { id: 'features', label: 'Features' },
                { id: 'api', label: 'API' }
              ].map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* 桌面端水平标签 */}
          <div className="hidden md:flex justify-center border-b" style={{ borderColor }}>
            <div className="flex gap-1 overflow-x-auto pb-1 px-2">
              {[
                { id: 'overview', label: 'Overview', icon: Eye },
                { id: 'structure', label: 'Structure', icon: Layout },
                { id: 'features', label: 'Features', icon: Zap },
                { id: 'api', label: 'API', icon: Code }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 md:px-6 py-3 rounded-t-lg flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-b-2' : 'opacity-70 hover:opacity-100'}`}
                    style={{ 
                      color: activeTab === tab.id ? '#84cc16' : textColor,
                      borderBottomColor: activeTab === tab.id ? '#84cc16' : 'transparent'
                    }}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-12 md:space-y-16 px-2">
            {/* Core Features */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: titleColor }}>
                Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projectDetails.coreFeatures.map((feature, index) => renderFeatureCard(feature))}
              </div>
            </section>

            {/* User Roles */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
                User Roles & Permissions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {projectDetails.userRoles.map((role, index) => renderRoleCard(role, index))}
              </div>
            </section>

            {/* Deployment */}
            <section className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
                Deployment
              </h2>
              <div className="p-4 md:p-8 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-lime-400/10">
                    <Layers size={20} className="md:size-[24px] text-lime-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold" style={{ color: titleColor }}>Docker Architecture</h3>
                    <p className="mt-2 text-sm md:text-base" style={{ color: textColor }}>{projectDetails.deployment.docker}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-sm md:text-base" style={{ color: titleColor }}>Services:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    {projectDetails.deployment.services.map((service, idx) => (
                      <div key={idx} className="text-center p-2 md:p-3 rounded-lg border"
                           style={{ borderColor }}>
                        <span className="text-sm md:text-base" style={{ color: textColor }}>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-12 md:space-y-16 px-2">
            {/* Technical Features */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: titleColor }}>
                Technical Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {projectDetails.technicalFeatures.map((feature, index) => renderFeatureCard(feature))}
              </div>
            </section>

            {/* Project Structure */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: titleColor }}>
                Project Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="p-4 md:p-6 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
                  <h3 className="font-semibold mb-3 md:mb-4 text-lg" style={{ color: titleColor }}>Backend</h3>
                  <ul className="space-y-2">
                    {projectDetails.projectStructure.backend.src.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lime-400 mt-1">•</span>
                        <span className="text-sm md:text-base" style={{ color: textColor }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 md:p-6 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
                  <h3 className="font-semibold mb-3 md:mb-4 text-lg" style={{ color: titleColor }}>Frontend Components</h3>
                  <ul className="space-y-2">
                    {projectDetails.projectStructure.frontend.components.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lime-400 mt-1">•</span>
                        <span className="text-sm md:text-base" style={{ color: textColor }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="max-w-4xl mx-auto px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: titleColor }}>
              API Reference
            </h2>
            <div className="p-4 md:p-8 rounded-xl border" style={{ backgroundColor: bgColor, borderColor }}>
              {Object.entries(projectDetails.apiEndpoints).map(([category, endpoints]) => 
                renderApiEndpoint(category, endpoints as string[])
              )}
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div className="space-y-12 md:space-y-16 px-2">
            {/* Screenshots */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: titleColor }}>
                Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {projectDetails.screenshots.map((screenshot, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div 
                      className="aspect-video rounded-lg overflow-hidden mb-3 md:mb-4 border transition-all duration-300 hover:border-lime-400/50 hover:shadow-xl"
                      style={{ borderColor }}
                      onClick={() => setSelectedImage(screenshot.url)}
                    >
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base" style={{ color: titleColor }}>
                      {screenshot.title}
                    </h3>
                    <p className="text-xs md:text-sm" style={{ color: textColor }}>
                      {screenshot.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Components */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: titleColor }}>
                Key Components
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    title: 'Dashboard.tsx',
                    description: 'Admin dashboard with comprehensive statistics and management tools',
                    features: ['Real-time stats', 'Activity logs', 'Category/Tag management', 'Deleted article recovery']
                  },
                  {
                    title: 'TagsManagement.tsx',
                    description: 'Complete tag management interface',
                    features: ['CRUD operations', 'Sorting & filtering', 'Soft delete/restore', 'Audit logging']
                  },
                  {
                    title: 'LogDetailPage.tsx',
                    description: 'Detailed change log viewer',
                    features: ['Before/after comparison', 'JSON/Markdown view', 'User attribution', 'Timeline tracking']
                  },
                  {
                    title: 'EditorPage.tsx',
                    description: 'Rich Markdown editor',
                    features: ['Live preview', 'Category selection', 'Tag management', 'Auto-suggest']
                  },
                  {
                    title: 'Sidebar.tsx',
                    description: 'Navigation and category browser',
                    features: ['Category hierarchy', 'Article browsing', 'Search functionality', 'User management']
                  },
                  {
                    title: 'DocDetail.tsx',
                    description: 'Article viewer with advanced features',
                    features: ['Table of contents', 'Markdown rendering', 'Edit/Delete controls', 'Meta information']
                  }
                ].map((component, idx) => (
                  <div key={idx} className="p-4 md:p-6 rounded-xl border group hover:border-lime-400/50 transition-all"
                       style={{ backgroundColor: bgColor, borderColor }}>
                    <h3 className="font-bold text-base md:text-lg mb-3" style={{ color: titleColor }}>{component.title}</h3>
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: textColor }}>{component.description}</p>
                    <div className="space-y-2">
                      {component.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-lime-400"></div>
                          <span className="text-xs" style={{ color: textColor }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-white">✕</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}