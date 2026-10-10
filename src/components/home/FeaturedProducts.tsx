import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';

export function FeaturedProducts() {
  return (
    <Section tone="mist" labelledBy="featured-products-heading">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <div>
            <SectionTitle
              id="featured-products-heading"
              title="Software products, ready when you are"
              description="Choose a product and start on a plan that fits. Need something different? We can customise it."
            />
          </div>
        </Reveal>
        <Button to="/products" variant="outline" arrow className="self-start sm:self-auto">
          View all products
        </Button>
      </div>
      <div className="mt-12">
        <ProductGrid products={products.slice(0, 3)} />
      </div>
    </Section>
  );
}
