import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

/**
 * Projects Section Component
 * Premium project cards with hover animations and tech stack
 */
export default function Projects() {
  const projects = [
    {
      title: 'HybridEmergency Response System',
      description: 'A comprehensive emergency response platform that integrates multiple communication channels and location tracking. Features real-time incident reporting, automated dispatch system, and analytical dashboards for emergency management.',
      image: 'https://via.placeholder.com/400x300?text=Emergency+Response',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'System Design'],
      features: [
        'Real-time incident tracking',
        'Multi-channel communication',
        'Location-based dispatch',
        'Analytics dashboard',
        'Mobile-responsive design'
      ],
      link: 'https://hybridemergencyresponse.onrender.com',
      github: '#',
      featured: true,
    },
    {
      title: 'Payment Integrating System',
      description: 'Full-stack payment processing platform with secure transaction handling, multiple payment gateway integration, and comprehensive transaction history. Built with modern architecture principles for scalability.',
      image: 'https://via.placeholder.com/400x300?text=Payment+System',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Payment APIs'],
      features: [
        'Secure payment processing',
        'Multi-gateway integration',
        'Transaction history',
        'User authentication',
        'Admin dashboard'
      ],
      backend: 'https://paymentintegratingsystem.onrender.com',
      frontend: 'https://payment-integrating-system-gacu.vercel.app/',
      featured: true,
    },
    {
      title: 'Threat Analysis System',
      description: 'Advanced cybersecurity tool for analyzing and identifying network threats. Provides vulnerability assessment, penetration testing capabilities, and detailed threat reports with actionable recommendations.',
      image: 'https://via.placeholder.com/400x300?text=Threat+Analysis',
      tags: ['Java', 'Cybersecurity', 'Network Analysis', 'OWASP'],
      features: [
        'Vulnerability scanning',
        'Threat detection',
        'Risk assessment',
        'Detailed reporting',
        'Security recommendations'
      ],
      link: 'https://threatanalysissystem.onrender.com',
      github: '#',
    },
    {
      title: 'Campus Transit Application',
      description: 'Campus transportation management system for optimizing student commute. Features real-time bus tracking, route optimization, and integrated payment system for seamless campus mobility.',
      image: 'https://via.placeholder.com/400x300?text=Campus+Transit',
      tags: ['Java', 'Android', 'Spring Boot', 'GPS Tracking'],
      features: [
        'Real-time bus tracking',
        'Route optimization',
        'Integrated payments',
        'User notifications',
        'Admin controls'
      ],
      github: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my work in backend development, system design, and full-stack applications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className={`glass rounded-lg overflow-hidden border border-accent border-opacity-20 hover:border-opacity-50 transition-all ${
                project.featured ? 'lg:col-span-2 ring-2 ring-accent ring-opacity-30' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Project Image */}
                <div className="lg:col-span-1 relative overflow-hidden rounded-lg group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent px-3 py-1 rounded-full">
                      <FiStar className="w-4 h-4 fill-current" />
                      <span className="text-xs font-semibold">Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-accent-light mb-2 uppercase tracking-wider">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-xs px-2 py-1 bg-accent bg-opacity-10 text-accent-light rounded-full border border-accent border-opacity-30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-slate-300 border border-slate-600 border-opacity-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.frontend && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.frontend}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Frontend
                      </Button>
                    )}
                    {project.backend && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.backend}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Backend
                      </Button>
                    )}
                    {project.github && project.github !== '#' && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">Explore more projects on my GitHub</p>
          <Button
            variant="outline"
            size="lg"
            href="https://github.com/rambabu-debug"
            target="_blank"
            className="inline-flex items-center gap-2"
          >
            <FiGithub className="w-5 h-5" />
            Visit GitHub Profile
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

