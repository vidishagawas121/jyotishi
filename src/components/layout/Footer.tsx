import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteConfig';
import { services } from '@/data/services';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="container-px py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-maroon-600 to-maroon-800 text-2xl text-gold-400">
                ॐ
              </div>
              <div className="leading-tight">
                <p className="font-devanagari text-base font-bold text-cream-50" lang="hi">
                  {siteConfig.brandNameHindi}
                </p>
                <p className="font-display text-xs text-gold-300">
                  {siteConfig.brandName}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/70" lang="hi">
              संगम ज्योतिष संस्थान वैदिक ज्योतिष की परंपरा पर आधारित व्यक्तिगत मार्गदर्शन प्रदान करता है। हमारा उद्देश्य ज्योतिष ज्ञान के माध्यम से आपके जीवन को सही दिशा देना है।
            </p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 transition-colors hover:bg-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 transition-colors hover:bg-[#1877F2]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 transition-colors hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 transition-colors hover:bg-[#FF0000]">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream-100/70 transition-colors hover:text-gold-300" lang="hi">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/appointment" className="text-cream-100/70 transition-colors hover:text-gold-300">
                  अपॉइंटमेंट बुक करें
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-cream-100/70 transition-colors hover:text-gold-300">
                    {s.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-cream-50">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={siteConfig.telUrl} className="flex items-start gap-3 text-cream-100/70 transition-colors hover:text-gold-300">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-cream-100/70 transition-colors hover:text-gold-300">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 fill-current text-gold-400" aria-hidden>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>WhatsApp पर संपर्क करें</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-cream-100/70">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span>{siteConfig.email}</span>
                </span>
              </li>
              <li>
                <span className="flex items-start gap-3 text-cream-100/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span>{siteConfig.address}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-sm text-cream-100/60 sm:flex-row">
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
