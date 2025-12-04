import { Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="section-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="code-text">
              © {currentYear} Bong Xiao Thung. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:bongxiaothung@gmail.com"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={18} />
              <span>bongxiaothung@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/BxtBong"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={18} />
              <span>BxtBong</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}