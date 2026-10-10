import type { IconName } from '@/components/common/Icon';

export type PricingModelId = 'subscription' | 'rental' | 'custom' | 'enterprise';
export type ProductStatus = 'available' | 'preview' | 'coming-soon';
export type MockVariant = 'dashboard' | 'table' | 'kanban' | 'access';

export interface NavItem {
  label: string;
  to: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface ProductScreen {
  title: string;
  caption: string;
  /** Abstract UI preview. Replace with a real screenshot by setting `image`. */
  variant: MockVariant;
  /** Optional path/URL of a real screenshot (rendered lazily). */
  image?: string;
}

export interface ProductPricing {
  subscription?: { monthly: number; yearly: number; note?: string };
  rental?: { monthly: number; minTermMonths: number; note?: string };
  custom?: { note: string };
  enterprise?: { note: string };
}

export interface Product {
  /** URL slug — used in /products/:id */
  id: string;
  name: string;
  tagline: string;
  category: string;
  shortDescription: string;
  overview: string;
  icon: IconName;
  status: ProductStatus;
  pricingModels: PricingModelId[];
  /** 3–4 short bullet points shown on the product card */
  highlights: string[];
  features: TitledItem[];
  benefits: TitledItem[];
  technology: string[];
  screens: ProductScreen[];
  pricing: ProductPricing;
  faqs: FAQ[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  benefits: string[];
  /** Pre-selects this option in the contact form (must match a value in contactServiceOptions) */
  contactOption: string;
  /** Show on the Home page preview */
  featured?: boolean;
}

export type ProjectCategory = 'product' | 'client' | 'experience';
export type ProjectStack = 'java' | 'react';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  stack: ProjectStack;
  type: string;
  summary: string;
  icon: IconName;
  mock: MockVariant;
  features: string[];
  technology: string[];
  featured?: boolean;
}

export interface ProjectCategoryInfo {
  id: ProjectCategory;
  title: string;
  description: string;
  emptyMessage: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  /** Price per month. `null` => show `priceLabel` instead (e.g. "Custom"). */
  monthlyPrice: number | null;
  /** Total price per year. `null` => no yearly price. */
  yearlyPrice: number | null;
  priceLabel?: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  cta: { label: string; to: string };
}

export interface PricingModel {
  id: 'subscription' | 'rental' | 'custom';
  label: string;
  description: string;
  supportsBillingToggle: boolean;
  plans: PricingPlan[];
}

export interface Founder {
  name: string;
  title: string;
  bio: string;
  skills: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  applyEmail?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot — must stay empty */
  website: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
