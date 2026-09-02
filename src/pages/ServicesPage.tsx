import { useState } from 'react';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';
import { Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'सभी सेवाएं' },
  { id: 'kundli', label: 'कुंडली एवं विवाह' },
  { id: 'career', label: 'करियर एवं व्यापार' },
  { id: 'vastu-puja', label: 'वास्तु एवं अनुष्ठान' },
  { id: 'special', label: 'मुहूर्त एवं रत्न' },
];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = services.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'kundli') {
      return ['kundli-analysis', 'marriage-kundli', 'love-relationship', 'santanam-astrology'].includes(service.slug);
    }
    if (activeCategory === 'career') {
      return ['career-guidance', 'business-consultation', 'wealth-financial'].includes(service.slug);
    }
    if (activeCategory === 'vastu-puja') {
      return ['vastu-consultation', 'graha-shanti'].includes(service.slug);
    }
    if (activeCategory === 'special') {
      return ['prashna-kundli', 'gemstone-consultation', 'muhurat-consultation'].includes(service.slug);
    }
    return true;
  });

  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-[500px] h-[500px]" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold-300" />
            <span lang="hi">वैदिक सेवाएं</span>
            <Sparkles className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl" lang="hi">
            हमारी ज्योतिष सेवाएं
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            जीवन के महत्वपूर्ण क्षेत्रों में वैदिक ज्योतिष आधारित मार्गदर्शन
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            कुंडली मिलान, करियर, व्यापार, वास्तु और ग्रह शांति सहित 12 विशिष्ट क्षेत्रों में प्रामाणिक और व्यक्तिगत परामर्श उपलब्ध है।
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
                    ? 'bg-maroon-700 text-cream-50 shadow-soft scale-105'
                    : 'bg-white text-navy-700 hover:bg-maroon-50 border border-maroon-100/80'
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
        title="किस सेवा के लिए परामर्श चाहते हैं?"
        subtitle="सीधे WhatsApp पर संपर्क करें अथवा विस्तृत परामर्श के लिए अपॉइंटमेंट बुक करें।"
      />
    </div>
  );
}
