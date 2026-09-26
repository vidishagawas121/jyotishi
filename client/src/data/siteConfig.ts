import { env } from '@/env';

export const siteConfig = {
  brandName: 'Sangam Jyotish Sansthan',
  brandNameHindi: 'संगम ज्योतिष संस्थान',
  tagline: 'वैदिक ज्ञान से जीवन को सही दिशा',
  altTagline: 'प्राचीन ज्योतिष ज्ञान, आधुनिक मार्गदर्शन',
  phone: env.phone,
  phoneRaw: env.phoneRaw,
  whatsappNumber: env.whatsappNumber,
  whatsappUrl: env.whatsappUrl,
  telUrl: env.telUrl,
  email: env.email,
  address: env.address,
  addressDetails: {
    temple: 'शोभनाथ मंदिर (Sobhnath Temple)',
    templeEn: 'Shobhnath Mandir (Sobhnath Temple)',
    river: 'बेलन नदी के तट पर',
    riverEn: 'Banks of Belan River',
    locality: 'कोरांव (Koraon)',
    city: 'प्रयागराज (Prayagraj)',
    state: 'उत्तर प्रदेश (Uttar Pradesh)',
    pincode: '212306',
    country: 'भारत (India)',
    fullAddressHindi: 'शोभनाथ मंदिर, बेलन नदी तट, कोरांव, प्रयागराज, उत्तर प्रदेश - 212306',
    fullAddressEn: 'Sobhnath Temple, Belan River Bank, Koraon, Prayagraj, Uttar Pradesh - 212306, India',
    shortAddress: 'शोभनाथ मंदिर, कोरांव, प्रयागराज (212306)',
  },
  siteUrl: env.siteUrl,
  social: {
    whatsapp: env.whatsappUrl,
    facebook: env.facebookUrl || '#',
    instagram: env.instagramUrl || '#',
    youtube: env.youtubeUrl || '#',
  },
} as const;

export const navLinks = [
  { label: 'होम', labelEn: 'Home', to: '/' },
  { label: 'हमारे बारे में', labelEn: 'About', to: '/about' },
  { label: 'सेवाएं', labelEn: 'Services', to: '/services' },
  { label: 'ज्योतिषी', labelEn: 'Astrologers', to: '/astrologers' },
  { label: 'समीक्षाएं', labelEn: 'Testimonials', to: '/testimonials' },
  { label: 'संपर्क', labelEn: 'Contact', to: '/contact' },
] as const;
