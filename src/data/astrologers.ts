export interface Astrologer {
  id: string;
  name: string;
  designation: string;
  image: string;
  specializations: string[];
  languages: string[];
  filters: string[];
  biography: string;
}

export const astrologers: Astrologer[] = [
  {
    id: 'acharya-surya',
    name: 'आचार्य सूर्य जी',
    designation: 'मुख्य ज्योतिषाचार्य',
    image: '/images/astrologer-1.png',
    specializations: ['वैदिक ज्योतिष', 'वशीकरण', 'प्रेमसमस्या'],
    languages: ['हिंदी', 'संस्कृत'],
    filters: ['वैदिक ज्योतिष', 'प्रेमसमस्या', 'विवाह'],
    biography:
      'वैदिक ज्योतिष, वशीकरण निवारण एवं पारिवारिक व प्रेम समस्याओं में अनुभवी मार्गदर्शन।',
  },
  {
    id: 'acharya-hariom',
    name: 'आचार्य हरिओम जी',
    designation: 'वरिष्ठ ज्योतिषी',
    image: '/images/astrologer-2.png',
    specializations: ['कुंडली', 'व्यापार ज्योतिष', 'वास्तुशास्त्र'],
    languages: ['हिंदी', 'संस्कृत'],
    filters: ['कुंडली', 'व्यापार', 'वास्तु'],
    biography:
      'कुंडली विश्लेषण, व्यापारिक वृद्धि एवं वास्तु दोष निवारण में विशेषज्ञ परामर्शदाता।',
  },
  {
    id: 'acharya-arun',
    name: 'आचार्य अरुण पंडित',
    designation: 'ज्योतिष सलाहकार',
    image: '/images/astrologer-4.png',
    specializations: ['विवाह ज्योतिष', 'स्वास्थ्य समस्या', 'रत्न व उपचार'],
    languages: ['हिंदी', 'संस्कृत'],
    filters: ['विवाह', 'स्वास्थ्य', 'रत्न'],
    biography:
      'विवाह ज्योतिष, स्वास्थ्य समस्या एवं सात्विक वैदिक रत्न उपचार में सिद्धहस्त एवं अनुभवी ज्योतिषी।',
  },
  {
    id: 'mata-renuka',
    name: 'माता रेणुका जी',
    designation: 'ज्योतिष सलाहकार',
    image: '/images/astrologer-3.png',
    specializations: ['विवाह ज्योतिष', 'स्वास्थ्य समस्या', 'रत्न व उपचार'],
    languages: ['हिंदी', 'संस्कृत'],
    filters: ['विवाह', 'स्वास्थ्य', 'रत्न'],
    biography:
      'विवाह मिलान, स्वास्थ्य संबंधी ग्रह विश्लेषण एवं सात्विक वैदिक रत्न उपचार में सिद्धहस्त।',
  },
];

export const astrologerFilters = [
  'वैदिक ज्योतिष',
  'कुंडली',
  'विवाह',
  'व्यापार',
  'वास्तु',
  'प्रेमसमस्या',
  'स्वास्थ्य',
  'रत्न',
];
