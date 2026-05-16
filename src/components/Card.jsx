/**
 * Reusable Card Component
 * Used for consistent card styling across the portfolio
 */
import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  onClick,
  glassEffect = true,
  ...props
}) {
  const baseClasses = `rounded-lg border transition-all ${
    glassEffect
      ? 'glass border-accent border-opacity-20 hover:border-opacity-50'
      : 'border-slate-700 hover:border-slate-600'
  } ${className}`

  const content = (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  )

  if (!hover) return content

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      {content}
    </motion.div>
  )
}

