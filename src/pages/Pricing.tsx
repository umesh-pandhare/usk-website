import { CTASection } from '@/components/common/CTASection';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { PageHeader } from '@/components/common/PageHeader';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { PricingTabs } from '@/components/pricing/PricingTabs';
import { pricingFaqs } from '@/data/pricing';
import { useSeo } from '@/hooks/useSeo';

export default function Pricing() {
  useSeo({
    title: 'Pricing',
    description:
      'Simple pricing for USK Software Solutions: subscription plans, rental options and custom development. Contact sales for enterprise and custom requirements.',
    path: '/pricing',
  });

  return (
    <>
      <PageHeader
        title="Simple, flexible pricing"
        description="Subscribe, rent or commission custom development. Choose the model that fits — and change it as you grow."
        breadcrumbs={[{ label: 'Pricing' }]}
      />

      <Section labelledBy="plans-heading">
        <h2 id="plans-heading" className="sr-only">
          Plans and pricing models
        </h2>
        <PricingTabs />
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Prices are indicative starting points and may vary by product. Contact sales for an exact quote.
        </p>
      </Section>

      <Section tone="mist" labelledBy="pricing-faq-heading">
        <div className="mx-auto max-w-3xl">
          <SectionTitle id="pricing-faq-heading" title="Pricing questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </Section>

      <CTASection
        surface="mist"
        title="Need a Custom Solution? Talk to Our Team."
        description="For enterprise, multi-team or fully custom requirements, we will prepare a tailored proposal."
        primary={{ label: 'Contact Sales', to: '/contact' }}
        secondary={{ label: 'View Products', to: '/products' }}
      />
    </>
  );
}
