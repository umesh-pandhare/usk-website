import { LegalPage, type LegalSection } from '@/components/common/LegalPage';
import { siteConfig } from '@/config/siteConfig';
import { useSeo } from '@/hooks/useSeo';

/**
 * TEMPLATE — this is general-purpose wording, not legal advice.
 * Have a qualified professional review it, and set `legal.jurisdiction` in
 * src/config/siteConfig.ts, before relying on it.
 */
const sections: LegalSection[] = [
  {
    heading: 'Acceptance of terms',
    body: (
      <p>
        By accessing or using this website you agree to these Terms & Conditions. If you do not agree, please do not use the website.
      </p>
    ),
  },
  {
    heading: 'Use of the website',
    body: (
      <p>
        You agree to use the website lawfully and not to interfere with its operation, attempt unauthorised access, or use it to distribute harmful or misleading content.
      </p>
    ),
  },
  {
    heading: 'Products and services',
    body: (
      <p>
        Information on this website about our products, services and pricing is provided for general information and may change without notice. Pricing, features and delivery terms for any product or project are confirmed in a separate written quote or agreement.
      </p>
    ),
  },
  {
    heading: 'Intellectual property',
    body: (
      <p>
        The content, design, logo and software on this website are owned by {siteConfig.companyName} or its licensors and may not be copied or reused without permission, except as allowed by law.
      </p>
    ),
  },
  {
    heading: 'Enquiries',
    body: (
      <p>
        Submitting an enquiry does not create a contract. A contract is formed only when both parties agree to written terms for a specific product or project.
      </p>
    ),
  },
  {
    heading: 'Disclaimer and limitation of liability',
    body: (
      <p>
        The website is provided “as is”. To the extent permitted by law, we are not liable for any loss arising from your use of, or inability to use, the website.
      </p>
    ),
  },
  {
    heading: 'Governing law',
    body: <p>These terms are governed by the laws applicable in {siteConfig.legal.jurisdiction}.</p>,
  },
  {
    heading: 'Contact',
    body: (
      <p>
        Questions about these terms can be sent to{' '}
        <a className="font-medium text-brand-700 underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    ),
  },
];

export default function Terms() {
  useSeo({ title: 'Terms & Conditions', description: `Terms and conditions for using the ${siteConfig.companyName} website.`, path: '/terms' });

  return (
    <LegalPage
      title="Terms & Conditions"
      breadcrumb="Terms & Conditions"
      intro="The terms that apply when you use this website and enquire about our products and services."
      sections={sections}
    />
  );
}
