import { useState } from 'react';
import { astrologers, astrologerFilters } from '@/data/astrologers';
import { AstrologerCard } from '@/components/cards/AstrologerCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { SEO } from '@/components/ui/SEO';
import { Users, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function AstrologersPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('सभी');

  const allFilters = ['सभी', ...astrologerFilters];

  const filteredAstrologers = astrologers.filter((a) => {
    if (selectedFilter === 'सभी') return true;
    return a.filters.includes(selectedFilter) || a.specializations.includes(selectedFilter);
  });

  return (
    <div className="bg-cream-50">
      <SEO
        title="हमारे ज्योतिषाचार्य | वैदिक ज्योतिष विशेषज्ञ"
        description="संगम ज्योतिष संस्थान के अनुभवी एवं विद्वान ज्योतिषाचार्यों से मिलें और अपनी कुंडली के अनुसार व्यक्तिगत परामर्श प्राप्त करें।"
        canonical="/astrologers"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-950 via-maroon-900 to-navy-950 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <Users className="h-4 w-4 text-gold-300" />
            <span lang="hi">हमारे ज्योतिषाचार्य</span>
            <Users className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold leading-[1.35] text-cream-50 sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]" lang="hi">
            हमारे ज्योतिष विशेषज्ञ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            पारंपरिक वैदिक सिद्धांतों के अनुसार व्यक्तिगत ज्योतिषीय मार्गदर्शन
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            पारंपरिक ज्ञान, शास्त्रीय अध्ययन और व्यावहारिक समझ से युक्त हमारे आचार्य आपके प्रश्नों का धैर्यपूर्वक और सूक्ष्म अध्ययन करके मार्गदर्शन प्रदान करते हैं।
          </p>
        </div>
      </section>

      {/* Filters & Astrologer Listing */}
      <section className="section-pad">
        <div className="container-px">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
            {allFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-maroon-700 text-cream-50 shadow-soft scale-105 ring-2 ring-gold-400/30'
                    : 'bg-white text-navy-700 hover:bg-maroon-50 border border-gold-200/50'
                }`}
                lang="hi"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredAstrologers.map((astrologer, index) => (
              <AstrologerCard key={astrologer.id} astrologer={astrologer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Ethics Banner */}
      <section className="section-pad bg-gradient-to-b from-cream-100/60 to-cream-50 border-t border-gold-200/30">
        <div className="container-px">
          <SectionHeading
            label="हमारी आचार संहिता"
            title="विश्वसनीय एवं प्रामाणिक मार्गदर्शन की प्रतिबद्धता"
            subtitle="हम केवल प्रामाणिक वैदिक सिद्धांतों एवं संवेदनशील परामर्श का पालन करते हैं"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal delay={100}>
              <div className="card-premium p-6 text-center rounded-2xl border border-gold-300/30 bg-white">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-devanagari text-lg font-bold text-maroon-800 mb-2" lang="hi">
                  100% गोपनीयता
                </h4>
                <p className="text-sm text-navy-600" lang="hi">
                  आपकी जन्म कुंडली, परिवार और बातचीत पूर्णतः निजी रखी जाती है।
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-premium p-6 text-center rounded-2xl border border-gold-300/30 bg-white">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-700">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="font-devanagari text-lg font-bold text-maroon-800 mb-2" lang="hi">
                  अंधविश्वास से मुक्त
                </h4>
                <p className="text-sm text-navy-600" lang="hi">
                  कोई भ्रामक या डराने वाले दावे नहीं, केवल शास्त्र सम्मत और व्यावहारिक उपाय।
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="card-premium p-6 text-center rounded-2xl border border-gold-300/30 bg-white">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-700">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h4 className="font-devanagari text-lg font-bold text-maroon-800 mb-2" lang="hi">
                  व्यक्तिगत ध्यान
                </h4>
                <p className="text-sm text-navy-600" lang="hi">
                  प्रत्येक जातक को पर्याप्त समय देकर धैर्यपूर्वक सभी शंकाओं का समाधान।
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="किसी विशेष विषय पर परामर्श चाहते हैं?"
        subtitle="सीधे WhatsApp पर संपर्क करें या अपनी सुविधानुसार अपॉइंटमेंट बुक करें।"
      />
    </div>
  );
}
