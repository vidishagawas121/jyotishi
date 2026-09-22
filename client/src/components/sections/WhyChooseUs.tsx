import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { features } from '@/data/content';

export function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <SectionHeading
          label="हमारी विशेषताएं"
          title="संगम ज्योतिष संस्थान क्यों चुनें?"
          subtitle="हमारी प्रतिबद्धता प्रामाणिक वैदिक सिद्धांतों, व्यक्तिगत ध्यान और पूर्ण गोपनीयता के प्रति है।"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
