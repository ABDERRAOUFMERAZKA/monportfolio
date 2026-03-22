'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { EXPERTISE_TAGS } from '@/lib/data';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '40+', label: 'Transport Sites Built' },
  { value: '5+', label: 'Mobile Apps Shipped' },
  { value: '2', label: 'Major Group Brands' },
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Crafting digital experiences at scale"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Technical Lead Front-End with more than{' '}
              <span className="text-gray-900 dark:text-white font-semibold">10 years of experience</span>{' '}
              building large-scale web platforms and mobile applications for millions of users.
            </p>
            <p className="text-gray-500 dark:text-gray-500 leading-relaxed">
              Since 2019, I have been driving front-end excellence at{' '}
              <span className="text-brand-500 font-medium">Keolis Group</span>, one of the world&apos;s
              leading public transport operators. My role spans from translating complex
              business requirements into robust technical architectures to mentoring engineering teams
              and defining best practices aligned with Green IT principles.
            </p>
            <p className="text-gray-500 dark:text-gray-500 leading-relaxed">
              I believe great front-end engineering is about more than writing code — it&apos;s about
              building accessible, performant, and maintainable products that genuinely improve
              people&apos;s daily lives.
            </p>

            {/* Current position */}
            <div className="pt-2 p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg" aria-hidden>🏢</span>
                </div>
                <div>
                  <p className="text-xs text-brand-400 font-mono tracking-wider uppercase mb-1">Currently</p>
                  <p className="font-semibold text-gray-900 dark:text-white">Technical Lead Front-End</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Keolis Group · 2019 – Present</p>
                  <ul className="mt-3 space-y-1.5">
                    {[
                      'Translating business needs into technical architecture',
                      'Designing maintainable solutions (Green IT)',
                      'Mentoring & coaching engineering teams',
                      'Code reviews & architectural guidance',
                      'Technical support to subsidiaries',
                      'Standards & best practices enforcement',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <span className="text-brand-400 mt-0.5" aria-hidden>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: expertise + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="space-y-8"
          >
            {/* Expertise tags */}
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-4">
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE_TAGS.map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Badge variant="brand">{tag}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center"
                >
                  <p className="text-3xl font-bold text-gray-900 dark:text-white leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal note */}
            <div className="p-6 rounded-2xl border border-brand-500/20 bg-brand-50 dark:bg-brand-500/5">
              <p className="text-sm text-brand-600 dark:text-brand-300 italic leading-relaxed">
                &ldquo;I&apos;m passionate about building products that are fast, accessible,
                and delightful to use — both for end users and for the developers maintaining them.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
