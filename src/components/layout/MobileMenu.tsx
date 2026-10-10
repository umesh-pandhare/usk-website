import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { mainNav } from '@/data/company';
import { Button } from '@/components/common/Button';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/utils/cn';

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

/** Full-width slide-down panel. Handles Escape, focus management and scroll lock. */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id={id}
          ref={panelRef}
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950 shadow-2xl lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-content px-5 py-4 sm:px-8">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex min-h-[48px] items-center rounded-lg px-3 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400',
                        isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-white/10 pt-4 pb-2">
              <Button to="/contact" size="lg" fullWidth onClick={onClose}>
                Contact Us
              </Button>
            </div>
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
}
