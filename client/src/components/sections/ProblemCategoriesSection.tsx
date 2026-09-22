import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { problemCategories } from '@/data/content';

export function ProblemCategoriesSection() {
  return (
    <section className="section-pad bg-cream-100/60 border-y border-gold-200/40">
      <div className="container-px">
        <SectionHeading
          label="समस्या एवं समाधान"
          title="आपकी चिंता किस क्षेत्र से जुड़ी है?"
          subtitle="अपनी आवश्यकता या परिस्थिति के अनुसार संबंधित विषय चुनें और पाएं प्रामाणिक वैदिक मार्गदर्शन।"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <Link
                to={`/services/${cat.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold-300/30 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-hover"
              >
                {/* Top accent bar */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-maroon-700 via-gold-400 to-saffron-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-2xl ring-1 ring-gold-400/20 transition-transform duration-300 group-hover:scale-110">
                      {cat.emoji}
                    </span>
                    <span className="font-display text-xs font-semibold uppercase tracking-wider text-navy-400 group-hover:text-maroon-700">
                      {cat.titleEn}
                    </span>
                  </div>

                  <h3
                    className="mt-4 font-devanagari text-lg font-bold text-navy-900 group-hover:text-maroon-700 transition-colors"
                    lang="hi"
                  >
                    {cat.title}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed text-navy-600"
                    lang="hi"
                  >
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-maroon-700 group-hover:text-gold-700 transition-colors">
                  <span lang="hi">परामर्श एवं विवरण देखें</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
