import { motion } from 'framer-motion'
import { Briefcase, Code, Sparkles, TrendingUp } from 'lucide-react'
import Card from '../components/Card'

const Experience = () => {
  const experiences = [
  {
    icon: Briefcase,
    title: 'Full Stack Intern',
    period: 'June 2025',
    description:
      'Completed a full stack development internship at LearnLogicify (Offline – Coimbatore). Focused on building dynamic and responsive web interfaces while strengthening core frontend development skills.',
    highlights: [
      'HTML, CSS, JavaScript',
      'Responsive Web Design',
      'Dynamic UI Development',
      'Frontend Fundamentals',
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Briefcase,
    title: 'Full Stack Developer Intern',
    period: 'Sep 2025 – Nov 2025',
    description:
      'Worked as a Full Stack Developer Intern at EduTantr (Online – Bangalore). Trained in building end-to-end web applications covering both frontend and backend workflows.',
    highlights: [
      'React.js, Node.js, Express.js',
      'MongoDB & MySQL',
      'CRUD Operations',
      'API Integration & Backend Logic',
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Sparkles,
    title: 'AI-based Application Development',
    period: '2023 – Present',
    description:
      'Independently developing AI-powered applications by integrating deep learning and NLP models into full stack web applications, focusing on real-world problem solving.',
    highlights: [
      'Deep Learning & CNN Models',
      'Emotion Detection Systems',
      'NLP Concepts',
      'AI + Full Stack Integration',
    ],
    color: 'from-purple-500 to-pink-500',
  },
]


  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 relative z-10"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-primary-500/20`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-dark-950 transform -translate-y-1/2" />
                    </motion.div>

                    {/* Content */}
                    <Card className="flex-1 w-full" hover>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-display font-bold text-dark-100 mb-2">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-primary-400 font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-dark-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-dark-200 mb-3">
                          Key Highlights:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {exp.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                              <span className="text-sm text-dark-400">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

