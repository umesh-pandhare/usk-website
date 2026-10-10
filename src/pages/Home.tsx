import { CTASection } from '@/components/common/CTASection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Hero } from '@/components/home/Hero';
import { PositioningSection } from '@/components/home/PositioningSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { TechStackSection } from '@/components/home/TechStackSection';
import { useSeo } from '@/hooks/useSeo';

export default function Home() {
  useSeo({ path: '/' });

  return (
    <>
      <Hero />
      <PositioningSection />
      <FeaturedProducts />
      <ServicesPreview />
      <ProcessSection />
      <ProjectsPreview />
      <TechStackSection />
      <CTASection
        title="Have a Software Idea? Let’s Build It Together."
        description="Tell us what you want to build or improve. We will help you shape the scope and the right next step."
        primary={{ label: 'Start a Project', to: '/contact' }}
        secondary={{ label: 'Explore Products', to: '/products' }}
      />
    </>
  );
}
