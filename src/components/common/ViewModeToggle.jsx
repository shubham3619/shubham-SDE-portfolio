import { motion } from 'framer-motion'
import { Briefcase, Code } from 'lucide-react'
import { useViewMode } from '../../context/ViewModeContext'

const ViewModeToggle = () => {
  const { viewMode, toggleViewMode } = useViewMode()

  return (
    <motion.div
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <motion.button
        onClick={toggleViewMode}
        className="glass shadow-xl rounded-full px-3 sm:px-4 py-3 border-2 border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all group relative overflow-hidden"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${viewMode === 'recruiter' ? 'Engineer' : 'Recruiter'} view`}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          initial={false}
        />
        
        <div className="flex items-center gap-2 relative z-10">
          <motion.div
            key={viewMode}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === 'recruiter' ? (
              <Briefcase size={18} className="text-primary-600 dark:text-primary-400" />
            ) : (
              <Code size={18} className="text-primary-600 dark:text-primary-400" />
            )}
          </motion.div>
          <motion.span
            key={viewMode}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline"
          >
            {viewMode === 'recruiter' ? 'Recruiter' : 'Engineer'}
          </motion.span>
        </div>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-1.5 glass rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block"
          initial={{ y: 5 }}
          whileHover={{ y: 0 }}
        >
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            Switch to {viewMode === 'recruiter' ? 'Engineer' : 'Recruiter'} View
          </span>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200 dark:border-t-dark-border" />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

export default ViewModeToggle

