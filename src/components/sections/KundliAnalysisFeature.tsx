import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, MessageCircle, Calendar, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { waLink } from '@/lib/whatsapp';

export function KundliAnalysisFeature() {
  const waKundliMsg = waLink('नमस्ते, मुझे संगम ज्योतिष संस्थान से अपनी जन्म कुंडली का विश्लेषण कराना है।');

  const analysisPoints = [
    {
      title: '१२ भाव एवं नवग्रहों का सूक्ष्म अध्ययन',
      desc: 'लग्न, धन, करियर, विवाह, स्वास्थ्य एवं भाग्य भाव की ग्रह स्थिति और दृष्टि का प्रामाणिक विश्लेषण।',
    },
    {
      title: 'विंशोत्तरी महादशा एवं गोचर फल',
      desc: 'वर्तमान में चल रही दशा और ग्रहों के गोचर का आपके जीवन पर प्रभाव व अनुकूल समय की पहचान।',
    },
    {
      title: 'दोष विचार एवं सात्विक वैदिक उपाय',
      desc: 'मांगलिक, कालसर्प, साढ़ेसाती आदि का वास्तविक परीक्षण एवं शास्त्रोक्त जप, पूजा व दान सुझाव।',
    },
    {
      title: '१००% व्यक्तिगत एवं गोपनीय परामर्श',
      desc: 'आपकी जन्म पत्रिका व व्यक्तिगत प्रश्न पूरी तरह सुरक्षित और गोपनीय रखे जाते हैं।',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#20060d] via-[#2d0912] to-[#150308] py-20 text-cream-100 lg:py-28">
      {/* Background ambient lighting */}
      <div className="starfield absolute inset-0 opacity-25" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-maroon-600/15 blur-3xl" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with ornate framing */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative outer golden border ring */}
                <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-gold-400/30 via-gold-200/20 to-gold-500/30 blur-sm" />

                <div className="relative overflow-hidden rounded-2xl border-2 border-gold-300/40 bg-maroon-950/80 shadow-2xl">
                  <img
                    src="/images/kundali-analysis.jpg"
                    alt="हम आपकी जन्म कुंडली का सूक्ष्म विश्लेषण कर सकते हैं (We can analyse and see your Kundali)"
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />

                  {/* Floating Vedic Badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold-300/40 bg-maroon-950/90 p-3.5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-amber-600 text-maroon-950 font-bold shadow-md">
                        ॐ
                      </div>
                      <div>
                        <p className="font-devanagari text-sm font-bold text-cream-50" lang="hi">
                          प्रामाणिक वैदिक कुंडली निर्माण एवं विश्लेषण
                        </p>
                        <p className="text-xs text-gold-300/90" lang="hi">
                          महर्षि पराशर एवं जैमिनी सिद्धांतों पर आधारित गणितीय फलादेश
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Content & Benefits */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span lang="hi">वैदिक जन्म पत्रिका विश्लेषण</span>
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              </div>

              <h2
                className="mt-4 font-devanagari text-3xl font-bold leading-[1.3] text-cream-50 sm:text-4xl sm:leading-[1.35] lg:text-5xl lg:leading-[1.3]"
                lang="hi"
              >
                हम आपकी जन्म कुंडली का सूक्ष्म विश्लेषण करते हैं
              </h2>

              <p className="mt-4 text-base leading-relaxed text-cream-100/90 sm:text-lg" lang="hi">
                अपनी जन्म तिथि, सही समय और जन्म स्थान साझा करें। हमारे विद्वान ज्योतिषाचार्य आपकी जन्म पत्रिका, १२ भावों, नवग्रह स्थिति और विंशोत्तरी दशा का गहन अध्ययन कर आपके जीवन के महत्वपूर्ण प्रश्नों का सटीक समाधान प्रदान करेंगे।
              </p>
            </Reveal>

            {/* Analysis Points Grid */}
            <div className="mt-8 space-y-4">
              {analysisPoints.map((pt, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex items-start gap-3.5 rounded-xl border border-gold-400/20 bg-white/5 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-gold-300/40 hover:bg-white/10">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold-400 mt-0.5" />
                    <div>
                      <h3 className="font-devanagari text-sm font-bold text-cream-50" lang="hi">
                        {pt.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-cream-100/75" lang="hi">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA Buttons */}
            <Reveal delay={350}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 px-6 py-3.5 font-semibold text-maroon-950 shadow-glow transition-all duration-300 hover:from-gold-300 hover:to-gold-400 hover:scale-105 active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span lang="hi">कुंडली परामर्श बुक करें</span>
                </Link>

                <a
                  href={waKundliMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1da851] hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span lang="hi">WhatsApp पर कुंडली भेजें</span>
                </a>

                <Link
                  to="/services/kundli-analysis"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  <span lang="hi">विस्तार से जानें</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
