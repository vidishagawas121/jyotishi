import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <MessageSquareQuote className="h-4 w-4 text-gold-300" />
            <span lang="hi">ग्राहक अनुभव</span>
            <MessageSquareQuote className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl" lang="hi">
            हमारे ग्राहकों की राय
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            वैदिक मार्गदर्शन से संतुष्ट जातकों के अनुभव
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            संगम ज्योतिष संस्थान के आचार्यों से कुंडली, विवाह, करियर एवं वास्तु पर परामर्श लेने वाले सम्मानित जातकों के विचार।
          </p>
        </div>
      </section>

      {/* Main Reviews Listing */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            label="समीक्षाएं"
            title="सच्चे अनुभव, विश्वास का आधार"
            subtitle="विभिन्न शहरों से हमारे साथ जुड़े जातकों की प्रतिक्रियाएं"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 py-8">
            {servicesList.map((srv) => (
              <button
                key={srv}
                onClick={() => setSelectedService(srv)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedService === srv
                    ? 'bg-maroon-700 text-cream-50 shadow-soft scale-105'
                    : 'bg-white text-navy-700 hover:bg-maroon-50 border border-maroon-100/80'
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
          <div className="mt-14 rounded-2xl bg-cream-100/60 p-6 text-center max-w-2xl mx-auto border border-maroon-100/60">
            <ShieldCheck className="h-6 w-6 text-maroon-600 mx-auto mb-2" />
            <p className="text-xs text-navy-600 leading-relaxed" lang="hi">
              * सभी समीक्षाएं जातकों की सहमति और निजता सुरक्षा के सिद्धांतों का पालन करते हुए प्रदर्शित की गई हैं। हम किसी भी जातक की व्यक्तिगत पहचान या गोपनीय कुंडली विवरण सार्वजनिक नहीं करते।
            </p>
          </div>
        </div>
      </section>

      {/* Share Feedback CTA */}
      <section className="section-pad bg-gradient-to-b from-cream-100/40 to-cream-50">
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
              <span lang="hi">अपनी राय साझा करें</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="आप भी प्राप्त करें प्रामाणिक ज्योतिष मार्गदर्शन"
        subtitle="आज ही अपनी जन्म कुंडली का विश्लेषण करवाएं और जीवन में स्पष्टता पाएं।"
      />
    </div>
  );
}
