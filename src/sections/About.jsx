import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi'

/**
 * About Section Component
 * Professional introduction with career focus areas
 */
export default function About() {
  const focusAreas = [
    {
      icon: FiCode,
      title: 'Backend Development',
      description: 'Building robust, scalable server-side applications with Java, Spring Boot, and microservices architecture.',
    },
    {
      icon: FiCpu,
      title: 'System Design',
      description: 'Designing distributed systems with focus on scalability, reliability, and performance optimization.',
    },
    {
      icon: FiTrendingUp,
      title: 'Problem Solving',
      description: 'Tackling complex algorithmic challenges and implementing efficient solutions.',
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building scalable systems and solving complex problems"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a Computer Science student at Mohan Babu University (2022-2026) with a passion for backend development and system design.
              With a strong academic record (CGPA: 9.83), I focus on building scalable, efficient, and secure systems.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              My expertise spans across Java, Spring Framework, database design, and cybersecurity.
              I believe in writing clean, maintainable code and constantly pushing the boundaries of what's possible in backend engineering.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Beyond coding, I'm deeply interested in system architecture, security vulnerabilities, and ethical hacking.
              I participate actively in coding competitions and contribute to open-source projects.
            </p>

            {/* Education Timeline */}
            <div className="mt-10 space-y-6">
              <h3 className="text-xl font-bold text-accent-light">Education</h3>

              {[
                {
                  period: '2022 - 2026',
                  title: 'Bachelor of Technology in Computer Science',
                  institution: 'Mohan Babu University, Tirupati',
                  detail: 'CGPA: 9.83',
                },
                {
                  period: '2022',
                  title: 'Senior Secondary Education',
                  institution: 'Narayana Jr. College',
                  detail: 'Percentage: 95.9%',
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg border-l-4 border-accent border-opacity-50"
                >
                  <p className="text-accent text-sm font-semibold">{edu.period}</p>
                  <p className="text-white font-semibold mt-1">{edu.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                  <p className="text-accent-light text-sm mt-2">{edu.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Focus Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {focusAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass p-6 rounded-lg border border-accent border-opacity-20 hover:border-opacity-50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent bg-opacity-10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

