import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemCategoriesSection } from '@/components/sections/ProblemCategoriesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { KundliAnalysisFeature } from '@/components/sections/KundliAnalysisFeature';
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
        title="सर्वश्रेष्ठ वैदिक ज्योतिष, कुंडली विश्लेषण एवं विवाह परामर्श"
        description="संगम ज्योतिष संस्थान - भारत का अग्रणी वैदिक ज्योतिष केंद्र। कुंडली विश्लेषण, 36 गुण विवाह मिलान, करियर, व्यापार, वित्त, वास्तु शास्त्र एवं ग्रह शांति हेतु आचार्यों से ऑनलाइन व फोन पर परामर्श प्राप्त करें।"
        canonical="/"
        keywords={[
          'संगम ज्योतिष संस्थान',
          'सर्वश्रेष्ठ वैदिक ज्योतिषी भारत',
          'ऑनलाइन ज्योतिष परामर्श',
          'जन्म कुंडली विश्लेषण',
          'विवाह कुंडली मिलान',
          '36 गुण मिलान',
          'मांगलिक दोष निवारण',
          'करियर ज्योतिष मार्गदर्शन',
          'व्यापार वृद्धि ज्योतिष',
          'वास्तु शास्त्र विशेषज्ञ',
          'ग्रह शांति पूजा',
          'रत्न परामर्श',
          'Vedic Astrology Online India',
          'Best Astrologer Consultation',
          'Kundli Milan for Marriage',
          'Horoscope Analysis Hindi',
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'संगम ज्योतिष संस्थान (Sangam Jyotish Sansthan)',
          alternateName: 'Sangam Jyotish',
          url: 'https://sangamjyotish.com',
          telephone: '+91 7800224400',
          priceRange: '₹₹',
          image: 'https://sangamjyotish.com/favicon.svg',
          description: 'प्रामाणिक वैदिक ज्योतिष, कुंडली विश्लेषण, विवाह एवं कुंडली मिलान, करियर, व्यापार, वास्तु और व्यक्तिगत ज्योतिष परामर्श।',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '520',
          },
        }}
      />
      <HeroSection />
      <ProblemCategoriesSection />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <KundliAnalysisFeature />
      <WhyChooseUs />
      <ProcessSection />
      <AstrologersPreview />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
