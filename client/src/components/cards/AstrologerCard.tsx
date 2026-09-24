import { Phone, MessageCircle } from 'lucide-react';
import type { Astrologer } from '@/data/astrologers';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteConfig';

interface AstrologerCardProps {
  astrologer: Astrologer;
  index?: number;
}

export function AstrologerCard({ astrologer, index = 0 }: AstrologerCardProps) {
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <Reveal delay={index * 100}>
      <div className="group mx-auto flex w-full max-w-sm sm:max-w-none flex-col overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-b from-[#251006] via-[#1a0802] to-[#120501] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-glow">
        {/* Full Image Card Display with responsive auto height */}
        <div className="relative w-full overflow-hidden bg-black/40">
          <img
            src={astrologer.image}
            alt={astrologer.name}
            className="h-auto w-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Quick Contact CTAs */}
        <div className="border-t border-gold-400/20 bg-gradient-to-t from-maroon-950 via-maroon-950/95 to-transparent p-3 sm:p-3.5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => openWhatsAppModal({ defaultQuestion: `${astrologer.name} से ज्योतिष परामर्श`, source: `ज्योतिषी कार्ड - ${astrologer.name}` })}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-xs font-semibold text-white shadow-soft transition-all duration-200 hover:bg-[#1da851] active:scale-95 sm:flex-1 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp परामर्श</span>
            </button>
            <a
              href={siteConfig.telUrl}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-gold-400/40 bg-white/10 px-4 py-2.5 text-xs font-semibold text-gold-200 transition-all duration-200 hover:bg-gold-400/20 hover:text-white active:scale-95 sm:w-auto"
            >
              <Phone className="h-3.5 w-3.5 text-gold-300" />
              <span>कॉल</span>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
