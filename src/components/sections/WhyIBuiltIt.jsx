import { motion } from 'framer-motion'
import { useViewMode } from '../../context/ViewModeContext'
import { Code, Database, Zap, Shield } from 'lucide-react'
import CodeSnippet from '../common/CodeSnippet'

const WhyIBuiltIt = () => {
  const { viewMode } = useViewMode()

  const decisions = [
    {
      icon: Code,
      title: 'Technology Choices',
      recruiterView: 'Selected MERN stack for full-stack capabilities and rapid development.',
      engineerView: 'Chose MERN stack: React for component reusability, Node.js for JavaScript ecosystem consistency, Express for flexibility, MongoDB for schema flexibility. Considered Next.js but chose React + Vite for faster dev builds and more control.',
      tradeoffs: 'Trade-off: Next.js offers better SEO out-of-box, but Vite provides faster development experience and smaller bundle size.',
      code: `// Why MERN Stack?
// ✅ Single language (JavaScript) across stack
// ✅ React: Component reusability
// ✅ Node.js: Non-blocking I/O, great for APIs
// ✅ Express: Flexible, lightweight
// ✅ MongoDB: Schema flexibility

// Tech Stack Decision
const techStack = {
  frontend: "React + Vite", // Fast dev builds
  backend: "Node.js + Express",
  database: "MongoDB",
  reason: "Rapid development + Full JS ecosystem"
};`,
    },
    {
      icon: Database,
      title: 'Database Design',
      recruiterView: 'MongoDB with optimized schemas for performance and scalability.',
      engineerView: 'Normalized schemas with strategic denormalization for read-heavy operations. Used aggregation pipelines instead of multiple queries. Indexed frequently queried fields. Trade-off: Some data duplication for read performance.',
      tradeoffs: 'Denormalization improves read speed but requires careful update strategies to maintain data consistency.',
      code: `// Database Design Strategy
// Strategic Denormalization for Read Performance

// User Schema with embedded posts (denormalized)
const userSchema = {
  name: String,
  email: String,
  posts: [{ // Embedded for fast reads
    title: String,
    content: String,
    createdAt: Date
  }]
};

// Index frequently queried fields
userSchema.index({ email: 1 });
userSchema.index({ 'posts.createdAt': -1 });

// Trade-off: Faster reads, but need to update
// both user and post collection on changes`,
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      recruiterView: 'Implemented caching, query optimization, and code splitting.',
      engineerView: 'Redis caching for frequently accessed data. Database query optimization with proper indexing. Code splitting at route level. Lazy loading for images. Bundle size optimization. Trade-off: Added complexity for significant performance gains.',
      tradeoffs: 'Caching layer adds infrastructure complexity but reduces database load by 70% and improves response times.',
      code: `// Performance Optimization Strategy
// 1. Redis Caching
const cacheKey = \`user:\${userId}\`;
let user = await redis.get(cacheKey);
if (!user) {
  user = await db.getUser(userId);
  await redis.setex(cacheKey, 3600, user);
}

// 2. Code Splitting (React)
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

// 3. Query Optimization
User.find({ role: 'admin' })
  .select('name email') // Only fetch needed fields
  .lean() // Faster, returns plain object
  .limit(10);`,
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      recruiterView: 'JWT-based authentication with role-based access control.',
      engineerView: 'JWT tokens with short expiration and refresh token rotation. RBAC middleware for route protection. Rate limiting to prevent abuse. Input validation and sanitization. Secure password hashing with bcrypt. Trade-off: Stateless JWT vs. session-based auth - chose JWT for scalability.',
      tradeoffs: 'JWT is stateless and scalable but harder to revoke. Implemented token blacklist in Redis as compromise.',
      code: `// JWT Authentication Strategy
// Why JWT over Sessions?
// ✅ Stateless - scales horizontally
// ✅ Works across microservices
// ❌ Harder to revoke (solved with Redis blacklist)

// Token Generation
const accessToken = jwt.sign(
  { userId, role },
  SECRET,
  { expiresIn: '15m' } // Short expiration
);

// Token Blacklist (Redis) for revocation
async function revokeToken(token) {
  await redis.setex(\`blacklist:\${token}\`, 900, '1');
}

// RBAC Middleware
function requireRole(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}`,
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
    <section id="decisions" className="py-20 sm:py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Why I Built It This Way
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            {viewMode === 'recruiter'
              ? 'Strategic decisions behind the architecture'
              : 'Technical reasoning, trade-offs, and engineering decisions'}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {decisions.map((decision, index) => {
            const Icon = decision.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all group card-glow"
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {decision.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
                      {viewMode === 'recruiter'
                        ? decision.recruiterView
                        : decision.engineerView}
                    </p>
                    {viewMode === 'engineer' && decision.code && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4"
                      >
                        <CodeSnippet
                          code={decision.code}
                          language="javascript"
                          className="text-xs"
                        />
                      </motion.div>
                    )}
                    {viewMode === 'engineer' && decision.tradeoffs && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border"
                      >
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1 font-mono">
                          Trade-offs:
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          {decision.tradeoffs}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyIBuiltIt

