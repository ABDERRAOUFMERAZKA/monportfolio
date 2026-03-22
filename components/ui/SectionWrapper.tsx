'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id={id}
      ref={ref}
      className={cn('relative py-24 md:py-32 section-padding overflow-hidden', className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
