'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default:
      'bg-[rgb(var(--background))] text-[rgb(var(--muted))] border border-[rgb(var(--border))]',
    brand:
      'bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20',
    outline:
      'bg-transparent text-[rgb(var(--muted))] border border-[rgb(var(--border))]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
