'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  external,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-brand-600 hover:bg-brand-500 text-white shadow-glow-sm hover:shadow-glow active:scale-[0.98]',
    outline:
      'border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:border-brand-500/40',
    ghost:
      'text-gray-400 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={
          isAnchor
            ? (e) => {
                e.preventDefault();
                const id = href.replace('#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            : undefined
        }
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
