'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Starfield from '@/components/Starfield';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

const TECHS = ['React', 'Next.js', 'TypeScript', 'Flutter', 'GraphQL', 'Tailwind'];

export default function Hero() {
  const { lang } = useLanguage();
  const t = useDict(lang).hero;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night text-white section-padding pt-28 pb-32"
      aria-label="Hero"
    >
      <Starfield />

      {/* Soft glows */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-brand-500/25 blur-[130px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 -right-24 w-96 h-96 rounded-full bg-accent-pink/20 blur-[130px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="pill px-4 py-1.5 text-sm font-medium bg-white/10 border border-white/15 backdrop-blur-md text-white/90">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" aria-hidden />
            {t.badge}
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="mt-8 font-display font-bold tracking-tight leading-[1.02] text-5xl md:text-7xl lg:text-[5.2rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="block text-white">{t.titleTop}</span>
          <span className="block gradient-text">{t.titleBottom}</span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.roles.map((role) => (
            <span
              key={role}
              className="pill px-3.5 py-1 text-sm bg-white/8 border border-white/12 text-white/80 backdrop-blur-sm"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <strong className="font-semibold text-white">{t.descriptionStrong}</strong>
          {t.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button href="#projects" size="lg" variant="primary">
            {t.ctaProjects}
          </Button>
          <Button
            href="#contact"
            size="lg"
            variant="outline"
            className="!bg-white/5 !border-white/25 !text-white hover:!bg-white/10 hover:!border-white/50 hover:!text-white backdrop-blur-md"
          >
            {t.ctaContact}
          </Button>
        </motion.div>

        {/* Tech row */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {TECHS.map((tech) => (
            <span key={tech} className="text-sm font-medium text-white/40">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Wave transition into the next (light) section */}
      <WaveDivider className="absolute bottom-0 left-0 text-[rgb(var(--background))]" />
    </section>
  );
}
