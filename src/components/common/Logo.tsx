import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Text-based logo. To use an SVG later, drop the file in src/assets/logos and
 * replace the contents of <LogoMark /> with an <img> (or inline SVG).
 */
function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-400 to-brand-700 text-[15px] font-extrabold tracking-tight text-white shadow-[0_6px_18px_-6px_rgba(96,100,242,0.8)]"
    >
      U
    </span>
  );
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${siteConfig.companyName} — home`}
      className={cn(
        'group inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400',
        className,
      )}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-white">{siteConfig.shortName}</span>
        <span className="mt-1 text-[11px] font-medium text-slate-400 transition-colors group-hover:text-brand-200">
          {siteConfig.logoSubtext}
        </span>
      </span>
    </Link>
  );
}
