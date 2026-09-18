import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';

export function ServicesSection() {
  // Show the primary 8 services on the homepage
  const primaryServices = services.slice(0, 8);

  return (
    <section id="services" className="section-pad bg-gradient-to-b from-cream-50 via-cream-100/40 to-cream-50">
      <div className="container-px">
        <SectionHeading
          label="हमारी सेवाएं"
          title="हमारी ज्योतिष सेवाएं"
          subtitle="जीवन के विभिन्न क्षेत्रों से जुड़े प्रश्नों के लिए व्यक्तिगत ज्योतिषीय मार्गदर्शन।"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {primaryServices.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              <span lang="hi">सभी १२ ज्योतिष सेवाएं देखें</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
