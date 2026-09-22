import { useState } from 'react';
import { Lock, KeyRound, ShieldCheck, ArrowRight, Sparkles, Eye, EyeOff } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { loginAdmin } from '@/lib/adminAuth';

interface AdminLoginPageProps {
  onLoginSuccess: () => void;
}

export function AdminLoginPage({ onLoginSuccess }: AdminLoginPageProps) {
  const [pin, setPin] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const ok = loginAdmin(pin, rememberMe);
      if (ok) {
        onLoginSuccess();
      } else {
        setError('अमान्य सुरक्षा पिन (Invalid Admin PIN)! कृपया सही पिन दर्ज करें।');
        setLoading(false);
      }
    }, 400);
  };

  const handleQuickDemoFill = () => {
    setPin('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-950 via-navy-950 to-maroon-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="starfield absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl w-[500px] h-[500px]" />

      <div className="relative w-full max-w-md animate-fade-in">
        {/* Card */}
        <div className="rounded-3xl border border-gold-400/30 bg-white/95 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Logo & Heading */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-maroon-800 to-navy-950 text-gold-300 shadow-lg border border-gold-400/40">
              <span className="font-devanagari text-3xl font-bold">ॐ</span>
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold text-maroon-900">
              <ShieldCheck className="h-3.5 w-3.5 text-maroon-700" />
              <span>संगम ज्योतिष संस्थान • व्यवस्थापक</span>
            </div>

            <h1 className="mt-3 font-devanagari text-2xl sm:text-3xl font-bold text-navy-950" lang="hi">
              एडमिन पोर्टल लॉगिन
            </h1>
            <p className="mt-1 text-xs text-navy-600">
              ग्राहक पूछताछ, अपॉइंटमेंट्स एवं रिपोर्ट देखने हेतु सुरक्षा पिन दर्ज करें
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800 font-medium animate-fade-in">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5 font-devanagari" lang="hi">
                व्यवस्थापक सुरक्षा पिन (Admin PIN)
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400">
                  <KeyRound className="h-4 w-4" />
                </div>
                <input
                  type={showPin ? 'text' : 'password'}
                  required
                  autoFocus
                  maxLength={12}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="सुरक्षा पिन दर्ज करें (उदा. admin123)"
                  className="w-full rounded-xl border border-navy-200 bg-cream-50/50 py-3 pl-10 pr-10 text-sm text-navy-900 font-mono tracking-widest placeholder:tracking-normal placeholder-navy-400 focus:border-maroon-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700"
                >
                  {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-navy-600">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-maroon-700 focus:ring-maroon-400 h-3.5 w-3.5"
                />
                <span>लॉगिन याद रखें (Remember)</span>
              </label>

              <button
                type="button"
                onClick={handleQuickDemoFill}
                className="text-maroon-700 hover:text-maroon-900 font-semibold underline"
                title="डिफ़ॉल्ट पिन: admin123"
              >
                डिफ़ॉल्ट पिन भरें
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span>{loading ? 'प्रमाणीकरण जारी है...' : 'सुरक्षित लॉगिन करें'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Bottom helper */}
          <div className="mt-8 border-t border-navy-100 pt-4 text-center">
            <p className="text-[11px] text-navy-500">
              डिफ़ॉल्ट सुरक्षा पिन: <code className="bg-cream-100 px-1.5 py-0.5 rounded text-navy-900 font-mono font-bold">admin123</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
