'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink, Box, UserCog, ShoppingCart, Users, BarChart, Shield, Package, Star, Filter, Bell, Loader2, FileText, AlertTriangle, MessageSquare, X} from 'lucide-react'
import { col, details, img } from "framer-motion/client"
import { title } from "process"

const projectDetails = {
  title: 'E-Commerce Furniture Website',
  descrition: 'A full-featured e-commerce platform for furniture shopping with customer accounts, admin dashboard, and sales reporting.',
  fullDescription: 'A comprehensive online platform designed to provide a seamless and convenient experience for purchasing furniture. Customers can easily sign up, browse products, place orders,track order status, and leave reviews. Administrators have robust tools to manage products, monitor inventory, process orders, and generate reports.',
  technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
  features: [
    {
      title: 'User Management',
      description: 'Secure registration and login system with profile management',
      icon: Users,
      images: 
        '/Profile.png'
      
    },
    {
      title: 'Product Catalog',
      description: 'Extensive furniture catalog with filtering and search functionality',
      icon: ShoppingCart,
      images: 
        '/ProductCatalog.png'
      
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive dashbaord for managing products, orders, and users',
      icon: BarChart,
      images: 
        '/AdminDashboard.png'
      
    },
    {
      title: 'Order Management',
      description: 'Complete order processing from cart to checkout and tracking',
      icon: Package,
      images: 
        '/OrderManagement.png'
      
    }
  ],

  userFeatures: [
    {
      name: 'Registration & Login',
      description: 'Secure user authentication with password requirements and Gmail validation',
      icon: Shield,
      details: 'Password must be 8+ chars with uppercase, lowercase, number, and symbol'
    },
    {
      name: 'Product Browsing',
      description: 'Browse products with filters by category, brand, and price range',
      icon: Filter,
      details: 'Advanced filtering and search functionality'
    },
    {
      name: 'Shopping Cart',
      description: 'Add items to cart, update quantities, and proceed to checkout',
      icon: ShoppingCart,
      details: 'Real-time cart updates and stock validation'
    },
    {
      name: 'Order Tracking',
      description: 'Track order status and view detailed order history',
      icon: Package,
      details: 'Status updates: Processing → Shipped → Delivered'
    },
    {
      name: 'Product Reviews',
      description: 'Leave reviews and ratings for purchased products',
      icon: Star,
      details: 'Rating system with text and image reviews'
    },
    {
      name: 'notifiactions',
      description: 'Real-time notifications for order updates and promotions',
      icon: Bell,
      details: 'Unread notification count and recent acivity'
    }
  ],

  adminFeatures: [
    {
      name: 'Product Management',
      description: 'Add, edit, delete products with image upload support',
      icon: Box,
      details: 'Manage product details, categories, brands, and inventory'
    },
    {
      name: 'Order Processing',
      description: 'Process customer orders and update order status',
      icon: Loader2,
      details: 'Verify payments, updates shipping status, manage returns'
    },
    {
      name: 'User Management',
      description: 'Manage customer accounts and view user information',
      icon: UserCog,
      details: 'View all users, edit details, and manage permissions'
    },
    {
      name: 'Sales Reports',
      description: 'Generate detailed sales reports with filtering options',
      details: 'Filter by date, category, payment status, and order status',
      icon: FileText
    },
    {
      name: 'Review Management',
      description: 'Monitor and respond to product reviews',
      details: 'View all reviews, reply to comments, and moderate content',
      icon: MessageSquare
    },
    {
      name: 'Inventory Alerts',
      description: 'Receive notifications for low stock items',
      details: 'Automatic alerts when products reach minimum stock level',
      icon: AlertTriangle
    }
  ],


  screenshots: [
    {
      title: 'Home Page',
      description: 'Product carousel, categories, and best sellers',
      url: '/HomePage.png'
    },
    {
      title: 'Product Page',
      description: 'Product listings with filters and search',
      url: '/Product.png'
    },
    {
      title: 'Product Details',
      description: 'Detailed product view with reviews and images',
      url: '/ProductDetail.png'
    },
    {
      title: 'Shopping Cart',
      description: 'Cart management with quantity controls',
      url: '/ShoppingCart.png'
    },
    {
      title: 'Admin Dashboard',
      description: 'Overview of sales, orders, and user statistics',
      url: '/AdminDashboard.png'
    },
    {
      title: 'Order Management',
      description: 'Admin view for processing and tracking orders',
      url: '/OrderDetails.png'
    }
  ],

  methodology: {
    approach: 'Agile Methodology',
    phases: [
      'Sprint Planning - Define feature goals and organize tasks',
      'Daily Stand-ups - Review progress and address obstacles',
      'Sprint Review - Demo completed work and gather feedback',
      'Sprint Retrospective - Evaluate and improve development process'
    ]
  },

  links: {
    github: '#',
    liveDemo: '#',
    googleDrive: 'https://drive.google.com/drive/folders/1X8pQGMCVesxqtFiPZr7ki_ETe0GyySWM',
    documentation: '#'
  }
}

