import { Icon } from '@/components/common/Icon';

/** Abstract product visual for the hero — pure CSS/SVG, no stock imagery. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-600/20 blur-3xl" />

      {/* Main application window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/90 shadow-glow">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-800/70 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 hidden h-5 w-44 rounded-md bg-white/5 sm:block" />
        </div>

        <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[9rem_1fr]">
          {/* Sidebar */}
          <div className="space-y-2 border-r border-white/10 p-2.5 sm:p-3">
            <div className="flex items-center gap-2 rounded-lg bg-brand-500/20 p-2">
              <Icon name="layers" size={16} className="shrink-0 text-brand-200" />
              <span className="hidden h-2 w-14 rounded-full bg-brand-200/60 sm:block" />
            </div>
            {(['users', 'ticket', 'chart', 'settings'] as const).map((icon) => (
              <div key={icon} className="flex items-center gap-2 p-2">
                <Icon name={icon} size={16} className="shrink-0 text-slate-500" />
                <span className="hidden h-2 w-12 rounded-full bg-white/10 sm:block" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-3 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-2 rounded-lg bg-white/[0.05] p-2.5 sm:p-3">
                  <span className="block h-1.5 w-1/2 rounded-full bg-white/15" />
                  <span className={`block h-3 rounded-full ${i === 0 ? 'w-3/4 bg-brand-400/70' : 'w-2/3 bg-white/25'}`} />
                </div>
              ))}
            </div>

            <div className="relative h-24 overflow-hidden rounded-lg bg-white/[0.05] sm:h-32">
              <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#7F87FB" stopOpacity=".5" />
                    <stop offset="1" stopColor="#7F87FB" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 78 L40 64 L80 70 L120 44 L160 52 L200 28 L245 36 L300 10 V100 H0 Z" fill="url(#hero-area)" />
                <path d="M0 78 L40 64 L80 70 L120 44 L160 52 L200 28 L245 36 L300 10" fill="none" stroke="#A3ABFF" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="space-y-2">
              {['bg-emerald-400/60', 'bg-brand-400/70', 'bg-amber-300/60'].map((pill, i) => (
                <div key={pill} className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className={`h-2 rounded-full bg-white/15 ${i === 1 ? 'w-1/3' : 'w-1/2'}`} />
                  <span className={`ml-auto h-2 w-10 rounded-full ${pill}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating API snippet */}
      <div className="absolute -bottom-0 left-0 w-[78%] max-w-[17rem] rounded-xl border border-white/10 bg-navy-950/95 p-3.5 shadow-2xl backdrop-blur sm:-left-4 sm:w-64">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-slate-500">
          <Icon name="api" size={12} />
          LeadController.java
        </div>
        <pre className="overflow-hidden font-mono text-[10.5px] leading-[1.55] text-slate-300">
          <code>
            <span className="text-brand-300">@GetMapping</span>
            {'("/api/v1/leads")\n'}
            <span className="text-violet-300">public</span>
            {' Page<LeadDto> list() {\n  '}
            <span className="text-violet-300">return</span>
            {' service.findAll();\n}'}
          </code>
        </pre>
      </div>

      {/* Floating status chip */}
      <div className="absolute -top-3 right-2 flex items-center gap-2 rounded-full border border-white/10 bg-navy-950/95 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-xl backdrop-blur sm:-right-3 sm:top-8">
        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400 motion-reduce:animate-none" />
        Build passing
      </div>
    </div>
  );
}
