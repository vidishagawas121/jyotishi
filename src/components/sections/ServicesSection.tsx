import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-cream-100/50 to-cream-50">
      <div className="container-px">
        <SectionHeading
          label="हमारी सेवाएं"
          title="हमारी ज्योतिष सेवाएं"
          subtitle="जीवन के महत्वपूर्ण क्षेत्रों में वैदिक ज्योतिष आधारित मार्गदर्शन"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              <span lang="hi">सभी सेवाएं देखें</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
