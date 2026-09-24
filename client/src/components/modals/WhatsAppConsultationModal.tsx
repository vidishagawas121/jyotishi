import { useState, useEffect, type FormEvent } from 'react';
import { X, Send, Sparkles, User, Phone, Mail, MapPin, Calendar, Clock, HelpCircle, ShieldCheck } from 'lucide-react';
import { useWhatsAppModal } from '@/context/WhatsAppModalContext';
import { siteConfig } from '@/data/siteConfig';
import { saveEnquiry } from '@/lib/enquiryService';

interface FormData {
  name: string;
  mobile: string;
  gender: string;
  dob: string;
  tob: string;
  pob: string;
  email: string;
  question: string;
}

const initialFormData: FormData = {
  name: '',
  mobile: '',
  gender: '',
  dob: '',
  tob: '',
  pob: '',
  email: '',
  question: '',
};

export function WhatsAppConsultationModal() {
  const { isOpen, closeWhatsAppModal, options } = useWhatsAppModal();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update question when modal opens with custom options
  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialFormData,
        question: options.defaultQuestion || '',
        name: options.defaultName || '',
        mobile: options.defaultMobile || '',
      });
      setErrorMsg('');
    }
  }, [isOpen, options]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWhatsAppModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeWhatsAppModal]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const buildWhatsAppMessage = () => {
    return `नमस्ते संगम ज्योतिष संस्थान,
मुझे ज्योतिष परामर्श चाहिए।

नाम: ${formData.name.trim()}
मोबाइल: ${formData.mobile.trim()}
लिंग: ${formData.gender || 'उल्लेखित नहीं'}
जन्म तिथि: ${formData.dob || 'उपलब्ध नहीं'}
जन्म समय: ${formData.tob || 'उपलब्ध नहीं'}
जन्म स्थान: ${formData.pob.trim() || 'उल्लेखित नहीं'}
ईमेल: ${formData.email.trim() || 'उपलब्ध नहीं'}
प्रश्न: ${formData.question.trim() || 'सामान्य ज्योतिषीय परामर्श'}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('कृपया अपना नाम दर्ज करें।');
      return;
    }

    if (!formData.mobile.trim() || formData.mobile.trim().length < 10) {
      setErrorMsg('कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // 1. Save lead to backend database / local storage
      await saveEnquiry({
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        gender: formData.gender,
        dob: formData.dob,
        tob: formData.tob,
        pob: formData.pob.trim(),
        email: formData.email.trim(),
        question: formData.question.trim() || 'WhatsApp परामर्श अनुरोध',
        type: 'contact',
        source: options.source || 'WhatsApp पॉपअप फॉर्म',
      });

      // 2. Build WhatsApp message
      const message = buildWhatsAppMessage();

      // 3. Open WhatsApp in new tab / app
      const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');

      // 4. Close modal and reset
      closeWhatsAppModal();
      setFormData(initialFormData);
    } catch (err) {
      console.error('Failed to submit WhatsApp consultation:', err);
      // Even if saving failed, open WhatsApp so user doesn't get blocked
      const message = buildWhatsAppMessage();
      const waUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      closeWhatsAppModal();
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-gold-300/40 bg-cream-50/70 px-3.5 py-2.5 text-sm text-navy-950 placeholder-navy-400 transition-all focus:border-maroon-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400/20';

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={closeWhatsAppModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-gold-400/40 bg-white shadow-2xl transition-all duration-300 animate-fade-up max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Vedic Gradient */}
        <div className="relative bg-gradient-to-r from-maroon-950 via-maroon-900 to-saffron-950 p-5 text-cream-50 sm:p-6 border-b border-gold-400/30 flex-shrink-0">
          <div className="starfield absolute inset-0 opacity-25 pointer-events-none" />
          
          <button
            type="button"
            onClick={closeWhatsAppModal}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-cream-200 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-amber-600 text-maroon-950 font-bold text-xl shadow-glow ring-2 ring-gold-300/50">
              ॐ
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 px-2.5 py-0.5 text-[11px] font-semibold text-gold-300 border border-gold-400/30 mb-1">
                <Sparkles className="h-3 w-3" />
                <span>WhatsApp त्वरित परामर्श</span>
              </div>
              <h2 className="font-devanagari text-xl sm:text-2xl font-bold text-cream-50 leading-tight" lang="hi">
                ज्योतिष परामर्श फॉर्म
              </h2>
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-[13px] text-cream-100/85 leading-relaxed" lang="hi">
            कृपया अपना जन्म विवरण भरें। यह जानकारी सीधे हमारे आधिकारिक WhatsApp पर प्रेषित होगी।
          </p>
        </div>

        {/* Form Body - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1 bg-[#fcfaf7]">
          {errorMsg && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs sm:text-sm text-red-700 animate-fade-in font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Mobile */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-navy-800" lang="hi">
                  <User className="h-3.5 w-3.5 text-maroon-700" />
                  <span>नाम (Name)</span> <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="आपका पूरा नाम"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-navy-800" lang="hi">
                  <Phone className="h-3.5 w-3.5 text-maroon-700" />
                  <span>मोबाइल नंबर (Mobile)</span> <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Gender, DOB, TOB */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs font-semibold text-navy-800" lang="hi">
                  लिंग (Gender)
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">चुनें</option>
                  <option value="पुरुष">पुरुष (Male)</option>
                  <option value="महिला">महिला (Female)</option>
                  <option value="अन्य">अन्य (Other)</option>
                </select>
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-navy-800" lang="hi">
                  <Calendar className="h-3.5 w-3.5 text-maroon-700" />
                  <span>जन्म तिथि (DOB)</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1 text-xs font-semibold text-navy-800" lang="hi">
                  <Clock className="h-3.5 w-3.5 text-maroon-700" />
                  <span>जन्म समय (Time)</span>
                </label>
                <input
                  type="time"
                  name="tob"
                  value={formData.tob}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3: POB & Email */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-navy-800" lang="hi">
                  <MapPin className="h-3.5 w-3.5 text-maroon-700" />
                  <span>जन्म स्थान (Birth Place)</span>
                </label>
                <input
                  type="text"
                  name="pob"
                  value={formData.pob}
                  onChange={handleChange}
                  placeholder="शहर / जिला (जैसे: वाराणसी, दिल्ली)"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-navy-800">
                  <Mail className="h-3.5 w-3.5 text-maroon-700" />
                  <span>ईमेल (Email)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com (वैकल्पिक)"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 4: Question */}
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-navy-800" lang="hi">
                <HelpCircle className="h-3.5 w-3.5 text-maroon-700" />
                <span>आपका प्रश्न / समस्या (Question / Concerns)</span>
              </label>
              <textarea
                name="question"
                rows={3}
                value={formData.question}
                onChange={handleChange}
                placeholder="विवाह, करियर, कुंडली विश्लेषण, स्वास्थ्य, व्यापार आदि के संबंध में अपना प्रश्न लिखें..."
                className={inputClass}
              />
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-2 rounded-xl bg-gold-50/80 border border-gold-200/60 p-2.5 text-[11px] text-maroon-900">
              <ShieldCheck className="h-4 w-4 flex-shrink-0 text-maroon-700" />
              <span lang="hi">आपकी व्यक्तिगत जानकारी और जन्म पत्रिका पूर्णतः 100% गोपनीय रखी जाती है।</span>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20be5b] to-[#128C7E] px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:brightness-110 hover:scale-[1.01] active:scale-95 disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                <span lang="hi">
                  {isSubmitting ? 'तैयार हो रहा है...' : 'WhatsApp पर भेजें (Send on WhatsApp)'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
