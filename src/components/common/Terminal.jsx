import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Terminal = ({ commands = [], className = '' }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (currentLine < commands.length) {
      const command = commands[currentLine]
      let charIndex = 0
      setDisplayedText('')

      const interval = setInterval(() => {
        if (charIndex < command.length) {
          setDisplayedText(command.substring(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1)
          }, 1000)
        }
      }, 50)

      return () => clearInterval(interval)
    }
  }, [currentLine, commands])

  return (
    <motion.div
      className={`terminal ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-2 text-gray-400 text-xs font-mono">terminal</span>
      </div>
      <div className="terminal-content">
        {commands.slice(0, currentLine).map((cmd, idx) => (
          <div key={idx} className="mb-1">
            <span className="text-blue-400">$</span> {cmd}
          </div>
        ))}
        {currentLine < commands.length && (
          <div className="mb-1">
            <span className="text-blue-400">$</span>{' '}
            <span className="typewriter">{displayedText}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Terminal

