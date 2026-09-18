import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, UserCheck, BookOpen, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { valuePillars } from '@/data/content';

export function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Visual Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-3 -top-3 h-24 w-24 rounded-2xl border-2 border-gold-300/40" />
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-maroon-100/60" />
                <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-maroon-800 via-navy-900 to-maroon-900 p-8 shadow-card text-center text-cream-50">
                  <div className="starfield absolute inset-0 opacity-20" aria-hidden />
                  <div className="relative">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/25 to-maroon-600/40 ring-4 ring-gold-400/25">
                      <span className="font-devanagari text-5xl text-gold-300">ॐ</span>
                    </div>
                    <p className="font-devanagari text-xl font-bold text-cream-50" lang="hi">
                      संगम ज्योतिष संस्थान
                    </p>
                    <p className="mt-1 font-devanagari text-xs text-gold-300" lang="hi">
                      प्राचीन वैदिक ज्ञान • आधुनिक मार्गदर्शन
                    </p>

                    <div className="mt-6 space-y-3 text-left">
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                        <BookOpen className="h-5 w-5 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">शास्त्रीय वैदिक परंपरा</p>
                          <p className="text-cream-100/70" lang="hi">ऋषि-मुनियों द्वारा प्रतिपादित सिद्धांत</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                        <UserCheck className="h-5 w-5 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">व्यक्तिगत एवं सूक्ष्म विश्लेषण</p>
                          <p className="text-cream-100/70" lang="hi">हर जातक की परिस्थिति का विशेष ध्यान</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10">
                        <ShieldCheck className="h-5 w-5 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">निष्ठा एवं गोपनीयता</p>
                          <p className="text-cream-100/70" lang="hi">सभी बातचीत व विवरण 100% सुरक्षित</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Right */}
          <div className="lg:col-span-7">
            <SectionHeading
              label="हमारे बारे में"
              title="संगम ज्योतिष संस्थान के बारे में"
              subtitle="पारंपरिक वैदिक सिद्धांतों और व्यक्तिगत दृष्टिकोण के साथ ज्योतिषीय परामर्श।"
              align="left"
            />

            <Reveal delay={100}>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700" lang="hi">
                <p>
                  <strong className="text-maroon-800">संगम ज्योतिष संस्थान</strong> एक विश्वसनीय वैदिक ज्योतिष परामर्श केंद्र है, जिसका ध्येय प्राचीन भारतीय ज्योतिष ज्ञान और शास्त्रीय गणनाओं के माध्यम से जातकों को उनके जीवन की दिशा को समझने और सही निर्णय लेने में सहायता करना है।
                </p>
                <p className="text-sm sm:text-base text-navy-600">
                  हमारा दृढ़ विश्वास है कि प्रत्येक व्यक्ति की जन्म पत्रिका अद्वितीय होती है। इसलिए हम सामान्यीकृत भविष्यवाणियों के बजाय जातक की विशिष्ट परिस्थिति, ग्रह स्थिति, दशा-अंतर्दशा और नवांश चक्र का गहराई से अध्ययन करते हैं। यहाँ अंधविश्वास या अनावश्यक भ्रांतियों को दूर रखकर व्यावहारिक और सात्विक समाधान सुझाए जाते हैं।
                </p>
              </div>
            </Reveal>

            {/* Core Pillars Grid */}
            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-2">
                {valuePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-gold-200/60 bg-cream-50 p-3.5 transition-all duration-300 hover:border-gold-300 hover:shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold-600 flex-shrink-0" />
                      <p className="font-devanagari text-sm font-bold text-maroon-800" lang="hi">
                        {pillar.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-navy-600" lang="hi">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/about" className="btn-primary">
                  <span lang="hi">विस्तार से जानें</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/appointment" className="btn-secondary">
                  <span lang="hi">परामर्श बुक करें</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
