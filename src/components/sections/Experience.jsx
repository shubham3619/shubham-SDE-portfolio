import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, ExternalLink, Briefcase, TrendingUp, Code, Database, Server } from 'lucide-react'
import { experience } from '../../data/experience'
import { useViewMode } from '../../context/ViewModeContext'
import CodeSnippet from '../common/CodeSnippet'

const Experience = () => {
  const { viewMode } = useViewMode()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-block mb-4"
          >
            <TrendingUp className="text-primary-600 dark:text-primary-400 mx-auto" size={40} />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            {viewMode === 'recruiter'
              ? 'Professional journey and career growth'
              : 'Technical roles, responsibilities, and engineering impact'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Enhanced Animated Timeline line with gradient */}
            <motion.div
              className="absolute left-8 top-0 w-1 hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <motion.div
                className="w-full h-full bg-gradient-to-b from-primary-400 via-primary-600 to-primary-400 rounded-full"
                style={{
                  backgroundSize: '100% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '0% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </motion.div>

            {experience.map((exp, index) => {
              const isLatest = index === 0
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative mb-16 pl-0 md:pl-20 group"
                >
                  {/* Enhanced Timeline dot with pulse */}
                  <motion.div
                    className="absolute left-6 top-6 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.5, type: 'spring' }}
                  >
                    <motion.div
                      className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"
                      animate={isLatest ? {
                        boxShadow: [
                          '0 0 0 0 rgba(14, 165, 233, 0.7)',
                          '0 0 0 10px rgba(14, 165, 233, 0)',
                        ],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                    {isLatest && (
                      <motion.div
                        className="absolute inset-0 bg-primary-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.5, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    className="glass rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all relative overflow-hidden card-glow group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Developer-themed background pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity hex-pattern" />
                    
                    {/* Subtle gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"
                    />
                    
                    {/* Code accent line */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <motion.div
                        className="flex items-center gap-3 mb-2"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="bg-primary-100 p-2 rounded-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="text-primary-600" size={20} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.role}
                          </h3>
                          {isLatest && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              className="ml-2 text-xs bg-gradient-to-r from-primary-500 to-purple-500 text-white px-2 py-1 rounded-full font-medium"
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                      </motion.div>
                      <h4 className="text-lg sm:text-xl font-semibold gradient-text mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    {exp.productUrl && (
                      <motion.a
                        href={exp.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-4 md:mb-0 group"
                      >
                        {exp.product}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink size={16} />
                        </motion.div>
                      </motion.a>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Server className="text-green-600 dark:text-green-400" size={18} />
                      <h5 className="font-semibold text-gray-900 dark:text-white font-mono text-sm">
                        Key Achievements:
                      </h5>
                    </div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm md:text-base"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1.5 font-mono">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="text-primary-600 dark:text-primary-400" size={18} />
                      <h5 className="font-semibold text-gray-900 dark:text-white font-mono text-sm">
                        Tech Stack:
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05, type: 'spring' }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="dev-badge"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      </div>
                    </div>

                    {/* Code Snippet for Current Role */}
                    {isLatest && viewMode === 'engineer' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border"
                      >
                        <CodeSnippet
                          code={`// Current Role: ${exp.role}
// Company: ${exp.company}

// Key Responsibilities:
const responsibilities = {
  backend: [
    "Design RESTful APIs",
    "Optimize database queries",
    "Implement authentication",
    "Build scalable architecture"
  ],
  frontend: [
    "Build responsive UIs",
    "Optimize performance",
    "Implement state management"
  ],
  impact: "Delivered ${exp.achievements.length}+ key features"
};

// Tech Stack in Action
${exp.techStack.slice(0, 3).map(tech => `// - ${tech}`).join('\n')}`}
                          language="javascript"
                          className="text-xs"
                        />
                      </motion.div>
                    )}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

