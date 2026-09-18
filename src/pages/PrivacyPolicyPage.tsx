import { Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function PrivacyPolicyPage() {
  return (
    <div className="bg-cream-50">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-16 text-cream-100 lg:py-20">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="container-px relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200">
            <Shield className="h-4 w-4 text-gold-300" />
            <span>गोपनीयता नीति</span>
          </div>
          <h1 className="mt-4 font-devanagari text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl lg:text-5xl" lang="hi">
            गोपनीयता नीति (Privacy Policy)
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
                १. परिचय एवं हमारा संकल्प
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                संगम ज्योतिष संस्थान ({siteConfig.brandName}) में हम आपकी निजता और व्यक्तिगत जानकारी की सुरक्षा को सर्वोच्च प्राथमिकता देते हैं। जब आप हमारी वेबसाइट का उपयोग करते हैं अथवा ज्योतिष परामर्श के लिए हमसे संपर्क करते हैं, तो आपकी जानकारी की पूर्ण सुरक्षा हमारा दायित्व है।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                २. हम कौन-सी जानकारी एकत्र करते हैं?
              </h2>
              <p className="text-sm sm:text-base text-navy-700 mb-3" lang="hi">
                सटीक वैदिक ज्योतिषीय गणना और व्यक्तिगत परामर्श के लिए हम निम्नलिखित जानकारी प्राप्त करते हैं:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-navy-700 ml-2" lang="hi">
                <li>आपका नाम, मोबाइल नंबर और WhatsApp नंबर।</li>
                <li>जन्म विवरण: जन्म तिथि, जन्म का सटीक समय और जन्म स्थान।</li>
                <li>परामर्श से संबंधित आपके विशिष्ट प्रश्न, शंकाएं अथवा प्राथमिकताएं।</li>
                <li>यदि आप ईमेल के माध्यम से संपर्क करते हैं, तो आपका ईमेल पता।</li>
              </ul>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ३. आपकी जानकारी का उपयोग कैसे किया जाता है?
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                एकत्र की गई जानकारी का उपयोग केवल और केवल आपकी जन्म कुंडली के विश्लेषण, दशा गणना, संगतता मिलान और व्यक्तिगत परामर्श प्रदान करने के उद्देश्य से किया जाता है। हम किसी भी व्यावसायिक विज्ञापन अथवा डेटा सेलिंग के लिए आपकी जानकारी का उपयोग नहीं करते।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ४. १००% पूर्ण गोपनीयता की गारंटी
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                आपकी जन्म कुंडली, आपके पारिवारिक विवरण, करियर संबंधी चर्चा अथवा कोई भी व्यक्तिगत समस्या हमारे और आपके बीच पूर्ण रूप से गोपनीय रखी जाती है। संस्थान के अधिकृत ज्योतिषाचार्य के अतिरिक्त किसी भी तीसरे पक्ष के साथ यह विवरण साझा नहीं किया जाता।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ५. WhatsApp और संचार सुरक्षा
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                जब आप हमारी वेबसाइट पर दिए गए WhatsApp बटनों के माध्यम से संदेश भेजते हैं, तो वह संचार WhatsApp के एंड-टू-एंड एन्क्रिप्शन द्वारा सुरक्षित होता है। हम जातक के परामर्श चैट को सुरक्षित और निजी रखते हैं।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                ६. संपर्क सूत्र
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                यदि आपकी गोपनीयता नीति अथवा अपने डेटा के संबंध में कोई प्रश्न हैं, तो आप हमसे सीधे संपर्क कर सकते हैं:
              </p>
              <div className="mt-4 rounded-xl bg-cream-100/70 p-4 text-sm text-navy-800 space-y-1">
                <p><strong>संस्थान:</strong> संगम ज्योतिष संस्थान (Sangam Jyotish Sansthan)</p>
                <p><strong>हेल्पलाइन:</strong> {siteConfig.phone}</p>
                <p><strong>WhatsApp:</strong> +91 7800224400</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
