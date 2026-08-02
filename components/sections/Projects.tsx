'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { PROJECTS } from '@/lib/data';
import { useLanguage, tr } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

const ICON_COLORS = [
  'bg-brand-500/10 text-brand-600 dark:text-brand-300',
  'bg-accent-pink/10 text-accent-pink',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'bg-accent-cyan/10 text-cyan-600 dark:text-cyan-400',
  'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  'bg-violet-500/10 text-violet-600 dark:text-violet-400',
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const { lang } = useLanguage();
  const t = useDict(lang).projects;

  const displayed = filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <SectionWrapper id="projects" className="bg-[rgb(var(--card))]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t.label} title={t.title} description={t.description} align="left" />

        {/* Filter */}
        <div className="flex justify-start mb-12">
          <div className="flex items-center gap-1 p-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--background))]">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-brand-500 text-white shadow-glow'
                    : 'text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]'
                }`}
              >
                {f === 'all' ? t.all : `★ ${t.featured}`}
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
                className="group flex flex-col p-6 soft-card hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300"
                aria-label={project.title}
              >
                {/* Project icon */}
                <div className={`w-12 h-12 rounded-2xl mb-5 flex items-center justify-center ${ICON_COLORS[i % ICON_COLORS.length]}`}>
                  <span className="text-2xl" aria-hidden>{getProjectIcon(project.id)}</span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-[rgb(var(--foreground))] leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {project.featured && (
                      <span className="text-sm text-brand-500" aria-label="Featured">★</span>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgb(var(--muted))] hover:text-brand-500 transition-colors"
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

                <p className="text-sm text-[rgb(var(--muted))] leading-relaxed flex-1 mb-4">
                  {tr(project.description, lang)}
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
