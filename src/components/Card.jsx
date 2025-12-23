import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`glass rounded-xl p-6 relative overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? {
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      } : {}}
      {...props}
    >
      {/* Animated border glow on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(217, 70, 239, 0.1))',
            boxShadow: 'inset 0 0 60px rgba(14, 165, 233, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Shimmer effect on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default Card

