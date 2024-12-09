import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Award, Heart } from 'lucide-react';

const engagements = [
  {
    icon: <Users size={24} />,
    title: 'Tech Meetups',
    description: 'Regular speaker at local tech meetups and international conferences',
    metric: '120+ talks'
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Technical Writing',
    description: 'Contributing articles on Programa con Google blog and Oreilly book contributor',
    metric: '30+ articles'
  },
  {
    icon: <Award size={24} />,
    title: 'Mentorship & Teaching',
    description: 'Teaching & mentoring junior developers and bootcamp students',
    metric: '3000+ students & mentees since 2014'
  },
  {
    icon: <Heart size={24} />,
    title: 'Tech communities organizer',
    description: 'Active organizer at GDG CDMX & Google ML CDMX',
    metric: '60+ meetups since 2010'
  }
];

export default function Community() {
  return (
    <section id="community" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Community Engagement
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Actively contributing to the developer community through various channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {item.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
