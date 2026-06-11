import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin top progress bar tracking page scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-accent"
    />
  )
}

export default ScrollProgress
