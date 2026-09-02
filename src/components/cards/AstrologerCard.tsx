import { Phone } from 'lucide-react';
import type { Astrologer } from '@/data/astrologers';
import { waAstrologerLink } from '@/lib/whatsapp';
import { Reveal } from '@/components/ui/Reveal';

interface AstrologerCardProps {
  astrologer: Astrologer;
  index?: number;
}

export function AstrologerCard({ astrologer, index = 0 }: AstrologerCardProps) {
  return (
    <Reveal delay={index * 100}>
      <div className="card-premium group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-maroon-700 to-navy-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-devanagari text-7xl text-gold-400/30">ॐ</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-devanagari text-xl font-bold text-cream-50" lang="hi">
              {astrologer.name}
            </h3>
            <p className="text-sm text-gold-300" lang="hi">
              {astrologer.designation}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-navy-500">
            <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-700">
              {astrologer.experience} अनुभव
            </span>
          </div>

          <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-saffron-600">
              विशेषज्ञता
            </p>
            <div className="flex flex-wrap gap-1.5">
              {astrologer.specializations.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-maroon-50 px-2.5 py-1 text-xs text-maroon-700"
                  lang="hi"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-saffron-600">
              भाषाएँ
            </p>
            <p className="text-sm text-navy-600" lang="hi">
              {astrologer.languages.join(', ')}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-2 sm:flex-row">
            <a
              href={waAstrologerLink(astrologer.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 text-sm"
            >
              WhatsApp करें
            </a>
            <a
              href="tel:+919422425501"
              className="btn-outline flex-1 text-sm"
            >
              <Phone className="h-4 w-4" />
              कॉल करें
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
