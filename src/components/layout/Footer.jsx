import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${personalInfo.email}`,
      ariaLabel: 'Send email',
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-surface text-gray-300 dark:text-gray-400 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white dark:text-white mb-2">
              Shubham Sharma
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Full-Stack MERN Developer</p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-primary-400 transition-colors p-2 rounded-full hover:bg-gray-800 dark:hover:bg-dark-bg"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-dark-border text-center text-sm text-gray-500 dark:text-gray-600">
          <p>
            © {currentYear} Shubham Sharma. Built with React, Vite, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

