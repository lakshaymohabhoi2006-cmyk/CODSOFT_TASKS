'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8"
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full mx-auto" />
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise areas.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skillGroup, categoryIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  {skillGroup.category}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="px-4 py-2 bg-white dark:bg-slate-700 border-2 border-blue-200 dark:border-blue-900 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-8 text-center"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              I'm always eager to learn new technologies and frameworks. My passion for
              development drives me to stay updated with the latest industry trends and
              best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
