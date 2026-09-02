import { useState } from 'react';
import { faqs } from '@/data/content';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { HelpCircle, Search, MessageCircle } from 'lucide-react';
import { waGeneral } from '@/lib/whatsapp';

export function FAQPage() {
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl w-[500px] h-[500px]" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <HelpCircle className="h-4 w-4 text-gold-300" />
            <span lang="hi">सहायता एवं समाधान</span>
            <HelpCircle className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl" lang="hi">
            अक्सर पूछे जाने वाले प्रश्न
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            ज्योतिष परामर्श, प्रक्रिया एवं गोपनीयता से संबंधित सामान्य प्रश्नों के उत्तर
          </p>

          {/* Search box */}
          <div className="mx-auto mt-8 max-w-lg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="प्रश्न खोजें (उदा. कुंडली, समय, WhatsApp...)"
                className="w-full rounded-full bg-white/95 py-3.5 pl-12 pr-6 text-sm text-navy-900 placeholder-navy-400 shadow-card focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion list */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            label="एफएक्यू"
            title="सामान्य शंकाएं एवं समाधान"
            subtitle="यदि आपके मन में कोई अन्य प्रश्न हो, तो सीधे WhatsApp पर पूछ सकते हैं।"
          />

          <div className="mt-12">
            {filteredFaqs.length > 0 ? (
              <FAQAccordion items={filteredFaqs} />
            ) : (
              <div className="text-center py-12">
                <p className="text-navy-600 text-base" lang="hi">
                  "{search}" से संबंधित कोई प्रश्न नहीं मिला।
                </p>
                <button
                  onClick={() => setSearch('')}
                  className="mt-3 text-sm font-semibold text-maroon-700 underline"
                >
                  सभी प्रश्न देखें
                </button>
              </div>
            )}
          </div>

          {/* Didn't find answer card */}
          <div className="mt-16 mx-auto max-w-xl rounded-2xl bg-gradient-to-r from-maroon-50 via-cream-100 to-gold-50 p-8 text-center border border-maroon-100">
            <MessageCircle className="h-8 w-8 text-[#1da851] mx-auto mb-3" />
            <h3 className="font-devanagari text-xl font-bold text-maroon-800" lang="hi">
              क्या आपका प्रश्न यहाँ नहीं है?
            </h3>
            <p className="mt-2 text-sm text-navy-600 leading-relaxed" lang="hi">
              हमारे प्रतिनिधि से सीधे WhatsApp पर जुड़ें और अपने प्रश्न का त्वरित उत्तर प्राप्त करें।
            </p>
            <div className="mt-5">
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
              >
                WhatsApp पर प्रश्न पूछें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
