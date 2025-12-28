import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Terminal } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import CodeSnippet from '../common/CodeSnippet'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.github,
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.linkedin,
      ariaLabel: 'Visit LinkedIn profile',
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-primary-50 to-white dark:from-dark-surface dark:to-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 shadow-md border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 text-center group card-glow"
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      whileHover={{ scale: 1.05 }}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors break-all inline-block text-sm sm:text-base"
                    >
                      {info.value}
                    </motion.a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{info.value}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Let's connect on social media
            </p>
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass p-4 rounded-full shadow-md border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-400 transition-all relative group card-glow"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Icon className="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300" size={24} />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-100 dark:bg-primary-900/30 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact API Endpoint */}
          <motion.div
            className="mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-primary-600 dark:text-primary-400" size={20} />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                Contact API
              </h3>
            </div>
            <CodeSnippet
              code={`// GET /api/contact
const contactInfo = {
  email: "${personalInfo.email}",
  phone: "${personalInfo.phone}",
  location: "${personalInfo.location}",
  github: "${personalInfo.github}",
  linkedin: "${personalInfo.linkedin}"
};

// cURL Example
curl -X POST https://api.portfolio.dev/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Your Name",
    "email": "your@email.com",
    "message": "Let'\''s build something amazing!"
  }'`}
              language="javascript"
            />
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mt-4 text-center">
              I'm open to new opportunities and collaborations. Let's build
              something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

