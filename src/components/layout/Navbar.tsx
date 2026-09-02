import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteConfig';
import { services } from '@/data/services';
import { waGeneral } from '@/lib/whatsapp';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 shadow-soft backdrop-blur-md'
          : 'bg-cream-50/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-maroon-600 to-maroon-800 text-2xl text-gold-400 shadow-soft lg:h-12 lg:w-12">
            ॐ
          </div>
          <div className="leading-tight">
            <p className="font-devanagari text-base font-bold text-maroon-800 lg:text-lg" lang="hi">
              {siteConfig.brandNameHindi}
            </p>
            <p className="font-display text-xs text-saffron-600 lg:text-sm">
              {siteConfig.brandName}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.labelEn === 'Services' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-maroon-100 text-maroon-800'
                        : 'text-navy-700 hover:bg-maroon-50 hover:text-maroon-700'
                    }`
                  }
                >
                  <span lang="hi">{link.label}</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </NavLink>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2">
                    <div className="card-premium overflow-hidden p-2 shadow-card">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block rounded-xl px-3 py-2.5 text-sm text-navy-700 transition-colors hover:bg-maroon-50 hover:text-maroon-700"
                        >
                          <span lang="hi" className="font-medium">{s.title}</span>
                          <span className="block text-xs text-navy-400">{s.titleEn}</span>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="mt-1 block rounded-xl bg-maroon-50 px-3 py-2.5 text-sm font-semibold text-maroon-700 transition-colors hover:bg-maroon-100"
                      >
                        सभी सेवाएं देखें →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-maroon-100 text-maroon-800'
                      : 'text-navy-700 hover:bg-maroon-50 hover:text-maroon-700'
                  }`
                }
              >
                <span lang="hi">{link.label}</span>
              </NavLink>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.telUrl}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-50 text-maroon-700 transition-colors hover:bg-maroon-100"
            aria-label="Call"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link to="/appointment" className="btn-gold text-sm">
            अपॉइंटमेंट बुक करें
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-50 text-maroon-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-maroon-100 bg-cream-50 lg:hidden">
          <div className="container-px max-h-[80vh] space-y-1 overflow-y-auto py-4">
            {navLinks.map((link) =>
              link.labelEn === 'Services' ? (
                <div key={link.to}>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-navy-700 hover:bg-maroon-50"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    <span lang="hi">{link.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-maroon-100 pl-3">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-navy-600 hover:bg-maroon-50"
                        >
                          <span lang="hi">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-maroon-100 text-maroon-800'
                        : 'text-navy-700 hover:bg-maroon-50'
                    }`
                  }
                >
                  <span lang="hi">{link.label}</span>
                </NavLink>
              )
            )}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-sm"
              >
                WhatsApp पर बात करें
              </a>
              <Link to="/appointment" className="btn-gold w-full text-sm">
                अपॉइंटमेंट बुक करें
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
