import { siteConfig } from './siteConfig';

export interface ProblemCategory {
  id: string;
  icon: string;
  emoji: string;
  title: string;
  titleEn: string;
  description: string;
  slug: string;
}

export const problemCategories: ProblemCategory[] = [
  {
    id: 'love',
    icon: 'heart',
    emoji: '❤️',
    title: 'प्रेम और संबंध',
    titleEn: 'Love & Relationships',
    description: 'रिश्तों में आपसी तालमेल, सामंजस्य एवं प्रेम विवाह संबंधी ज्योतिषीय परामर्श।',
    slug: 'love-relationship',
  },
  {
    id: 'marriage',
    icon: 'sparkles',
    emoji: '💍',
    title: 'विवाह एवं कुंडली मिलान',
    titleEn: 'Marriage & Matchmaking',
    description: 'विवाह में देरी, कुंडली गुण मिलान, मांगलिक विचार एवं सुखद दांपत्य जीवन हेतु मार्गदर्शन।',
    slug: 'marriage-kundli',
  },
  {
    id: 'career',
    icon: 'briefcase',
    emoji: '💼',
    title: 'करियर और नौकरी',
    titleEn: 'Career & Job Guidance',
    description: 'करियर की सही दिशा, नौकरी में पदोन्नति, कार्यक्षेत्र परिवर्तन एवं व्यावसायिक निर्णय।',
    slug: 'career',
  },
  {
    id: 'business',
    icon: 'trending-up',
    emoji: '🏢',
    title: 'व्यापार एवं व्यवसाय',
    titleEn: 'Business & Trade',
    description: 'नए व्यापार की शुरुआत, व्यावसायिक चुनौतियां, विस्तार एवं साझेदारी संबंधी विचार।',
    slug: 'business',
  },
  {
    id: 'finance',
    icon: 'coins',
    emoji: '💰',
    title: 'धन और वित्त',
    titleEn: 'Wealth & Finance',
    description: 'आर्थिक स्थिरता, धन वृद्धि, ऋण मुक्ति एवं वित्तीय निर्णयों में ज्योतिषीय दृष्टिकोण।',
    slug: 'dhan-vittiya',
  },
  {
    id: 'family',
    icon: 'home',
    emoji: '🏠',
    title: 'परिवार एवं गृहस्थ जीवन',
    titleEn: 'Family & Progeny',
    description: 'पारिवारिक सुख-शांति, संतान सुख, संतान की प्रगति एवं गृह क्लेश निवारण।',
    slug: 'santan',
  },
  {
    id: 'spiritual',
    icon: 'flame',
    emoji: '🪔',
    title: 'आध्यात्मिक मार्गदर्शन',
    titleEn: 'Spiritual & Remedies',
    description: 'ग्रह शांति, पूजा-अनुष्ठान, शुभ मुहूर्त एवं पारंपरिक वैदिक उपायों की जानकारी।',
    slug: 'graha-shanti',
  },
  {
    id: 'kundli',
    icon: 'scroll',
    emoji: '🔮',
    title: 'कुंडली एवं भविष्यफल',
    titleEn: 'Kundli & Horoscope',
    description: 'जन्म कुंडली का सूक्ष्म अध्ययन, नवग्रह स्थिति, दशा-अंतर्दशा एवं जीवन का संपूर्ण विश्लेषण।',
    slug: 'kundli-analysis',
  },
];

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
}

export const valuePillars: ValuePillar[] = [
  {
    title: 'व्यक्तिगत परामर्श',
    subtitle: 'Personalized Analysis',
    description: 'प्रत्येक व्यक्ति की जन्म कुंडली एवं वर्तमान परिस्थिति का गहन व व्यक्तिगत अध्ययन।',
  },
  {
    title: 'वैदिक सिद्धांत',
    subtitle: 'Vedic Principles',
    description: 'प्राचीन महर्षियों द्वारा प्रतिपादित प्रामाणिक वैदिक ज्योतिषीय गणना और पद्धतियाँ।',
  },
  {
    title: 'पूर्ण गोपनीयता',
    subtitle: '100% Confidential',
    description: 'आपकी कुंडली, व्यक्तिगत विवरण एवं परामर्श की सभी बातचीत पूर्णतः गोपनीय रखी जाती है।',
  },
  {
    title: 'व्यावहारिक मार्गदर्शन',
    subtitle: 'Practical Guidance',
    description: 'जटिल विषयों की सरल व्याख्या तथा दैनिक जीवन में सरलता से अपनाए जाने योग्य सुझाव।',
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'user-check',
    title: 'व्यक्तिगत परामर्श',
    description: 'हर व्यक्ति की परिस्थिति एवं जन्म पत्रिका को ध्यान में रखकर व्यक्तिगत रूप से परामर्श दिया जाता है।',
  },
  {
    icon: 'book-open',
    title: 'वैदिक ज्योतिष पर आधारित',
    description: 'पारंपरिक एवं शास्त्रीय ज्योतिषीय सिद्धांतों के आधार पर कुंडली के सभी भावों और ग्रहों का अध्ययन।',
  },
  {
    icon: 'shield-check',
    title: 'गोपनीयता',
    description: 'आपकी व्यक्तिगत जानकारी, जन्म विवरण और परामर्श के दौरान हुई बातचीत को पूरी तरह निजी रखा जाता है।',
  },
  {
    icon: 'message-square',
    title: 'स्पष्ट मार्गदर्शन',
    description: 'जटिल ज्योतिषीय योगों व दशाओं को सरल और समझने योग्य भाषा में समझाने का ईमानदार प्रयास।',
  },
  {
    icon: 'award',
    title: 'विभिन्न जीवन क्षेत्रों के लिए परामर्श',
    description: 'करियर, विवाह, संबंध, व्यवसाय, वित्त और वास्तु जैसे सभी महत्वपूर्ण विषयों पर समग्र मार्गदर्शन।',
  },
  {
    icon: 'phone-call',
    title: 'आसान संपर्क',
    description: 'परामर्श और अपॉइंटमेंट के लिए फोन कॉल या WhatsApp द्वारा सीधे एवं सुलभ संपर्क करने की सुविधा।',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'जन्म विवरण साझा करें',
    description: 'अपनी जन्म तिथि, सटीक समय एवं जन्म स्थान की जानकारी फॉर्म या WhatsApp द्वारा भेजें।',
  },
  {
    number: '02',
    title: 'कुंडली का सूक्ष्म अध्ययन',
    description: 'ज्योतिष विशेषज्ञ द्वारा आपकी जन्म पत्रिका, ग्रह स्थिति एवं दशा-अंतर्दशा का गहन विश्लेषण।',
  },
  {
    number: '03',
    title: 'व्यक्तिगत परामर्श सत्र',
    description: 'फोन कॉल, WhatsApp या प्रत्यक्ष भेंट के माध्यम से अपने प्रश्नों पर विस्तृत चर्चा करें।',
  },
  {
    number: '04',
    title: 'व्यावहारिक समाधान प्राप्त करें',
    description: 'जीवन की सही दिशा के लिए स्पष्ट वैदिक मार्गदर्शन एवं सरल उपायों की जानकारी प्राप्त करें।',
  },
];

