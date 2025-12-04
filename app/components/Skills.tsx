'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'MySQL', 'PHP', 'CSS', 'HTML'],
  },
  {
    name: 'Frameworks / Libraries',
    skills: ['Next.js', 'React', 'Laravel', 'Express.js', 'RESTful API'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'Vercel', 'Figma', 'Xampp', 'Postman', 'Cloudflare Workers', 'Docker'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          <span className="code-text mr-2">02.</span>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="code-text px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}