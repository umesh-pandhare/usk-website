import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600 motion-reduce:animate-none" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export function MainLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-900 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
