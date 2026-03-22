'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-mono tracking-[0.2em] uppercase text-brand-400 mb-4 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
