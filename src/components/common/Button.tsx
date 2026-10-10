import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
type Size = 'md' | 'lg';

const base =
  'group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px ' +
  'disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-lift focus-visible:outline-brand-400',
  secondary:
    'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15 focus-visible:outline-white',
  outline:
    'bg-white text-navy-900 ring-1 ring-inset ring-slate-300 hover:ring-brand-400 hover:text-brand-700 focus-visible:outline-brand-600',
  ghost: 'text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-600',
  light: 'bg-white text-navy-900 shadow-sm hover:bg-brand-50 focus-visible:outline-white',
};

const sizes: Record<Size, string> = {
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Show a trailing arrow that nudges on hover */
  arrow?: boolean;
  fullWidth?: boolean;
}

type ButtonAsButton = CommonProps & { to?: undefined; href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = CommonProps & { to: string; href?: undefined } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
type ButtonAsAnchor = CommonProps & { href: string; to?: undefined } & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, arrow, fullWidth, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);
  const content = (
    <>
      {children}
      {arrow && (
        <Icon name="arrowRight" size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsAnchor, keyof CommonProps>;
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
