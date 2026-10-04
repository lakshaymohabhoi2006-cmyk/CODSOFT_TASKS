'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '@/lib/constants';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full mx-auto" />
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[minmax(240px,320px)_1fr] md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto w-full max-w-xs"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                <Image
                  src="/lakshay-about.jpg"
                  alt="Lakshay Mohabhoi in a formal suit"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="scale-[1.25] object-cover object-[center_32%]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {ABOUT_TEXT.intro}
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {ABOUT_TEXT.details}
              </p>

              {/* Key highlights */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  What I Bring:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Clean, efficient, and scalable code',
                    'Responsive and modern UI design',
                    'Full-stack development expertise',
                    'Problem-solving and innovation',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
