import { Scale } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { SEO } from '@/components/ui/SEO';

export function TermsPage() {
  return (
    <div className="bg-cream-50">
      <SEO
        title="नियम एवं शर्तें (Terms & Conditions) | संगम ज्योतिष संस्थान"
        description="संगम ज्योतिष संस्थान के नियम एवं शर्तें — सेवा का स्वरूप, जन्म विवरण की सटीकता, परामर्श एवं सेवा उपयोग की नियमावली।"
        canonical="/terms"
        keywords={[
          'नियम एवं शर्तें',
          'Terms and Conditions Sangam Jyotish',
          'Astrology Consultation Terms',
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'नियम एवं शर्तें (Terms & Conditions)',
          url: 'https://sangamjyotish.com/terms',
        }}
      />
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-16 text-cream-100 lg:py-20">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="container-px relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200">
            <Scale className="h-4 w-4 text-gold-300" />
            <span>नियम एवं शर्तें</span>
          </div>
          <h1 className="mt-4 font-devanagari text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl lg:text-5xl" lang="hi">
            नियम एवं शर्तें (Terms & Conditions)
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream-100/80">
            अंतिम अद्यतन: वर्ष 2026 | संगम ज्योतिष संस्थान
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container-px max-w-4xl">
          <div className="card-premium space-y-8 p-8 sm:p-12 text-navy-800 leading-relaxed">
            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                १. परामर्श का स्वरूप एवं उद्देश्य
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                संगम ज्योतिष संस्थान द्वारा प्रदान किया जाने वाला परामर्श प्राचीन भारतीय वैदिक ज्योतिष सिद्धांतों, ग्रह स्थितियों और शास्त्रीय गणनाओं पर आधारित आध्यात्मिक एवं व्यक्तिगत मार्गदर्शन है। यह किसी भी प्रकार का कानूनी, चिकित्सीय, या वित्तीय अनुबंध नहीं है।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                २. जन्म विवरण की सटीकता
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                कुंडली विश्लेषण का परिणाम जातक द्वारा प्रदान की गई जन्म तिथि, सटीक जन्म समय और जन्म स्थान पर निर्भर करता है। यदि जातक द्वारा गलत या अपूर्ण विवरण दिया जाता है, तो गणना में भिन्नता संभव है, जिसका दायित्व संस्थान का नहीं होगा।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ३. अपॉइंटमेंट एवं शेड्यूलिंग
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                परामर्श सत्र पूर्व-निर्धारित समय पर आयोजित किए जाते हैं। यदि जातक को किसी कारणवश समय में परिवर्तन (रीशेड्यूल) कराना हो, तो निर्धारित समय से कम से कम ४ घंटे पूर्व WhatsApp अथवा कॉल द्वारा सूचित करना अनिवार्य है।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ४. नैतिक मार्गदर्शन एवं दायित्व सीमा
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                हम किसी भी प्रकार के चमत्कारिक अथवा शत-प्रतिशत भविष्यवाणी के झूठे दावे नहीं करते। ज्योतिष ज्ञान जातक को जीवन के विभिन्न पहलुओं को समझने और उचित निर्णय लेने में सहायता प्रदान करता है। जातक द्वारा लिए गए किसी भी अंतिम व्यक्तिगत निर्णय के लिए वह स्वयं उत्तरदायी होगा।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ५. संपर्क एवं समाधान
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                नियम व शर्तों से संबंधित किसी भी स्पष्टीकरण के लिए हमारे हेल्पलाइन नंबर {siteConfig.phone} पर संपर्क करें।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
