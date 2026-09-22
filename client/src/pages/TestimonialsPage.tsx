import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { SEO } from '@/components/ui/SEO';
import { MessageSquareQuote, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { waGeneral } from '@/lib/whatsapp';

export function TestimonialsPage() {
  const [selectedService, setSelectedService] = useState<string>('सभी');

  const servicesList = ['सभी', ...Array.from(new Set(testimonials.map((t) => t.service)))];

  const filtered = testimonials.filter((t) => {
    if (selectedService === 'सभी') return true;
    return t.service === selectedService;
  });

  return (
    <div className="bg-cream-50">
      <SEO
        title="परामर्श अनुभव एवं समीक्षाएं | संगम ज्योतिष संस्थान"
        description="संगम ज्योतिष संस्थान के ज्योतिषीय परामर्श से लाभान्वित जातकों के वास्तविक अनुभव, समीक्षाएं एवं प्रतिक्रियाएं पढ़ें।"
        canonical="/testimonials"
        keywords={[
          'ज्योतिष परामर्श समीक्षाएं',
          'विश्वसनीय ज्योतिषी अनुभव',
          'कुंडली परामर्श फीडबैक',
          'Sangam Jyotish Reviews',
          'Vedic Astrologer Client Testimonials',
          'Top Rated Astrologer in India Feedback',
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'परामर्श अनुभव एवं समीक्षाएं',
          url: 'https://sangamjyotish.com/testimonials',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: testimonials.map((t, idx) => ({
              '@type': 'Review',
              position: idx + 1,
              author: {
                '@type': 'Person',
                name: t.name,
              },
              reviewBody: t.review,
              itemReviewed: {
                '@type': 'ProfessionalService',
                name: 'Sangam Jyotish Sansthan',
              },
            })),
          },
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-950 via-maroon-900 to-navy-950 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <MessageSquareQuote className="h-4 w-4 text-gold-300" />
            <span lang="hi">परामर्श अनुभव</span>
            <MessageSquareQuote className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold leading-[1.35] text-cream-50 sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]" lang="hi">
            हमारे परामर्श से जुड़े अनुभव
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            वैदिक मार्गदर्शन एवं व्यक्तिगत परामर्श से जुड़े विचार
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            संगम ज्योतिष संस्थान से कुंडली, विवाह, करियर, व्यापार एवं वास्तु पर व्यक्तिगत परामर्श प्राप्त करने वाले जातकों के प्रामाणिक अनुभव।
          </p>
        </div>
      </section>

      {/* Main Reviews Listing */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            label="परामर्श विचार"
            title="हमारे परामर्श से जुड़े अनुभव"
            subtitle="विभिन्न क्षेत्रों से हमारे साथ जुड़े जातकों के अनुभव"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 py-8">
            {servicesList.map((srv) => (
              <button
                key={srv}
                onClick={() => setSelectedService(srv)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedService === srv
                    ? 'bg-maroon-700 text-cream-50 shadow-soft scale-105 ring-2 ring-gold-400/30'
                    : 'bg-white text-navy-700 hover:bg-maroon-50 border border-gold-200/50'
                }`}
                lang="hi"
              >
                {srv}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t, idx) => (
              <TestimonialCard key={t.id} testimonial={t} index={idx} />
            ))}
          </div>

          {/* Review Disclaimer Notice */}
          <div className="mt-14 rounded-2xl bg-cream-100/60 p-6 text-center max-w-2xl mx-auto border border-gold-200/60">
            <ShieldCheck className="h-6 w-6 text-maroon-700 mx-auto mb-2" />
            <p className="text-xs text-navy-600 leading-relaxed" lang="hi">
              * सभी अनुभव जातकों की निजता सुरक्षा (Privacy & Confidentiality) के सिद्धांतों का पालन करते हुए प्रदर्शित किए गए हैं। हम किसी भी जातक की व्यक्तिगत पहचान या गोपनीय कुंडली विवरण सार्वजनिक नहीं करते।
            </p>
          </div>
        </div>
      </section>

      {/* Share Feedback CTA */}
      <section className="section-pad bg-gradient-to-b from-cream-100/40 to-cream-50 border-t border-gold-200/30">
        <div className="container-px text-center max-w-2xl">
          <div className="flex justify-center gap-1 mb-3 text-gold-500">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <h2 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
            क्या आपने संगम ज्योतिष संस्थान से परामर्श लिया है?
          </h2>
          <p className="mt-2 text-sm text-navy-600" lang="hi">
            अपने अनुभव और सुझाव साझा करने के लिए हमें WhatsApp पर संदेश भेजें।
          </p>
          <div className="mt-6">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span lang="hi">अपनी प्रतिक्रिया साझा करें</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="अपने प्रश्नों के लिए ज्योतिषीय परामर्श लें"
        subtitle="अपने जीवन से जुड़े महत्वपूर्ण प्रश्नों पर व्यक्तिगत मार्गदर्शन प्राप्त करने के लिए हमसे संपर्क करें।"
      />
    </div>
  );
}
