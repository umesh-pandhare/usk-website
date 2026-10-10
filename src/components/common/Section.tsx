import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Container } from './Container';

type Tone = 'white' | 'mist' | 'navy';

const tones: Record<Tone, string> = {
  white: 'bg-white',
  mist: 'bg-mist',
  navy: 'bg-navy-950 text-white',
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}

export function Section({ children, tone = 'white', id, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
