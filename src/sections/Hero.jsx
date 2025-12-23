import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/Button'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <motion.div
        className="container mx-auto text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-sm text-primary-400 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            Welcome to my Portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="text-gradient">Aishwarya</span>
          <br />
          <span className="text-dark-100">
            Full Stack Developer <span className="text-primary-400">|</span> AI Enthusiast
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-dark-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a passionate developer skilled in building full-stack applications and AI-based projects.
          <br />
          I love creating modern, animated, and user-friendly web experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button variant="primary" onClick={scrollToAbout} icon>
            Explore My Work
          </Button>
          
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary-500/20 transition-colors group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="text-dark-300 group-hover:text-primary-400 transition-colors" size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary-500/20 transition-colors group"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="text-dark-300 group-hover:text-primary-400 transition-colors" size={24} />
          </motion.a>
          <motion.a
            href="mailto:aishwaryaramadass2006@gmail.com"
            className="p-3 rounded-full glass hover:bg-primary-500/20 transition-colors group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="text-dark-300 group-hover:text-primary-400 transition-colors" size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-dark-400 hover:text-primary-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

