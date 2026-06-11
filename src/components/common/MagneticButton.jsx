import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Button/link that springs toward the cursor on hover. Falls back to a static
 * element under prefers-reduced-motion.
 */
const MagneticButton = ({ as = 'button', children, className = '', strength = 0.4, ...rest }) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const MotionTag = motion[as] || motion.button

  const handleMove = (e) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    setPos({ x, y })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={pos}
      transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.5 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default MagneticButton
