import type { Project, ProjectCategoryInfo } from '@/types';

/**
 * Project categories keep three things clearly separate:
 *  - product     → USK-owned software products
 *  - client      → work delivered for named clients (add only with permission)
 *  - experience  → selected projects & development experience of the founder
 *
 * To add a project, append an object and choose its `category`.
 */
export const projectCategories: ProjectCategoryInfo[] = [
  {
    id: 'product',
    title: 'USK products',
    description: 'Software products owned and operated by USK Software Solutions.',
    emptyMessage: 'Our products are listed on the Products page.',
  },
  {
    id: 'client',
    title: 'Client solutions',
    description: 'Custom software delivered for clients. Case studies are published with the client’s permission.',
    emptyMessage: 'Client case studies will appear here as projects are completed and approved for publication.',
  },
  {
    id: 'experience',
    title: 'Selected projects & development experience',
    description:
      'Applications our founder has designed and developed throughout their career. They demonstrate the skills and engineering approach behind USK Software Solutions.',
    emptyMessage: '',
  },
];

export const projects: Project[] = [
  {
    id: 'crm-system',
    title: 'CRM — Customer Relationship Management System',
    category: 'experience',
    stack: 'java',
    type: 'Web application',
    summary: 'A CRM platform for managing leads, customer interactions and sales pipelines.',
    icon: 'users',
    mock: 'kanban',
    featured: true,
    features: [
      'Lead management',
      'Contact management',
      'Account management',
      'Sales pipeline',
      'Role-based access control',
      'REST APIs',
      'Database management',
    ],
    technology: [
      'Java',
      'Spring MVC',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'REST APIs',
      'Swagger',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
    ],
  },
  {
    id: 'cold-storage-management',
    title: 'Cold Storage Management System',
    category: 'experience',
    stack: 'java',
    type: 'Web application',
    summary: 'A web-based platform for managing inventory, bookings, invoices and users for cold storage operations.',
    icon: 'warehouse',
    mock: 'table',
    featured: true,
    features: [
      'Inventory listing',
      'Booking management',
      'User roles',
      'Invoice generation',
      'Feedback system',
      'Authentication with JWT',
      'REST APIs',
    ],
    technology: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'MySQL',
      'JSP',
      'Bootstrap',
      'Swagger',
    ],
  },
  {
    id: 'service-desk-application',
    title: 'Service Desk Application',
    category: 'experience',
    stack: 'react',
    type: 'Front-end application',
    summary: 'A support and helpdesk application for creating, tracking and prioritising tickets.',
    icon: 'ticket',
    mock: 'table',
    featured: true,
    features: ['Ticket creation', 'Ticket tracking', 'Ticket status', 'Priority management', 'Category filtering', 'Search'],
    technology: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'asset-management-application',
    title: 'Asset Management Application',
    category: 'experience',
    stack: 'react',
    type: 'Front-end application',
    summary: 'An application for tracking IT assets through allocation, status changes and their full lifecycle.',
    icon: 'boxes',
    mock: 'dashboard',
    features: [
      'IT asset tracking',
      'Asset allocation',
      'Asset de-allocation',
      'Status tracking',
      'Lifecycle management',
      'Filtering',
      'Detail views',
    ],
    technology: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'federation-console',
    title: 'Federation Console',
    category: 'experience',
    stack: 'react',
    type: 'Administrative console',
    summary: 'An administrative console for managing federated users, connected applications and access.',
    icon: 'key',
    mock: 'access',
    features: [
      'Federated user management',
      'Connected applications',
      'Access management',
      'Role-based UI',
      'Interactive tables',
    ],
    technology: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
];

export const projectStackLabels: Record<'all' | Project['stack'], string> = {
  all: 'All',
  java: 'Java & Spring Boot',
  react: 'React',
};
