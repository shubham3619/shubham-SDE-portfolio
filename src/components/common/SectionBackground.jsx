import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const SectionBackground = ({ variant = 'default' }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const variants = {
    default: {
      orbs: [
        { color: 'rgba(14, 165, 233, 0.15)', size: 300, pos: 'top-right' },
        { color: 'rgba(139, 92, 246, 0.15)', size: 250, pos: 'bottom-left' },
      ],
    },
    gradient: {
      orbs: [
        { color: 'rgba(14, 165, 233, 0.2)', size: 400, pos: 'top-right' },
        { color: 'rgba(236, 72, 153, 0.2)', size: 350, pos: 'bottom-left' },
        { color: 'rgba(139, 92, 246, 0.15)', size: 300, pos: 'center' },
      ],
    },
  }

  const config = variants[variant] || variants.default

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      {config.orbs.map((orb, index) => {
        const positions = {
          'top-right': 'top-0 right-0 -translate-y-1/2 translate-x-1/2',
          'bottom-left': 'bottom-0 left-0 translate-y-1/2 -translate-x-1/2',
          'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        }
        
        return (
          <motion.div
            key={index}
            className={`absolute ${positions[orb.pos]} rounded-full blur-3xl`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              opacity: isDark ? 0.2 : 0.15,
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: index % 2 === 0 ? [0, 30, 0] : [0, -30, 0],
              y: index % 2 === 0 ? [0, -30, 0] : [0, 30, 0],
            }}
            transition={{
              duration: 15 + index * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          />
        )
      })}
      
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(139, 148, 158, 0.3)' : 'rgba(14, 165, 233, 0.3)'} 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

export default SectionBackground

