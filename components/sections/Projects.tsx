'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { PROJECTS } from '@/lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayed = filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="A selection of projects I'm proud of — from corporate platforms to mobile apps."
          align="center"
        />

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  filter === f
                    ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {f === 'all' ? 'All Projects' : '⭐ Featured'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {displayed.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-brand-500/40 transition-all duration-300 hover:shadow-glow-sm"
                aria-label={project.title}
              >
                {/* Project icon placeholder */}
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br from-brand-500/20 to-purple-500/20 border border-brand-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl" aria-hidden>
                    {getProjectIcon(project.id)}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {project.featured && (
                      <span className="text-xs text-yellow-500" aria-label="Featured">⭐</span>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors"
                        aria-label={`Visit ${project.title}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="brand">{tech}</Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

function getProjectIcon(id: string): string {
  const icons: Record<string, string> = {
    'keolis-corp': '🌐',
    'voyages-keolis': '🚌',
    'info-voyageurs': '🗺️',
    'mobile-factory': '📱',
    'oskar': '🔍',
    'pam75': '♿',
    'adomik': '📊',
  };
  return icons[id] ?? '💻';
}
