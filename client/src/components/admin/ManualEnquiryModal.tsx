import { useState, type FormEvent } from 'react';
import { X, Plus, User, Phone, Calendar, Clock, MapPin, Mail, MessageSquare } from 'lucide-react';
import type { EnquiryStatus, EnquiryType } from '@/lib/enquiryService';

interface ManualEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (payload: {
    name: string;
    mobile: string;
    email?: string;
    gender?: string;
    dob?: string;
    tob?: string;
    pob?: string;
    question: string;
    type: EnquiryType;
    status: EnquiryStatus;
    adminNotes?: string;
    source: string;
  }) => Promise<void>;
}

export function ManualEnquiryModal({ isOpen, onClose, onSave }: ManualEnquiryModalProps) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    gender: 'पुरुष',
    dob: '',
    tob: '',
    pob: '',
    question: '',
    type: 'appointment' as EnquiryType,
    status: 'new' as EnquiryStatus,
    adminNotes: '',
    source: 'सीधा फोन / व्यक्तिगत भेंट',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.question) {
      alert('कृपया नाम, मोबाइल नंबर और प्रश्न विवरण भरें।');
      return;
    }
    setSubmitting(true);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-navy-200 bg-cream-50/50 px-3.5 py-2 text-xs text-navy-900 focus:border-maroon-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon-100';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl border border-maroon-100 bg-white p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-navy-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-maroon-100 p-2 text-maroon-800">
              <Plus className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-navy-900 font-devanagari" lang="hi">
                नई पूछताछ दर्ज करें (Manual Entry)
              </h2>
              <p className="text-xs text-navy-500">सीधे फोन कॉल अथवा कार्यालय में आए जातक का विवरण</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-navy-400 hover:bg-cream-100 hover:text-navy-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                जातक का नाम <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="उदा. राहुल शर्मा"
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                मोबाइल नंबर <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                value={form.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                लिंग
              </label>
              <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                <option value="पुरुष">पुरुष</option>
                <option value="महिला">महिला</option>
                <option value="अन्य">अन्य</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                जन्म तिथि
              </label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                जन्म समय
              </label>
              <input type="time" name="tob" value={form.tob} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                जन्म स्थान
              </label>
              <input
                type="text"
                name="pob"
                value={form.pob}
                onChange={handleChange}
                placeholder="उदा. वाराणसी / दिल्ली"
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="client@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                प्रकार (Category)
              </label>
              <select name="type" value={form.type} onChange={handleChange} className={inputClass}>
                <option value="appointment">अपॉइंटमेंट (Appointment)</option>
                <option value="contact">संपर्क पूछताछ (Contact)</option>
                <option value="manual">सीधी भेंट (Walk-in)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
                आरंभिक स्थिति (Status)
              </label>
              <select name="status" value={form.status} onChange={handleChange} className={inputClass}>
                <option value="new">नई पूछताछ (New)</option>
                <option value="contacted">संपर्क किया (Contacted)</option>
                <option value="in_progress">प्रक्रियाधीन (In Progress)</option>
                <option value="completed">पूर्ण (Completed)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
              प्रश्न / ज्योतिषीय आवश्यकता <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="question"
              required
              rows={3}
              value={form.question}
              onChange={handleChange}
              placeholder="जातक की समस्या या परामर्श का विषय..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-navy-700" lang="hi">
              आंतरिक नोट्स (Optional)
            </label>
            <input
              type="text"
              name="adminNotes"
              value={form.adminNotes}
              onChange={handleChange}
              placeholder="परामर्श समय, भुगतान स्थिति या विशेष टिप्पणी..."
              className={inputClass}
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 border-t border-navy-100 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-700 hover:bg-cream-100"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary rounded-xl px-5 py-2 text-xs font-semibold"
            >
              {submitting ? 'सहेज रहे हैं...' : 'सुरक्षित करें (Save Enquiry)'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
