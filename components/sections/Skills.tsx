'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/lib/data';

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated toolkit built through years of production-grade engineering."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:shadow-glow-sm"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span role="img" aria-label={category.label}>{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.label}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
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
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-brand-500/20 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Always learning — currently exploring{' '}
            <span className="text-brand-400 font-medium">AI-augmented development</span>,{' '}
            <span className="text-purple-400 font-medium">Web Components</span> and{' '}
            <span className="text-pink-400 font-medium">Edge computing</span>.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
