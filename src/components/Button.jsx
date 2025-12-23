import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  icon = false,
  magnetic = true
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group relative overflow-hidden'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/50',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10',
    ghost: 'text-dark-300 hover:text-primary-400 hover:bg-dark-800/50',
  }

  const magneticProps = magnetic ? useMagnetic(0.2) : {}

  const content = (
    <motion.button
      ref={magneticProps.ref}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseMove={magneticProps.onMouseMove}
      onMouseLeave={magneticProps.onMouseLeave}
      style={{
        x: magneticProps.x,
        y: magneticProps.y,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.div
          className="relative z-10"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight 
            size={18} 
            className="group-hover:translate-x-1 transition-transform" 
          />
        </motion.div>
      )}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
        style={{
          background: variant === 'primary' 
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)'
            : 'radial-gradient(circle, rgba(217, 70, 239, 0.3), transparent)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )

  if (href) {
    const linkContent = (
      <motion.a
        ref={magneticProps.ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onMouseMove={magneticProps.onMouseMove}
        onMouseLeave={magneticProps.onMouseLeave}
        style={{
          x: magneticProps.x,
          y: magneticProps.y,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        {icon && (
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight 
              size={18} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </motion.div>
        )}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
          style={{
            background: variant === 'primary' 
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)'
              : 'radial-gradient(circle, rgba(217, 70, 239, 0.3), transparent)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    )
    return linkContent
  }

  return content
}

export default Button

