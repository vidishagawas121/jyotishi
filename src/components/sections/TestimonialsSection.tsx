import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-cream-100/50 to-cream-50">
      <div className="container-px">
        <SectionHeading
          label="समीक्षाएँ"
          title="हमारे ग्राहकों की राय"
          subtitle="हमारे परामर्श से प्राप्त अनुभव कुछ ग्राहकों के शब्दों में।"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
