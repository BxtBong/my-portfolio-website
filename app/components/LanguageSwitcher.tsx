'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' }
  ]

  const switchLanguage = (newLocale: string) => {
    // 移除当前语言前缀，添加新语言前缀
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
    router.push(newPathname)
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg backdrop-blur-sm transition-all hover:scale-105"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white'
          }}
        >
          <Globe size={18} />
          <span className="text-sm font-medium">{currentLanguage.label}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 rounded-lg border shadow-lg backdrop-blur-sm overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  locale === language.code 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}