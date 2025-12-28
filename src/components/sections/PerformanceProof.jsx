import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Gauge, Zap, TrendingUp, Award } from 'lucide-react'
import CodeSnippet from '../common/CodeSnippet'

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const PerformanceProof = () => {
  const metrics = [
    {
      icon: Gauge,
      label: 'Lighthouse Score',
      value: 95,
      suffix: '%',
      description: 'Performance, Accessibility, Best Practices',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      label: 'API Response Time',
      value: 120,
      suffix: 'ms',
      description: 'Average response time',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      label: 'Query Optimization',
      value: 60,
      suffix: '%',
      description: 'Reduction in database query time',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Award,
      label: 'Code Quality',
      value: 98,
      suffix: '%',
      description: 'Test coverage & code standards',
      color: 'from-orange-500 to-red-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="performance" className="py-20 sm:py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Performance & Quality
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Measurable results from optimization and best practices
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all group card-glow"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={20} />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {metric.label}
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">{metric.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Performance Optimization Code */}
        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center font-mono">
            Optimization Techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CodeSnippet
              code={`// Database Query Optimization
// Before: Multiple queries
const user = await User.findById(id);
const posts = await Post.find({ userId: id });

// After: Single optimized query
const user = await User.findById(id)
  .populate('posts')
  .lean(); // Faster, returns plain JS object`}
              language="javascript"
              className="text-xs"
            />
            <CodeSnippet
              code={`// API Response Caching
const cacheKey = \`user:\${userId}\`;
let user = await redis.get(cacheKey);

if (!user) {
  user = await db.getUser(userId);
  await redis.setex(cacheKey, 3600, user);
}

return user; // 70% faster response`}
              language="javascript"
              className="text-xs"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceProof

