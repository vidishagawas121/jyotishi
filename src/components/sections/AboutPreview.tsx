import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { statistics } from '@/data/content';

export function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-gold-300/40" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-maroon-100/50" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-700 to-navy-900 shadow-card">
                <div className="starfield absolute inset-0 opacity-20" aria-hidden />
                <div className="relative flex h-80 items-center justify-center p-8 lg:h-96">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-maroon-700/40 ring-4 ring-gold-400/20">
                      <span className="font-devanagari text-6xl text-gold-400">ॐ</span>
                    </div>
                    <p className="font-devanagari text-xl text-cream-50" lang="hi">
                      वैदिक ज्ञान
                    </p>
                    <p className="font-devanagari text-sm text-gold-300" lang="hi">
                      परंपरा एवं विश्वास
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <SectionHeading
              label="हमारे बारे में"
              title="परंपरागत ज्योतिष ज्ञान, आधुनिक समझ के साथ"
              align="left"
            />
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-relaxed text-navy-600" lang="hi">
                संगम ज्योतिष संस्थान एक प्रामाणिक वैदिक ज्योतिष परामर्श संस्थान है, जहाँ भारतीय ज्योतिष परंपरा और शास्त्रीय सिद्धांतों के आधार पर व्यक्तिगत मार्गदर्शन प्रदान किया जाता है। हमारा उद्देश्य ज्योतिष ज्ञान का उपयोग आपके जीवन की दिशा को स्पष्ट करने में सहायता के लिए करना है।
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {statistics.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-maroon-700">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-navy-500" lang="hi">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <Link to="/about" className="btn-primary mt-8">
                <span lang="hi">हमारे बारे में जानें</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
