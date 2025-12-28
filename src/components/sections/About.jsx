import { motion } from 'framer-motion'
import { Code, Database, Server, Zap } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import CodeSnippet from '../common/CodeSnippet'

const About = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 sm:py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full"
            variants={itemVariants}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 flex justify-center"
            >
              <motion.div
                className="relative w-64 h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 opacity-75 blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  style={{ borderRadius: '1rem' }}
                />
                <motion.img
                  src="/image/shubham.jpg"
                  alt="Shubham Sharma"
                  className="relative w-full h-full rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-dark-border z-10"
                  style={{ objectPosition: 'center 1%' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="lg:col-span-2 prose prose-lg max-w-none"
              variants={itemVariants}
            >
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-800/50">
              <div className="flex items-center gap-2 mb-2">
                <Server className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="font-mono text-sm font-semibold text-gray-900 dark:text-white">Backend Focus</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                I'm particularly passionate about <strong>backend development</strong> and <strong>system architecture</strong>. I enjoy designing efficient database schemas, optimizing API performance, and building scalable solutions that handle real-world traffic. My mathematics background helps me think algorithmically and approach problems with a structured mindset.
              </p>
            </div>

            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800/50">
              <div className="flex items-center gap-2 mb-2">
                <Code className="text-green-600 dark:text-green-400" size={20} />
                <span className="font-mono text-sm font-semibold text-gray-900 dark:text-white">Tech Expertise</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                Over the past <strong>2+ years</strong>, I've worked on multiple production projects, from job application platforms to analytics dashboards. I specialize in the <strong>MERN stack</strong>, with deep expertise in <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. I've implemented complex features like role-based authentication, email automation, and real-time data aggregation.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I'm currently seeking opportunities as a Full-Stack or
              Backend-leaning Developer where I can contribute to building
              robust, scalable applications. I'm excited to work with teams that
              value clean code, thoughtful architecture, and continuous
              learning.
            </p>

            {/* Developer Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <CodeSnippet
                code={`// Developer Profile
const developer = {
  name: "Shubham Sharma",
  role: "Full-Stack Developer",
  location: "India",
  experience: "2+ years",
  
  skills: {
    frontend: ["React", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    tools: ["Git", "Postman", "VS Code"]
  },
  
  philosophy: "Build scalable, maintainable code",
  status: "Available for opportunities"
};

console.log(\`Hello! I'm \${developer.name}\`);
// Output: Hello! I'm Shubham Sharma`}
                language="javascript"
                className="mt-4"
              />
            </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {[
              { number: '2+', label: 'Years of Experience', icon: '🚀' },
              { number: '5+', label: 'Projects Completed', icon: '💼' },
              { number: '2', label: 'Production Products', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl text-center border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all cursor-default card-glow"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

