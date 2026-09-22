import type { Feature } from '@/data/content';
import { getIcon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const Icon = getIcon(feature.icon);
  return (
    <Reveal delay={index * 80}>
      <div className="card-premium group h-full p-6 hover:-translate-y-1 hover:shadow-card">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-100 to-gold-100 text-maroon-700 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-maroon-800" lang="hi">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-navy-600" lang="hi">
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
}
