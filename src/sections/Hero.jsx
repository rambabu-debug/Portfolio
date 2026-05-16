import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import { FiArrowRight } from 'react-icons/fi'

/**
 * Hero Section Component
 * Eye-catching landing section with animated background and CTAs
 */
export default function Hero({ setActiveSection }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-dark border-2 border-accent border-opacity-30"
            >
              <img
                src="/profile.jpg"
                alt="Ram Babu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-transparent opacity-20"></div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            Ram Babu H
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent-light mb-4 font-medium"
          >
            Backend Engineer & System Design Specialist
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Crafting scalable Java-based systems with strong fundamentals in system design, microservices, and cybersecurity.
            Let's build something exceptional together.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 my-12 max-w-xl mx-auto"
          >
            {[
              { number: '9.83', label: 'CGPA' },
              { number: '500+', label: 'LeetCode Problems' },
              { number: '4+', label: 'Projects' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-lg"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</p>
                <p className="text-xs md:text-sm text-slate-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center justify-center gap-2"
            >
              View Projects <FiArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="https://github.com/rambabu-debug"
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              View GitHub <FiArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mt-12"
          >
            <div className="text-slate-400 text-sm">
              <p>Scroll to explore</p>
              <div className="flex justify-center mt-2">
                <div className="w-[2px] h-8 bg-gradient-to-b from-accent to-transparent rounded"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

