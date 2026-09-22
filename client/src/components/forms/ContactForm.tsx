import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { saveEnquiry } from '@/lib/enquiryService';

const initialForm = {
  name: '',
  mobile: '',
  gender: '',
  dob: '',
  tob: '',
  pob: '',
  email: '',
  question: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await saveEnquiry({
        name: form.name,
        mobile: form.mobile,
        gender: form.gender,
        dob: form.dob,
        tob: form.tob,
        pob: form.pob,
        email: form.email,
        question: form.question,
        type: 'contact',
        source: 'संपर्क फॉर्म',
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to save contact enquiry:', err);
    } finally {
      setIsSubmitting(false);
    }

    const message = `नमस्ते संगम ज्योतिष संस्थान,
मुझे ज्योतिष परामर्श चाहिए।

नाम: ${form.name}
मोबाइल: ${form.mobile}
लिंग: ${form.gender || 'उल्लेखित नहीं'}
जन्म तिथि: ${form.dob || 'उपलब्ध नहीं'}
जन्म समय: ${form.tob || 'उपलब्ध नहीं'}
जन्म स्थान: ${form.pob || 'उल्लेखित नहीं'}
ईमेल: ${form.email || 'उपलब्ध नहीं'}
प्रश्न: ${form.question}`;
    window.open(`${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const inputClass =
    'w-full rounded-xl border border-maroon-100 bg-cream-50/50 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-100';

  return (
    <form onSubmit={handleSubmit} className="card-premium space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            नाम <span className="text-maroon-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="आपका नाम"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            मोबाइल नंबर <span className="text-maroon-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={form.mobile}
            onChange={handleChange}
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            लिंग
          </label>
          <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
            <option value="">चुनें</option>
            <option value="पुरुष">पुरुष</option>
            <option value="महिला">महिला</option>
            <option value="अन्य">अन्य</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म तिथि
          </label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म समय
          </label>
          <input type="time" name="tob" value={form.tob} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म स्थान
          </label>
          <input
            type="text"
            name="pob"
            value={form.pob}
            onChange={handleChange}
            className={inputClass}
            placeholder="जन्म का शहर"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
          आपका प्रश्न <span className="text-maroon-500">*</span>
        </label>
        <textarea
          name="question"
          required
          rows={4}
          value={form.question}
          onChange={handleChange}
          className={inputClass}
          placeholder="अपना प्रश्न या आवश्यकता यहाँ लिखें..."
        />
      </div>

      {submitted && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 text-sm text-emerald-900 animate-fade-in">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
          <div>
            <p className="font-semibold">आपकी पूछताछ सफलतापूर्वक दर्ज हो गई है!</p>
            <p className="text-xs text-emerald-700">हमारा संस्थान शीघ्र ही आपसे संपर्क करेगा। WhatsApp संदेश भी तैयार कर दिया गया है।</p>
          </div>
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-whatsapp w-full disabled:opacity-60">
        <Send className="h-4 w-4" />
        <span lang="hi">{isSubmitting ? 'दर्ज हो रहा है...' : 'WhatsApp पर पूछताछ भेजें'}</span>
      </button>
      <p className="text-center text-xs text-navy-400" lang="hi">
        फॉर्म जमा करने पर आपके विवरण के साथ WhatsApp संदेश तैयार होगा।
      </p>
    </form>
  );
}
