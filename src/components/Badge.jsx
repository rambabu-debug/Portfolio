/**
 * Badge Component
 * Reusable badge for tags, labels, and status indicators
 */
import React from 'react'
import { motion } from 'framer-motion'

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const variants = {
    primary: 'bg-accent bg-opacity-20 text-accent-light border border-accent border-opacity-30',
    secondary: 'bg-secondary text-slate-300 border border-slate-600',
    success: 'bg-green-500 bg-opacity-20 text-green-300 border border-green-500 border-opacity-30',
    warning: 'bg-yellow-500 bg-opacity-20 text-yellow-300 border border-yellow-500 border-opacity-30',
    danger: 'bg-red-500 bg-opacity-20 text-red-300 border border-red-500 border-opacity-30',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 rounded-full font-medium transition-all ${
        variants[variant]
      } ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.span>
  )
}

