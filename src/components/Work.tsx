import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Reduced application load time by 40%',
      'Implemented CI/CD pipeline',
      'Led team of 5 developers'
    ]
  },
  {
    company: 'StartUp Inc',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects. Worked directly with clients to gather requirements and deliver solutions.',
    achievements: [
      'Launched 10+ successful projects',
      'Introduced automated testing',
      'Improved code coverage to 90%'
    ]
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2017 - 2019',
    description: 'Created responsive web applications and implemented modern UI/UX designs.',
    achievements: [
      'Built 20+ client websites',
      'Implemented component library',
      'Optimized build process'
    ]
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-3" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}