import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { Calendar, Phone, ShieldCheck, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { waAppointment } from '@/lib/whatsapp';
import { Reveal } from '@/components/ui/Reveal';
import { SEO } from '@/components/ui/SEO';

export function AppointmentPage() {
  return (
    <div className="bg-cream-50">
      <SEO
        title="ज्योतिष परामर्श अपॉइंटमेंट बुक करें"
        description="संगम ज्योतिष संस्थान में ऑनलाइन व ऑफलाइन व्यक्तिगत ज्योतिष परामर्श के लिए अपॉइंटमेंट बुक करें।"
        canonical="/appointment"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-16 text-cream-100 lg:py-24">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-gold-300" />
            <span lang="hi">परामर्श निर्धारण</span>
            <Calendar className="h-4 w-4 text-gold-300" />
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold leading-[1.35] text-cream-50 sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]" lang="hi">
            ज्योतिष परामर्श बुक करें
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            वैदिक ज्योतिष आधारित व्यक्तिगत और गोपनीय परामर्श सत्र
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            नीचे दिए गए फॉर्म में अपना जन्म विवरण और पसंदीदा समय भरें। फॉर्म जमा करते ही आपका परामर्श अनुरोध WhatsApp के माध्यम से हमारे संस्थान तक पहुँच जाएगा।
          </p>
        </div>
      </section>

      {/* Form & Guidelines Section */}
      <section className="section-pad">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
                    परामर्श विवरण दर्ज करें
                  </h2>
                  <p className="mt-1 text-sm text-navy-600" lang="hi">
                    कृपया सही जन्म विवरण भरें ताकि कुंडली विश्लेषण सटीक हो सके।
                  </p>
                </div>
                <AppointmentForm />
              </Reveal>
            </div>

            {/* Right: Helpful Info & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Fast Track Card */}
              <Reveal delay={100}>
                <div className="card-premium p-6 bg-gradient-to-br from-[#25D366]/10 via-cream-50 to-white border-2 border-[#25D366]/30 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-devanagari text-lg font-bold text-navy-900" lang="hi">
                        सीधे WhatsApp से बुक करें
                      </h3>
                      <p className="text-xs text-navy-500">Fast-Track WhatsApp Booking</p>
                    </div>
                  </div>
                  <p className="text-sm text-navy-700 leading-relaxed" lang="hi">
                    यदि आप फॉर्म नहीं भरना चाहते, तो सीधे हमारे आधिकारिक WhatsApp पर संदेश भेजकर तुरंत परामर्श स्लॉट बुक कर सकते हैं।
                  </p>
                  <a
                    href={waAppointment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp mt-4 w-full text-center text-sm"
                  >
                    WhatsApp पर संदेश भेजें
                  </a>
                </div>
              </Reveal>

              {/* Consultation Guidelines */}
              <Reveal delay={200}>
                <div className="card-premium p-6 space-y-4">
                  <h3 className="font-devanagari text-lg font-bold text-maroon-800 border-b border-maroon-100 pb-3" lang="hi">
                    परामर्श से पूर्व ध्यान देने योग्य बातें
                  </h3>
                  
                  <div className="space-y-3 text-sm text-navy-700">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-navy-900" lang="hi">सटीक जन्म समय</strong>
                        <p className="text-xs text-navy-500" lang="hi">
                          सटीक जन्म समय से भावों और दशाओं की सूक्ष्म गणना संभव होती है।
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-navy-900" lang="hi">100% पूर्ण गोपनीयता</strong>
                        <p className="text-xs text-navy-500" lang="hi">
                          आपकी कुंडली और सभी चर्चाएं पूर्ण रूप से गोपनीय रखी जाती हैं।
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-navy-900" lang="hi">ऑनलाइन अथवा फोन कॉल</strong>
                        <p className="text-xs text-navy-500" lang="hi">
                          परामर्श WhatsApp ऑडियो/वीडियो कॉल या साधारण फोन कॉल पर उपलब्ध है।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct helpline */}
              <Reveal delay={300}>
                <div className="card-premium p-6 text-center">
                  <p className="text-xs font-semibold text-saffron-600 uppercase tracking-wider mb-2">
                    तत्काल सहायता के लिए
                  </p>
                  <a
                    href={siteConfig.telUrl}
                    className="inline-flex items-center gap-2 text-lg font-bold text-maroon-700 hover:text-maroon-800 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <p className="text-xs text-navy-400 mt-1">
                    सोमवार - रविवार: प्रातः 9:00 से सायं 8:00 बजे तक
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
