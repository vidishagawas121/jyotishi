import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Service } from '@/data/services';
import { getIcon } from '@/components/ui/Icon';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  const { openWhatsAppModal } = useWhatsAppModal();

  return (
    <div
      className="card-premium group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gold-300/30 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-hover"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top golden accent indicator */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-maroon-700 via-gold-400 to-saffron-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-soft ring-2 ring-gold-400/20 transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-6 w-6" />
          </div>
          <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-navy-400">
            {service.titleEn.split(' ')[0]}
          </span>
        </div>

        <h3 className="mt-4 font-devanagari text-lg font-bold text-navy-900 transition-colors group-hover:text-maroon-700" lang="hi">
          {service.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-600 line-clamp-3" lang="hi">
          {service.shortDescription}
        </p>

        {/* Topics preview if available */}
        {service.topicsCovered && service.topicsCovered.length > 0 && (
          <ul className="mt-3 space-y-1 border-t border-gold-100 pt-3">
            {service.topicsCovered.slice(0, 2).map((topic, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-[12px] text-navy-500" lang="hi">
                <span className="h-1 w-1 rounded-full bg-gold-500" />
                <span className="truncate">{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-cream-200 pt-3 text-xs font-semibold">
        <Link
          to={`/services/${service.slug}`}
          className="flex items-center gap-1 text-maroon-700 transition-colors hover:text-gold-700"
        >
          <span lang="hi">और जानें</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button
          type="button"
          onClick={() => openWhatsAppModal({ defaultQuestion: `${service.title} परामर्श`, source: `सेवा कार्ड - ${service.title}` })}
          className="flex items-center gap-1 text-[#1da851] transition-colors hover:text-[#128C7E] cursor-pointer"
          aria-label={`WhatsApp for ${service.title}`}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span lang="hi">परामर्श लें</span>
        </button>
      </div>
    </div>
  );
}
