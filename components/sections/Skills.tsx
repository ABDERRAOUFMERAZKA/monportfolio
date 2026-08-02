'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/lib/data';
import { useLanguage, tr } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

const ICON_TINTS = [
  'bg-brand-500/10 text-brand-600 dark:text-brand-300',
  'bg-accent-pink/10 text-accent-pink',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'bg-accent-cyan/10 text-cyan-600 dark:text-cyan-400',
  'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  'bg-violet-500/10 text-violet-600 dark:text-violet-400',
];

export default function Skills() {
  const { lang } = useLanguage();
  const t = useDict(lang).skills;

  return (
    <SectionWrapper id="skills" className="bg-[rgb(var(--background))] aura">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label={t.label} title={t.title} description={t.description} align="left" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="group p-6 soft-card hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${ICON_TINTS[catIdx % ICON_TINTS.length]}`}>
                  <span role="img" aria-label={tr(category.label, lang)}>{category.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-[rgb(var(--foreground))]">{tr(category.label, lang)}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                    className="px-2.5 py-1 rounded-full bg-[rgb(var(--background))] border border-[rgb(var(--border))] text-[rgb(var(--muted))] text-xs font-medium"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow text-center"
        >
          <p className="text-base md:text-lg font-medium">
            {t.bannerPrefix}
            <span className="font-semibold underline decoration-white/40 underline-offset-4">{t.bannerItems[0]}</span>,{' '}
            <span className="font-semibold underline decoration-white/40 underline-offset-4">{t.bannerItems[1]}</span>{' '}
            <span className="font-semibold underline decoration-white/40 underline-offset-4">{t.bannerItems[2]}</span>{t.bannerSuffix}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