export default function ECommerceDetail() {
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)

    const handleThemeChange = () => {
      const bodyBg = window.getComputedStyle(document.body).backgroundColor
      const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9, 12, 19)' || document.body.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] })
    handleThemeChange()
    return () => observer.disconnect()
  }, [])

  const getThemeColors = () => {
    const titleColor = isDark ? '#f3f4f6' : '#171717'
    const textColor = isDark ? '#d1d5db' : '#4b5563'
    const bgColor = isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)'
    const borderColor = isDark ? 'rgba(55, 65, 81, 0.5)' : 'rgba(209, 213, 219, 0.5)'

    return { titleColor, textColor, bgColor, borderColor }
  }

  const getTechColors = () => {
    const bgcolor = isDark ? 'rgba(132, 204, 22, 0.1)' : 'rgba(132, 204, 22, 0.1)'
    const borderColor = isDark ? 'rgba(132, 204, 22, 0.3)' : 'rgba(132, 204, 22, 0.3)'
    const textColor = isDark ? '#84cc16' : '#4d7c0f'

    return { bgcolor, borderColor, textColor }
  }

  const techColors = getTechColors()

  const colors = getThemeColors()

  const FeaturedCard = ({ feature, isAdmin = false }: { feature: any, isAdmin?: boolean }) => (
    <div className="p-6 rounded-xl border transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/10 group"
      style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-lime-400/10 group-hover:bg-lime-400/20 transition-colors">
          {!isAdmin && feature.icon && <feature.icon size={20} className="text-lime-400" />}
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-lg" style={{ color: colors.titleColor }}>{feature.name}</h4>
          <p className="mb-2 text-sm" style={{ color: colors.textColor }}>{feature.description}</p>
          {feature.details && (
            <p className="text-xs opacity-75" style={{ color: colors.textColor }}>
              {feature.details}
            </p>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      {/* Back Button */}
      <button
        className="fixed top-6 left-6 z-50 p-3 rounded-full border backdrop-blur-sm hover:bg-white/10 transition-all group"
        style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}
        onClick={() => router.back()}>
        <ArrowLeft size={20} />
      </button>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{projectDetails.title}</h1>
          <p className="text-lg md:text-xl max-auto mb-8">{projectDetails.fullDescription}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {projectDetails.technologies.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full border font-mono text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: techColors.bgcolor, borderColor: techColors.borderColor, color: techColors.textColor
                }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href={projectDetails.links.googleDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: techColors.bgcolor, borderColor: techColors.borderColor, color: techColors.textColor
              }}
            >
              <ExternalLink size={18} />
              View Google Drive (Research Paper)
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.titleColor }}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectDetails.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video overflow-hidden border rounded-lg mb-4"
                    style={{ borderColor: colors.borderColor }}
                    onClick={() => setSelectedImage(feature.images)}>
                    <img src={feature.images} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-lime-400/10">
                      <Icon size={20} className="text-lime-400" />
                    </div>
                    <h3 className="font-semibold text-lg" style={{ color: colors.titleColor }}>{feature.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.textColor }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* User Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.titleColor }}>
            User Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetails.userFeatures.map((feature, index) => (
              <FeaturedCard key={index} feature={feature} />
            ))}
          </div>
        </section>

        {/* Admin Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.titleColor }}>
            Admin Features
          </h2>
          <div className="grid f=grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetails.adminFeatures.map((feature, index) => (
              <FeaturedCard key={index} feature={feature} />
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.titleColor}}>
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.screenshots.map((screenshot, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className="aspect-video rounded-lg overflow-hidden mb-4 border transition-all duration-300 hover:border-lime-400/50 hover:shadow-xl"
                style={{ borderColor:colors.borderColor }}
                onClick={() => setSelectedImage(screenshot.url)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: colors.titleColor }}>
                  {screenshot.title}
                </h3>
                <p className="tetx-sm" style={{ color: colors.textColor }}>
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: colors.titleColor }}>
            Development Approach
          </h2>
          <div className="p-8 rounded-xl border" style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-lime-400/10">
                <BarChart size={24} className="text-lime-400" />
              </div>
              <h3 className="text-xl font-semibold">
                {projectDetails.methodology.approach}
              </h3>
            </div>
            <ul className="space-y-4">
              {projectDetails.methodology.phases.map((phase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="tetx-xs font-bold" style={{ color: '#84cc16' }}>
                      {index + 1}
                    </span>
                  </div>
                  <span>{phase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}

          >
            <div className="relative max-w-4xl max-h-[80vh]">
              <img
                src={selectedImage}
                alt="Enlarged View"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 py-3 px-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-white"><X size={20} /></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}
