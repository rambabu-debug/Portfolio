import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiCode, FiServer, FiShield, FiDatabase, FiTool } from 'react-icons/fi'

/**
 * Skills Section Component
 * Categorized skills with modern card design
 */
export default function Skills() {
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: FiCode,
      skills: ['Java', 'Python', 'C'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Backend & Frameworks',
      icon: FiServer,
      skills: ['Spring', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA', 'REST APIs'],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Frontend Technologies',
      icon: FiCode,
      skills: ['HTML', 'CSS', 'JavaFX', 'MaterialFX', 'React'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Databases',
      icon: FiDatabase,
      skills: ['PostgreSQL', 'SQL', 'Database Design'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Cybersecurity & Tools',
      icon: FiShield,
      skills: ['OWASP', 'Ethical Hacking', 'Penetration Testing', 'Wireshark', 'Metasploit', 'Burp Suite', 'NMap', 'Kali Linux'],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Developer Tools',
      icon: FiTool,
      skills: ['Git/GitHub', 'IntelliJ IDEA', 'Postman', 'Maven', 'Linux'],
      color: 'from-cyan-500 to-cyan-600',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit built through consistent learning and hands-on experience"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass p-6 rounded-lg border border-accent border-opacity-20 hover:border-opacity-50 transition-all group cursor-pointer"
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-light transition-colors">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm bg-accent bg-opacity-10 text-accent-light rounded-full border border-accent border-opacity-30 hover:border-opacity-100 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-lg border border-accent border-opacity-20"
        >
          <h3 className="text-xl font-bold text-accent-light mb-4">Coursework & Knowledge</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'Problem Solving',
              'Operating Systems',
              'Computer Networks',
              'System Design Principles',
            ].map((course, idx) => (
              <motion.p
                key={idx}
                whileHover={{ x: 10 }}
                className="text-slate-300 flex items-center gap-3 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-accent-light"></span>
                {course}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

