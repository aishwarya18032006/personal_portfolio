import { motion } from 'framer-motion'
import Card from '../components/Card'
import Badge from '../components/Badge'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-primary-500 to-primary-600',
      variant: 'primary',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python','API'],
      color: 'from-accent-500 to-accent-600',
      variant: 'accent',
    },
    {
      title: 'Data & Storage Systems',
      skills: [ 'MySQL', 'MongoDB'],
      color: 'from-primary-500 to-primary-600',
      variant: 'secondary',
    },
    {
      title: 'Version Control & Deployment',
      skills: ['Git', 'GitHub', 'Vercel', 'Render'],
      color: 'from-purple-500 to-pink-500',
      variant: 'purple',
    },
    {
      title: 'Programming Fundamentals',
      skills: [ 'python', 'java','DSA','OOPs','OS'],
      color: 'from-accent-500 to-accent-600',
      variant: 'primary',
    },
    {
      title: 'SoftSkills',
      skills: ['Teamwork','Problem Solving','Adaptability','Time Management'],
      color: 'from-primary-500 to-primary-600',
      variant: 'accent',
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <Card className="h-full">
                <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-display font-bold text-dark-100 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        type: 'spring',
                        stiffness: 200
                      }}
                    >
                      <Badge variant={category.variant}>
  {skill}
</Badge>

                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

