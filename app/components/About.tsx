'use client'

import { Download } from 'lucide-react'

export default function About() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Bong_Xiao_Thung_CV.pdf'
    link.click()
  }

  return (
    <section id="about" className="section-padding py-20">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="code-text mr-2">01.</span>
          About Me
        </h2>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            I'm an early-stage full-stack developer who improves through hands-on 
            project building. I enjoy turning ideas into working products and 
            learning step by step how to make websites faster, more intuitive, 
            and more user-friendly.
          </p>
          
          <p>
            My journey began with traditional web technologies and has evolved 
            to include modern frameworks and cloud platforms. Each project teaches 
            me something new about architecture, performance, and user experience.
          </p>
        </div>

        <button
          onClick={handleDownloadCV}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center space-x-2 hover-lift"
        >
          <Download size={20} />
          <span>Download CV</span>
        </button>
      </div>
    </section>
  )
}