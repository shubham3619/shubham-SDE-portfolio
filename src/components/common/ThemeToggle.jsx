import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-[9999]"
      style={{ position: 'fixed' }}
    >
      <motion.button
        onClick={toggleTheme}
        className="bg-white dark:bg-dark-surface backdrop-blur-md shadow-2xl rounded-full p-3 sm:p-4 border-2 border-gray-300 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all group relative overflow-hidden"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        style={{ 
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          zIndex: 9999
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
        />
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.4, type: 'spring' }}
          className="relative z-10 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="text-yellow-500" size={24} />
          ) : (
            <Moon className="text-gray-700 dark:text-gray-300" size={24} />
          )}
        </motion.div>
      </motion.button>
      
      {/* Tooltip */}
      <div
        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white dark:bg-dark-surface backdrop-blur-md border border-gray-200 dark:border-dark-border rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden sm:block shadow-lg"
      >
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
        <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-200 dark:border-r-dark-border" />
      </div>
    </div>
  )
}

export default ThemeToggle

