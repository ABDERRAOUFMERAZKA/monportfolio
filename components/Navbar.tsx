'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/data';
import { useLanguage } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = useDict(lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgb(var(--background))]/85 backdrop-blur-xl border-b border-[rgb(var(--border))] shadow-soft'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.04 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour en haut"
          >
            <Image
              src="/images/abder.png"
              alt="Abderraouf MERAZKA"
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-white/20"
              priority
            />
            <span
              className={cn(
                'hidden sm:block font-display font-bold text-lg transition-colors',
                scrolled ? 'text-[rgb(var(--foreground))]' : 'text-white'
              )}
            >
              Abderraouf
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                      isActive
                        ? scrolled
                          ? 'text-brand-600'
                          : 'text-white'
                        : scrolled
                          ? 'text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]'
                          : 'text-white/70 hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={cn(
                          'absolute inset-0 rounded-full',
                          scrolled ? 'bg-brand-500/10' : 'bg-white/15'
                        )}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{t.nav[item.key]}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              className={cn(
                'md:hidden w-9 h-9 flex flex-col items-center justify-center rounded-full border transition-colors',
                scrolled
                  ? 'border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--foreground))]'
                  : 'border-white/25 bg-white/10 text-white'
              )}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="block w-4 h-0.5 bg-current mb-1 transition-all" />
              <span className="block w-4 h-0.5 bg-current mb-1 transition-all" />
              <span className="block w-4 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-4 right-4 soft-card p-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-1" role="list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-4 py-3 text-base font-medium text-[rgb(var(--foreground))] hover:bg-brand-500/10 hover:text-brand-600 rounded-2xl transition-colors"
                    >
                      {t.nav[item.key]}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-[rgb(var(--border))] flex justify-center">
                <LanguageToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
