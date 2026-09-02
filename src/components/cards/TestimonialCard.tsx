import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import { Reveal } from '@/components/ui/Reveal';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={index * 80}>
      <div className="card-premium flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-maroon-100" />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-navy-700" lang="hi">
          "{testimonial.review}"
        </p>
        <div className="mt-5 border-t border-maroon-50 pt-4">
          <p className="font-devanagari font-bold text-maroon-800" lang="hi">
            {testimonial.name}
          </p>
          <p className="text-xs text-navy-500" lang="hi">
            {testimonial.city} · {testimonial.service}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
