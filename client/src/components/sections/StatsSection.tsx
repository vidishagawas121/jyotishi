import { statistics } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-700 to-navy-900 py-16 lg:py-20">
      <div className="starfield absolute inset-0 opacity-30" aria-hidden />
      <div className="container-px relative">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statistics.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gold-400 sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-devanagari text-sm text-cream-100/80 sm:text-base" lang="hi">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
