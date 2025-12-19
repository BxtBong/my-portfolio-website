'use client'
import { ArrowLeft, Bell, Code, Database, ExternalLink, Eye, FormInput, icons, Key, Layers, Link as LinkIcon, Shield, TrendingUp, X, History } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"


const projectDetails = {
    title: 'Interview Form Management System',
    description: 'A full-stack system for generating and managing interview invitation links with Microsoft Forms integration.',
    fulldescription: 'A comprehensive HR management system built with Next.js + Cloudflare D1. Features include invitation code generation, Microsoft Forms integration, real-time tracking, and secure access control for managing candidate interviews.',
    technologies: ['Next.js', 'TypeScript', 'Cloudflare D1', 'OpenNext.js', 'Tailwind CSS', 'REST API'],
    links: {
        liveDemo: 'https://interview-form-1.xiaothung-bong.workers.dev'
    },

    coreFeatures: [
        {
            title: 'Invitation Management',
            description: 'Generate, edit, and delete unique 6-digit invitation codes for candidates',
            icon: Key,
            details: 'Unique code generation with validation and duplicate prevention'
        },
        {
            title: 'Microsoft Forms Integration',
            description: 'Dynamic form link generation with pre-filled candidate data',
            icon: FormInput,
            details: 'Auto-populate form fields (code, name, email) in Microsoft Forms'
        },
        {
            title: 'Multi-Form Support',
            description: 'Support for multiple form templates with different field mappings',
            icon: Layers,
            details: 'Configurable forms with custom field IDs and base URLs'
        },
        {
            title: 'Usage Tracking',
            description: 'Track when invitations are used with timestamp logging',
            icon: History,
            details: 'Records first usage time and provides audit trail'
        }
    ],

    systemArchitecture: [
        {
            component: 'Frontend (Next.js)',
            description: 'React-based admin dashboard and public invitation pages',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', ],
            endpoints: [
                'Admin Dashboard - /dashboard',
                'Invitation List - /invitations',
                'Forms Management - /forms',
                'Public Redirection - /[code]'
            ]
        },
        {
            component: 'Backend API Routes',
            description: 'Serverless API endpoints for data operations',
            technologies: ['Next.js Route Handlers', 'Cloudflare D1', 'TypeScript'],
            endpoints: [
                'Authentication - /api/auth/login',
                'Invitations - /api/invitations/*',
                'Forms - /api/forms/*',
                'Public - /[code]/route.ts'
            ]
        },
        {
            component: 'Database (Cloudflare D1)',
            description: 'SQLite-based edge database with optimized schema',
            technologies: ['SQLite', 'D1', 'Indexes', 'Foreign Keys'],
            tables: ['admins', 'invitations', 'forms']
        },
        {
            component: 'Deployment',
            description: 'Edge-first deployment with Cloudflare Workers',
            technologies: ['Cloudflare Workers', 'OpenNext.js', 'Wrangler'],
            features: ['Global edge network', 'Serverless functions', 'Auto-scaling']
        }
    ],

    technicalFeatures: [
        {
            name: 'TypeScript Safety',
            description: 'Full TypeScript implementation with strict typing',
            icon: Code,
            details: 'Interfaces for all database entities and API requests'
        },
        {
            name: 'Edge Database',
            description: 'Cloudflare D1 for global low-latency access',
            icon: Database,
            details: 'SQLite-compatible with automatic replication'
        },
        {
            name: 'Secure Authentication',
            description: 'Bcrypt password hashing with JWT-ready architecture',
            icon: Shield,
            details: 'Password encryption and session management'
        },
        {
            name: 'URL Encoding',
            description: 'Proper URL parameter encoding for form links',
            icon: LinkIcon,
            details: 'encodeURIComponent with + to %20 replacement'
        },
        {
            name: 'Error Handling',
            description: 'Efficient data loading with pagination support',
            icon: Bell,
            details: 'Limits/offset with total count calculation'
        },
        {
            name: 'Pagination',
            description: 'Efficient data loading with pagination support',
            icon: TrendingUp,
            details: 'Limit/offset with total count calculation'
        }
    ],

    securityFeatures: [
        'Bcrypt password hashing for admin accounts',
        'Input validation on all API endpoints',
        'SQL injection prevention via D1 prepared statements',
        'Email format validation',
        'Format dependency checks before deletion'
    ],

    workflows: [
        {
            step: 1,
            title: 'HR Admin Login',
            description: 'Admin authenticates via secure login page',
            endpoint: 'POST /api/auth/login',
            data: 'username, password'
        },
        {
            step: 2,
            title: 'Create Invitation',
            description: 'Generate new invitation with candidate details',
            endpoint: 'POST /api/invitations/generate',
            data: 'candidateName, candidateEmail, createdBy, formId'
        },
        {
            step: 3,
            title: 'Send to candidate',
            description: 'Candidate receives invitation link via email',
            link: 'https://yourdomain.com/123456'
        },
        {
            step: 4,
            title: 'Access Form',
            description: 'Candidate clicks link, gets redirected to Microsoft Form',
            endpoint: 'GET /[code]',
            actions: 'Validates code, records usage, redirects to form',
        },
        {
            step: 5,
            title: 'Track Usage',
            description: 'HR can see which invitations have been used',
            endpoint: 'GET /api/invitations/list',
            data: 'used_at timestamp displayed in dashboard'
        }
    ],
    keyComponents: {
        frontend: [
            {
                name: 'Dashboard',
                description: 'Main admin interface with statistics',
                features: ['Invitation overview', 'Quick actions', 'Recent activity']
            },
            {
                name: 'Invitation Management',
                description: 'CRUD interface for invitation management',
                features: ['List view with pagination', 'Edit inline', 'Bulk actions']
            },
            {
                name: 'Forms Configuration',
                description: 'Manage Microsoft Forms templates',
                features: ['Add/Edit forms', 'Field mapping', 'Activation toggle']
            }
        ],
        backend: [
            {
                name: 'Route Handlers',
                description: 'API endpoints for all operations',
                location: 'src/app/api/**/route.ts'
            },
            {
                name: 'Database Context',
                description: 'Cloudflare D1 integration via OpenNext.js',
                function: 'getCloudflareContext() with proper encoding'
            }
        ]
    },
    screenshots: [
        {
            title: 'Admin dashboard',
            description: 'Overview of invitations and forms',
            url: '/Dashboard.png'
        },
        {
            title: 'Invitation Management',
            description: 'Microsoft Forms setip interface',
            url: '/Invitation.png'
        },
        {
            title: 'Form Configuration',
            description: 'Microsoft Forms setup interface',
            url: '/Form.png'
        }
    ]
}

