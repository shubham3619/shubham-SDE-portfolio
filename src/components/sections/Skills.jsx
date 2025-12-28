import { motion } from 'framer-motion'
import { Code, Database, Server, Wrench } from 'lucide-react'
import { skills } from '../../data/skills'
import CodeSnippet from '../common/CodeSnippet'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'blue', icon: Code, iconClass: 'text-blue-600 dark:text-blue-400' },
    { title: 'Backend', skills: skills.backend, color: 'green', icon: Server, iconClass: 'text-green-600 dark:text-green-400' },
    { title: 'DevOps & Tools', skills: skills.devops, color: 'purple', icon: Wrench, iconClass: 'text-purple-600 dark:text-purple-400' },
    { title: 'Core Concepts', skills: skills.concepts, color: 'orange', icon: Database, iconClass: 'text-orange-600 dark:text-orange-400' },
  ]

  const gradientClasses = {
    blue: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20 dark:border-blue-400/30',
    green: 'from-green-500/10 to-emerald-500/10 border-green-500/20 dark:border-green-400/30',
    purple: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 dark:border-purple-400/30',
    orange: 'from-orange-500/10 to-red-500/10 border-orange-500/20 dark:border-orange-400/30',
  }

  return (
    <section id="skills" className="py-20 sm:py-24 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Code Snippet */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CodeSnippet
            code={`// Tech Stack Overview
const techStack = {
  frontend: {
    framework: "React",
    styling: "Tailwind CSS",
    state: "Context API / Redux",
    build: "Vite"
  },
  backend: {
    runtime: "Node.js",
    framework: "Express.js",
    database: "MongoDB",
    auth: "JWT"
  },
  tools: ["Git", "Postman", "VS Code", "MongoDB Compass"]
};

console.log("Building scalable applications with MERN stack");`}
            language="javascript"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`glass bg-gradient-to-br ${gradientClasses[category.color]} border rounded-2xl p-6 sm:p-8 transition-all duration-300 card-glow group relative overflow-hidden`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Developer pattern overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity hex-pattern" />
              
              <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <motion.div
                  className="p-2 rounded-lg bg-white/50 dark:bg-gray-800/50"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={category.iconClass} size={24} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-mono">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: 'spring' }}
                    whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
                    className="dev-badge"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-mono">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
              </div>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

