import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trustIndicators } from '@/data/content';
import { waGeneral } from '@/lib/whatsapp';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-700 to-saffron-700">
      {/* Starfield */}
      <div className="starfield absolute inset-0 opacity-40" aria-hidden />

      {/* Mandala decorative */}
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
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-200 backdrop-blur-sm">
              <span>✦</span>
              <span lang="hi" className="font-medium">प्रमाणित वैदिक ज्योतिष मार्गदर्शन</span>
              <span>✦</span>
            </div>

            <h1
              className="mt-6 font-devanagari text-4xl font-bold leading-tight text-cream-50 sm:text-5xl lg:text-[3.5rem]"
              lang="hi"
              style={{ animationDelay: '100ms' }}
            >
              आपके जीवन की दिशा,
              <br />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                सितारों के संकेतों के साथ
              </span>
            </h1>

            <p
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream-100/85 sm:text-lg lg:mx-0"
              lang="hi"
            >
              वैदिक ज्योतिष के माध्यम से जीवन, विवाह, करियर, व्यवसाय और व्यक्तिगत निर्णयों के लिए अनुभवी एवं व्यक्तिगत मार्गदर्शन प्राप्त करें।
            </p>

            <div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
              style={{ animationDelay: '200ms' }}
            >
              <Link to="/appointment" className="btn-gold w-full sm:w-auto">
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
                <span lang="hi">WhatsApp पर बात करें</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4"
              style={{ animationDelay: '300ms' }}
            >
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-cream-100/80">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span lang="hi" className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-8 animate-spin-slow rounded-full border-2 border-dashed border-gold-400/20" />
              <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-gold-400/10 to-transparent blur-xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-900 to-navy-900 p-8 shadow-card">
                <div className="starfield absolute inset-0 opacity-30" aria-hidden />
                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-maroon-700/40 ring-4 ring-gold-400/20">
                    <span className="font-devanagari text-7xl text-gold-400">ॐ</span>
                  </div>
                  <p className="font-devanagari text-2xl font-bold text-cream-50" lang="hi">
                    संगम ज्योतिष संस्थान
                  </p>
                  <p className="mt-2 text-sm text-gold-300" lang="hi">
                    {siteConfig.tagline}
                  </p>

                  {/* Zodiac symbols */}
                  <div className="mt-6 flex justify-center gap-3 text-2xl text-gold-400/60">
                    <span>♈</span>
                    <span>♉</span>
                    <span>♊</span>
                    <span>♋</span>
                    <span>♌</span>
                    <span>♍</span>
                  </div>
                  <div className="mt-2 flex justify-center gap-3 text-2xl text-gold-400/60">
                    <span>♎</span>
                    <span>♏</span>
                    <span>♐</span>
                    <span>♑</span>
                    <span>♒</span>
                    <span>♓</span>
                  </div>
                </div>
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
