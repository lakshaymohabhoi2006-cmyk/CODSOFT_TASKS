'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Lakshay Mohabhoi
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            Full Stack Developer & Web Enthusiast
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {ABOUT_TEXT.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Lakshay_Mohabhoi_Resume.pdf';
              link.click();
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-lg transition-colors"
          >
            <Download size={20} />
            Resume
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8"
        >
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse-slow" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
