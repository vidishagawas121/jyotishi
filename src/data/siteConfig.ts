export const siteConfig = {
  brandName: 'Sangam Jyotish Sansthan',
  brandNameHindi: 'संगम ज्योतिष संस्थान',
  tagline: 'वैदिक ज्ञान से जीवन को सही दिशा',
  altTagline: 'प्राचीन ज्योतिष ज्ञान, आधुनिक मार्गदर्शन',
  phone: '+91 7800224400',
  phoneRaw: '+917800224400',
  whatsappNumber: '917800224400',
  whatsappUrl: 'https://wa.me/917800224400',
  telUrl: 'tel:+917800224400',
  email: '[EMAIL TO BE PROVIDED]',
  address: '[ADDRESS TO BE PROVIDED]',
  social: {
    whatsapp: 'https://wa.me/917800224400',
    facebook: '#',
    instagram: '#',
    youtube: '#',
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
