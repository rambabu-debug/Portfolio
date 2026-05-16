import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

/**
 * Footer Component
 * Minimal and elegant footer with social links and copyright
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/rambabu-debug', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ram-babu-h/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:rambabuask9347@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-slate-700 border-opacity-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">RB</h3>
            <p className="text-slate-400 text-sm">
              Backend Engineer & System Design Specialist
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm font-semibold mb-4">Quick Links</p>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-400 text-sm hover:text-accent-light transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-slate-400 text-sm font-semibold mb-4">Connect</p>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-2 rounded-lg bg-accent bg-opacity-10 text-accent-light hover:bg-opacity-20 transition-all"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent via-opacity-30 to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-xs md:text-sm text-center md:text-left"
          >
            © 2026 Ram Babu H. All rights reserved. | Crafted with React & Framer Motion
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-accent bg-opacity-10 text-accent-light hover:bg-opacity-20 transition-all"
            title="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

