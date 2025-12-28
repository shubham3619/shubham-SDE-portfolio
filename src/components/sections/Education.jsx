import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Code } from 'lucide-react'
import { education } from '../../data/education'
import CodeSnippet from '../common/CodeSnippet'

const Education = () => {
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
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 sm:py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <CodeSnippet
            code={`// Educational Journey
const education = [
  {
    degree: "B.Sc Mathematics",
    university: "University of Delhi",
    year: "2020-2023",
    skills: ["Problem Solving", "Analytical Thinking"]
  },
  {
    degree: "12th Grade",
    board: "CBSE",
    year: "2020",
    stream: "Science"
  }
];

// Mathematics background → Algorithmic thinking
// Strong foundation for software development`}
            language="javascript"
          />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="glass rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-dark-border card-glow"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  {edu.university && (
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.university}
                    </p>
                  )}
                  {edu.board && (
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.board}
                    </p>
                  )}
                  {edu.stream && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.stream}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    {(edu.duration || edu.year) && (
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{edu.duration || edu.year}</span>
                      </div>
                    )}
                    {edu.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

