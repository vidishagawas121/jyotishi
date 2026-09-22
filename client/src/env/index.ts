/**
 * Application Environment Variables Configuration
 * Provides type-safe access to Vite environment variables with graceful fallbacks.
 */

export interface EnvConfig {
  siteUrl: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  telUrl: string;
  email: string;
  address: string;
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  gaMeasurementId?: string;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  apiBaseUrl: string;
  isDev: boolean;
  isProd: boolean;
}

const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] !== undefined && import.meta.env[key] !== ''
    ? String(import.meta.env[key])
    : fallback;
};

const rawPhone = getEnv('VITE_PHONE_RAW', '+917800224400');
const whatsappNum = getEnv('VITE_WHATSAPP_NUMBER', '917800224400');

export const env: EnvConfig = {
  siteUrl: getEnv('VITE_SITE_URL', 'https://sangamjyotish.com').replace(/\/$/, ''),
  phone: getEnv('VITE_PHONE', '+91 7800224400'),
  phoneRaw: rawPhone,
  whatsappNumber: whatsappNum,
  whatsappUrl: `https://wa.me/${whatsappNum.replace(/[^0-9]/g, '')}`,
  telUrl: `tel:${rawPhone.replace(/\s+/g, '')}`,
  email: getEnv('VITE_EMAIL', 'contact@sangamjyotish.com'),
  address: getEnv('VITE_ADDRESS', 'वाराणसी / हरिद्वार / दिल्ली एनसीआर, भारत'),
  facebookUrl: getEnv('VITE_FACEBOOK_URL', '#'),
  instagramUrl: getEnv('VITE_INSTAGRAM_URL', '#'),
  youtubeUrl: getEnv('VITE_YOUTUBE_URL', '#'),
  gaMeasurementId: getEnv('VITE_GA_MEASUREMENT_ID', ''),
  supabaseUrl: getEnv('VITE_SUPABASE_URL', ''),
  apiBaseUrl: getEnv('VITE_API_BASE_URL', import.meta.env.DEV ? 'http://localhost:5000/api' : '/api').replace(/\/$/, ''),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};

export default env;
