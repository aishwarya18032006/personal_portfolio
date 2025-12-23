import { motion } from 'framer-motion'
import { Code, Sparkles, Zap } from 'lucide-react'
import Card from '../components/Card'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building end-to-end applications with modern frameworks',
      color: 'text-primary-400',
    },
    {
      icon: Sparkles,
      title: 'AI & Machine Learning',
      description: 'Creating intelligent solutions with deep learning and NLP',
      color: 'text-accent-400',
    },
    {
      icon: Zap,
      title: 'Modern UI/UX',
      description: 'Designing beautiful, animated, and user-friendly interfaces',
      color: 'text-yellow-400',
    },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <p className="text-lg text-dark-200 leading-relaxed">
                I'm a passionate developer skilled in building full-stack applications and AI-based projects.
                I love creating modern, animated, and user-friendly web experiences.
              </p>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Card className="text-center h-full">
                    <div className={`${feature.color} mb-4 flex justify-center`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="font-semibold text-dark-100 mb-2 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-dark-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

