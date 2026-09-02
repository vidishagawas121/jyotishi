import { useState, type FormEvent } from 'react';
import { Send, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';

const initialForm = {
  name: '',
  mobile: '',
  whatsapp: '',
  dob: '',
  tob: '',
  pob: '',
  service: '',
  prefDate: '',
  prefTime: '',
  question: '',
};

export function AppointmentForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () =>
    `नमस्ते संगम ज्योतिष संस्थान,
मैं ज्योतिष परामर्श के लिए अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।

नाम: ${form.name}
मोबाइल: ${form.mobile}
WhatsApp: ${form.whatsapp}
जन्म तिथि: ${form.dob}
जन्म समय: ${form.tob}
जन्म स्थान: ${form.pob}
सेवा: ${form.service}
पसंदीदा तिथि: ${form.prefDate}
पसंदीदा समय: ${form.prefTime}
प्रश्न: ${form.question}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(`${siteConfig.whatsappUrl}?text=${encodeURIComponent(buildMessage())}`, '_blank');
  };

  const handleWhatsAppBook = () => {
    window.open(`${siteConfig.whatsappUrl}?text=${encodeURIComponent(buildMessage())}`, '_blank');
  };

  const inputClass =
    'w-full rounded-xl border border-maroon-100 bg-cream-50/50 px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors focus:border-maroon-400 focus:outline-none focus:ring-2 focus:ring-maroon-100';

  return (
    <form onSubmit={handleSubmit} className="card-premium space-y-5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            नाम <span className="text-maroon-500">*</span>
          </label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="आपका नाम" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            मोबाइल नंबर <span className="text-maroon-500">*</span>
          </label>
          <input type="tel" name="mobile" required value={form.mobile} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            WhatsApp नंबर
          </label>
          <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म तिथि
          </label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म समय
          </label>
          <input type="time" name="tob" value={form.tob} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            जन्म स्थान
          </label>
          <input type="text" name="pob" value={form.pob} onChange={handleChange} className={inputClass} placeholder="जन्म का शहर" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
          सेवा चुनें <span className="text-maroon-500">*</span>
        </label>
        <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
          <option value="">सेवा चुनें</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title} — {s.titleEn}
            </option>
          ))}
          <option value="अन्य">अन्य</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            पसंदीदा तिथि
          </label>
          <input type="date" name="prefDate" value={form.prefDate} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
            पसंदीदा समय
          </label>
          <input type="time" name="prefTime" value={form.prefTime} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-700" lang="hi">
          आपका प्रश्न
        </label>
        <textarea name="question" rows={4} value={form.question} onChange={handleChange} className={inputClass} placeholder="अपना प्रश्न या आवश्यकता यहाँ लिखें..." />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary flex-1">
          <Calendar className="h-4 w-4" />
          <span lang="hi">अपॉइंटमेंट रिक्वेस्ट भेजें</span>
        </button>
        <button type="button" onClick={handleWhatsAppBook} className="btn-whatsapp flex-1">
          <Send className="h-4 w-4" />
          <span lang="hi">WhatsApp से बुक करें</span>
        </button>
      </div>
      <p className="text-center text-xs text-navy-400" lang="hi">
        अपॉइंटमेंट कन्फर्मेशन WhatsApp पर भेजी जाएगी।
      </p>
    </form>
  );
}
