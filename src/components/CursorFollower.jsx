import { motion } from 'framer-motion'

const CursorFollower = ({ mousePosition }) => {
  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary-500/30 blur-xl pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      
      {/* Secondary glow */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-accent-400/50 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.1,
        }}
      />
    </>
  )
}

export default CursorFollower

