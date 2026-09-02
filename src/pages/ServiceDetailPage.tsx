import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { getIcon } from '@/components/ui/Icon';
import { waServiceLink } from '@/lib/whatsapp';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { Reveal } from '@/components/ui/Reveal';
import { 
  ChevronRight, 
  CheckCircle, 
  Check, 
  Calendar, 
  MessageCircle, 
  ArrowLeft,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find service by exact slug or alias
  const service = services.find(
    (s) =>
      s.slug === slug ||
      (slug === 'career' && s.slug === 'career-guidance') ||
      (slug === 'business' && s.slug === 'business-consultation') ||
      (slug === 'vastu' && s.slug === 'vastu-consultation') ||
      (slug === 'muhurat' && s.slug === 'muhurat-consultation')
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = getIcon(service.icon);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-cream-50">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-navy-900 py-16 text-cream-100 lg:py-24">
        <div className="starfield absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-96 h-96" />

        <div className="container-px relative">
          <div className="max-w-3xl">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 transition-colors mb-4"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>सभी सेवाएं</span>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-maroon-700/40 text-gold-300 ring-2 ring-gold-400/30">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <span className="rounded-full bg-gold-400/20 px-3 py-0.5 text-xs font-semibold text-gold-300">
                  {service.titleEn}
                </span>
                <h1 className="mt-1 font-devanagari text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl lg:text-5xl" lang="hi">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="mt-4 text-base leading-relaxed text-cream-100/90 sm:text-lg" lang="hi">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/appointment" className="btn-gold">
                <Calendar className="h-4 w-4" />
                <span lang="hi">अपॉइंटमेंट बुक करें</span>
              </Link>
              <a
                href={waServiceLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                <span lang="hi">WhatsApp पर परामर्श लें</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-cream-100/80 border-t border-maroon-700/60 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-400" />
                <span>100% गोपनीय परामर्श</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-400" />
                <span>45-60 मिनट विस्तृत सत्र</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-400" />
                <span>व्यक्तिगत एवं वैदिक समाधान</span>
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
                <div className="card-premium p-8">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-4" lang="hi">
                    सेवा का विस्तृत परिचय
                  </h2>
                  <p className="text-base leading-relaxed text-navy-700" lang="hi">
                    {service.longDescription}
                  </p>
                </div>
              </Reveal>

              {/* Who should consider */}
              <Reveal>
                <div className="card-premium p-8">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    यह परामर्श किनके लिए उपयुक्त है?
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    Who Should Consider This
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
                <div className="card-premium p-8">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    इस परामर्श में क्या शामिल है?
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    What Is Included In The Consultation
                  </p>
                  <div className="space-y-3">
                    {service.whatIsIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 border-b border-maroon-50 pb-3 last:border-0 last:pb-0">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700 text-xs font-bold">
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
                <div className="card-premium p-8">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    परामर्श की प्रक्रिया
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    How The Consultation Works
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.howItWorks.map((step, idx) => (
                      <div key={idx} className="rounded-xl border border-maroon-100/60 p-4">
                        <span className="text-xs font-bold text-saffron-600">चरण 0{idx + 1}</span>
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
                <div className="card-premium p-8">
                  <h2 className="font-devanagari text-2xl font-bold text-maroon-800 mb-2" lang="hi">
                    परामर्श से मिलने वाले लाभ एवं मार्गदर्शन
                  </h2>
                  <p className="text-xs text-saffron-600 font-semibold uppercase tracking-wider mb-6">
                    Key Benefits & Guidance Areas
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
                  <div className="card-premium p-8">
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
              <div className="card-premium sticky top-24 p-6 shadow-card">
                <h3 className="font-devanagari text-xl font-bold text-maroon-800" lang="hi">
                  यह परामर्श प्राप्त करें
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-600" lang="hi">
                  जन्म विवरण साझा करके आज ही अपना व्यक्तिगत परामर्श सत्र निर्धारित करें।
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={waServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full text-center text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span lang="hi">WhatsApp पर पूछें</span>
                  </a>
                  <Link
                    to="/appointment"
                    className="btn-primary w-full text-center text-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    <span lang="hi">अपॉइंटमेंट फॉर्म भरें</span>
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
