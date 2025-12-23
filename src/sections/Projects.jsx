import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import Card from '../components/Card'
import Badge from '../components/Badge'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'PizzaHub',
      description: 'Full Stack online pizza ordering system built with MERN Stack.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', ],
      category: 'Full Stack',
      github: 'https://github.com/aishwarya18032006/pizza-app',
      demo: 'https://pizza-app-git-main-aishwarya18032006s-projects.vercel.app/',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'Full Stack budget tracking app for managing finances effectively.',
      tech: ['React', 'Node.js', 'SQLite', 'Express.js'],
      category: 'Full Stack',
      github: 'https://github.com/aishwarya18032006/Expense-Tracker',
      demo: 'https://expense-tracker-m2nv9u1h2-aishwarya18032006s-projects.vercel.app/',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Chef-AI',
      description: 'AI-based recipe generator using Hugging Face / API based technology.',
      tech: ['React', 'Node.js', 'Hugging Face', 'Express.js'],
      category: 'AI/ML',
      github: 'https://github.com/aishwarya18032006/Chef-AI',
      demo: 'https://chef-ai-55da.vercel.app/',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Emotion Detector',
      description: 'Deep Learning project for emotion detection and sentiment analysis.',
      tech: ['Python', 'Deep Learning', 'TensorFlow', 'OpenCV'],
      category: 'AI/ML',
      github: 'https://github.com/aishwarya18032006/Emotion-Detector',
      demo: 'https://emotion-detection-webapp-3.onrender.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 5,
      title: 'Smart Water tester',
      description: 'IoT-based water quality monitoring system using sensors and microcontrollers.',
      tech: ['Flask', 'Sensors', 'Thingspeak', 'javaScript'],
      category: 'IoT',
      github: 'https://github.com/aishwarya18032006/Smart_Water_Tester',
      demo: 'https://smart-water-tester-1.onrender.com/',
      color: 'from-green-500 to-emerald-500',
    
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                className="h-full cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                hover
              >
                <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-lg -m-6 mb-6`} />
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-dark-100 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant={project.category === 'AI/ML' ? 'accent' : 'primary'}>
                    {project.category}
                  </Badge>
                </div>
                <p className="text-dark-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="default" className="text-xs">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`h-2 w-24 bg-gradient-to-r ${selectedProject.color} rounded-full mb-4`} />
                  <h3 className="text-3xl font-display font-bold text-dark-100 mb-2">
                    {selectedProject.title}
                  </h3>
                  <Badge variant={selectedProject.category === 'AI/ML' ? 'accent' : 'primary'}>
                    {selectedProject.category}
                  </Badge>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-100 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

