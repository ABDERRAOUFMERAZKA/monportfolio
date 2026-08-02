'use client';

import { useLanguage } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';
import WaveDivider from '@/components/WaveDivider';

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = useDict(lang);

  return (
    <footer className="relative">
      {/* Wave transition from the last (light) section into the dark footer */}
      <WaveDivider flip className="text-[rgb(var(--background))] bg-navy-900" />
      <div className="bg-night section-padding pb-12 pt-4 text-white/80">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <span className="font-display font-bold text-lg text-white">Abderraouf MERAZKA</span>
          <p className="text-sm text-white/60 text-center">
            © {year} — {t.footer.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
