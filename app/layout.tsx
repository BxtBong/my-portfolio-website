import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import '@/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {/* 确保所有页面都有 Navbar 和 Footer */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}