'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-100 dark:bg-[#08080c] border-t border-gray-200 dark:border-white/5 py-12 section-padding overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" aria-hidden />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-600 text-center">
            © {year} – Abderraouf MERAZKA – Technical Lead Front-End
          </p>
        </div>
      </div>
    </footer>
  );
}
