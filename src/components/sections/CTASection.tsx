import { Link } from 'react-router-dom';
import { Calendar, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { waGeneral } from '@/lib/whatsapp';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'अपने प्रश्नों का उत्तर जानना चाहते हैं?',
  subtitle = 'संगम ज्योतिष संस्थान से व्यक्तिगत ज्योतिष परामर्श प्राप्त करें।',
}: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-700 via-maroon-600 to-saffron-600 px-6 py-14 text-center shadow-card sm:px-12 lg:py-20">
            {/* decorative */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-saffron-300/10 blur-2xl" />
            <div className="relative">
              <h2 className="font-devanagari text-3xl font-bold text-cream-50 sm:text-4xl lg:text-[2.75rem]" lang="hi">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-cream-100/90 sm:text-lg" lang="hi">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/appointment" className="btn-gold">
                  <Calendar className="h-5 w-5" />
                  <span lang="hi">अपॉइंटमेंट बुक करें</span>
                </Link>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span lang="hi">WhatsApp पर बात करें</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
