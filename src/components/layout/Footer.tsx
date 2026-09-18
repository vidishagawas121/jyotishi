import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="container-px py-8 lg:py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: About & Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 text-xl text-gold-400 ring-2 ring-gold-400/20">
                ॐ
              </div>
              <div className="leading-tight">
                <p className="font-devanagari text-lg font-bold text-cream-50" lang="hi">
                  {siteConfig.brandNameHindi}
                </p>
                <p className="font-display text-xs text-gold-300">
                  {siteConfig.brandName}
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-cream-100/80" lang="hi">
              प्रामाणिक वैदिक ज्योतिष परंपरा, कुंडली विश्लेषण एवं व्यक्तिगत मार्गदर्शन।
            </p>

            <div className="mt-3.5 flex gap-2.5">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-cream-100 transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-cream-100 transition-colors hover:bg-[#1877F2] hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-cream-100 transition-colors hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-cream-100 transition-colors hover:bg-[#FF0000] hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold-300">
              त्वरित लिंक
            </h3>
            <ul className="mt-2.5 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  होम (Home)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  सेवाएं (Services)
                </Link>
              </li>
              <li>
                <Link to="/astrologers" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  विशेषज्ञ (Experts)
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  परामर्श बुक करें
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold-300">
              प्रमुख सेवाएं
            </h3>
            <ul className="mt-2.5 space-y-2 text-sm">
              <li>
                <Link to="/services/marriage-kundli" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  विवाह एवं कुंडली मिलान
                </Link>
              </li>
              <li>
                <Link to="/services/career" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  करियर एवं व्यापार ज्योतिष
                </Link>
              </li>
              <li>
                <Link to="/services/kundli-analysis" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  जन्म कुंडली संपूर्ण विश्लेषण
                </Link>
              </li>
              <li>
                <Link to="/services/vastu" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  वास्तु शास्त्र परामर्श
                </Link>
              </li>
              <li>
                <Link to="/services/graha-shanti" className="text-cream-100/75 transition-colors hover:text-gold-300" lang="hi">
                  ग्रह शांति व वैदिक उपाय
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-semibold uppercase tracking-wider text-gold-300">
              संपर्क सूत्र
            </h3>
            <ul className="mt-2.5 space-y-2.5 text-sm">
              <li>
                <a href={siteConfig.telUrl} className="flex items-center gap-2.5 text-cream-100/85 transition-colors hover:text-gold-300">
                  <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-cream-100/85 transition-colors hover:text-gold-300">
                  <MessageCircle className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                  <span>WhatsApp परामर्श</span>
                </a>
              </li>
              <li className="text-cream-100/70 pt-1 text-xs sm:text-sm">
                <span className="text-gold-300/90 font-semibold" lang="hi">परामर्श समय:</span>{' '}
                <span lang="hi">१०:०० AM - ०७:०० PM (सोम - रवि)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Box - Compact with clear readable font */}
        <div className="mt-6 rounded-lg border border-navy-800 bg-navy-900/40 px-4 py-2.5 text-center">
          <p className="text-xs sm:text-[13px] leading-relaxed text-cream-100/70" lang="hi">
            <strong className="text-gold-300/90">वैधानिक अस्वीकरण (Disclaimer):</strong> ज्योतिषीय परामर्श पारंपरिक मान्यताओं और शास्त्रीय विश्लेषण पर आधारित है। इसे चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प न समझें।
          </p>
        </div>
      </div>

      <div className="border-t border-navy-900 bg-navy-950/80">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-3.5 text-xs sm:text-sm text-cream-100/65 sm:flex-row">
          <p>© 2026 Sangam Jyotish Sansthan. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold-300">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-gold-300">Terms & Conditions</Link>
            <Link to="/disclaimer" className="transition-colors hover:text-gold-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
