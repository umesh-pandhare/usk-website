import { Reveal } from '@/components/common/Reveal';
import type { Product } from '@/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <li key={product.id}>
          <Reveal delay={Math.min(index, 3) * 0.06} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
