import { motion } from 'framer-motion'
import { Lightbulb, Target, Zap, CheckCircle } from 'lucide-react'
import CodeSnippet from '../common/CodeSnippet'

const EngineeringPhilosophy = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Understand First',
      description: 'Deep dive into the problem space before writing code. Ask questions, gather requirements, and identify constraints.',
      code: `// Step 1: Understand the problem
function analyzeProblem(requirements) {
  const questions = [
    "What problem are we solving?",
    "Who are the users?",
    "What are the constraints?",
    "What's the expected scale?"
  ];
  
  return {
    problem: requirements.problem,
    users: requirements.users,
    constraints: requirements.constraints,
    scale: requirements.expectedTraffic
  };
}`,
    },
    {
      icon: Target,
      title: 'Design for Scale',
      description: 'Build with growth in mind. Choose architectures and patterns that can evolve with the product.',
      code: `// Step 2: Design scalable architecture
class ScalableArchitecture {
  constructor() {
    this.modular = true;
    this.horizontalScaling = true;
    this.caching = true;
  }
  
  design() {
    return {
      microservices: "Service-oriented design",
      database: "Sharded + Replicated",
      caching: "Redis for hot data",
      loadBalancing: "Distribute traffic"
    };
  }
}`,
    },
    {
      icon: Zap,
      title: 'Optimize Iteratively',
      description: 'Ship working solutions first, then measure and optimize based on real-world usage and metrics.',
      code: `// Step 3: Ship, measure, optimize
async function optimizeIteratively() {
  // 1. Ship MVP
  const mvp = await shipMVP();
  
  // 2. Measure performance
  const metrics = await measurePerformance(mvp);
  
  // 3. Identify bottlenecks
  const bottlenecks = identifyBottlenecks(metrics);
  
  // 4. Optimize
  return optimize(bottlenecks);
}`,
    },
    {
      icon: CheckCircle,
      title: 'Quality Through Testing',
      description: 'Write testable code, implement proper error handling, and maintain high code quality standards.',
      code: `// Step 4: Ensure quality
describe('Code Quality', () => {
  it('should have test coverage > 80%', () => {
    expect(testCoverage).toBeGreaterThan(80);
  });
  
  it('should handle errors gracefully', () => {
    expect(errorHandling).toBeDefined();
  });
  
  it('should follow best practices', () => {
    expect(codeStandards).toBe(true);
  });
});`,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="philosophy" className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark-surface dark:to-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            How I Think
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            My approach to engineering problems and building solutions
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 sm:p-8 shadow-md border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all group card-glow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                  <motion.div
                    className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </motion.div>
                  <div className="flex-1 w-full min-w-0 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base mb-4">
                      {step.description}
                    </p>
                    <div className="w-full flex-1 min-h-0">
                      <CodeSnippet
                        code={step.code}
                        language="javascript"
                        className="text-xs"
                      />
                    </div>
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

export default EngineeringPhilosophy

