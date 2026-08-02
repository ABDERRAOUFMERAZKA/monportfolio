'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/lib/i18n';
import { useDict } from '@/lib/dictionary';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abderraoufmerazka/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CARD_TINTS = [
  'bg-brand-500/8 text-brand-600 dark:text-brand-300',
  'bg-accent-pink/10 text-accent-pink',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const { lang } = useLanguage();
  const t = useDict(lang).contact;

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = t.errNameRequired;
    if (!form.email.trim()) errs.email = t.errEmailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.errEmailInvalid;
    if (!form.message.trim()) errs.message = t.errMessageRequired;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formsubmit.co/ajax/merazka.abderraouf@orange.fr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Unknown error');
      }
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full px-4 py-3 rounded-2xl bg-[rgb(var(--background))] border text-[rgb(var(--foreground))] placeholder-[rgb(var(--muted))] text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/30 ${
      hasError ? 'border-accent-coral focus:border-accent-coral' : 'border-[rgb(var(--border))] focus:border-brand-500'
    }`;

  return (
    <SectionWrapper id="contact" className="bg-[rgb(var(--background))] aura">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t.label} title={t.title} description={t.description} align="left" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {t.cards.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 p-4 soft-card`}
                >
                  <span className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center ${CARD_TINTS[i % CARD_TINTS.length]}`} aria-hidden>
                    <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-base text-[rgb(var(--foreground))]">{item.title}</p>
                    <p className="text-sm text-[rgb(var(--muted))] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="eyebrow mb-4">{t.findMe}</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--foreground))] hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all text-sm font-medium"
                    aria-label={link.label}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-10 soft-card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/15 flex items-center justify-center text-3xl text-emerald-600 dark:text-emerald-400">✓</div>
                <h3 className="font-display font-semibold text-xl text-[rgb(var(--foreground))] mb-2">{t.successTitle}</h3>
                <p className="text-[rgb(var(--muted))] mb-6">{t.successBody}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
                >
                  {t.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 soft-card space-y-5"
                aria-label="Contact form"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-1.5">
                    {t.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className={inputClass(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs font-medium text-accent-coral" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-1.5">
                    {t.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className={inputClass(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs font-medium text-accent-coral" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--foreground))] mb-1.5">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className={`${inputClass(errors.message)} resize-none`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs font-medium text-accent-coral" role="alert">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-full bg-brand-500 shadow-glow hover:bg-brand-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      {t.send}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {status === 'error' && (
                  <p className="text-sm font-medium text-accent-coral text-center" role="alert">
                    {t.errorBody}
                    <a href="mailto:abderraouf_merazka@hotmail.com" className="underline">
                      abderraouf_merazka@hotmail.com
                    </a>
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
