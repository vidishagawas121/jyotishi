import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { getIcon } from '@/components/ui/Icon';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { Reveal } from '@/components/ui/Reveal';
import { SEO } from '@/components/ui/SEO';
import { KundliChartSection } from '@/components/ui/KundliChartSection';
import { 
  ChevronRight, 
  CheckCircle, 
  Check, 
  Calendar, 
  MessageCircle, 
  ArrowLeft,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { openWhatsAppModal } = useWhatsAppModal();

  // Find service by exact slug or alias
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = getIcon(service.icon);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="bg-cream-50">
      <SEO
        title={`${service.title} (${service.titleEn})`}
        description={`${service.shortDescription} संगम ज्योतिष संस्थान में वैदिक गणनाओं एवं अनुभवी आचार्यों द्वारा परामर्श प्राप्त करें।`}
        canonical={`/services/${service.slug}`}
        keywords={service.keywords}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            alternateName: service.titleEn,
            description: service.shortDescription,
            provider: {
              '@type': 'ProfessionalService',
              name: 'Sangam Jyotish Sansthan',
              alternateName: 'संगम ज्योतिष संस्थान',
              telephone: '+91 7800224400',
              url: 'https://sangamjyotish.com',
            },
            areaServed: 'India',
            serviceType: 'Vedic Astrology Consultation',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'होम',
                item: 'https://sangamjyotish.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'सेवाएं',
                item: 'https://sangamjyotish.com/services',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: service.title,
                item: `https://sangamjyotish.com/services/${service.slug}`,
              },
            ],
          },
          ...(service.faq && service.faq.length > 0
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: service.faq.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: item.answer,
                    },
                  })),
                },
              ]
            : []),
        ]}
      />
      {/* Breadcrumb & Top Bar */}
      <div className="border-b border-maroon-100/60 bg-cream-100/50 py-3 text-xs sm:text-sm">
        <div className="container-px flex items-center gap-2 text-navy-600">
          <Link to="/" className="hover:text-maroon-700 transition-colors">
            होम
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-navy-400" />
          <Link to="/services" className="hover:text-maroon-700 transition-colors">
            सेवाएं
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-navy-400" />
          <span className="font-semibold text-maroon-800" lang="hi">
            {service.title}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-950 py-16 text-cream-100 lg:py-24">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative text-center">
          <div className="mx-auto max-w-3xl">
            {/* Centered Back link */}
            <div className="mb-6 flex justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium text-gold-300 transition-colors hover:bg-gold-400/20 hover:text-gold-200 backdrop-blur-sm"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>सभी सेवाएं देखें</span>
              </Link>
            </div>

            {/* Centered Icon */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-maroon-700/50 text-gold-300 ring-4 ring-gold-400/25 shadow-glow">
              <Icon className="h-10 w-10" />
            </div>

            {/* English Badge with generous spacing */}
            <div className="mb-4">
              <span className="inline-block rounded-full border border-gold-400/30 bg-gold-400/15 px-4 py-1 text-xs font-semibold tracking-wide text-gold-300">
                {service.titleEn}
              </span>
            </div>

            {/* Hindi Main Title */}
            <h1
              className="font-devanagari text-3xl font-bold leading-[1.35] text-cream-50 sm:text-4xl sm:leading-[1.4] lg:text-5xl lg:leading-[1.35] drop-shadow-sm"
              lang="hi"
            >
              {service.title}
            </h1>

            {/* Description */}
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-100/90 sm:text-lg font-normal"
              lang="hi"
            >
              {service.shortDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/appointment" className="btn-gold font-semibold shadow-card">
                <Calendar className="h-4 w-4" />
                <span lang="hi">परामर्श बुक करें</span>
              </Link>
              <button
                type="button"
                onClick={() => openWhatsAppModal({ defaultQuestion: `${service.title} परामर्श`, source: `सेवा पृष्ठ - ${service.title}` })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span lang="hi">WhatsApp पर परामर्श लें</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-maroon-700/60 pt-6 text-xs sm:text-sm text-cream-100/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-400" />
                <span>100% गोपनीय परामर्श</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-400" />
                <span>व्यक्तिगत एवं विस्तृत सत्र</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-400" />
                <span>प्रामाणिक वैदिक समाधान</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-pad">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left 2 Cols: Service details */}
            <div className="space-y-12 lg:col-span-2">
              {/* Introduction */}
              <Reveal>
                <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-4" lang="hi">
                    सेवा का विस्तृत परिचय
                  </h2>
                  <p className="text-base leading-relaxed text-navy-700" lang="hi">
                    {service.longDescription}
                  </p>
                </div>
              </Reveal>

              {/* Kundli Chart Visual Diagram (Featured for Kundli Analysis and Astrology services) */}
              {(service.slug === 'kundli-analysis' || service.slug === 'marriage-kundli' || service.slug === 'career') && (
                <Reveal>
                  <KundliChartSection />
                </Reveal>
              )}

              {/* Topics Covered */}
              {service.topicsCovered && service.topicsCovered.length > 0 && (
                <Reveal>
                  <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Layers className="h-5 w-5 text-maroon-700" />
                      <h2 className="font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
                        प्रमुख विचारणीय विषय एवं पहलू
                      </h2>
                    </div>
                    <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                      Key Topics & Astrological Aspects Covered
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.topicsCovered.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-gold-200/50 bg-cream-50 p-3.5">
                          <span className="h-2 w-2 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-navy-800" lang="hi">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Who should consider */}
              <Reveal>
                <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    यह परामर्श किनके लिए उपयुक्त है?
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    Who Should Consider This Consultation
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.whoShouldConsider.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-xl bg-cream-100/60 p-3.5">
                        <CheckCircle className="h-5 w-5 text-maroon-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-navy-800" lang="hi">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* What is included */}
              <Reveal>
                <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    इस परामर्श में क्या शामिल है?
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    What Is Included In The Consultation
                  </p>
                  <div className="space-y-3">
                    {service.whatIsIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 border-b border-maroon-50 pb-3 last:border-0 last:pb-0">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-800 text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-navy-800" lang="hi">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* How it works */}
              <Reveal>
                <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    परामर्श की प्रक्रिया
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    How The Consultation Works
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.howItWorks.map((step, idx) => (
                      <div key={idx} className="rounded-xl border border-gold-200/60 bg-cream-50/50 p-4">
                        <span className="text-xs font-bold text-maroon-700">चरण 0{idx + 1}</span>
                        <p className="mt-1 text-sm font-medium text-navy-800" lang="hi">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Benefits */}
              <Reveal>
                <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    परामर्श से मिलने वाले लाभ एवं स्पष्टता
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    Key Benefits & Clarity
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-navy-800">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-maroon-100 text-maroon-700">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span lang="hi">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Service FAQ */}
              {service.faq && service.faq.length > 0 && (
                <Reveal>
                  <div className="card-premium p-8 rounded-2xl border border-gold-300/30 bg-white">
                    <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-6" lang="hi">
                      इस सेवा से संबंधित प्रश्न-उत्तर
                    </h2>
                    <FAQAccordion items={service.faq} />
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right 1 Col: Sticky Sidebar */}
            <div className="space-y-6">
              {/* Quick Booking Box */}
              <div className="card-premium sticky top-24 p-6 shadow-card rounded-2xl border border-gold-300/30 bg-white">
                <h3 className="font-devanagari text-xl font-bold text-maroon-800" lang="hi">
                  यह परामर्श प्राप्त करें
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-600" lang="hi">
                  जन्म विवरण साझा करके आज ही अपना व्यक्तिगत परामर्श सत्र निर्धारित करें।
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={() => openWhatsAppModal({ defaultQuestion: `${service.title} परामर्श`, source: `सेवा साइडबार - ${service.title}` })}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#1da851] cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span lang="hi">WhatsApp पर पूछें</span>
                  </button>
                  <Link
                    to="/appointment"
                    className="btn-primary w-full text-center text-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    <span lang="hi">परामर्श फॉर्म भरें</span>
                  </Link>
                </div>

                <div className="mt-6 border-t border-maroon-100 pt-5">
                  <p className="font-semibold text-xs text-navy-700 mb-3" lang="hi">
                    अन्य प्रमुख सेवाएं:
                  </p>
                  <div className="space-y-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.slug}
                        to={`/services/${other.slug}`}
                        className="flex items-center justify-between rounded-lg p-2 text-xs font-medium text-navy-700 hover:bg-maroon-50 hover:text-maroon-700 transition-colors"
                      >
                        <span lang="hi">{other.title}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-navy-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`क्या आप ${service.title} कराना चाहते हैं?`}
        subtitle="हमारे आचार्यों से सीधे बात करें या WhatsApp पर संदेश भेजें।"
      />
    </div>
  );
}
