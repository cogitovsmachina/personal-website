import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CodeFlux AI',
    description: 'A ML full-stack chat application acting as CS tutor built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    tags: ['Vertex AI', 'Docker', 'React', 'LearnML'],
    github: 'https://github.com/cogitovsmachina/codeflux-ai',
    live: 'https://codeflux-ai.vercel.app'
  },
  {
    title: 'Verificado19s',
    description: 'Web app to centralize information with embedded Google Maps and Forms',
    image: 'https://verificado19s.org/wp-content/uploads/2019/03/v19s_Protocolo-marzo10_portada-RECURSOS.png?w=500&h=300&fit=crop',
    tags: ['Gulp.js', 'SASS', 'Bootstrap'],
    github: 'https://github.com/cogitovsmachina/verificado19s',
    live: 'https://verificado19s.org/'
  },
  {
    title: 'Shoe Lovers Android app',
    description: 'An e-commerce mobile app awarded as Top 10 apps by Google in 2013',
    image: 'https://cdn.dribbble.com/users/62860/screenshots/1376955/media/24e7b0de377f01c414f295d0f8acc295.png?resize=800x600&vertical=center?w=500&h=300&fit=crop',
    tags: ['Picasso', 'Parse', 'GSON'],
    github: 'https://github.com/cogitovsmachina/ShoeLoversForAndroid',
    live: 'https://apkpure.com/shoe-lovers/co.shoelovers'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent works and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