export default function InterviewFormDetail() {
    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState<'overview' | 'workflow'>('overview')
    const [isDark, setIsDark] = useState(false)
    const [_isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        //window.matchMedia(...) 本身只是一个「检测器」, .matches拿答案
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(prefersDark)

        const handleThemeChange = () => {
            const bodyBg = window.getComputedStyle(document.body).backgroundColor
            const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || document.body.classList.contains('dark')
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

    const getThemeColors = () => {
        const titleColor = isDark ? '#f3f4f6' : '#171717'
        const textColor = isDark ? '#d1d5db' : '#4b5563'
        const bgColor = isDark ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.8)'
        const borderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(209, 213, 219, 0.5)'

        return { titleColor, textColor, bgColor, borderColor }
    }

    const getTechColors = () => {
        const textColor = isDark ? '#84cc16' : '#4d7c0f'
        const bgColor = isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)'
        const borderColor = isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)'

        return { textColor, bgColor, borderColor }
    }

    const techColors = getTechColors()
    const colors = getThemeColors()

    const renderFeatureCard = (feature: any) => {
        const Icon = feature.icon
        return (
            <div className="p-6 rounded-xl border transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10 group"
                style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
                        <Icon size={20} className="text-lime-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-lg" style={{ color: colors.titleColor }}>
                            {feature.title || feature.name}
                        </h4>
                        <p className="mb-2 text-sm" style={{ color: colors.textColor }}>
                            {feature.description}
                        </p>
                        {feature.details && (
                            <p className="text-xs opacity-75" style={{ color: colors.textColor }}>
                                {feature.details}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const renderArchitectureCard = (component: any) => (
        <div key={component.component} className="p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] group"
            style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-lime-500">
                    {component.component.charAt(0)}
                </div>
                <div>
                    <h3 className="font-bold text-lg" style={{ color: colors.titleColor }}>{component.component}</h3>
                    <p className="text-sm opacity-75" style={{ color: colors.textColor }}>{component.description}</p>
                </div>
            </div>

            <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech: string, idx: number) => (
                        <span className="px-2 py-1 text-xs rounded bg-lime-400/10" style={{ color: techColors.textColor }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-semibold mb-2" style={{ color: colors.titleColor }}>Endpoint/Tables:</h4>
                <ul className="space-y-1">
                    {component.endpoints?.map((endpoint: string, idx: number) => (
                        <li key={idx} className="text-xs flex items-start gap-2">
                            <span className="text-lime-400 mt-1">•</span>
                            <span style={{ color: colors.textColor }}>{endpoint}</span>
                        </li>
                    ))}
                    {component.tables?.map((table: string, idx: number) => (
                        <li key={idx} className="text-xs flex items-start gap-2">
                            <span className="text-lime-400 mt-1">•</span>
                            <span style={{ color: colors.textColor }}>{table}</span>
                        </li>
                    ))}
                    {component.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="text-xs flex items-start gap-2">
                            <span className="text-lime-400 mt-1">•</span>
                            <span style={{ color: colors.textColor }}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

    const renderWorkflowStep = (step: any) => (
        <div
            key={step.step}
            className="flex gap-5 items-start mb-5"
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white font-bold">
                {step.step}
            </div>
            <div className="flex-1">
                <h4 className="font-semibold mb-2 text-lg" style={{ color: colors.titleColor }}>
                    {step.title}
                </h4>
                <p className="mb-2" style={{ color: colors.textColor }}>
                    {step.description}
                </p>
                {step.endpoint && (
                    <div className="font-mono text-sm p-2 rounded bg-lime-400/5 mb-2">{step.endpoint}</div>
                )}
                {step.data && (
                    <div className="text-sm opacity-75" style={{ color: colors.textColor }}>
                        Data: {step.data}
                    </div>
                )}
                {step.link && (
                    <a href={step.link} className="hover:underline text-sm" style={{ color: techColors.textColor }}>
                        {step.link}
                    </a>
                )}
            </div>
        </div>
    )


    return (
        <div className="min-h-screen py-8 md:py-12 px-3 md:px-6">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="fixed top-4 md:top-6 left-4 md:left-6 z-50 p-2 md:p-3 rounded-full border backdrop-blur-sm hover:bg-white/10 transition-all group"
                style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}
            >
                <ArrowLeft size={18} className="md:size-[20px]" style={{ color: colors.titleColor }} />
            </button>

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.titleColor }}>
                        {projectDetails.title}
                    </h1>
                    <p className="text-lg md:text-xl max-auto mb-8" style={{ color: colors.textColor }}>
                        {projectDetails.fulldescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-2">
                        {projectDetails.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 md:py-2  md:px-4 rounded-full border font-mono text-xs md:text-sm transition-all hover:scale-105"
                                style={{
                                    backgroundColor: techColors.bgColor, borderColor: techColors.borderColor, color: getTechColors().textColor
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
                        {projectDetails.links.liveDemo && (
                            <a
                                href={projectDetails.links.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 md:px-6 md:py-3 rounded-lg border flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
                                style={{ backgroundColor: techColors.bgColor, borderColor: techColors.borderColor, color: techColors.textColor }}
                            >
                                <ExternalLink size={16} className="md:size-[18px]" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Tabs Responsive */}
                <div className="mb-6 md:mb-8">
                    {/* mobile dropdown */}
                    <div className="md:hidden mb-4 px-2">
                        <select
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value as any)}
                            className="w-full p-3 rounded-lg border backdrop-blur-sm"
                            style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor, color: colors.titleColor }}
                        >
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'workflow', label: 'Workflow' }
                            ].map((tab) => (
                                <option key={tab.id} value={tab.id}>
                                    {tab.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* desktop  */}
                    <div className="hidden md:flex justify-center" style={{ borderColor: colors.borderColor }}>
                        <div className="flex gap-1 overflow-x-auto pb-1 px-2">
                            {[
                                { id: 'overview', label: 'Overview', icon: Eye },
                                { id: 'workflow', label: 'Workflow', icon: TrendingUp },
                            ].map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`px-4 md:px-6 py-3 rounded-t-lg flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'border-b-2' : 'opacity-70 hover:opacity-100'}`}
                                        style={{
                                            color: activeTab === tab.id ? techColors.textColor : colors.textColor,
                                            borderBottomColor: activeTab === tab.id ? techColors.textColor : colors.textColor
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
                    <div className="space-y-12 md:space-y-16">
                        {/* Core Features */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: colors.titleColor }}>
                                Screenshots
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {projectDetails.screenshots.map((screenshot, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div
                                            className="aspect-video rounded-lg overflow-hidden mb-3 md:mb-4 border transition-all duration-300 hover:border-lime-400/50 hover:shadow-xl"
                                            style={{ borderColor: colors.borderColor }}
                                            onClick={() => setSelectedImage(screenshot.url)}
                                        >
                                            <img
                                                src={screenshot.url}
                                                alt={screenshot.title}
                                                className="w-full h-full object-cover transition-transform durartion-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base" style={{ color: colors.titleColor }}>
                                            {screenshot.title}
                                        </h3>
                                        <p className="text-xs md:text-sm" style={{ color: colors.textColor }}>
                                            {screenshot.description}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="px-2">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: colors.titleColor }}>
                                Core Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {projectDetails.coreFeatures.map((feature, index) => renderFeatureCard(feature))}
                            </div>
                        </section>

                        {/* System Architecture */}
                        <section className="px-2">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{ color: colors.titleColor }}>
                                System Architecture
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {projectDetails.systemArchitecture.map((component) => renderArchitectureCard(component))}
                            </div>
                        </section>

                        {/* Technical Features */}
                        <section className="px-2">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: colors.titleColor }}>
                                Technical Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                {projectDetails.technicalFeatures.map((feature, index) => renderFeatureCard(feature))}
                            </div>
                        </section>

                        {/* Security Features */}
                        <section className="max-w-3xl mx-auto px-2">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: colors.titleColor }}>
                                Security Features
                            </h2>
                            <div className="p-6 md:p-8 rounded-xl border" style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-lime-400/10">
                                        <Shield size={20} className="md:size-[24px] text-lime-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold" style={{ color: colors.titleColor }}>Security Implementation</h3>
                                        <p className="mt-2 text-sm md:text-base" style={{ color: colors.textColor }}>Comprehensive security measures at every layer</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <ul className="space-y-2 md:space-y-3">
                                        {projectDetails.securityFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-lime-400 mt-1">✓</span>
                                                <span className="text-sm md:text-base" style={{ color: colors.textColor }}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </section>
                    </div>
                )}

                {activeTab === 'workflow' && (
                    <div className="space-y-12 md:space-y-16 px-2">


                        {/* System Workflow */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" style={{color: colors.titleColor}}>
                                System Workflow
                            </h2>
                            <div className="max-w-4xl mx-auto p-4 md:p-8 rounded-xl border" style={{backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
                                {projectDetails.workflows.map((step) => renderWorkflowStep(step))}
                            </div>
                        </section>

                        {/* Key Component */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8" style={{ color: colors.titleColor }}>
                                Key Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <div className="p-4 md:p-6 rounded-xl border" style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
                                    <h3 className="font-semibold mb-3 md:mb-4 text-lg" style={{ color: colors.titleColor }}>
                                        Frontend Components
                                    </h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        {projectDetails.keyComponents.frontend.map((component, idx) => (
                                            <li key={idx} className="p-3 rounded border" style={{ borderColor: colors.borderColor }}>
                                                <h4 className="font-medium mb-1 text-sm md:text-base " style={{ color: colors.titleColor }}>
                                                    {component.name}
                                                </h4>
                                                <p className="text-xs md:text-sm mb-2" style={{ color: colors.textColor }}>
                                                    {component.description}
                                                </p>
                                                <ul className="space-y-1">
                                                    {component.features.map((feature, fIdx) => (
                                                        <li key={fIdx} className="text-xs flex items-start gap-1">
                                                            <span className="text-lime-400 mt-1">•</span>
                                                            <span style={{ color: colors.textColor }}>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 md:p-6 rounded-xl border" style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
                                    <h3 className="font-semibold mb-3 text-sm md:mb-4 text-lg" style={{ color: colors.titleColor }}>
                                        Backend Components
                                    </h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        {projectDetails.keyComponents.backend.map((component, idx) => (
                                            <li key={idx} className="p-3 rounded border" style={{ borderColor: colors.borderColor }}>
                                                <h4 className="font-medium mb-1 text-sm md:text-base" style={{ color: colors.titleColor }}>{component.name}</h4>
                                                <p className="text-xs md:text-sm mb-2" style={{ color: colors.textColor }}>{component.description}</p>
                                                {component.location && (
                                                    <div className="font-mono text-xs p-2 rounded bg-lime-400/5">
                                                        {component.location}
                                                    </div>
                                                )}

                                                {component.function && (
                                                    <div className="text-xs opacity-75 mt-2" style={{ color: colors.textColor }}>
                                                        {component.function}
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                            className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-black/70 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="text-white"><X size={20} /></span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
