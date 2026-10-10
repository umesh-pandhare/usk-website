import type { Service } from '@/types';

/**
 * Add a service by appending an object. `contactOption` must match a `value`
 * in `contactServiceOptions` (src/data/company.ts) so the contact form is
 * pre-selected when the visitor clicks the CTA.
 */
export const services: Service[] = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'End-to-end software built around your processes, from requirements and design to deployment.',
    icon: 'code',
    benefits: ['Fits your exact workflow', 'Full ownership of the solution', 'Scales with your business'],
    contactOption: 'custom-software',
    featured: true,
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    description: 'Fast, secure and responsive web applications that work on every device.',
    icon: 'monitor',
    benefits: ['Responsive on mobile and desktop', 'Secure authentication and roles', 'Maintainable architecture'],
    contactOption: 'web-development',
    featured: true,
  },
  {
    id: 'react-development',
    title: 'React Development',
    description: 'Modern React and TypeScript front ends with reusable components and clean state management.',
    icon: 'sparkles',
    benefits: ['Component-driven UI', 'Type-safe codebase', 'Performance-minded builds'],
    contactOption: 'react-development',
    featured: true,
  },
  {
    id: 'java-spring-boot-development',
    title: 'Java & Spring Boot Development',
    description: 'Robust back-end systems with Spring Boot, Spring Security, JPA and MySQL.',
    icon: 'server',
    benefits: ['Secure, layered architecture', 'JWT and role-based access', 'Production-ready structure'],
    contactOption: 'java-development',
    featured: true,
  },
  {
    id: 'rest-api-development',
    title: 'REST API Development',
    description: 'Well-designed, documented APIs that connect your applications and third-party systems.',
    icon: 'api',
    benefits: ['Swagger / OpenAPI documentation', 'Consistent error handling', 'Integration-ready'],
    contactOption: 'custom-software',
  },
  {
    id: 'database-development',
    title: 'Database Development',
    description: 'Relational schema design, queries and data layers that stay fast and reliable as data grows.',
    icon: 'database',
    benefits: ['Clean data modelling', 'Optimised queries', 'Safe migrations'],
    contactOption: 'custom-software',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Automate approvals, notifications and repetitive tasks so your team can focus on higher-value work.',
    icon: 'workflow',
    benefits: ['Fewer manual errors', 'Faster turnaround', 'Auditable processes'],
    contactOption: 'business-automation',
    featured: true,
  },
  {
    id: 'ui-ux-development',
    title: 'UI/UX Development',
    description: 'Interfaces designed for clarity and speed, from wireframes to polished, accessible front ends.',
    icon: 'pen',
    benefits: ['Clear user flows', 'Accessible by design', 'Consistent design system'],
    contactOption: 'web-development',
  },
  {
    id: 'software-maintenance',
    title: 'Software Maintenance',
    description: 'Bug fixes, updates, monitoring and enhancements to keep your software healthy after launch.',
    icon: 'wrench',
    benefits: ['Predictable support', 'Regular improvements', 'Faster issue resolution'],
    contactOption: 'maintenance',
    featured: true,
  },
  {
    id: 'technical-consulting',
    title: 'Technical Consulting',
    description: 'Architecture reviews, technology selection and delivery planning from an engineering perspective.',
    icon: 'compass',
    benefits: ['Independent technical advice', 'Reduced project risk', 'Clear roadmap'],
    contactOption: 'other',
  },
];

export const engagementModels = [
  {
    title: 'Fixed-scope project',
    description: 'A defined deliverable with an agreed scope and timeline. Best when requirements are clear.',
  },
  {
    title: 'Dedicated development',
    description: 'A developer or team working on your roadmap in an ongoing, flexible arrangement.',
  },
  {
    title: 'Maintenance & support',
    description: 'A retainer for fixes, upgrades and improvements to software already in production.',
  },
];
