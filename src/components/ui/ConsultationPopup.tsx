import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { waLink } from '@/lib/whatsapp';

export function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 5 seconds after page load/reload
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-3xl border border-gold-400/40 bg-navy-950 shadow-2xl transition-all duration-300 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Moving Background GIF */}
        <img
          src="/images/chat.gif"
          alt="Astrology Zodiac Animation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Ambient Dark Gradient Overlay for optimal contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-black/90 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Foreground Content matching user's design */}
        <div className="relative z-10 flex min-h-[360px] sm:min-h-[440px] flex-col items-center justify-between p-5 sm:p-8 text-center">
          {/* Top spacer */}
          <div className="h-4" />

          {/* Center Main Text */}
          <div className="my-auto space-y-2.5 sm:space-y-3 px-1 sm:px-2">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Confused in Life or Relationships?
            </h3>
            <p className="font-display text-xs sm:text-sm md:text-base font-bold tracking-wide text-gold-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Get Astrology Guidance Today!
            </p>
          </div>

          {/* Big Yellow / Gold CTA Button */}
          <div className="w-full pt-3 sm:pt-4">
            <a
              href={waLink('नमस्ते, मुझे नि:शुल्क ज्योतिष सलाह / परामर्श चाहिए।')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 via-gold-400 to-amber-500 px-6 sm:px-8 py-3 sm:py-3.5 font-devanagari text-base sm:text-lg font-bold text-navy-950 shadow-[0_6px_25px_rgba(234,179,8,0.5)] transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-95"
            >
              <span lang="hi">नि:शुल्क सलाह पाएं</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
