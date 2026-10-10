import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type BadgeTone = 'brand' | 'neutral' | 'dark' | 'success';

const tones: Record<BadgeTone, string> = {
  brand: 'bg-brand-50 text-brand-700 ring-brand-200',
  neutral: 'bg-slate-100 text-slate-700 ring-slate-200',
  dark: 'bg-white/10 text-brand-200 ring-white/15',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({ children, tone = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
