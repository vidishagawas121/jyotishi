import { ContactForm } from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';
import { Reveal } from '@/components/ui/Reveal';
import { SEO } from '@/components/ui/SEO';

export function ContactPage() {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <div className="bg-cream-50">
      <SEO
        title="संपर्क करें | संगम ज्योतिष संस्थान"
        description="संगम ज्योतिष संस्थान से फोन (+91 7800224400), WhatsApp या ऑनलाइन फॉर्म के माध्यम से सीधे संपर्क करें और अपनी कुंडली के अनुसार तुरंत मार्गदर्शन प्राप्त करें।"
        canonical="/contact"
        keywords={[
          'संगम ज्योतिष संपर्क',
          'ज्योतिषी फोन नंबर',
          'WhatsApp ज्योतिष सहायता',
          'ज्योतिष कार्यालय पता',
          'Contact Sangam Jyotish',
          'Astrologer Phone Number India',
          'WhatsApp Astrology Consultation Help',
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'संपर्क करें - संगम ज्योतिष संस्थान',
          url: 'https://sangamjyotish.com/contact',
          mainEntity: {
            '@type': 'ProfessionalService',
            name: 'Sangam Jyotish Sansthan',
            telephone: '+91 7800224400',
            email: 'contact@sangamjyotish.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Varanasi',
              addressCountry: 'IN',
            },
          },
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-20 text-cream-100 lg:py-28">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
            <span>✦</span>
            <span lang="hi">संपर्क सूत्र</span>
            <span>✦</span>
          </div>

          <h1 className="mt-6 font-devanagari text-4xl font-bold leading-[1.35] text-cream-50 sm:text-5xl sm:leading-[1.4] lg:text-6xl lg:leading-[1.35]" lang="hi">
            संपर्क करें
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg text-gold-300 sm:text-xl" lang="hi">
            अपने प्रश्न और आवश्यकताओं के बारे में हमसे बात करें।
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/80 sm:text-base" lang="hi">
            चाहे आप कुंडली विश्लेषण, विवाह मिलान या किसी व्यक्तिगत प्रश्न का समाधान चाहते हों — हमारी टीम आपकी सहायता के लिए सदैव तत्पर है।
          </p>
        </div>
      </section>

      {/* Two-Column Form & Contact Info */}
      <section className="section-pad">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
                    ऑनलाइन पूछताछ फॉर्म
                  </h2>
                  <p className="mt-1 text-sm text-navy-600" lang="hi">
                    फॉर्म भरकर जमा करें, आपका संदेश सीधे हमारे आधिकारिक WhatsApp पर प्रेषित होगा।
                  </p>
                </div>
                <ContactForm />
              </Reveal>
            </div>

            {/* Right: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal delay={100}>
                <div>
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-6" lang="hi">
                    सीधे संपर्क करें
                  </h2>
                </div>
              </Reveal>

              {/* Phone Card */}
              <Reveal delay={150}>
                <a
                  href={siteConfig.telUrl}
                  className="card-premium flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card group"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-maroon-50 text-maroon-700 transition-colors group-hover:bg-maroon-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-saffron-600 uppercase tracking-wider">
                      फोन नंबर (Helpline)
                    </h3>
                    <p className="mt-1 text-base font-bold text-navy-900 group-hover:text-maroon-700 transition-colors">
                      {siteConfig.phone}
                    </p>
                    <p className="text-xs text-navy-500 mt-0.5">
                      सीधे कॉल करके परामर्श बुक करें
                    </p>
                  </div>
                </a>
              </Reveal>

              {/* WhatsApp Card */}
              <Reveal delay={200}>
                <button
                  type="button"
                  onClick={() => openWhatsAppModal({ source: 'संपर्क पृष्ठ कार्ड' })}
                  className="card-premium flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card group bg-gradient-to-r from-white via-white to-[#25D366]/5 w-full text-left cursor-pointer"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#1da851] uppercase tracking-wider">
                      WhatsApp चैट
                    </h3>
                    <p className="mt-1 text-base font-bold text-navy-900 group-hover:text-[#1da851] transition-colors" lang="hi">
                      WhatsApp पर संपर्क करें
                    </p>
                    <p className="text-xs text-navy-500 mt-0.5">
                      तत्काल प्रतिक्रिया एवं त्वरित अपॉइंटमेंट
                    </p>
                  </div>
                </button>
              </Reveal>

              {/* Email Card */}
              <Reveal delay={250}>
                <div className="card-premium flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-saffron-600 uppercase tracking-wider">
                      ईमेल पता (Email)
                    </h3>
                    <p className="mt-1 text-sm font-medium text-navy-800">
                      {siteConfig.email}
                    </p>
                    <p className="text-xs text-navy-500 mt-0.5">
                      विस्तृत प्रश्नों और सहयोग के लिए
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Address Card */}
              <Reveal delay={300}>
                <div className="card-premium flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-saffron-600 uppercase tracking-wider">
                      संस्थान का पता (Sansthan Address)
                    </h3>
                    <p className="mt-1 text-sm font-medium text-navy-800">
                      {siteConfig.address}
                    </p>
                    <p className="text-xs text-navy-500 mt-0.5">
                      ऑफलाइन व्यक्तिगत परामर्श हेतु
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Hours & Confidentiality */}
              <Reveal delay={350}>
                <div className="card-premium p-5 space-y-3 bg-cream-100/60 border border-maroon-100/60">
                  <div className="flex items-center gap-2 text-xs text-navy-700 font-medium">
                    <Clock className="h-4 w-4 text-maroon-600" />
                    <span>परामर्श समय: प्रातः 09:00 बजे से सायं 08:00 बजे तक (प्रतिदिन)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-navy-700 font-medium">
                    <Shield className="h-4 w-4 text-maroon-600" />
                    <span>सभी कॉल और संदेश 100% गोपनीय रखे जाते हैं।</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
