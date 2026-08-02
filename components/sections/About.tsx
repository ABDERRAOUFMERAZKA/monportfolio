'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { EXPERTISE_TAGS } from '@/lib/data';
import { useLanguage } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

const STAT_COLORS = [
  'bg-brand-500/8 text-brand-600 dark:text-brand-300',
  'bg-accent-pink/10 text-accent-pink',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'bg-accent-cyan/10 text-cyan-600 dark:text-cyan-400',
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const { lang } = useLanguage();
  const t = useDict(lang).about;

  const p1Parts = t.p1.split('{strong}');
  const p2Parts = t.p2.split('{company}');

  return (
    <SectionWrapper id="about" className="bg-[rgb(var(--background))] aura">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t.label} title={t.title} align="left" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-lg text-[rgb(var(--foreground))] leading-relaxed">
              {p1Parts[0]}
              <span className="font-semibold text-brand-600 dark:text-brand-300">{t.p1Strong}</span>
              {p1Parts[1]}
            </p>
            <p className="text-[rgb(var(--muted))] leading-relaxed">
              {p2Parts[0]}
              <span className="font-bold text-brand-500">Keolis Group</span>
              {p2Parts[1]}
            </p>
            <p className="text-[rgb(var(--muted))] leading-relaxed">{t.p3}</p>

            {/* Current position */}
            <div className="soft-card p-6">
              <p className="eyebrow mb-2">{t.currently}</p>
              <p className="font-display font-semibold text-xl text-[rgb(var(--foreground))]">{t.currentRole}</p>
              <p className="text-sm text-[rgb(var(--muted))] mb-4">{t.currentCompany}</p>
              <ul className="space-y-2">
                {t.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[rgb(var(--muted))]">
                    <span className="text-brand-500 mt-0.5" aria-hidden>→</span>
                    {item}
                  </li>
                ))}
              </ul>
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
              <p className="eyebrow mb-4">{t.coreExpertise}</p>
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
              {t.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`soft-card p-5 ${STAT_COLORS[i % STAT_COLORS.length]}`}
                >
                  <p className="font-display text-4xl font-bold leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-sm font-medium text-[rgb(var(--muted))]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal note */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
              <p className="text-sm font-medium italic leading-relaxed">{t.quote}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
