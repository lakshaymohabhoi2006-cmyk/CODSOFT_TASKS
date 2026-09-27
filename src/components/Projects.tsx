'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full mx-auto" />
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              A selection of my recent projects showcasing my skills in web development,
              design, and problem-solving.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View more */}
          <div className="text-center pt-8">
            <p className="text-slate-600 dark:text-slate-400">
              Want to see more? Visit my{' '}
              <a
                href="https://github.com/lakshaymohabhoi2006-cmyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                GitHub profile
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
