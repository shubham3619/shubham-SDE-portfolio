import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Github, ExternalLink, Database, Code, Zap, Target, Terminal } from 'lucide-react'
import { projects } from '../../data/projects'
import { useViewMode } from '../../context/ViewModeContext'
import CodeSnippet from '../common/CodeSnippet'

const ProjectCaseStudy = ({ project, isOpen, onClose }) => {
  const { viewMode } = useViewMode()

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-dark-border"
        >
          {/* Header */}
          <div className="sticky top-0 glass border-b border-gray-200 dark:border-dark-border p-6 flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">{project.tagline}</p>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1, backgroundColor: '#f3f4f6' }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                  <Target className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Problem</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <Zap className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Architecture Overview (Engineer View) */}
            {viewMode === 'engineer' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-200 dark:bg-primary-800/50 p-2 rounded-lg">
                    <Code className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-mono">Architecture Overview</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono text-sm">Frontend:</h4>
                    <CodeSnippet
                      code={`// Component-based React architecture
const App = () => {
  const [state, setState] = useState();
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>;
};`}
                      language="javascript"
                      className="text-xs"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono text-sm">Backend:</h4>
                    <CodeSnippet
                      code={`// Express.js RESTful API
app.use('/api', authenticate);
app.post('/api/users', createUser);
app.get('/api/users/:id', getUser);`}
                      language="javascript"
                      className="text-xs"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Backend Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Database className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Highlights</h3>
              </div>
              <ul className="space-y-2">
                {project.backendHighlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800/50"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Impact</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
            </motion.div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-dark-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gray-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Github size={18} className="relative z-10" />
                  <span className="relative z-10">View Code</span>
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <ExternalLink size={18} className="relative z-10" />
                  <span className="relative z-10">Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const { viewMode } = useViewMode()

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <>
      <section id="projects" className="py-20 sm:py-24 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              {viewMode === 'recruiter'
                ? 'Real-world projects showcasing problem-solving and impact'
                : 'Deep dive into architecture, decisions, and engineering solutions'}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass rounded-2xl shadow-lg overflow-hidden group cursor-pointer border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 card-glow"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header with Code Theme */}
                <div className="h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center relative overflow-hidden border-b border-gray-700 dark:border-gray-800">
                  {/* Terminal-style header */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 dark:bg-gray-900 flex items-center gap-2 px-4 border-b border-gray-700 dark:border-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-gray-400 text-xs font-mono">{project.name.toLowerCase().replace(/\s+/g, '-')}.js</span>
                  </div>
                  
                  {/* Code preview */}
                  <div className="mt-8 px-4 w-full">
                    <div className="text-green-400 dark:text-green-300 font-mono text-xs sm:text-sm">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-blue-400">const</span> <span className="text-yellow-400">project</span> = {'{'}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="ml-4"
                      >
                        <span className="text-purple-400">name</span>: <span className="text-green-400">"{project.name}"</span>,
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="ml-4"
                      >
                        <span className="text-purple-400">stack</span>: <span className="text-blue-400">[{project.techStack.slice(0, 2).map(t => '"' + t + '"').join(', ')}]</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                      >
                        {'}'};
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {viewMode === 'recruiter'
                      ? project.description
                      : `${project.description.substring(0, 120)}...`}
                  </p>

                  {/* Backend Highlights */}
                  <div className="mb-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="text-primary-600 dark:text-primary-400" size={18} />
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Backend Highlights:
                      </h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {project.backendHighlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="text-primary-600 dark:text-primary-400" size={16} />
                      <span className="text-xs font-mono text-gray-600 dark:text-gray-400">Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, type: 'spring' }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="dev-badge text-xs"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 4 && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="dev-badge text-xs"
                        >
                          +{project.techStack.length - 4} more
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-primary-600 hover:via-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    View Case Study →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectCaseStudy
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects
export { ProjectCaseStudy }

