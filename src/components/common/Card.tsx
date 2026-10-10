import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds hover elevation — use only for cards that are links/actions. */
  interactive?: boolean;
  tone?: 'light' | 'dark';
}

export function Card({ children, className, interactive, tone = 'light' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-7',
        tone === 'light'
          ? 'border border-slate-200/80 bg-white shadow-card'
          : 'border border-white/10 bg-white/[0.04] backdrop-blur-sm',
        interactive &&
          'transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface IconTileProps {
  children: ReactNode;
  tone?: 'light' | 'dark';
}

/** Rounded square that holds an icon. */
export function IconTile({ children, tone = 'light' }: IconTileProps) {
  return (
    <span
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
        tone === 'light' ? 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100' : 'bg-white/10 text-brand-200 ring-1 ring-inset ring-white/15',
      )}
    >
      {children}
    </span>
  );
}
