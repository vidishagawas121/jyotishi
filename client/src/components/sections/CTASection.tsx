import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { waGeneral } from '@/lib/whatsapp';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'अपने प्रश्नों के लिए ज्योतिषीय परामर्श लें',
  subtitle = 'अपने जीवन से जुड़े महत्वपूर्ण प्रश्नों पर व्यक्तिगत मार्गदर्शन प्राप्त करने के लिए हमसे संपर्क करें।',
}: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-br from-maroon-950 via-maroon-900 to-saffron-900 px-6 py-14 text-center shadow-card sm:px-12 lg:py-20 text-cream-50">
            {/* Starfield & Glow */}
            <div className="starfield absolute inset-0 opacity-30" aria-hidden />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-saffron-300/15 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/15 px-4 py-1 text-xs font-semibold text-gold-200 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-gold-300" />
                <span lang="hi">व्यक्तिगत एवं गोपनीय परामर्श</span>
              </div>

              <h2 className="mt-4 font-devanagari text-2xl font-bold text-white sm:text-3xl lg:text-4xl" lang="hi">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-cream-100 sm:text-lg" lang="hi">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link to="/appointment" className="btn-gold w-full sm:w-auto shadow-card font-semibold">
                  <Calendar className="h-5 w-5" />
                  <span lang="hi">परामर्श बुक करें</span>
                </Link>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span lang="hi">WhatsApp पर संपर्क करें</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
