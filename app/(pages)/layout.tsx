// import type { Metadata } from 'next'
// import { Inter, Fira_Code } from 'next/font/google'
// import './globals.css'
// import { ThemeProvider } from 'next-themes'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const firaCode = Fira_Code({
//   subsets: ['latin'],
//   variable: '--font-fira-code',
// })

// export const metadata: Metadata = {
//   title: 'Bong Xiao Thung - Software Engineer',
//   description: 'Portfolio of Bong Xiao Thung, a software engineer passionate about creating simple, functional, and user-friendly web experiences.',
//   keywords: ['software engineer', 'full-stack developer', 'web developer', 'portfolio'],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
//             <Navbar />
//             <main className="pt-16">{children}</main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// import type { Metadata } from 'next'
// import { Inter, Fira_Code } from 'next/font/google'
// import '../globals.css'  // 改为相对路径
// import { ThemeProvider } from 'next-themes'
// import Navbar from '../components/Navbar'  // 改为相对路径
// import Footer from '../components/Footer'  // 改为相对路径

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const firaCode = Fira_Code({
//   subsets: ['latin'],
//   variable: '--font-fira-code',
// })

// export const metadata: Metadata = {
//   title: 'Bong Xiao Thung - Software Engineer',
//   description: 'Portfolio of Bong Xiao Thung, a software engineer passionate about creating simple, functional, and user-friendly web experiences.',
//   keywords: ['software engineer', 'full-stack developer', 'web developer', 'portfolio'],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
//             <Navbar />
//             <main className="pt-16">{children}</main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import '../globals.css'  // 使用路径别名
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'  // 使用路径别名
import Footer from '@/components/Footer'  // 使用路径别名

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Bong Xiao Thung - Software Engineer',
  description: 'Portfolio of Bong Xiao Thung, a software engineer passionate about creating simple, functional, and user-friendly web experiences.',
  keywords: ['software engineer', 'full-stack developer', 'web developer', 'portfolio'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}