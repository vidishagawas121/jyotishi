import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ShieldCheck, LogOut, Key, Globe, Check, Eye, EyeOff, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { setAdminPin } from '@/lib/adminAuth';

interface AdminHeaderProps {
  onLogout: () => void;
}

export function AdminHeader({ onLogout }: AdminHeaderProps) {
  const [showPinModal, setShowPinModal] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [pinSuccess, setPinSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPinModal) {
        setShowPinModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPinModal]);

  const handleUpdatePin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (newPin.length < 4) {
      setError('पिन कम से कम 4 अंकों का होना चाहिए।');
      return;
    }
    if (newPin !== confirmPin) {
      setError('दोनों पिन मेल नहीं खाते।');
      return;
    }
    const ok = setAdminPin(newPin);
    if (ok) {
      setPinSuccess(true);
      setTimeout(() => {
        setPinSuccess(false);
        setShowPinModal(false);
        setNewPin('');
        setConfirmPin('');
      }, 1500);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-maroon-900/40 bg-gradient-to-r from-maroon-950 via-navy-950 to-maroon-950 text-cream-100 shadow-lg backdrop-blur-md">
        <div className="container-px flex h-16 sm:h-20 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/admin" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 text-maroon-950 shadow-md">
                <span className="font-devanagari text-xl sm:text-2xl font-bold">ॐ</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-devanagari text-base sm:text-lg font-bold text-gold-300">
                    {siteConfig.brandNameHindi}
                  </span>
                  <span className="rounded-full bg-gold-400/20 border border-gold-400/30 px-2 py-0.5 text-[10px] font-bold text-gold-200 uppercase tracking-widest">
                    Admin
                  </span>
                </div>
                <p className="text-[11px] text-cream-200/70 hidden sm:block">
                  व्यवस्थापक पोर्टल • पूछताछ एवं अपॉइंटमेंट प्रबंधन
                </p>
              </div>
            </Link>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-xl border border-gold-400/30 bg-gold-400/10 px-3 py-1.5 text-xs font-medium text-gold-200 hover:bg-gold-400/20 transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">मुख्य वेबसाइट</span>
            </Link>

            <button
              onClick={() => {
                setError('');
                setShowPinModal(true);
              }}
              className="flex items-center gap-1.5 rounded-xl border border-cream-100/20 bg-cream-100/5 px-3 py-1.5 text-xs text-cream-200 hover:bg-cream-100/15 transition-colors"
              title="पिन पासवर्ड बदलें"
            >
              <Key className="h-3.5 w-3.5 text-gold-300" />
              <span className="hidden sm:inline">पिन बदलें</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-xl bg-rose-600/80 hover:bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors"
              title="लॉगआउट"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">लॉगआउट</span>
            </button>
          </div>
        </div>
      </header>

      {/* Change PIN Modal via Portal to avoid stacking context clipping */}
      {showPinModal && typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
              onClick={() => setShowPinModal(false)}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-sm rounded-3xl border border-gold-400/40 bg-navy-900 p-6 text-cream-100 shadow-2xl z-10 animate-fade-in">
              {/* Close Button */}
              <button
                onClick={() => setShowPinModal(false)}
                className="absolute top-4 right-4 rounded-xl p-1.5 text-cream-200/60 hover:text-cream-100 hover:bg-white/10 transition-colors"
                title="बंद करें"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold-400/20 text-gold-400">
                  <Key className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold text-gold-300 font-devanagari" lang="hi">
                  व्यवस्थापक लॉगिन पिन बदलें
                </h3>
              </div>
              <p className="text-xs text-cream-200/70 mb-4">नया 4 से 10 अंकों का सुरक्षा पिन दर्ज करें।</p>

              {pinSuccess ? (
                <div className="my-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-4 text-center text-emerald-200">
                  <Check className="mx-auto h-6 w-6 text-emerald-400 mb-1" />
                  <p className="text-sm font-bold">पिन सफलतापूर्वक बदल दिया गया!</p>
                </div>
              ) : (
                <form onSubmit={handleUpdatePin} className="space-y-3.5">
                  {error && (
                    <div className="rounded-xl bg-rose-500/20 border border-rose-500/40 p-2.5 text-xs text-rose-200">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="text-xs text-cream-200/90 block mb-1 font-medium">नया सुरक्षा पिन:</label>
                    <div className="relative">
                      <input
                        type={showNewPin ? 'text' : 'password'}
                        required
                        maxLength={10}
                        value={newPin}
                        onChange={(e) => setNewPin(e.target.value)}
                        placeholder="उदा. 4589"
                        className="w-full rounded-xl border border-cream-100/20 bg-navy-950/70 py-2.5 pl-3.5 pr-10 text-sm text-cream-50 placeholder-cream-200/30 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPin(!showNewPin)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-200/50 hover:text-cream-100"
                      >
                        {showNewPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-cream-200/90 block mb-1 font-medium">नया पिन पुनः दर्ज करें:</label>
                    <div className="relative">
                      <input
                        type={showConfirmPin ? 'text' : 'password'}
                        required
                        maxLength={10}
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value)}
                        placeholder="पिन की पुष्टि करें"
                        className="w-full rounded-xl border border-cream-100/20 bg-navy-950/70 py-2.5 pl-3.5 pr-10 text-sm text-cream-50 placeholder-cream-200/30 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPin(!showConfirmPin)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-200/50 hover:text-cream-100"
                      >
                        {showConfirmPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-end gap-2 pt-2 border-t border-cream-100/10">
                    <button
                      type="button"
                      onClick={() => setShowPinModal(false)}
                      className="rounded-xl border border-cream-100/20 px-3.5 py-2 text-xs font-medium text-cream-200 hover:bg-cream-100/10 transition-colors"
                    >
                      रद्द करें
                    </button>
                    <button
                      type="submit"
                      className="btn-primary py-2 px-5 text-xs font-bold rounded-xl shadow-md"
                    >
                      सहेजें
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

