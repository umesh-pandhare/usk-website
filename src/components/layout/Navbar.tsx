import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { mainNav } from '@/data/company';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';
import { MobileMenu } from './MobileMenu';

const MENU_ID = 'mobile-navigation';

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const close = useCallback(() => setOpen(false), []);

  // Close the menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Close when the viewport grows to desktop size.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => event.matches && setOpen(false);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Return focus to the toggle after the menu closes.
  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled || open
          ? 'border-white/10 bg-navy-950/90 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'border-transparent bg-navy-950',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo onClick={close} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400',
                      isActive
                        ? 'text-white after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-400'
                        : 'text-slate-300 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="md" className="hidden lg:inline-flex">
            Contact Us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <MobileMenu id={MENU_ID} open={open} onClose={close} />
    </header>
  );
}
