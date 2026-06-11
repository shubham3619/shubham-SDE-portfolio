import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

/**
 * Scroll-reveal wrapper. Animates once on enter, respects reduced motion
 * automatically (Framer disables transforms when the OS setting is on).
 */
const Reveal = ({ children, as = 'div', variants = fadeUp, className = '', delay = 0, ...rest }) => {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
