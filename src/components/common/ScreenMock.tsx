import type { MockVariant } from '@/types';
import { cn } from '@/utils/cn';

interface ScreenMockProps {
  variant: MockVariant;
  title?: string;
  className?: string;
  /** Optional real screenshot — rendered lazily instead of the abstract preview. */
  image?: string;
}

const Bar = ({ className }: { className?: string }) => <span className={cn('block h-2 rounded-full bg-white/10', className)} />;

function Dashboard() {
  return (
    <div className="grid h-full grid-cols-[22%_1fr] gap-3">
      <div className="space-y-2.5 rounded-lg bg-white/[0.04] p-2.5">
        <Bar className="w-3/4 bg-brand-400/60" />
        <Bar className="w-full" />
        <Bar className="w-5/6" />
        <Bar className="w-2/3" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-lg bg-white/[0.05] p-2.5">
              <Bar className="w-1/2" />
              <Bar className={cn('h-3', i === 0 ? 'w-3/4 bg-brand-400/70' : 'w-2/3 bg-white/20')} />
            </div>
          ))}
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg bg-white/[0.05]">
          <svg viewBox="0 0 200 70" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="mock-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#7F87FB" stopOpacity=".45" />
                <stop offset="1" stopColor="#7F87FB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 55 L25 46 L50 50 L80 30 L110 36 L140 18 L170 24 L200 8 V70 H0 Z" fill="url(#mock-area)" />
            <path d="M0 55 L25 46 L50 50 L80 30 L110 36 L140 18 L170 24 L200 8" fill="none" stroke="#A3ABFF" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Table() {
  const pills = ['bg-emerald-400/50', 'bg-brand-400/60', 'bg-amber-300/50', 'bg-brand-400/60', 'bg-emerald-400/50'];
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center justify-between rounded-lg bg-white/[0.05] p-2.5">
        <Bar className="w-1/4 bg-white/20" />
        <Bar className="w-1/6 bg-brand-400/60" />
      </div>
      <div className="flex-1 space-y-2 rounded-lg bg-white/[0.04] p-2.5">
        {pills.map((pill, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-2 last:border-0">
            <Bar className="w-4 shrink-0" />
            <Bar className={cn('flex-1', i % 2 ? 'max-w-[55%]' : 'max-w-[70%]')} />
            <Bar className="hidden w-12 sm:block" />
            <span className={cn('h-2 w-10 rounded-full', pill)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Kanban() {
  return (
    <div className="grid h-full grid-cols-3 gap-2.5">
      {[3, 2, 3].map((count, col) => (
        <div key={col} className="space-y-2 rounded-lg bg-white/[0.04] p-2">
          <Bar className={cn('w-1/2', col === 1 && 'bg-brand-400/60')} />
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="space-y-1.5 rounded-md bg-white/[0.07] p-2">
              <Bar className="w-5/6 bg-white/20" />
              <Bar className="w-1/2" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Access() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      {[true, true, false, true, false].map((on, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg bg-white/[0.05] p-2.5">
          <span className="h-5 w-5 shrink-0 rounded-full bg-brand-400/40" />
          <div className="flex-1 space-y-1.5">
            <Bar className="w-1/3 bg-white/20" />
            <Bar className="w-1/2" />
          </div>
          <span className={cn('relative h-4 w-7 shrink-0 rounded-full', on ? 'bg-brand-500' : 'bg-white/15')}>
            <span className={cn('absolute top-0.5 h-3 w-3 rounded-full bg-white', on ? 'right-0.5' : 'left-0.5')} />
          </span>
        </div>
      ))}
    </div>
  );
}

const variants = { dashboard: Dashboard, table: Table, kanban: Kanban, access: Access } as const;

/** Abstract product/UI preview built with CSS — no stock photos required. */
export function ScreenMock({ variant, title, className, image }: ScreenMockProps) {
  const Variant = variants[variant];
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-white/10 bg-navy-900 shadow-glow',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-800/80 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        {title && <span className="ml-2 truncate text-[11px] font-medium text-slate-400">{title}</span>}
      </div>
      <div className="aspect-[16/10] p-3">
        {image ? (
          <img src={image} alt={title ?? 'Product screenshot'} loading="lazy" decoding="async" className="h-full w-full rounded-lg object-cover" />
        ) : (
          <Variant />
        )}
      </div>
    </div>
  );
}
