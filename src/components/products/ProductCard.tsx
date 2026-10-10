import { Link } from 'react-router-dom';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import { pricingModelLabels, productStatusLabel } from '@/data/products';
import type { Product } from '@/types';
import { contactLink } from '@/utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <IconTile>
          <Icon name={product.icon} size={22} />
        </IconTile>
        <Badge tone={product.status === 'available' ? 'success' : 'neutral'}>{productStatusLabel[product.status]}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-navy-900">
        <Link
          to={`/products/${product.id}`}
          className="rounded after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-700">{product.tagline}</p>
      <p className="mt-3 text-pretty text-slate-600">{product.shortDescription}</p>

      <ul className="mt-5 space-y-2" aria-label={`${product.name} highlights`}>
        {product.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Pricing models">
        {product.pricingModels.map((model) => (
          <li key={model}>
            <Badge tone="brand">{pricingModelLabels[model]}</Badge>
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto flex flex-col gap-2.5 pt-7 sm:flex-row">
        <Button to={`/products/${product.id}`} variant="outline" fullWidth arrow aria-label={`View ${product.name}`}>
          View Product
        </Button>
        <Button
          to={contactLink('product-demo', { product: product.id })}
          variant="ghost"
          fullWidth
          aria-label={`Request a demo of ${product.name}`}
        >
          Request Demo
        </Button>
      </div>
    </article>
  );
}
