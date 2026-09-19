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
import { SEO } from '@/components/ui/SEO';

export function HomePage() {
  return (
    <>
      <SEO
        title="प्रामाणिक वैदिक ज्योतिष परामर्श"
        description="संगम ज्योतिष संस्थान से प्रामाणिक वैदिक ज्योतिष, कुंडली विश्लेषण, विवाह एवं कुंडली मिलान, प्रेम व संबंध, करियर, व्यापार, वित्त, वास्तु एवं व्यक्तिगत ज्योतिष परामर्श प्राप्त करें।"
        canonical="/"
      />
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
