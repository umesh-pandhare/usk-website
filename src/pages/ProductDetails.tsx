import { useParams } from 'react-router-dom';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { CTASection } from '@/components/common/CTASection';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { Icon } from '@/components/common/Icon';
import { IconTile } from '@/components/common/Card';
import { PageHeader } from '@/components/common/PageHeader';
import { Reveal } from '@/components/common/Reveal';
import { ScreenMock } from '@/components/common/ScreenMock';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductPricingOptions } from '@/components/products/ProductPricingOptions';
import { getProductById, pricingModelLabels, productStatusLabel, products } from '@/data/products';
import { useSeo } from '@/hooks/useSeo';
import { contactLink } from '@/utils/format';
import NotFound from './NotFound';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id);

  useSeo(
    product
      ? { title: product.name, description: product.shortDescription, path: `/products/${product.id}` }
      : { title: 'Product not found', path: '/products', noIndex: true },
  );

  if (!product) return <NotFound />;

  const related = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <>
      <PageHeader
        title={product.name}
        description={product.tagline + ' — ' + product.shortDescription}
        breadcrumbs={[{ label: 'Products', to: '/products' }, { label: product.name }]}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="dark">{productStatusLabel[product.status]}</Badge>
          {product.pricingModels.map((model) => (
            <Badge key={model} tone="dark">
              {pricingModelLabels[model]}
            </Badge>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to={contactLink('product-demo', { product: product.id })} size="lg" arrow>
            Request Demo
          </Button>
          <Button href="#pricing" variant="secondary" size="lg">
            See pricing options
          </Button>
        </div>
      </PageHeader>

      {/* Overview */}
      <Section labelledBy="overview-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <SectionTitle id="overview-heading" title="Product overview" description={product.overview} />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200 bg-mist p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconTile>
                  <Icon name={product.icon} size={22} />
                </IconTile>
                <div>
                  <p className="text-sm text-slate-500">Category</p>
                  <p className="font-semibold text-navy-900">{product.category}</p>
                </div>
              </div>
              <h3 className="mt-6 text-sm font-semibold text-navy-900">Highlights</h3>
              <ul className="mt-3 space-y-2">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Screens */}
      <Section tone="navy" labelledBy="screens-heading">
        <SectionTitle id="screens-heading" tone="dark" title="Screenshots" description="A look at the main areas of the product." />
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {product.screens.map((screen) => (
            <li key={screen.title}>
              <Reveal>
                <figure>
                  <ScreenMock variant={screen.variant} title={screen.title} image={screen.image} />
                  <figcaption className="mt-4">
                    <p className="font-semibold text-white">{screen.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{screen.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Features */}
      <Section labelledBy="features-heading">
        <SectionTitle id="features-heading" title="Features" description="What you get with the product." />
        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <li key={feature.title} className="border-t border-slate-200 pt-5">
              <h3 className="text-lg font-bold text-navy-900">{feature.title}</h3>
              <p className="mt-1.5 text-pretty text-slate-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Benefits + technology */}
      <Section tone="mist" labelledBy="benefits-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle id="benefits-heading" title="Benefits" />
            <ul className="mt-8 space-y-6">
              {product.benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" size={16} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">{benefit.title}</h3>
                    <p className="mt-1 text-slate-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle title="Technology" as="h2" />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {product.technology.map((tech) => (
                <li key={tech} className="rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" labelledBy="product-pricing-heading">
        <SectionTitle
          id="product-pricing-heading"
          title="Pricing & subscription options"
          description="Subscription and rental prices below are indicative. Contact us for a quote tailored to your needs."
        />
        <div className="mt-10">
          <ProductPricingOptions product={product} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="mist" labelledBy="faq-heading">
        <div className="mx-auto max-w-3xl">
          <SectionTitle id="faq-heading" title="Frequently asked questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={product.faqs} />
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section labelledBy="related-heading">
          <SectionTitle id="related-heading" title="Other products" />
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CTASection
        title={`Interested in ${product.name}?`}
        description="Request a demo and we will show you how it works and which commercial model fits best."
        primary={{ label: 'Request Demo', to: contactLink('product-demo', { product: product.id }) }}
        secondary={{ label: 'Back to Products', to: '/products' }}
      />
    </>
  );
}
