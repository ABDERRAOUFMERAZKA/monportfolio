'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { EXPERIENCES } from '@/lib/data';

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId) ?? EXPERIENCES[0];

  return (
    <SectionWrapper id="experience" className="bg-gray-50 dark:bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="A career built on delivering large-scale, production-grade front-end systems."
          align="center"
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Company tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative flex-shrink-0 text-left px-5 py-4 rounded-xl transition-all duration-200 ${
                  activeId === exp.id
                    ? 'bg-white dark:bg-white/5 shadow-glass-light dark:shadow-glass border border-gray-200 dark:border-white/10'
                    : 'hover:bg-white/50 dark:hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                {activeId === exp.id && (
                  <motion.div
                    layoutId="exp-bg"
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r bg-brand-500"
                  />
                )}
                <p
                  className={`font-semibold text-sm ${
                    activeId === exp.id
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-500'
                  }`}
                >
                  {exp.company}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">{exp.period}</p>
                {exp.current && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono text-brand-400">
                    <span className="w-1 h-1 rounded-full bg-brand-400 animate-pulse" aria-hidden />
                    Current
                  </span>
                )}
              </button>
            ))}
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
              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{active.role}</h3>
                    <p className="text-brand-500 dark:text-brand-400 font-medium mt-0.5">{active.company}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-600 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                    {active.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {active.description.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-5 pt-5 border-t border-gray-100 dark:border-white/5">
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
                  <h4 className="text-sm font-mono tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-4">
                    Key Projects
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {active.projects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-brand-500/30 dark:hover:border-brand-500/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h5 className="font-semibold text-sm text-gray-900 dark:text-white">{project.title}</h5>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors"
                              aria-label={`Visit ${project.title}`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-3">{project.description}</p>
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
