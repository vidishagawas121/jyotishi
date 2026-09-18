import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-cream-100/50 to-cream-50">
      <div className="container-px">
        <SectionHeading
          label="अनुभव एवं विचार"
          title="हमारे परामर्श से जुड़े अनुभव"
          subtitle="संगम ज्योतिष संस्थान से व्यक्तिगत परामर्श प्राप्त करने वाले जातकों के अनुभव।"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/testimonials" className="btn-outline">
            <span lang="hi">सभी अनुभव देखें</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
