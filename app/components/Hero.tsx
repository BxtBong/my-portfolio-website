'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(100)
    const [isDark, setIsDark] = useState(false)

    const texts = [
        "Software Engineer",
        "Full-Stack Developer",
        "Problem Solver"
    ]

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/BxtBong', label: 'GitHub' },
        { icon: <Download size={20} />, href: 'public/Resume-BongXiaoThung.pdf', label: 'Download Resume' },
        { icon: <Mail size={20} />, href: 'mailto:bongxiaothung@gmail.com', label: 'Email' },
    ]

    // 🔧 修复：使用与 About 组件相同的主题检测逻辑
    useEffect(() => {
        // 初始检测
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(prefersDark)

        const handleThemeChange = () => {
            const bodyBg = window.getComputedStyle(document.body).backgroundColor
            const isDarkMode = bodyBg === 'rgb(9, 12, 19)' || bodyBg === 'rgb(9,12,19)'
            setIsDark(isDarkMode)
        }

        const observer = new MutationObserver(handleThemeChange)
        observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })
        handleThemeChange()

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const currentText = texts[currentTextIndex]

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setTimeout(() => {
                        setDisplayText(currentText.substring(0, displayText.length + 1))
                        setTypingSpeed(100)
                    }, typingSpeed)
                } else {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                if (displayText.length > 0) {
                    setTimeout(() => {
                        setDisplayText(currentText.substring(0, displayText.length - 1))
                        setTypingSpeed(50)
                    }, typingSpeed)
                } else {
                    setIsDeleting(false)
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length)
                    setTypingSpeed(100)
                }
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    } as const

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
        },
    } as const

    const textColor = isDark ? '#BDBDBD' : '#656565'
    const borderColor = isDark ? '#9a9494ff' : '#656565ff'

    return (
        <motion.section
            id="hero"
            className="section-padding py-20 md:py-32 scroll-mt-10 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="max-w-[1024px] mx-auto px-6" variants={itemVariants}>
                <p className="mb-6 font-mono text-xl md:text-3xl text-lime-500">
                    Hi, my name is
                </p>
                <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
                    Bong Xiao Thung
                </h1>
            </motion.div>

            <motion.div className="max-w-[1024px] mx-auto px-6 h-12 md:h-14 mb-6 flex items-center" variants={itemVariants}>
                <motion.h2
                    className="text-2xl md:text-5xl font-bold font-mono tracking-tight text-lime-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayText || '\u00A0'}
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-1 inline-block w-2 h-8 md:h-12 align-bottom"
                        style={{ verticalAlign: 'text-bottom', backgroundColor: '#84cc16' }}
                    />
                </motion.h2>
            </motion.div>

            <motion.div className="max-w-[1024px] mx-auto px-6" variants={itemVariants}>
                <p
                    className="text-xl md:text-2xl mb-10 max-w-2xl border-l-4 pl-4 transition-colors duration-500"
                    style={{ color: textColor, borderColor: borderColor }}
                >
                    I'm a developer passionate about creating simple, functional,
                    and user-friendly web experiences.
                </p>

                <div className="flex items-center space-x-4">
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            aria-label={link.label}
                            target={link.label.includes('Download') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-[1.05] hover:bg-lime-500/10"
                            style={{
                                borderColor: '#84cc16',
                                color: '#84cc16',
                                backgroundColor: 'transparent',
                            }}
                            variants={itemVariants}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}