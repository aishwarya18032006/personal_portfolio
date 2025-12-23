import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MessageSquare, User, FileText } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! I\'ll get back to you soon.')
    }, 1000)
  }

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:aishwaryaramadass2006@gmail.com',
      color: 'from-red-500 to-orange-500',
      hoverColor: 'hover:from-red-600 hover:to-orange-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/aishwarya18032006',
      color: 'from-gray-500 to-gray-700',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aishwarya-r-7b4169355/',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-300 mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark-100">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-dark-200 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-dark-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-dark-100 bg-dark-900/30 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-dark-200 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-dark-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-dark-100 bg-dark-900/30 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-dark-200 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-dark-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-dark-800 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-dark-100 bg-dark-900/30 transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <h3 className="text-2xl font-display font-bold text-dark-100 mb-6">
                Connect With Me
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 p-4 rounded-lg glass border border-dark-800 hover:border-primary-500/50 transition-all group"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} ${social.hoverColor} flex items-center justify-center shadow-lg transition-all`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                          {social.label}
                        </h4>
                        <p className="text-sm text-dark-400">
                          {social.href.replace('mailto:', '').replace('https://', '')}
                        </p>
                      </div>
                      <motion.div
                        className="text-dark-400 group-hover:text-primary-400 transition-colors"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  )
                })}
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Mail className="text-white" size={36} />
                </motion.div>
                <h4 className="text-xl font-display font-bold text-dark-100 mb-2">
                  Quick Response
                </h4>
                <p className="text-dark-300">
                  I typically respond within 24 hours
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

