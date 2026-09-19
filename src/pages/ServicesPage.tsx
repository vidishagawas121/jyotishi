import { useState } from 'react';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';
import { SEO } from '@/components/ui/SEO';
import { Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'सभी सेवाएं' },
  { id: 'kundli', label: 'कुंडली, विवाह एवं संबंध' },
  { id: 'career-business', label: 'करियर, व्यापार एवं वित्त' },
  { id: 'vastu-spiritual', label: 'वास्तु एवं आध्यात्मिक' },
  { id: 'muhurat-special', label: 'मुहूर्त, प्रश्न एवं रत्न' },
];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = services.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'kundli') {
      return ['marriage-kundli', 'love-relationship', 'kundli-analysis', 'santan'].includes(service.slug);
    }
    if (activeCategory === 'career-business') {
      return ['career', 'business', 'dhan-vittiya'].includes(service.slug);
    }
    if (activeCategory === 'vastu-spiritual') {
      return ['vastu', 'graha-shanti'].includes(service.slug);
    }
    if (activeCategory === 'muhurat-special') {
      return ['muhurat', 'prashna-kundli', 'ratna-paramarsh'].includes(service.slug);
    }
    return true;
  });

  return (
    <div className="bg-cream-50">
      <SEO
        title="हमारी ज्योतिष सेवाएं | वैदिक ज्योतिष परामर्श"
        description="विवाह, कुंडली मिलान, प्रेम व संबंध, करियर, व्यापार, वित्त, वास्तु एवं ग्रह शांति सहित संपूर्ण वैदिक ज्योतिष सेवाएं।"
        canonical="/services"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-950 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-[500px] h-[500px]" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold-300" />
            <span lang="hi">वैदिक ज्योतिष सेवाएं</span>
            <Sparkles className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold leading-[1.35] text-cream-50 sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]" lang="hi">
            हमारी ज्योतिष सेवाएं
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            जीवन के विभिन्न क्षेत्रों से जुड़े प्रश्नों के लिए व्यक्तिगत ज्योतिषीय मार्गदर्शन
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            विवाह, संबंध, करियर, व्यापार, धन, वास्तु और ग्रह शांति सहित विशिष्ट क्षेत्रों में शास्त्रीय एवं प्रामाणिक वैदिक परामर्श उपलब्ध है।
          </p>
        </div>
      </section>

      {/* Filter Tabs & Services List */}
      <section className="section-pad">
        <div className="container-px">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-maroon-700 text-cream-50 shadow-soft scale-105 ring-2 ring-gold-400/30'
                    : 'bg-white text-navy-700 hover:bg-maroon-50 border border-gold-200/50'
                }`}
                lang="hi"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA */}
      <CTASection
        title="अपने प्रश्नों के लिए ज्योतिषीय परामर्श लें"
        subtitle="अपने जीवन से जुड़े महत्वपूर्ण प्रश्नों पर व्यक्तिगत मार्गदर्शन प्राप्त करने के लिए हमसे संपर्क करें।"
      />
    </div>
  );
}
