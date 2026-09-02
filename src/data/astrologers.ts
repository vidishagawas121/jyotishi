export interface Astrologer {
  id: string;
  name: string;
  designation: string;
  experience: string;
  specializations: string[];
  languages: string[];
  filters: string[];
  imageQuery: string;
}

export const astrologers: Astrologer[] = [
  {
    id: 'acharya-1',
    name: 'आचार्य [नाम]',
    designation: 'मुख्य ज्योतिषाचार्य',
    experience: '10+ वर्ष',
    specializations: ['वैदिक ज्योतिष', 'कुंडली विश्लेषण', 'विवाह परामर्श'],
    languages: ['हिंदी', 'मराठी', 'संस्कृत'],
    filters: ['वैदिक ज्योतिष', 'विवाह'],
    imageQuery: 'indian pandit astrologer traditional',
  },
  {
    id: 'acharya-2',
    name: 'आचार्य [नाम]',
    designation: 'वरिष्ठ ज्योतिष सलाहकार',
    experience: '8+ वर्ष',
    specializations: ['करियर ज्योतिष', 'व्यापार ज्योतिष', 'वास्तु'],
    languages: ['हिंदी', 'मराठी', 'अंग्रेज़ी'],
    filters: ['करियर', 'व्यापार', 'वास्तु'],
    imageQuery: 'indian male astrologer portrait',
  },
  {
    id: 'acharya-3',
    name: 'आचार्य [नाम]',
    designation: 'ज्योतिष सलाहकार',
    experience: '5+ वर्ष',
    specializations: ['विवाह एवं संबंध', 'प्रश्न कुंडली', 'ग्रह शांति'],
    languages: ['हिंदी', 'मराठी'],
    filters: ['विवाह', 'प्रश्न कुंडली'],
    imageQuery: 'indian female astrologer portrait',
  },
];

export const astrologerFilters = [
  'वैदिक ज्योतिष',
  'विवाह',
  'करियर',
  'व्यापार',
  'वास्तु',
  'प्रश्न कुंडली',
];
