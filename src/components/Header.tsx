import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            JD
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Community', 'Work'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/cogitovsmachina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/cogitovsmachina/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:nrikediaz@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}