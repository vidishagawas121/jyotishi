import { Link } from 'react-router-dom';
import { Shield, Heart, Award, Compass, Eye, Target, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/data/siteConfig';

const values = [
  {
    title: 'विश्वास',
    titleEn: 'Trust',
    description: 'ग्राहकों का अटूट विश्वास हमारी सबसे बड़ी पूँजी है। हम सत्यनिष्ठ और प्रमाणिक परामर्श देने के लिए प्रतिबद्ध हैं।',
    icon: Shield,
  },
  {
    title: 'गोपनीयता',
    titleEn: 'Confidentiality',
    description: 'आपकी जन्म कुंडली, व्यक्तिगत प्रश्न और पारिवारिक जानकारी पूर्ण रूप से सुरक्षित और गोपनीय रखी जाती है।',
    icon: Shield,
  },
  {
    title: 'परंपरा',
    titleEn: 'Tradition',
    description: 'महर्षि पराशर, वराहमिहिर और महर्षि जैमिनी के कालजयी वैदिक सिद्धांतों और शास्त्रीय गणनाओं पर आधारित अध्ययन।',
    icon: Award,
  },
  {
    title: 'ईमानदार मार्गदर्शन',
    titleEn: 'Honest Guidance',
    description: 'कोई अनावश्यक भय या अंधविश्वास नहीं, केवल वास्तविक ज्योतिषीय स्थिति और व्यावहारिक वैदिक उपाय।',
    icon: Compass,
  },
  {
    title: 'व्यक्तिगत ध्यान',
    titleEn: 'Personal Attention',
    description: 'हर व्यक्ति की कुंडली विशिष्ट होती है, इसलिए हम प्रत्येक जातक को पर्याप्त समय और गहरा विश्लेषण प्रदान करते हैं।',
    icon: Heart,
  },
];

const timelineSteps = [
  {
    badge: 'पहला चरण',
    title: 'वैदिक ज्ञान परंपरा का अध्ययन',
    description: 'गुरुकुल और प्राचीन ग्रन्थों के गहन स्वाध्याय द्वारा ज्योतिष के मूल सिद्धांतों और गणना पद्धतियों में दक्षता प्राप्त की गई।',
  },
  {
    badge: 'दूसरा चरण',
    title: 'संस्थान की स्थापना एवं मार्गदर्शन',
    description: 'समाज के लोगों को जीवन के कठिन मोड़ों पर प्रामाणिक और निष्पक्ष ज्योतिषीय सलाह देने के उद्देश्य से संगम ज्योतिष संस्थान की नींव रखी गई।',
  },
  {
    badge: 'तीसरा चरण',
    title: 'हजारों परिवारों का विश्वास',
    description: 'कुंडली विश्लेषण, विवाह मिलान, करियर एवं व्यापार ज्योतिष के माध्यम से 5000+ से अधिक जातकों को सही दिशा दिखाई गई।',
  },
  {
    badge: 'वर्तमान एवं भविष्य',
    title: 'डिजिटल परामर्श एवं वैश्विक पहुंच',
    description: 'आधुनिक तकनीक और WhatsApp के माध्यम से देश-विदेश में बसे लोगों तक पारंपरिक वैदिक ज्ञान को सुलभ बनाया जा रहा है।',
  },
];

export function AboutPage() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />
        
        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <span>✦</span>
            <span lang="hi">हमारे बारे में</span>
            <span>✦</span>
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl" lang="hi">
            {siteConfig.brandNameHindi}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-xl text-gold-300 sm:text-2xl" lang="hi">
            "{siteConfig.tagline}"
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base text-cream-100/85 sm:text-lg" lang="hi">
            संगम ज्योतिष संस्थान एक प्रामाणिक वैदिक ज्योतिष परामर्श संस्थान है, जो भारतीय ज्योतिष परंपरा के शास्त्रीय सिद्धांतों के आधार पर जीवन के सभी क्षेत्रों में विश्वसनीय मार्गदर्शन प्रदान करता है।
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-pad">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-800 to-navy-950 p-8 shadow-card text-cream-50">
                  <div className="starfield absolute inset-0 opacity-20" aria-hidden />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300">
                      <span className="font-devanagari text-4xl">ॐ</span>
                    </div>
                    <h3 className="font-devanagari text-2xl font-bold" lang="hi">
                      परंपरागत ज्योतिष ज्ञान, आधुनिक समझ के साथ
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-cream-100/85" lang="hi">
                      ज्योतिष केवल भविष्य जानने का साधन नहीं, बल्कि आत्म-ज्ञान और सही कर्म के चयन का प्रकाशस्तंभ है।
                    </p>
                    <div className="mt-6 space-y-3 border-t border-maroon-700/60 pt-6 text-sm text-cream-100/80">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gold-400 flex-shrink-0" />
                        <span lang="hi">शास्त्रीय पराशरीय एवं जैमिनी ज्योतिष पद्धति</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gold-400 flex-shrink-0" />
                        <span lang="hi">तार्किक, स्पष्ट और अंधविश्वास रहित परामर्श</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gold-400 flex-shrink-0" />
                        <span lang="hi">सुलभ एवं सात्विक वैदिक उपाय</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                label="हमारी दृष्टि एवं उद्देश्य"
                title="वैदिक ज्ञान से जीवन को सही दिशा"
                align="left"
              />
              <Reveal delay={100}>
                <p className="mt-6 text-base leading-relaxed text-navy-700" lang="hi">
                  हमारा मानना है कि प्रत्येक जातक का जन्म एक निश्चित ग्रह योग और प्रारब्ध के अनुसार होता है। जब कोई व्यक्ति करियर, विवाह, स्वास्थ्य या व्यवसाय में अनिश्चितता या संकट का सामना करता है, तो वैदिक ज्योतिष उसकी जन्म कुंडली के माध्यम से उसके अनुकूल और प्रतिकूल समय की सटीक पहचान कराता है।
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-base leading-relaxed text-navy-700" lang="hi">
                  संगम ज्योतिष संस्थान में हम किसी भी प्रकार के काल्पनिक दावे, अंधविश्वास या भय का सहारा नहीं लेते। हमारा सम्पूर्ण परामर्श प्रामाणिक ग्रन्थों के आधार पर और जातक के सर्वांगीण कल्याण को ध्यान में रखकर दिया जाता है।
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/appointment" className="btn-primary">
                    <Calendar className="h-4 w-4" />
                    <span lang="hi">परामर्श बुक करें</span>
                  </Link>
                  <Link to="/services" className="btn-outline">
                    <span lang="hi">हमारी सेवाएं देखें</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gradient-to-b from-cream-100/50 to-cream-50">
        <div className="container-px">
          <SectionHeading
            label="लक्ष्य एवं दृष्टिकोण"
            title="हमारा मिशन और विज़न"
            subtitle="वैदिक धरोहर को संरक्षित रखते हुए जनसामान्य को लाभान्वित करना"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal delay={100}>
              <div className="card-premium h-full p-8 relative overflow-hidden">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-800 text-gold-300 shadow-soft">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
                  हमारा मिशन (Our Mission)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy-700" lang="hi">
                  प्राचीन वैदिक ज्योतिष ज्ञान को उसकी मूल पवित्रता और सत्यनिष्ठा के साथ समाज के हर वर्ग तक पहुँचाना। जातकों को उनके जीवन के कठिन निर्णयों में सही, नैतिक और आध्यात्मिक मार्गदर्शन देकर उन्हें सकारात्मक दिशा में अग्रसर करना।
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-premium h-full p-8 relative overflow-hidden">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-500 to-maroon-700 text-gold-300 shadow-soft">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
                  हमारा विज़न (Our Vision)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy-700" lang="hi">
                  भारत और वैश्विक स्तर पर एक ऐसा प्रतिष्ठित वैदिक ज्योतिष केंद्र बनना जो अपनी विश्वसनीयता, प्रामाणिकता, वैज्ञानिक दृष्टिकोण और मानवीय संवेदना के लिए जाना जाए।
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            label="हमारे मूल्य"
            title="जिन सिद्धांतों पर हम कार्य करते हैं"
            subtitle="संगम ज्योतिष संस्थान के 5 मूल स्तंभ जो हमारे हर परामर्श का आधार हैं"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card-premium h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-devanagari text-xl font-bold text-maroon-800" lang="hi">
                      {v.title}
                    </h3>
                    <p className="text-xs font-semibold text-saffron-600 mb-2">
                      {v.titleEn}
                    </p>
                    <p className="text-sm leading-relaxed text-navy-600" lang="hi">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="section-pad bg-cream-100/40">
        <div className="container-px">
          <SectionHeading
            label="हमारी यात्रा"
            title="संस्थान की निरंतर प्रगति"
            subtitle="वैदिक परंपरा से डिजिटल परामर्श तक का सफर"
          />

          <div className="relative mt-14 max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon-400 via-gold-400 to-maroon-600 sm:left-1/2 sm:-translate-x-1/2" />
            
            <div className="space-y-10">
              {timelineSteps.map((step, idx) => (
                <Reveal key={step.title} delay={idx * 100}>
                  <div className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Center node */}
                    <div className="absolute left-4 -translate-x-1/2 sm:left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-maroon-700 text-gold-300 ring-4 ring-cream-50 shadow-soft">
                      <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
                    </div>

                    {/* Content Box */}
                    <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="card-premium p-6 shadow-soft">
                        <span className="inline-block rounded-full bg-maroon-50 px-3 py-1 text-xs font-semibold text-maroon-700 mb-2">
                          {step.badge}
                        </span>
                        <h4 className="font-devanagari text-lg font-bold text-maroon-800" lang="hi">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-navy-600" lang="hi">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA */}
      <CTASection
        title="क्या आप अपनी कुंडली का विश्लेषण कराना चाहते हैं?"
        subtitle="संगम ज्योतिष संस्थान के आचार्यों से व्यक्तिगत और गोपनीय परामर्श प्राप्त करें।"
      />
    </div>
  );
}
