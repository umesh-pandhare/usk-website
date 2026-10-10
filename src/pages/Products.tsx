import { Badge } from '@/components/common/Badge';
import { CTASection } from '@/components/common/CTASection';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Icon, type IconName } from '@/components/common/Icon';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';
import { useSeo } from '@/hooks/useSeo';

const models: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: 'clock', title: 'Subscription', text: 'Monthly or yearly plans with predictable costs.' },
  { icon: 'package', title: 'Rental', text: 'Fixed-term access for projects and seasonal needs.' },
  { icon: 'settings', title: 'Custom pricing', text: 'Configured and priced for your requirements.' },
  { icon: 'shield', title: 'Enterprise', text: 'Dedicated support and tailored commercial terms.' },
];

export default function Products() {
  useSeo({
    title: 'Software Products',
    description:
      'Explore software products from USK Software Solutions, available through subscription, rental, custom and enterprise pricing.',
    path: '/products',
  });

  return (
    <>
      <PageHeader
        title="Software products for modern businesses"
        description="Ready-to-use software you can start with quickly — available on subscription, rental, custom or enterprise terms."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <Section labelledBy="products-list-heading">
        <SectionTitle id="products-list-heading" title="Our products" description="Each product can be adapted to your workflow. Request a demo to see it in action." />
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
        <p className="mt-8 flex items-start gap-2 text-sm text-slate-500">
          <Icon name="alert" size={16} className="mt-0.5 shrink-0" />
          <span>
            Products shown are placeholders <Badge tone="neutral" className="mx-1">Preview</Badge> and will be updated as each product is finalised.
          </span>
        </p>
      </Section>

      <Section tone="mist" labelledBy="pricing-models-heading">
        <SectionTitle
          id="pricing-models-heading"
          title="Flexible ways to buy"
          description="Choose the commercial model that suits how you work. You can review it as your needs change."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => (
            <li key={model.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                <Icon name={model.icon} size={20} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{model.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{model.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        surface="mist"
        title="Need a Custom Solution? Talk to Our Team."
        description="If none of our products fit, we can build software tailored to your business."
        primary={{ label: 'Talk to Our Team', to: '/contact' }}
        secondary={{ label: 'View Pricing', to: '/pricing' }}
      />
    </>
  );
}
