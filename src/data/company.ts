import { siteConfig } from '@/config/siteConfig';
import type { FAQ, Founder, JobOpening, NavItem, TeamMember, Testimonial, TitledItem } from '@/types';
import type { IconName } from '@/components/common/Icon';

/** Primary navigation (desktop + mobile). Contact is rendered as a separate CTA button. */
export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '/careers' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

/** Options in the contact form "Service Required" dropdown. `value` is what services/products link to. */
export const contactServiceOptions = [
  { value: 'product-demo', label: 'Product Demo' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'java-development', label: 'Java Development' },
  { value: 'react-development', label: 'React Development' },
  { value: 'business-automation', label: 'Business Automation' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'other', label: 'Other' },
] as const;

export const budgetOptions = [
  'Not sure yet',
  'Small project',
  'Medium project',
  'Large project',
  'Ongoing retainer',
] as const;

export const founder: Founder = {
  name: siteConfig.founder,
  title: 'Founder & Co-Founder',
  bio: 'Full Stack Java Developer focused on building scalable web applications, software products and practical technology solutions.',
  skills: [
    'Java',
    'Spring Boot',
    'Spring MVC',
    'Spring Security',
    'JWT',
    'REST APIs',
    'React.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap',
    'MySQL',
    'Spring Data JPA',
    'Git',
    'GitHub',
    'Swagger',
    'Microservices',
  ],
};

/** Add team members here later — the About page renders the list automatically when it is not empty. */
export const teamMembers: TeamMember[] = [];

/** Add testimonials here later (only real, approved quotes). The section is hidden while empty. */
export const testimonials: Testimonial[] = [];

/** Add open roles here. While empty, the Careers page shows the "general application" message. */
export const jobOpenings: JobOpening[] = [];

export const companyPillars: Array<TitledItem & { icon: IconName }> = [
  { icon: 'package', title: 'Product development', description: 'Ready-to-use software built to be adopted quickly, priced simply and improved continuously.' },
  { icon: 'code', title: 'Custom software development', description: 'Software designed around your processes, data and users — not the other way around.' },
  { icon: 'globe', title: 'Modern web technologies', description: 'React, TypeScript, Java and Spring Boot with clean REST APIs and relational databases.' },
  { icon: 'workflow', title: 'Business automation', description: 'Replace repetitive manual work with reliable, auditable workflows.' },
  { icon: 'wrench', title: 'Long-term technology support', description: 'Maintenance, monitoring and improvements after launch, so software keeps earning its place.' },
];

export const values: Array<TitledItem & { icon: IconName }> = [
  { icon: 'target', title: 'Practical first', description: 'We build what solves the problem in front of you before we build what looks impressive.' },
  { icon: 'shield', title: 'Secure by default', description: 'Authentication, role-based access and input validation are part of the foundation, not an add-on.' },
  { icon: 'handshake', title: 'Honest communication', description: 'Clear scopes, plain-language updates and straight answers about what is and is not possible.' },
  { icon: 'layers', title: 'Built to grow', description: 'Clean architecture and documented APIs so your software can evolve with your business.' },
];

export const processSteps: TitledItem[] = [
  { title: 'Discover', description: 'We learn your business, users and constraints, then agree on a clear scope and success measures.' },
  { title: 'Design', description: 'Wireframes, data models and API contracts are reviewed with you before development starts.' },
  { title: 'Build', description: 'Iterative delivery in small releases so you can see working software early and give feedback often.' },
  { title: 'Support', description: 'Deployment, documentation, training and ongoing maintenance after go-live.' },
];

export const techStack: Array<{ group: string; items: string[] }> = [
  { group: 'Frontend', items: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap'] },
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'JWT', 'Spring Data JPA'] },
  { group: 'Data & APIs', items: ['MySQL', 'REST APIs', 'Swagger / OpenAPI', 'Microservices'] },
  { group: 'Tooling', items: ['Git', 'GitHub', 'CI/CD-ready builds'] },
];

export const careerPerks: Array<TitledItem & { icon: IconName }> = [
  { icon: 'lightbulb', title: 'Work on real products', description: 'Help shape software products from the first line of code to the first customer.' },
  { icon: 'users', title: 'Small, focused team', description: 'Direct access to founders, quick decisions and room to take ownership.' },
  { icon: 'rocket', title: 'Grow your skills', description: 'Modern stack, code reviews and time to learn: React, TypeScript, Java and Spring Boot.' },
];

export const homeFaqs: FAQ[] = [
  {
    question: 'Are you a product company or a service company?',
    answer:
      'Both. We build our own software products that you can use on subscription or rental terms, and we develop custom software for businesses with specific requirements.',
  },
  {
    question: 'Can I get a product customised for my business?',
    answer:
      'Yes. Products can be configured and extended for your workflow. If your needs go further, we can scope a dedicated version or a fully custom build.',
  },
  {
    question: 'How do I get started?',
    answer: 'Send us an enquiry describing what you need. We will reply with questions, a suggested approach and next steps.',
  },
];
