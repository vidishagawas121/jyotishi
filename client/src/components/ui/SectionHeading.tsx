import { Reveal } from '@/components/ui/Reveal';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal>
      <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}>
        {label && (
          <div
            className={`mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${
              isCenter ? 'justify-center' : 'justify-start'
            } ${light ? 'text-gold-300' : 'text-saffron-600'}`}
          >
            <span className="h-px w-6 bg-current opacity-60" />
            {label}
            <span className="h-px w-6 bg-current opacity-60" />
          </div>
        )}
        <h2
          className={`font-devanagari text-3xl font-bold leading-[1.4] sm:text-4xl sm:leading-[1.45] lg:text-[2.75rem] lg:leading-[1.4] ${
            light ? 'text-cream-50' : 'text-maroon-800'
          }`}
          lang="hi"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              light ? 'text-cream-100/80' : 'text-navy-600'
            }`}
            lang="hi"
          >
            {subtitle}
          </p>
        )}
        <div
          className={`ornament-divider mt-5 ${isCenter ? 'mx-auto' : ''}`}
          aria-hidden
        >
          <span className="text-lg">✦</span>
        </div>
      </div>
    </Reveal>
  );
}
