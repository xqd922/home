'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)]"></div>
      </div>
    </section>
  );
} 