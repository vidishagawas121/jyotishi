import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { getIcon } from '@/components/ui/Icon';
import { waServiceLink } from '@/lib/whatsapp';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  return (
    <div
      className="card-premium group relative flex flex-col overflow-hidden p-6 hover:-translate-y-1 hover:shadow-card"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* gradient hover overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-maroon-50/0 via-transparent to-saffron-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-800 text-gold-300 shadow-soft transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-maroon-800" lang="hi">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600" lang="hi">
          {service.shortDescription}
        </p>
      </div>
      <div className="relative mt-5 flex items-center gap-3 pt-4">
        <Link
          to={`/services/${service.slug}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-maroon-600 transition-colors hover:text-maroon-800"
        >
          <span lang="hi">और जानें</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-maroon-200">|</span>
        <a
          href={waServiceLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#1da851] transition-colors hover:text-[#128C7E]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span lang="hi">WhatsApp करें</span>
        </a>
      </div>
    </div>
  );
}
