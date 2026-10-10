import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page not found', path: '/404', noIndex: true });

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <p className="text-6xl font-extrabold tracking-tight text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">We could not find that page</h1>
        <p className="mt-4 text-pretty text-slate-600">
          The page may have moved or the address may be incorrect. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg">
            Back to home
          </Button>
          <Button to="/products" variant="outline" size="lg">
            Browse products
          </Button>
        </div>
      </Container>
    </section>
  );
}
