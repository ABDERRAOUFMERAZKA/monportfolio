'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            ? 'bg-white/80 dark:bg-[#0a0a0e]/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 shadow-sm'
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
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour en haut"
          >
            <Image
              src="/images/abder.png"
              alt="Abderraouf MERAZKA"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
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
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                      isActive
                        ? 'text-brand-500 dark:text-brand-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-brand-50 dark:bg-brand-500/10 rounded-lg"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
              <span className="block w-5 h-0.5 bg-current transition-all" />
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
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white dark:bg-[#0a0a0e] border-b border-gray-200 dark:border-white/10 px-6 py-4"
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
                      className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
