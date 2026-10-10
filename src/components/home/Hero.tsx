import { Link } from 'react-router-dom';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const reduce = useReducedMotion();

  // The one orchestrated page-load moment on the site.
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-700/25 blur-3xl" />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-28">
        <m.div variants={container} initial="hidden" animate="show">
          <m.h1
            id="hero-heading"
            variants={item}
            className="text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Build Smarter Software. <span className="text-brand-300">Grow Faster.</span>
          </m.h1>
          <m.p variants={item} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl">
            USK Software Solutions builds scalable software products and customized technology solutions for modern businesses.
          </m.p>
          <m.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/products" size="lg" arrow>
              Explore Products
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Start a Project
            </Button>
          </m.div>
          <m.p variants={item} className="mt-6 text-sm text-slate-400">
            Not sure where to begin?{' '}
            <Link
              to="/contact"
              className="rounded font-semibold text-white underline decoration-brand-400 decoration-2 underline-offset-4 hover:text-brand-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
            >
              Talk to Us
            </Link>
          </m.p>
        </m.div>

        <m.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </m.div>
      </Container>
    </section>
  );
}
