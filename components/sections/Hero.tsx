'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const roles = [
  'Technical Lead Front-End',
  'React & Flutter Expert',
  'Architecture & Performance',
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#0a0a0e]"
      aria-label="Hero"
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" aria-hidden />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">

        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-gray-900 dark:text-white mb-2">Technical Lead</span>
          <span className="block gradient-text">Front-End</span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <strong className="text-gray-700 dark:text-gray-200">10+ years experience</strong> building scalable web and mobile applications.
          Specialized in React ecosystems, design systems, performance optimization
          and mobile development with Flutter.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="#projects" size="lg" variant="primary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            View Projects
          </Button>
          <Button href="#contact" size="lg" variant="outline">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </Button>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {['React', 'Next.js', 'TypeScript', 'Flutter', 'GraphQL', 'Tailwind'].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-white/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.07 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-hidden
        >
          <span className="text-xs font-mono text-gray-400 dark:text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-0.5 h-8 bg-gradient-to-b from-brand-500/60 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
