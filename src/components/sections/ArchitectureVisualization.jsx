import { motion } from 'framer-motion'
import { useState } from 'react'
import { Database, Shield, Key, Server, Network, Lock } from 'lucide-react'
import { useViewMode } from '../../context/ViewModeContext'
import CodeSnippet from '../common/CodeSnippet'

const ArchitectureVisualization = () => {
  const { viewMode } = useViewMode()
  const [activeStep, setActiveStep] = useState(null)

  const architectureSteps = [
    {
      id: 1,
      icon: Database,
      title: 'Database Design',
      shortDesc: 'Optimized MongoDB schemas with indexing',
      longDesc: 'Designed normalized schemas with strategic indexing for fast queries. Used aggregation pipelines for complex data operations. Implemented connection pooling and query optimization.',
      color: 'from-green-500 to-emerald-600',
      code: `// MongoDB Schema with Indexing
const userSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], index: true },
  createdAt: { type: Date, default: Date.now, index: true }
});

// Aggregation Pipeline Example
User.aggregate([
  { $match: { role: 'admin' } },
  { $group: { _id: '$department', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);`,
    },
    {
      id: 2,
      icon: Shield,
      title: 'Authentication & Authorization',
      shortDesc: 'JWT-based auth with RBAC',
      longDesc: 'Implemented JWT tokens with refresh token rotation. Built role-based access control (RBAC) middleware. Added rate limiting and security headers. Session management with Redis for scalability.',
      color: 'from-blue-500 to-cyan-600',
      code: `// JWT Authentication with RBAC
const jwt = require('jsonwebtoken');

// Generate tokens
function generateTokens(user) {
  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  return { accessToken, refreshToken };
}

// RBAC Middleware
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}`,
    },
    {
      id: 3,
      icon: Server,
      title: 'API Architecture',
      shortDesc: 'RESTful APIs with Express.js',
      longDesc: 'RESTful API design with proper HTTP methods. Middleware for validation, error handling, and logging. Request/response transformation. API versioning strategy. Comprehensive error handling.',
      color: 'from-purple-500 to-pink-600',
      code: `// RESTful API with Express.js
const express = require('express');
const router = express.Router();

// GET /api/v1/users/:id
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/v1/users
router.post('/users', validateUser, async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
});`,
    },
    {
      id: 4,
      icon: Network,
      title: 'Microservices & Scalability',
      shortDesc: 'Modular architecture for scale',
      longDesc: 'Service-oriented architecture with clear boundaries. Inter-service communication patterns. Load balancing and horizontal scaling. Service discovery and health checks.',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      icon: Lock,
      title: 'Security & Best Practices',
      shortDesc: 'Security-first approach',
      longDesc: 'Input validation and sanitization. SQL injection prevention. XSS and CSRF protection. Secure password hashing (bcrypt). Environment variable management. Security audit logging.',
      color: 'from-indigo-500 to-blue-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="architecture" className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Backend & Architecture
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            {viewMode === 'recruiter'
              ? 'Technical architecture and system design expertise'
              : 'Deep dive into architectural decisions and implementation details'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {architectureSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === step.id
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 shadow-md border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all cursor-pointer group card-glow"
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`bg-gradient-to-br ${step.color} p-4 rounded-lg flex-shrink-0`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-5 h-5 text-gray-400 dark:text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">
                        {viewMode === 'recruiter' ? step.shortDesc : step.longDesc}
                      </p>
                      {isActive && viewMode === 'engineer' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border"
                        >
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            {step.longDesc}
                          </p>
                          {step.code && (
                            <CodeSnippet
                              code={step.code}
                              language="javascript"
                              className="text-xs"
                            />
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureVisualization

