import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const NetBackground = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh overlay */}
      <div className="gradient-mesh" />
      
      {/* Enhanced Net pattern with multiple layers */}
      <div
        className={`absolute inset-0 net-background`}
        style={{
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Secondary net pattern at different angle */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, ${isDark ? 'rgba(139, 148, 158, 0.1)' : 'rgba(14, 165, 233, 0.1)'} 1px, transparent 1px),
            linear-gradient(-45deg, ${isDark ? 'rgba(139, 148, 158, 0.1)' : 'rgba(14, 165, 233, 0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px',
        }}
      />
      
      {/* Animated gradient orbs - Primary Blue */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(14, 165, 233, 0.2) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0.15) 40%, transparent 70%)',
          opacity: isDark ? 0.3 : 0.25,
        }}
      />
      
      {/* Animated gradient orbs - Purple */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
          opacity: isDark ? 0.3 : 0.25,
        }}
      />
      
      {/* Animated gradient orbs - Pink */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.6, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
          opacity: isDark ? 0.2 : 0.15,
        }}
      />
      
      {/* Additional accent orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          opacity: isDark ? 0.15 : 0.1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          opacity: isDark ? 0.15 : 0.1,
        }}
      />
      
      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  )
}

export default NetBackground

