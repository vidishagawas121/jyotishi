import { Sparkles, Eye } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface KundliChartSectionProps {
  compact?: boolean;
  className?: string;
}

const bhavas = [
  { no: '१', name: 'प्रथम भाव (लग्न)', keywords: 'तन, व्यक्तित्व, स्वास्थ्य, आत्मबल' },
  { no: '२', name: 'द्वितीय भाव (धन)', keywords: 'संपत्ति, वाणी, कुटुंब, संचित धन' },
  { no: '३', name: 'तृतीय भाव (पराक्रम)', keywords: 'भाई-बहन, साहस, पराक्रम, शौर्य' },
  { no: '४', name: 'चतुर्थ भाव (सुख)', keywords: 'माता, भूमि, भवन, वाहन, शांति' },
  { no: '५', name: 'पंचम भाव (संतान)', keywords: 'शिक्षा, संतान, बुद्धि, विवेक' },
  { no: '६', name: 'षष्ठ भाव (शत्रु)', keywords: 'रोग, ऋण, शत्रु, मामा, प्रतिस्पर्धा' },
  { no: '७', name: 'सप्तम भाव (जाया)', keywords: 'जीवनसाथी, मित्र, साझेदार, विवाह' },
  { no: '८', name: 'अष्टम भाव (आयु)', keywords: 'मृत्यु, रोग, दुर्घटना, गुप्त विद्या' },
  { no: '९', name: 'नवम भाव (भाग्य)', keywords: 'धर्म, भाग्य, गुरु, तीर्थयात्रा' },
  { no: '१०', name: 'दशम भाव (कर्म)', keywords: 'पिता, स्वामी, यश, व्यापार, न्याय' },
  { no: '११', name: 'एकादश भाव (लाभ)', keywords: 'आय, लाभ, सिद्धि, समृद्धि' },
  { no: '१२', name: 'द्वादश भाव (व्यय)', keywords: 'खर्च, ऋण, विदेश, मोक्ष' },
];

export function KundliChartSection({ compact = false, className = '' }: KundliChartSectionProps) {
  return (
    <div className={`card-premium overflow-hidden rounded-2xl border border-gold-300/40 bg-white p-6 sm:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gold-200/50 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-gold-50/80 px-3 py-1 text-xs font-semibold text-maroon-800">
            <Sparkles className="h-3.5 w-3.5 text-gold-600" />
            <span>वैदिक जन्म चक्र</span>
          </div>
          <h3 className="mt-2 font-devanagari text-2xl font-bold text-maroon-800" lang="hi">
            जन्म कुंडली के १२ भाव एवं उनका महत्व
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-navy-600" lang="hi">
            वैदिक ज्योतिष में १२ भाव जातक के जीवन के संपूर्ण आयामों (स्वास्थ्य, धन, विवाह, करियर व भाग्य) को दर्शाते हैं।
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
        {/* Left: Kundali Chart Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <Reveal>
            <div className="relative group overflow-hidden rounded-2xl border-2 border-gold-300 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/60 p-3 shadow-card transition-all duration-300 hover:border-gold-400 hover:shadow-glow max-w-sm">
              <img
                src="/images/kundali-chart.png"
                alt="वैदिक जन्म कुंडली चक्र - 12 भाव (Vedic Kundali Chart 12 Houses)"
                className="h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-maroon-800">
                <Eye className="h-3.5 w-3.5 text-gold-600" />
                <span>प्रामाणिक उत्तर-भारतीय वैदिक लग्न चक्र</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: 12 Bhavas Legend Breakdown */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {bhavas.map((bhava, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-gold-200/60 bg-cream-50/70 p-3 transition-all duration-200 hover:bg-gold-50/80 hover:border-gold-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-maroon-700 text-[11px] font-bold text-cream-50">
                    {bhava.no}
                  </span>
                  <span className="text-xs font-bold text-maroon-900" lang="hi">
                    {bhava.name}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-tight text-navy-700" lang="hi">
                  {bhava.keywords}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-gray-500 italic text-center sm:text-left" lang="hi">
            * ज्योतिष विश्लेषण के दौरान हमारे आचार्य प्रत्येक भाव के स्वामी (भावेश), दृष्टि एवं ग्रहों की युति का सूक्ष्म अध्ययन करते हैं।
          </p>
        </div>
      </div>
    </div>
  );
}
