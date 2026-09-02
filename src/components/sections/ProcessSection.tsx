import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/data/content';

export function ProcessSection() {
  return (
    <section className="section-pad">
      <div className="container-px">
        <SectionHeading
          label="प्रक्रिया"
          title="परामर्श कैसे काम करता है?"
          subtitle="सरल चार चरणों में व्यक्तिगत ज्योतिष मार्गदर्शन प्राप्त करें।"
        />
        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-maroon-200 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-maroon-50 to-gold-50" />
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-maroon-200" />
                    <span className="relative font-display text-3xl font-bold text-maroon-700">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-maroon-800" lang="hi">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-600" lang="hi">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
