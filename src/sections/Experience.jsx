import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiAward, FiBookOpen, FiTrendingUp } from 'react-icons/fi'

/**
 * Experience Section Component
 * Displays achievements, academic performance, and certifications
 */
export default function Experience() {
  const achievements = [
    {
      category: 'Academic Excellence',
      icon: FiBookOpen,
      items: [
        {
          title: 'Outstanding Academic Performance',
          detail: 'CGPA: 9.83 at Mohan Babu University',
          year: '2022 - 2026',
        },
        {
          title: 'School Merit',
          detail: 'Senior Secondary Education - 95.9%',
          year: '2022',
        },
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Competitive Achievements',
      icon: FiTrendingUp,
      items: [
        {
          title: 'LeetCode Problem Solver',
          detail: '500+ problems solved, consistent contributor',
          year: 'Ongoing',
        },
        {
          title: 'System Design Expertise',
          detail: 'Specialization in scalable architecture design',
          year: 'Ongoing',
        },
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Publications & Contributions',
      icon: FiAward,
      items: [
        {
          title: 'ICT4SD Conference',
          detail: 'Published research paper on innovative technologies',
          year: '2024',
        },
        {
          title: 'Open Source Contributions',
          detail: 'Active contributor to backend and security projects',
          year: 'Ongoing',
        },
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const certifications = [
    'OWASP Foundation Certified',
    'Spring Boot Fundamentals',
    'Advanced Java Programming',
    'Database Design & Optimization',
    'Cybersecurity Essentials',
    'Ethical Hacking Foundations',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Experience & Achievements"
          subtitle="Milestones that define my professional journey"
        />

        {/* Achievement Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-lg border border-accent border-opacity-20 hover:border-opacity-50 transition-all"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-lg mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>

                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      whileHover={{ x: 5 }}
                      className="pb-4 border-b border-slate-700 last:border-b-0 transition-all"
                    >
                      <p className="font-semibold text-accent-light text-sm">{item.title}</p>
                      <p className="text-slate-400 text-xs mt-1">{item.detail}</p>
                      <p className="text-accent text-xs mt-2 font-medium">{item.year}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-lg border border-accent border-opacity-20"
        >
          <h3 className="text-2xl font-bold gradient-text mb-8">Certifications & Recognitions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-4 bg-accent bg-opacity-5 rounded-lg border border-accent border-opacity-20 hover:border-opacity-50 transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-accent-light flex-shrink-0"></div>
                <span className="text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass p-6 rounded-lg border border-accent border-opacity-20">
            <h4 className="text-lg font-bold text-accent-light mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Microservices Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                REST API Design & Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Database Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Security Implementation
              </li>
            </ul>
          </div>

          <div className="glass p-6 rounded-lg border border-accent border-opacity-20">
            <h4 className="text-lg font-bold text-accent-light mb-4">Professional Goals</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Master distributed system design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Build enterprise-scale applications
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Contribute to open-source projects
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Advance cybersecurity knowledge
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

