import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { FiMail, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi'

/**
 * Contact Section Component
 * Features contact form and social links for easy communication
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'rambabuask9347@gmail.com',
      href: 'mailto:rambabuask9347@gmail.com',
      description: 'Send me an email',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'ram-babu-h',
      href: 'https://www.linkedin.com/in/ram-babu-h/',
      description: 'Connect on LinkedIn',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'rambabu-debug',
      href: 'https://github.com/rambabu-debug',
      description: 'View my projects',
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
          title="Get In Touch"
          subtitle="Let's connect and discuss exciting opportunities. Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass p-4 rounded-lg border border-accent border-opacity-20 hover:border-opacity-50 transition-all block"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent bg-opacity-10 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{method.label}</p>
                      <p className="text-accent-light text-sm font-medium">{method.value}</p>
                      <p className="text-slate-400 text-xs mt-1">{method.description}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 rounded-lg border border-accent border-opacity-20"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send me a Message</h3>

            <div className="space-y-4">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Collaboration opportunity"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2.5 bg-secondary border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </motion.div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg text-green-400 text-sm"
                >
                  ✓ Thank you! I'll get back to you soon.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (
                    <>
                      Send Message <FiArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: '500+', label: 'LeetCode Problems' },
            { number: '4+', label: 'Featured Projects' },
            { number: '24hrs', label: 'Response Time' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-lg border border-accent border-opacity-20 text-center"
            >
              <p className="text-3xl font-bold gradient-text">{stat.number}</p>
              <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