export const trustIndicators = [
  'व्यक्तिगत परामर्श',
  'गोपनीय बातचीत',
  'अनुभवी ज्योतिष मार्गदर्शन',
  'प्रामाणिक वैदिक पद्धति',
];

export const faqs = [
  {
    question: 'ज्योतिष परामर्श के लिए कौन-कौन से विवरण आवश्यक हैं?',
    answer:
      'सटीक कुंडली विश्लेषण के लिए जातक की जन्म तिथि (Date of Birth), जन्म का सही समय (Exact Time of Birth) और जन्म स्थान (Place of Birth) की आवश्यकता होती है। समय जितना सटीक होगा, ग्रह गणना और फलादेश उतना ही स्पष्ट होगा।',
  },
  {
    question: 'क्या ऑनलाइन ज्योतिष परामर्श की सुविधा उपलब्ध है?',
    answer:
      'हाँ, आप देश या विदेश के किसी भी कोने से WhatsApp, वॉयस कॉल या वीडियो कॉल के माध्यम से घर बैठे व्यक्तिगत परामर्श ले सकते हैं।',
  },
  {
    question: 'ज्योतिष परामर्श कैसे बुक करें?',
    answer:
      `आप हमारी वेबसाइट के "परामर्श बुक करें" पेज पर फॉर्म भर सकते हैं या सीधे हमारे आधिकारिक WhatsApp / फोन नंबर ${siteConfig.phone} पर संदेश भेजकर समय निर्धारित कर सकते हैं।`,
  },
  {
    question: 'विवाह के लिए कुंडली मिलान में किन बातों का ध्यान रखा जाता है?',
    answer:
      'विवाह हेतु अष्टकूट गुण मिलान (36 गुणों का विचार), मांगलिक दोष का सूक्ष्म विश्लेषण, दोनों कुंडलियों में सप्तम व अष्टम भाव की स्थिति, ग्रह मैत्री एवं दांपत्य जीवन की स्थिरता का समग्र अध्ययन किया जाता है।',
  },
  {
    question: 'क्या मेरी व्यक्तिगत जानकारी और बातचीत गोपनीय रहेगी?',
    answer:
      'हाँ, संगम ज्योतिष संस्थान में आपकी व्यक्तिगत पहचान, जन्म विवरण और परामर्श के दौरान हुई समस्त चर्चा पूर्णतः गोपनीय रखी जाती है।',
  },
  {
    question: 'परामर्श सत्र कितने समय का होता है?',
    answer:
      'एक व्यक्तिगत परामर्श सत्र सामान्यतः 30 से 45 मिनट का होता है, जिसमें आपकी कुंडली के सभी प्रमुख पहलुओं और आपके प्रश्नों पर विस्तार से चर्चा की जाती है।',
  },
  {
    question: 'यदि जन्म का सही समय ज्ञात न हो तो क्या परामर्श संभव है?',
    answer:
      'यदि जन्म का सटीक समय ज्ञात नहीं है, तो प्रश्न कुंडली (Horary Astrology) अथवा हस्तरेखा एवं अन्य वैदिक पद्धतियों के माध्यम से सामयिक प्रश्नों का समाधान व मार्गदर्शन प्राप्त किया जा सकता है।',
  },
  {
    question: 'क्या सुझाये जाने वाले उपाय जटिल या महंगे होते हैं?',
    answer:
      'नहीं, हमारा दृष्टिकोण पारंपरिक एवं सात्विक वैदिक उपायों (जैसे जप, ध्यान, दान, सात्विक आचरण और जीवनशैली में सकारात्मक परिवर्तन) पर आधारित है, जो सरल एवं व्यावहारिक होते हैं।',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const statistics: Stat[] = [
  { value: '30+', label: 'वर्षों का अनुभव' },
  { value: '50,000+', label: 'संतुष्ट जातक' },
  { value: '100%', label: 'गोपनीयता व प्रामाणिकता' },
  { value: '24/7', label: 'WhatsApp सहायता' },
];
