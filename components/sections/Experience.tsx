'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { EXPERIENCES } from '@/lib/data';
import { useLanguage, tr } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId) ?? EXPERIENCES[0];
  const { lang } = useLanguage();
  const t = useDict(lang).experience;

  return (
    <SectionWrapper id="experience" className="bg-[rgb(var(--card))]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t.label} title={t.title} description={t.description} align="left" />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Company tabs */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {EXPERIENCES.map((exp) => {
              const isActive = activeId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`relative flex-shrink-0 text-left px-5 py-4 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500 border-brand-500 text-white shadow-glow'
                      : 'bg-[rgb(var(--background))] border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:border-brand-500/40'
                  }`}
                >
                  <p className="font-display font-semibold text-sm">{exp.company}</p>
                  <p className={`text-xs mt-0.5 ${isActive ? 'text-white/70' : 'text-[rgb(var(--muted))]'}`}>
                    {tr(exp.period, lang)}
                  </p>
                  {exp.current && (
                    <span className={`mt-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide ${isActive ? 'text-white/90' : 'text-brand-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isActive ? 'bg-white' : 'bg-brand-500'}`} aria-hidden />
                      {t.current}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="p-6 soft-card">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[rgb(var(--foreground))]">{tr(active.role, lang)}</h3>
                    <p className="text-brand-500 font-medium mt-0.5">{active.company}</p>
                  </div>
                  <span className="pill text-xs font-medium text-brand-600 dark:text-brand-300 px-3 py-1 bg-brand-500/10 border border-brand-500/20">
                    {tr(active.period, lang)}
                  </span>
                </div>

                <ul className="space-y-2">
                  {active.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[rgb(var(--foreground))]">
                      <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0" aria-hidden>▹</span>
                      {tr(item, lang)}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-5 pt-5 border-t border-[rgb(var(--border))]">
                  <div className="flex flex-wrap gap-1.5">
                    {active.technologies.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects */}
              {active.projects && active.projects.length > 0 && (
                <div>
                  <h4 className="eyebrow mb-4">{t.keyProjects}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {active.projects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group p-5 soft-card hover:-translate-y-1 transition-transform"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="font-semibold text-sm text-[rgb(var(--foreground))]">{project.title}</h5>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-[rgb(var(--muted))] hover:text-brand-500 transition-colors"
                              aria-label={`Visit ${project.title}`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-[rgb(var(--muted))] leading-relaxed mb-3">{tr(project.description, lang)}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="brand">{tech}</Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
