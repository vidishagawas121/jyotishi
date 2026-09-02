import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function DisclaimerPage() {
  return (
    <div className="bg-cream-50">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-16 text-cream-100 lg:py-20">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="container-px relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200">
            <AlertTriangle className="h-4 w-4 text-gold-300" />
            <span>अस्वीकरण</span>
          </div>
          <h1 className="mt-4 font-devanagari text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl lg:text-5xl" lang="hi">
            अस्वीकरण (Disclaimer)
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream-100/80">
            संगम ज्योतिष संस्थान | प्रामाणिक एवं नैतिक वैदिक परामर्श
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="container-px max-w-4xl">
          <div className="card-premium space-y-8 p-8 sm:p-12 text-navy-800 leading-relaxed">
            <div className="flex items-start gap-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 p-5">
              <ShieldCheck className="h-6 w-6 text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900" lang="hi">
                <strong>महत्वपूर्ण सूचना:</strong> संगम ज्योतिष संस्थान किसी भी प्रकार के "100% गारंटीशुदा परिणाम", "चमत्कारिक समाधान" अथवा "अंधविश्वासपूर्ण दावों" का समर्थन नहीं करता। हमारा परामर्श पूर्णतः वैदिक ज्योतिष सिद्धांतों, शास्त्रीय गणित और नैतिक मार्गदर्शन पर आधारित है।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                वैदिक परामर्श का आध्यात्मिक स्वरूप
              </h2>
              <p className="text-sm sm:text-base text-navy-700 mb-3" lang="hi">
                वैदिक ज्योतिष एक प्राचीन भारतीय विद्या है जो काल (समय), ग्रह स्थिति और जातक के स्वभाव व कर्मों का अध्ययन करती है। यह व्यक्ति को आत्म-निरीक्षण और अनुकूल-प्रतिकूल समय की समझ प्रदान करने का एक मार्गदर्शक साधन है।
              </p>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                ज्योतिष परामर्श को कभी भी पेशेवर चिकित्सीय (Medical), विधिक (Legal) अथवा वित्तीय (Financial) परामर्श का विकल्प नहीं माना जाना चाहिए। किसी भी गंभीर चिकित्सा या कानूनी विवाद के लिए संबंधित विशेषज्ञ की सलाह लेना अनिवार्य है।
              </p>
            </div>

            <div>
              <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-3" lang="hi">
                व्यक्तिगत निर्णय का दायित्व
              </h2>
              <p className="text-sm sm:text-base text-navy-700" lang="hi">
                परामर्श सत्र के दौरान दिए गए विचार, सुझाव और उपाय जातक की कुंडली की शास्त्रीय व्याख्या पर आधारित होते हैं। उन सुझावों को अपने जीवन में लागू करने और उनसे जुड़े व्यक्तिगत निर्णय लेने का संपूर्ण अधिकार और उत्तरदायित्व स्वयं जातक का है।
              </p>
            </div>

            <div className="border-t border-maroon-100 pt-6 text-xs text-navy-500">
              <p>© 2026 संगम ज्योतिष संस्थान ({siteConfig.brandName}). सर्वाधिकार सुरक्षित।</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
