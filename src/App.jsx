import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import CursorFollower from './components/CursorFollower'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Page load animation
    setIsLoaded(true)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatedBackground mousePosition={mousePosition} />
      <CursorFollower mousePosition={mousePosition} />
      <Header />
      <main className="relative z-10 page-transition">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </motion.div>
  )
}

export default App

