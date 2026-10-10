import type { Product, PricingModelId } from '@/types';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDER PRODUCTS — replace with your real products.
 *
 *  To add a product: copy one object below, give it a unique `id` (URL slug) and
 *  append it to the array. It appears automatically on /products, the Home page
 *  (first 3), and gets its own page at /products/<id>.
 *
 *  Prices in `pricing` are placeholder numbers. They are shown on the detail
 *  page only for the models listed in `pricingModels`.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const pricingModelLabels: Record<PricingModelId, string> = {
  subscription: 'Subscription',
  rental: 'Rental',
  custom: 'Custom pricing',
  enterprise: 'Enterprise',
};

const sharedFaqs = (name: string) => [
  {
    question: `How can I try ${name}?`,
    answer: 'Request a demo and we will walk you through the product, answer your questions and discuss which commercial model fits your business.',
  },
  {
    question: 'Can I switch between subscription and rental?',
    answer: 'Yes. Commercial terms can be reviewed when your needs change. Contact us and we will recommend the most suitable option.',
  },
  {
    question: 'Can the product be customised for my business?',
    answer: 'Yes. Configuration, branding and additional features can be scoped as part of a custom or enterprise arrangement.',
  },
  {
    question: 'What support is included?',
    answer: 'Support options depend on your plan. Higher plans can include priority support and a dedicated contact.',
  },
];

