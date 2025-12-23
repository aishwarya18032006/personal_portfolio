import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = ({ mousePosition }) => {
  const noiseCanvasRef = useRef(null)
  const [time, setTime] = useState(0)

  useEffect(() => {
    // Animate time for moving reflections
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.01)
    }, 16)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Noise texture canvas
    const noiseCanvas = noiseCanvasRef.current
    if (!noiseCanvas) return

    const ctx = noiseCanvas.getContext('2d')
    const width = window.innerWidth
    const height = window.innerHeight

    noiseCanvas.width = width
    noiseCanvas.height = height

    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Generate noise
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255
      data[i] = value     // R
      data[i + 1] = value // G
      data[i + 2] = value // B
      data[i + 3] = 6     // A (very low opacity)
    }

    ctx.putImageData(imageData, 0, 0)

    const handleResize = () => {
      noiseCanvas.width = window.innerWidth
      noiseCanvas.height = window.innerHeight
      // Regenerate noise on resize
      const newImageData = ctx.createImageData(window.innerWidth, window.innerHeight)
      const newData = newImageData.data
      for (let i = 0; i < newData.length; i += 4) {
        const value = Math.random() * 255
        newData[i] = value
        newData[i + 1] = value
        newData[i + 2] = value
        newData[i + 3] = 6
      }
      ctx.putImageData(newImageData, 0, 0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate mouse influence for gradient
  const mouseX = mousePosition.x / (window.innerWidth || 1)
  const mouseY = mousePosition.y / (window.innerHeight || 1)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at ${20 + mouseX * 30}% ${30 + mouseY * 30}%, rgba(14, 165, 233, 0.25) 0%, transparent 60%),
             radial-gradient(circle at ${80 - mouseX * 30}% ${70 - mouseY * 30}%, rgba(217, 70, 239, 0.25) 0%, transparent 60%),
             radial-gradient(circle at ${50 + mouseX * 20}% ${50 + mouseY * 20}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
             radial-gradient(circle at ${30 - mouseX * 15}% ${20 + mouseY * 25}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Glassmorphism Layers with Moving Light Reflections */}
      {[...Array(3)].map((_, i) => {
        const offsetX = (time * (20 + i * 10) + i * 120) % 200
        const offsetY = (time * (15 + i * 8) + i * 80) % 200
        const rotation = time * (5 + i * 3) + i * 45

        return (
          <motion.div
            key={`glass-${i}`}
            className="absolute rounded-3xl backdrop-blur-2xl border border-white/5"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${10 + i * 25}%`,
              top: `${15 + i * 20}%`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, ${0.03 + i * 0.01}) 0%,
                rgba(14, 165, 233, ${0.05 + i * 0.02}) 50%,
                rgba(217, 70, 239, ${0.05 + i * 0.02}) 100%
              )`,
              boxShadow: `inset 0 0 ${100 + i * 50}px rgba(255, 255, 255, 0.05)`,
            }}
            animate={{
              x: [0, offsetX, -offsetX, 0],
              y: [0, offsetY, -offsetY, 0],
              rotate: [0, rotation, -rotation, 0],
              scale: [1, 1.1 + i * 0.1, 0.9 - i * 0.05, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Moving Light Reflection */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `linear-gradient(${120 + rotation}deg, 
                  transparent 0%,
                  rgba(255, 255, 255, 0.1) ${40 + offsetX % 20}%,
                  rgba(14, 165, 233, 0.15) ${50 + offsetX % 20}%,
                  transparent 60%
                )`,
              }}
              animate={{
                background: [
                  `linear-gradient(${120 + rotation}deg, transparent 0%, rgba(255, 255, 255, 0.1) ${40 + offsetX % 20}%, rgba(14, 165, 233, 0.15) ${50 + offsetX % 20}%, transparent 60%)`,
                  `linear-gradient(${240 + rotation}deg, transparent 0%, rgba(255, 255, 255, 0.1) ${60 + offsetX % 20}%, rgba(217, 70, 239, 0.15) ${70 + offsetX % 20}%, transparent 60%)`,
                  `linear-gradient(${120 + rotation}deg, transparent 0%, rgba(255, 255, 255, 0.1) ${40 + offsetX % 20}%, rgba(14, 165, 233, 0.15) ${50 + offsetX % 20}%, transparent 60%)`,
                ],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )
      })}

      {/* Animated Noise Overlay */}
      <canvas
        ref={noiseCanvasRef}
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Floating Orbs with Glassmorphism */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-xl border border-white/10"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            background: i % 3 === 0
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.3), rgba(14, 165, 233, 0.05))'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(217, 70, 239, 0.3), rgba(217, 70, 239, 0.05))'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.05))',
            left: `${15 + i * 12}%`,
            top: `${10 + i * 15}%`,
            boxShadow: `0 0 ${60 + i * 20}px rgba(${i % 3 === 0 ? '14, 165, 233' : i % 3 === 1 ? '217, 70, 239' : '59, 130, 246'}, 0.3)`,
          }}
          animate={{
            x: [0, 40 + i * 10, -40 - i * 10, 0],
            y: [0, -50 - i * 15, 50 + i * 15, 0],
            scale: [1, 1.3 + i * 0.1, 0.7 - i * 0.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Parallax Floating Shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
            background: `linear-gradient(135deg, 
              rgba(${i % 2 === 0 ? '14, 165, 233' : '217, 70, 239'}, 0.1),
              rgba(${i % 2 === 0 ? '59, 130, 246' : '168, 85, 247'}, 0.05)
            )`,
            borderRadius: i % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '50%',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
          animate={{
            x: [0, mouseX * (30 + i * 10), 0],
            y: [0, mouseY * (30 + i * 10), 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { duration: 0.3 },
            y: { duration: 0.3 },
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground

