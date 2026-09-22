import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import { Reveal } from '@/components/ui/Reveal';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={index * 80}>
      <div className="card-premium flex h-full flex-col justify-between rounded-2xl border border-gold-300/30 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-hover">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-gold-400/10 px-3 py-1 text-xs font-semibold text-maroon-800 border border-gold-400/20">
              {testimonial.service}
            </span>
            <Quote className="h-6 w-6 text-gold-400/40" />
          </div>

          <p className="text-sm leading-relaxed text-navy-700 italic" lang="hi">
            "{testimonial.review}"
          </p>
        </div>

        <div className="mt-6 border-t border-cream-200 pt-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-navy-900 text-gold-300 font-devanagari font-bold text-sm">
            ॐ
          </div>
          <div>
            <p className="font-devanagari font-bold text-sm text-maroon-900" lang="hi">
              {testimonial.name}
            </p>
            <p className="text-xs text-navy-500" lang="hi">
              {testimonial.city}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
