import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `नमस्ते संगम ज्योतिष संस्थान,
मुझे ज्योतिष परामर्श चाहिए।

नाम: ${form.name}
मोबाइल: ${form.mobile}
लिंग: ${form.gender}
जन्म तिथि: ${form.dob}
जन्म समय: ${form.tob}
जन्म स्थान: ${form.pob}
ईमेल: ${form.email}
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

      <button type="submit" className="btn-whatsapp w-full">
        <Send className="h-4 w-4" />
        <span lang="hi">WhatsApp पर पूछताछ भेजें</span>
      </button>
      <p className="text-center text-xs text-navy-400" lang="hi">
        फॉर्म जमा करने पर आपके विवरण के साथ WhatsApp संदेश तैयार होगा।
      </p>
    </form>
  );
}
