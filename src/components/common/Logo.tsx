import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

/** Logo image lives in /public/L2.png — replace that file to change the logo. */
function LogoMark() {
  return (
    <img
      src="/L1.png"
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      decoding="async"
      className="h-9 w-auto object-contain"
    />
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