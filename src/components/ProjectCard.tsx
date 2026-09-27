'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full"
    >
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 flex items-center justify-center group-hover:opacity-90 transition-opacity">
        <span className="text-white font-semibold">Project Image</span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              <Code2 size={18} />
              GitHub
            </Link>
          )}
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
