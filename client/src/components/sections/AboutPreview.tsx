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
          {/* Visual Left - Rashi Chakra Zodiac Wheel */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative outer glow and borders */}
                <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-400/25 via-saffron-500/20 to-maroon-700/20 blur-xl" />
                <div className="absolute -left-3 -top-3 h-24 w-24 rounded-2xl border-2 border-gold-300/40" />
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-gold-400/20" />

                <div className="relative overflow-hidden rounded-3xl border-2 border-gold-400/30 bg-gradient-to-br from-maroon-950 via-[#260813] to-navy-950 p-6 sm:p-7 shadow-2xl text-center text-cream-50 backdrop-blur-sm">
                  <div className="starfield absolute inset-0 opacity-25" aria-hidden />

                  {/* Zodiac Wheel Image with Celestial Aura */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative flex items-center justify-center p-2">
                      {/* Subtle celestial orbital ring */}
                      <div className="pointer-events-none absolute -inset-2 rounded-full border border-gold-400/25 animate-spin-slow" />
                      
                      <img
                        src="/images/rashi-chakra.png"
                        alt="द्वादश राशि चक्र - वैदिक ज्योतिष (12 Zodiac Signs & Planetary Wheel)"
                        className="h-56 w-56 sm:h-64 sm:w-64 object-contain drop-shadow-[0_12px_28px_rgba(245,158,11,0.3)] transition-transform duration-700 hover:scale-105 hover:rotate-12"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-3">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-300 backdrop-blur-sm">
                        <span>✦</span>
                        <span lang="hi">द्वादश राशि एवं नवग्रह चक्र</span>
                        <span>✦</span>
                      </div>
                      <p className="mt-2 font-devanagari text-sm font-bold text-cream-50" lang="hi">
                        संगम ज्योतिष संस्थान
                      </p>
                      <p className="mt-0.5 font-devanagari text-xs text-gold-300/90" lang="hi">
                        मेष से मीन तक १२ राशियों व २७ नक्षत्रों का सूक्ष्म वैदिक अध्ययन
                      </p>
                    </div>

                    <div className="mt-5 w-full space-y-2.5 text-left">
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5 border border-white/10 transition-colors hover:bg-white/10">
                        <BookOpen className="h-4 w-4 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">शास्त्रीय वैदिक गणना</p>
                          <p className="text-cream-100/70 text-[11px]" lang="hi">महर्षि पराशर व भृगु संहिता सिद्धांत</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5 border border-white/10 transition-colors hover:bg-white/10">
                        <UserCheck className="h-4 w-4 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">व्यक्तिगत ग्रह व नक्षत्र फलादेश</p>
                          <p className="text-cream-100/70 text-[11px]" lang="hi">प्रत्येक जातक की राशि अनुरूप सटीक उपाय</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5 border border-white/10 transition-colors hover:bg-white/10">
                        <ShieldCheck className="h-4 w-4 text-gold-300 flex-shrink-0" />
                        <div className="text-xs">
                          <p className="font-semibold text-cream-50" lang="hi">१००% प्रामाणिक एवं सात्विक</p>
                          <p className="text-cream-100/70 text-[11px]" lang="hi">सुलभ, शास्त्रसम्मत व प्रभावी मार्गदर्शन</p>
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
