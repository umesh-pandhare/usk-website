import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { useSeo } from '@/hooks/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Contact USK Software Solutions to request a product demo, discuss a custom software project or ask about web development, automation and maintenance.',
    path: '/contact',
  });

  return (
    <>
      <PageHeader
        title="Contact us"
        description="Tell us about your idea, requirement or question. The more detail you share, the more useful our reply will be."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="bg-white py-14 sm:py-20" aria-label="Enquiry">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-9">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  );
}
