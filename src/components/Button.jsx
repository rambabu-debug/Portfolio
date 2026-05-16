import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable Button Component
 * Supports different variants and animation states
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target = '_self',
  ...props
}) {
  const baseStyles = 'font-medium transition-all rounded-lg btn-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary'

  const variants = {
    primary: 'bg-accent hover:bg-accent-light text-white',
    secondary: 'bg-secondary hover:bg-slate-700 text-accent-light border border-accent border-opacity-30',
    outline: 'border border-accent border-opacity-50 text-accent-light hover:bg-accent hover:bg-opacity-10',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  )
}

