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
      'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10',
    brand:
      'bg-brand-500/10 text-brand-400 border border-brand-500/20',
    outline:
      'bg-transparent text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium font-mono',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
