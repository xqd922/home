'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="mb-6">
              I'm a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend development,
              I create seamless digital experiences that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              writing and mentoring.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 