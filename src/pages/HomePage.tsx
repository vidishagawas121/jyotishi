import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { AstrologersPreview } from '@/components/sections/AstrologersPreview';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <AstrologersPreview />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
