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
