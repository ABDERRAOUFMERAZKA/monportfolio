'use client';

import { motion } from 'framer-motion';
import { useLanguage, type Lang } from '@/lib/i18n';

function FlagFR() {
  return (
    <svg viewBox="0 0 3 2" className="w-5 h-3.5 rounded-[2px]" aria-hidden>
      <rect width="1" height="2" x="0" fill="#0055A4" />
      <rect width="1" height="2" x="1" fill="#fff" />
      <rect width="1" height="2" x="2" fill="#EF4135" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-[2px]" aria-hidden>
      <clipPath id="ujs">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="ujt">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#ujs)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#ujt)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const OPTIONS: { lang: Lang; label: string; Flag: () => JSX.Element }[] = [
  { lang: 'fr', label: 'FR', Flag: FlagFR },
  { lang: 'en', label: 'EN', Flag: FlagGB },
];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 p-0.5 border border-[rgb(var(--border))] rounded-full bg-[rgb(var(--card))]"
      role="group"
      aria-label="Language selector"
    >
      {OPTIONS.map((opt) => {
        const isActive = lang === opt.lang;
        return (
          <button
            key={opt.lang}
            onClick={() => setLang(opt.lang)}
            className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors"
            aria-pressed={isActive}
            aria-label={opt.lang === 'fr' ? 'Français' : 'English'}
          >
            {isActive && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-brand-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              <opt.Flag />
              <span className={isActive ? 'text-white' : 'text-[rgb(var(--muted))]'}>{opt.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
