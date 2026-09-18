import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Sparkles, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trustIndicators } from '@/data/content';
import { waGeneral } from '@/lib/whatsapp';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-950 via-maroon-900 to-saffron-900 text-cream-50">
      {/* Starfield */}
      <div className="starfield absolute inset-0 opacity-40" aria-hidden />

      {/* Decorative concentric rings */}
      <div className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="h-[600px] w-[600px] animate-spin-slow rounded-full border border-gold-400/10" />
      </div>
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="h-[480px] w-[480px] animate-spin-slow rounded-full border border-gold-400/15" style={{ animationDirection: 'reverse' }} />
      </div>
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="h-[360px] w-[360px] animate-spin-slow rounded-full border border-gold-400/20" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-px relative py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left content */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/15 px-4 py-1.5 text-sm font-medium text-gold-200 backdrop-blur-md shadow-sm">
              <span className="text-gold-300">✦</span>
              <span lang="hi" className="tracking-wide">
                प्रामाणिक वैदिक ज्योतिष परामर्श
              </span>
              <span className="text-gold-300">✦</span>
            </div>

            <h1
              className="mt-6 font-devanagari text-3xl font-bold leading-[1.35] text-white drop-shadow-sm sm:text-4xl sm:leading-[1.4] lg:text-[3.25rem] lg:leading-[1.35]"
              lang="hi"
              style={{ animationDelay: '100ms' }}
            >
              जीवन के महत्वपूर्ण निर्णयों में पाएं
              <span className="mt-2 block sm:mt-3 bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent pb-1">
                ज्योतिषीय मार्गदर्शन
              </span>
            </h1>

            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100 sm:text-lg lg:mx-0 font-normal"
              lang="hi"
            >
              वैदिक ज्योतिष, कुंडली विश्लेषण और व्यक्तिगत परामर्श के माध्यम से अपने जीवन, करियर, रिश्तों और भविष्य से जुड़े प्रश्नों को बेहतर समझें।
            </p>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              style={{ animationDelay: '200ms' }}
            >
              <Link to="/appointment" className="btn-gold w-full sm:w-auto shadow-card font-semibold">
                <Calendar className="h-5 w-5" />
                <span lang="hi">परामर्श बुक करें</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-400/40 bg-maroon-900/80 px-6 py-3 font-medium text-cream-50 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-maroon-800 sm:w-auto"
              >
                <Sparkles className="h-4 w-4 text-gold-300" />
                <span lang="hi">हमारी सेवाएं देखें</span>
              </Link>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span lang="hi">WhatsApp पर संपर्क करें</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              style={{ animationDelay: '300ms' }}
            >
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-gold-400/30 bg-maroon-950/70 px-3.5 py-2 text-xs font-medium text-cream-50 backdrop-blur-md shadow-soft sm:text-sm"
                >
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-gold-300">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span lang="hi">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Pure Transparent Hanuman Ji Image */}
          <div className="relative mt-12 flex items-center justify-center lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              {/* Divine golden halo/radiance behind Hanuman Ji */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold-400/30 via-saffron-500/20 to-transparent blur-3xl sm:h-96 sm:w-96" />
              
              {/* Subtle decorative rotating celestial ring */}
              <div className="pointer-events-none absolute inset-0 -m-4 sm:-m-8 animate-spin-slow rounded-full border border-gold-400/20" />

              {/* Pure Transparent Image without any box or frame */}
              <div className="relative z-10 flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/images/hanuman-ji.png"
                  alt="श्री हनुमान जी"
                  className="h-auto w-full max-h-[400px] sm:max-h-[480px] lg:max-h-[540px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg className="block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fffdf7" />
        </svg>
      </div>
    </section>
  );
}
