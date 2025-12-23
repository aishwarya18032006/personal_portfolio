import { motion } from 'framer-motion'

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-dark-800 text-dark-200 border-dark-700',

    primary: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
    accent: 'bg-accent-500/20 text-accent-400 border-accent-500/30',

    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    secondary: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  }

  return (
    <motion.span
      className={`
        inline-flex items-center
        px-3 py-1 rounded-full
        text-xs font-medium
        border backdrop-blur-sm
        ${variants[variant] || variants.default}
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.span>
  )
}

export default Badge
