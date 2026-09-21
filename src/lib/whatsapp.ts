import { siteConfig } from '@/data/siteConfig';

export const waLink = (message?: string): string => {
  const base = siteConfig.whatsappUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const waGeneral = waLink(
  `नमस्ते संगम ज्योतिष संस्थान,
मुझे ज्योतिष परामर्श चाहिए।

नाम: 
मोबाइल: 
लिंग: 
जन्म तिथि: 
जन्म समय: 
जन्म स्थान: 
ईमेल: 
प्रश्न: `
);

export const waAppointment = waLink(
  `नमस्ते संगम ज्योतिष संस्थान,
मुझे ज्योतिष परामर्श चाहिए।

नाम: 
मोबाइल: 
लिंग: 
जन्म तिथि: 
जन्म समय: 
जन्म स्थान: 
ईमेल: 
प्रश्न: `
);

export const waMarriage = waLink(
  'नमस्ते, मुझे विवाह एवं कुंडली मिलान के संबंध में ज्योतिष परामर्श चाहिए।'
);

export const waCareer = waLink(
  'नमस्ते, मुझे करियर और नौकरी से संबंधित ज्योतिष परामर्श चाहिए।'
);

export const waBusiness = waLink(
  'नमस्ते, मुझे व्यापार एवं व्यवसाय से संबंधित ज्योतिष परामर्श चाहिए।'
);

export const waServiceLink = (serviceTitle: string): string =>
  waLink(
    `नमस्ते, मुझे "${serviceTitle}" सेवा के संबंध में ज्योतिष परामर्श चाहिए।`
  );

export const waAstrologerLink = (astrologerName: string): string =>
  waLink(`नमस्ते, मुझे ${astrologerName} से ज्योतिष परामर्श लेना है।`);
