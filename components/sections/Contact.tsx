'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

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

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.';
    if (!form.message.trim()) errs.message = 'Message cannot be empty.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-[#0a0a0e]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to connect? I'd love to hear from you."
          align="center"
        />

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
              {[
                { icon: '🚀', title: 'Open to opportunities', desc: 'Technical Lead, Staff Engineer or Principal Engineer roles.' },
                { icon: '🤝', title: 'Open to consulting', desc: 'Architecture reviews, front-end audits and coaching missions.' },
                { icon: '✉️', title: 'Quick response', desc: 'I typically respond within 24 hours.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10">
                  <span className="text-2xl" aria-hidden>{item.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-brand-500 hover:border-brand-500/30 transition-all text-sm font-medium"
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
                className="p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Message sent!</h3>
                <p className="text-gray-500 dark:text-gray-500 mb-6">Thanks for reaching out. I&apos;ll be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-brand-500 hover:text-brand-400 font-medium transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 space-y-5"
                aria-label="Contact form"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/30 ${
                      errors.name
                        ? 'border-red-400/60 focus:border-red-400'
                        : 'border-gray-200 dark:border-white/10 focus:border-brand-500/40'
                    }`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/30 ${
                      errors.email
                        ? 'border-red-400/60 focus:border-red-400'
                        : 'border-gray-200 dark:border-white/10 focus:border-brand-500/40'
                    }`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity…"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-500/30 resize-none ${
                      errors.message
                        ? 'border-red-400/60 focus:border-red-400'
                        : 'border-gray-200 dark:border-white/10 focus:border-brand-500/40'
                    }`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {status === 'error' && (
                  <p className="text-sm text-red-400 text-center" role="alert">
                    Something went wrong. Please try again or contact me directly at{' '}
                    <a href="mailto:abderraouf_merazka@hotmail.com" className="underline hover:text-red-300">
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
