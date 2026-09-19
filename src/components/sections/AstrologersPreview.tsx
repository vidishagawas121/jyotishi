import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AstrologerCard } from '@/components/cards/AstrologerCard';
import { astrologers } from '@/data/astrologers';

export function AstrologersPreview() {
  return (
    <section className="section-pad bg-gradient-to-b from-cream-100/50 to-cream-50">
      <div className="container-px">
        <SectionHeading
          label="हमारे विशेषज्ञ"
          title="हमारे ज्योतिष विशेषज्ञ"
          subtitle="अनुभवी विशेषज्ञों से व्यक्तिगत ज्योतिषीय मार्गदर्शन प्राप्त करें।"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {astrologers.map((astrologer, i) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/astrologers" className="btn-outline">
            <span lang="hi">सभी ज्योतिषी देखें</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
