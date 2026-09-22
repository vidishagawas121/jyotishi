import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { faqs } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from 'react-router-dom';

export function FAQSection() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <SectionHeading
          label="प्रश्न-उत्तर"
          title="अक्सर पूछे जाने वाले प्रश्न"
          subtitle="ज्योतिष परामर्श से संबंधित आपके सामान्य प्रश्नों के उत्तर।"
        />
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <p className="text-sm text-navy-600" lang="hi">
              और प्रश्न हैं?{' '}
              <Link to="/contact" className="font-semibold text-maroon-600 hover:text-maroon-800">
                हमसे संपर्क करें
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