export const products: Product[] = [
  {
    id: 'usk-product-one',
    name: 'USK Product One',
    tagline: 'Business operations platform',
    category: 'Operations',
    shortDescription:
      'A ready-to-use platform that brings records, workflows and reporting for your daily operations into one place.',
    overview:
      'USK Product One is a placeholder for your flagship operations platform. Describe what the product does, who it is for and the problem it solves in two or three sentences here.',
    icon: 'layers',
    status: 'preview',
    pricingModels: ['subscription', 'rental', 'custom'],
    highlights: ['Central records and workflows', 'Role-based access control', 'Reports and exports', 'REST API access'],
    features: [
      { title: 'Unified records', description: 'Keep customer, task and operational data in a single, searchable system.' },
      { title: 'Configurable workflows', description: 'Model your own stages, approvals and notifications without code.' },
      { title: 'Role-based access', description: 'Control who can view, edit and approve at the role level.' },
      { title: 'Reports & exports', description: 'Filter, summarise and export the data your team needs.' },
      { title: 'REST API', description: 'Connect the product to your other systems through documented APIs.' },
      { title: 'Audit trail', description: 'Know who changed what and when across your records.' },
    ],
    benefits: [
      { title: 'Faster onboarding', description: 'Start using a working system instead of building from scratch.' },
      { title: 'Less manual work', description: 'Automate repetitive hand-offs and status updates.' },
      { title: 'Clear visibility', description: 'See the state of your operations at a glance.' },
    ],
    technology: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    screens: [
      { title: 'Overview dashboard', caption: 'A summary of activity and key indicators.', variant: 'dashboard' },
      { title: 'Records list', caption: 'Searchable, filterable tables.', variant: 'table' },
      { title: 'Workflow board', caption: 'Track items through each stage.', variant: 'kanban' },
    ],
    pricing: {
      subscription: { monthly: 49, yearly: 490, note: 'Placeholder price per workspace' },
      rental: { monthly: 79, minTermMonths: 3, note: 'Placeholder rental price' },
      custom: { note: 'Tailored configuration, branding and integrations.' },
    },
    faqs: sharedFaqs('USK Product One'),
  },
  {
    id: 'usk-product-two',
    name: 'USK Product Two',
    tagline: 'Customer & request management',
    category: 'Customer management',
    shortDescription:
      'Track customer conversations, requests and follow-ups so nothing slips through the cracks.',
    overview:
      'USK Product Two is a placeholder for a customer- or request-management product. Replace this text with the real product description.',
    icon: 'users',
    status: 'preview',
    pricingModels: ['subscription', 'custom', 'enterprise'],
    highlights: ['Request and ticket tracking', 'Priorities and categories', 'Search and filtering', 'Team assignment'],
    features: [
      { title: 'Request tracking', description: 'Capture requests from any channel and follow them to resolution.' },
      { title: 'Priorities & categories', description: 'Organise work by urgency and type.' },
      { title: 'Search & filters', description: 'Find any item in seconds with combined filters.' },
      { title: 'Team assignment', description: 'Assign, reassign and balance work across your team.' },
      { title: 'Status history', description: 'See the full timeline of every request.' },
      { title: 'Dashboards', description: 'Review volumes and response progress at a glance.' },
    ],
    benefits: [
      { title: 'Nothing gets lost', description: 'Every request has an owner, a status and a history.' },
      { title: 'Faster responses', description: 'Prioritise what matters and reduce back-and-forth.' },
      { title: 'Better accountability', description: 'Transparent ownership across the team.' },
    ],
    technology: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'REST APIs'],
    screens: [
      { title: 'Request queue', caption: 'All open requests in one view.', variant: 'table' },
      { title: 'Progress board', caption: 'Drag-style workflow stages.', variant: 'kanban' },
      { title: 'Team overview', caption: 'Activity and workload summary.', variant: 'dashboard' },
    ],
    pricing: {
      subscription: { monthly: 39, yearly: 390, note: 'Placeholder price per workspace' },
      custom: { note: 'Custom fields, branding and integrations.' },
      enterprise: { note: 'Dedicated environment, SLA and priority support.' },
    },
    faqs: sharedFaqs('USK Product Two'),
  },
  {
    id: 'usk-product-three',
    name: 'USK Product Three',
    tagline: 'Inventory & booking management',
    category: 'Inventory',
    shortDescription:
      'Manage stock, bookings and invoices with role-based access for your team.',
    overview:
      'USK Product Three is a placeholder for an inventory- or booking-oriented product. Replace this text with the real product description.',
    icon: 'warehouse',
    status: 'coming-soon',
    pricingModels: ['rental', 'custom', 'enterprise'],
    highlights: ['Inventory listing', 'Booking management', 'Invoice generation', 'Secure user roles'],
    features: [
      { title: 'Inventory listing', description: 'Maintain a clear, searchable list of what you hold.' },
      { title: 'Booking management', description: 'Create, confirm and track bookings.' },
      { title: 'Invoicing', description: 'Generate invoices from your records.' },
      { title: 'User roles', description: 'Give each team member the right level of access.' },
      { title: 'Secure authentication', description: 'Token-based authentication for web and API access.' },
      { title: 'Feedback capture', description: 'Collect and review customer feedback.' },
    ],
    benefits: [
      { title: 'Fewer errors', description: 'Replace spreadsheets with a single source of truth.' },
      { title: 'Faster billing', description: 'Move from booking to invoice without re-entering data.' },
      { title: 'Controlled access', description: 'Sensitive data stays with the right people.' },
    ],
    technology: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React'],
    screens: [
      { title: 'Inventory', caption: 'Stock records at a glance.', variant: 'table' },
      { title: 'Access control', caption: 'Roles and permissions.', variant: 'access' },
      { title: 'Operations summary', caption: 'Bookings and activity overview.', variant: 'dashboard' },
    ],
    pricing: {
      rental: { monthly: 99, minTermMonths: 6, note: 'Placeholder rental price' },
      custom: { note: 'Adapted to your site, workflow and reporting needs.' },
      enterprise: { note: 'Multi-site rollout with dedicated support.' },
    },
    faqs: sharedFaqs('USK Product Three'),
  },
];

export const getProductById = (id: string | undefined): Product | undefined =>
  products.find((product) => product.id === id);

export const productStatusLabel: Record<Product['status'], string> = {
  available: 'Available',
  preview: 'Preview',
  'coming-soon': 'Coming soon',
};
