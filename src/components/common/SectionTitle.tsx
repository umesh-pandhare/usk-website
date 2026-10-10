import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  title: string;
  id?: string;
  /** Allow a wider heading block (long titles). */
  wide?: boolean;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  /** Heading level to render — keep the page outline logical (h2 for sections). */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionTitle({ id, wide, title, description, align = 'left', tone = 'light', as: Tag = 'h2', className }: SectionTitleProps) {
  return (
    <div className={cn(wide ? 'max-w-3xl' : 'max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <Tag
        id={id}
        className={cn(
          'text-balance text-3xl font-bold tracking-tight sm:text-4xl',
          tone === 'dark' ? 'text-white' : 'text-navy-900',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn('mt-4 text-pretty text-base leading-relaxed sm:text-lg', tone === 'dark' ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </div>
  );
}
