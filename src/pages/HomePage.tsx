import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemCategoriesSection } from '@/components/sections/ProblemCategoriesSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AstrologersPreview } from '@/components/sections/AstrologersPreview';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemCategoriesSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <AstrologersPreview />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
