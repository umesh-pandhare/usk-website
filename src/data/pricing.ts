import type { FAQ, PricingModel } from '@/types';
import { contactLink } from '@/utils/format';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDER PRICING — change numbers, names and features freely.
 *
 *  • monthlyPrice  → price per month (null = show `priceLabel`, e.g. "Custom")
 *  • yearlyPrice   → total price for a year (null = no yearly price)
 *  • Add a plan    → append to the model's `plans` array
 *  • Add a model   → append a new object to `pricingModels` (and widen the
 *                    `PricingModel['id']` type in src/types/index.ts)
 *
 *  Currency and locale come from src/config/siteConfig.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const pricingModels: PricingModel[] = [
  {
    id: 'subscription',
    label: 'Subscription',
    description: 'Use our ready-made products on a monthly or yearly plan. Cancel or change plans as your needs evolve.',
    supportsBillingToggle: true,
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'For individuals and small teams getting started.',
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: ['Core product features', 'Up to 3 users', 'Email support', 'Standard reports'],
        cta: { label: 'Get Started', to: contactLink('product-demo', { plan: 'starter' }) },
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'For growing teams that need more control.',
        monthlyPrice: 79,
        yearlyPrice: 790,
        highlighted: true,
        features: ['Everything in Starter', 'Up to 15 users', 'Role-based access', 'API access', 'Priority email support'],
        cta: { label: 'Get Started', to: contactLink('product-demo', { plan: 'professional' }) },
      },
      {
        id: 'business',
        name: 'Business',
        description: 'For organisations with multiple teams and workflows.',
        monthlyPrice: 199,
        yearlyPrice: 1990,
        features: ['Everything in Professional', 'Up to 50 users', 'Advanced workflows', 'Audit trail', 'Onboarding assistance'],
        cta: { label: 'Get Started', to: contactLink('product-demo', { plan: 'business' }) },
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'For large organisations with specific requirements.',
        monthlyPrice: null,
        yearlyPrice: null,
        priceLabel: 'Custom',
        priceNote: 'Tailored to your requirements',
        features: ['Everything in Business', 'Unlimited users', 'Custom integrations', 'Dedicated support contact', 'Service-level agreement'],
        cta: { label: 'Contact Sales', to: contactLink('product-demo', { plan: 'enterprise' }) },
      },
    ],
  },
  {
    id: 'rental',
    label: 'Rental',
    description: 'Rent a product for a fixed term — ideal for projects, seasonal needs or evaluating before committing.',
    supportsBillingToggle: false,
    plans: [
      {
        id: 'rental-short',
        name: 'Short term',
        description: 'Flexible rental for short projects.',
        monthlyPrice: 99,
        yearlyPrice: null,
        priceNote: 'per month · minimum 3 months',
        features: ['Full product access', 'Hosted and maintained by USK', 'Email support'],
        cta: { label: 'Request Rental Quote', to: contactLink('product-demo', { plan: 'rental-short' }) },
      },
      {
        id: 'rental-standard',
        name: 'Standard term',
        description: 'Better value for longer engagements.',
        monthlyPrice: 79,
        yearlyPrice: null,
        priceNote: 'per month · minimum 12 months',
        highlighted: true,
        features: ['Full product access', 'Hosted and maintained by USK', 'Priority support', 'Basic configuration included'],
        cta: { label: 'Request Rental Quote', to: contactLink('product-demo', { plan: 'rental-standard' }) },
      },
      {
        id: 'rental-custom',
        name: 'Custom rental',
        description: 'Special terms, volumes or environments.',
        monthlyPrice: null,
        yearlyPrice: null,
        priceLabel: 'Custom',
        priceNote: 'Tailored to your requirements',
        features: ['Custom term length', 'Dedicated environment option', 'Custom branding', 'Dedicated support contact'],
        cta: { label: 'Contact Sales', to: contactLink('product-demo', { plan: 'rental-custom' }) },
      },
    ],
  },
  {
    id: 'custom',
    label: 'Custom development',
    description: 'Software designed and built specifically for your business. Priced by scope, not by seat.',
    supportsBillingToggle: false,
    plans: [
      {
        id: 'custom-fixed',
        name: 'Fixed-scope project',
        description: 'A defined deliverable with an agreed scope and timeline.',
        monthlyPrice: null,
        yearlyPrice: null,
        priceLabel: 'Custom quote',
        priceNote: 'Based on scope and timeline',
        features: ['Requirement analysis', 'Design and development', 'Testing and deployment', 'Documentation and handover'],
        cta: { label: 'Contact Sales', to: contactLink('custom-software') },
      },
      {
        id: 'custom-dedicated',
        name: 'Dedicated development',
        description: 'Ongoing development capacity for your roadmap.',
        monthlyPrice: null,
        yearlyPrice: null,
        priceLabel: 'Custom quote',
        priceNote: 'Monthly engagement',
        highlighted: true,
        features: ['Dedicated developer(s)', 'Flexible scope', 'Regular progress reviews', 'Scale up or down'],
        cta: { label: 'Contact Sales', to: contactLink('custom-software') },
      },
      {
        id: 'custom-support',
        name: 'Maintenance & support',
        description: 'Keep your software secure, updated and improving.',
        monthlyPrice: null,
        yearlyPrice: null,
        priceLabel: 'Custom quote',
        priceNote: 'Monthly retainer',
        features: ['Bug fixes and updates', 'Monitoring and backups', 'Small enhancements', 'Priority response'],
        cta: { label: 'Contact Sales', to: contactLink('maintenance') },
      },
    ],
  },
];

export const pricingFaqs: FAQ[] = [
  {
    question: 'Are the prices on this page final?',
    answer:
      'The prices shown are indicative starting points and can vary by product. Contact us for an exact quote for the product and plan you are interested in.',
  },
  {
    question: 'What is the difference between subscription and rental?',
    answer:
      'Subscriptions are ongoing monthly or yearly plans you can change over time. Rentals are fixed-term arrangements, suited to projects or seasonal needs.',
  },
  {
    question: 'Can I get a custom or enterprise plan?',
    answer:
      'Yes. Contact our sales team with your requirements and we will prepare a tailored proposal covering scope, support and commercial terms.',
  },
  {
    question: 'Do you offer discounts for yearly billing?',
    answer: 'Yearly subscription plans are priced lower than twelve monthly payments. The saving is shown on each plan when you switch to yearly billing.',
  },
];
