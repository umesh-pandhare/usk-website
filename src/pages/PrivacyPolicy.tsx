import { LegalPage, type LegalSection } from '@/components/common/LegalPage';
import { siteConfig } from '@/config/siteConfig';
import { useSeo } from '@/hooks/useSeo';

/**
 * TEMPLATE — this is general-purpose wording, not legal advice.
 * Review and adapt it to your actual data practices (analytics, hosting, form
 * handling, applicable laws) with a qualified professional before relying on it.
 */
const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    body: (
      <p>
        This website is operated by {siteConfig.companyName} (“we”, “us”). You can contact us at{' '}
        <a className="font-medium text-brand-700 underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    ),
  },
  {
    heading: 'Information we collect',
    body: (
      <>
        <p>
          When you submit our contact form we collect the details you provide: your name, email address, phone number (optional), company (optional), the service you are interested in, your budget range (optional) and your message.
        </p>
        <p>
          Our hosting provider may automatically process technical data such as IP address, browser type and pages requested in order to deliver and secure the website.
        </p>
      </>
    ),
  },
  {
    heading: 'How we use your information',
    body: (
      <p>
        We use the information you send us to respond to your enquiry, provide quotes or demonstrations, and manage our business relationship with you. We do not sell your personal information.
      </p>
    ),
  },
  {
    heading: 'Sharing your information',
    body: (
      <p>
        We only share personal information with service providers who help us operate the website and our business (for example hosting and email providers), or where we are legally required to do so.
      </p>
    ),
  },
  {
    heading: 'Data retention and security',
    body: (
      <p>
        We keep enquiry information for as long as needed to respond and to maintain business records, and we take reasonable measures to protect it. No method of transmission or storage is completely secure.
      </p>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct or delete your personal information. To make a request, email us at the address above.
      </p>
    ),
  },
  {
    heading: 'Third-party links',
    body: <p>This website may link to third-party websites. We are not responsible for their content or privacy practices.</p>,
  },
  {
    heading: 'Changes to this policy',
    body: <p>We may update this policy from time to time. The “last updated” date at the top shows when it was last changed.</p>,
  },
];

export default function PrivacyPolicy() {
  useSeo({ title: 'Privacy Policy', description: `Privacy policy of ${siteConfig.companyName}.`, path: '/privacy-policy' });

  return (
    <LegalPage
      title="Privacy Policy"
      breadcrumb="Privacy Policy"
      intro="How we collect, use and protect information when you use this website or contact us."
      sections={sections}
    />
  );
}
