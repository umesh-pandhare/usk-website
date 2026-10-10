import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { pricingModelLabels } from '@/data/products';
import type { Product } from '@/types';
import { contactLink, formatCurrency } from '@/utils/format';

/** Renders the pricing options a product supports (subscription / rental / custom / enterprise). */
export function ProductPricingOptions({ product }: { product: Product }) {
  const { pricing, pricingModels } = product;
  const demoLink = contactLink('product-demo', { product: product.id });

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {pricingModels.includes('subscription') && pricing.subscription && (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <Badge className="self-start">{pricingModelLabels.subscription}</Badge>
          <p className="mt-5 text-3xl font-bold text-navy-900">
            {formatCurrency(pricing.subscription.monthly)}
            <span className="text-base font-medium text-slate-500"> / month</span>
          </p>
          <p className="mt-1 text-sm text-slate-600">or {formatCurrency(pricing.subscription.yearly)} billed yearly</p>
          {pricing.subscription.note && <p className="mt-4 text-sm text-slate-500">{pricing.subscription.note}</p>}
          <div className="mt-auto pt-6">
            <Button to={demoLink} variant="outline" fullWidth>
              Request Demo
            </Button>
          </div>
        </div>
      )}

      {pricingModels.includes('rental') && pricing.rental && (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <Badge className="self-start">{pricingModelLabels.rental}</Badge>
          <p className="mt-5 text-3xl font-bold text-navy-900">
            {formatCurrency(pricing.rental.monthly)}
            <span className="text-base font-medium text-slate-500"> / month</span>
          </p>
          <p className="mt-1 text-sm text-slate-600">Minimum term: {pricing.rental.minTermMonths} months</p>
          {pricing.rental.note && <p className="mt-4 text-sm text-slate-500">{pricing.rental.note}</p>}
          <div className="mt-auto pt-6">
            <Button to={demoLink} variant="outline" fullWidth>
              Request Rental Quote
            </Button>
          </div>
        </div>
      )}

      {pricingModels.includes('custom') && pricing.custom && (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <Badge className="self-start">{pricingModelLabels.custom}</Badge>
          <p className="mt-5 text-3xl font-bold text-navy-900">Custom</p>
          <p className="mt-3 text-sm text-slate-600">{pricing.custom.note}</p>
          <div className="mt-auto pt-6">
            <Button to={demoLink} variant="outline" fullWidth>
              Contact Sales
            </Button>
          </div>
        </div>
      )}

      {pricingModels.includes('enterprise') && pricing.enterprise && (
        <div className="flex flex-col rounded-2xl border border-brand-300 bg-brand-50/60 p-6 shadow-card">
          <Badge className="self-start">{pricingModelLabels.enterprise}</Badge>
          <p className="mt-5 text-3xl font-bold text-navy-900">Let’s talk</p>
          <p className="mt-3 text-sm text-slate-600">{pricing.enterprise.note}</p>
          <div className="mt-auto pt-6">
            <Button to={demoLink} fullWidth>
              Contact Sales
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
