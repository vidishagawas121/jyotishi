import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Mail,
  User,
  HelpCircle,
  Save,
  Trash2,
  Copy,
  Check,
  Shield,
  FileText,
} from 'lucide-react';
import type { Enquiry, EnquiryStatus } from '@/lib/enquiryService';

interface EnquiryDetailModalProps {
  enquiry: Enquiry | null;
  onClose: () => void;
  onUpdateStatus: (id: string, status: EnquiryStatus, notes?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function EnquiryDetailModal({
  enquiry,
  onClose,
  onUpdateStatus,
  onDelete,
}: EnquiryDetailModalProps) {
  if (!enquiry) return null;

  const [status, setStatus] = useState<EnquiryStatus>(enquiry.status);
  const [adminNotes, setAdminNotes] = useState(enquiry.adminNotes || '');
  const [savingNotes, setSavingNotes] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const cleanPhone = enquiry.mobile.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `नमस्ते ${enquiry.name} जी, संगम ज्योतिष संस्थान की ओर से सादर प्रणाम। आपने हमारे संस्थान में ज्योतिषीय परामर्श हेतु पूछताछ दर्ज की थी। हम आपके प्रश्नों के समाधान हेतु उपस्थित हैं।`
  )}`;

  const handleStatusChange = async (newStatus: EnquiryStatus) => {
    setStatus(newStatus);
    await onUpdateStatus(enquiry.id, newStatus, adminNotes);
  };

  const handleSaveNotes = async () => {
    setSavingNotes(true);
    await onUpdateStatus(enquiry.id, status, adminNotes);
    setSavingNotes(false);
  };

  const handleDeleteClick = async () => {
    await onDelete(enquiry.id);
    onClose();
  };

  const handleCopy = () => {
    const summary = `संगम ज्योतिष पूछताछ
ID: ${enquiry.id}
नाम: ${enquiry.name}
मोबाइल: ${enquiry.mobile}
ईमेल: ${enquiry.email || 'N/A'}
जन्म दिनांक: ${enquiry.dob || 'N/A'}
जन्म समय: ${enquiry.tob || 'N/A'}
जन्म स्थान: ${enquiry.pob || 'N/A'}
प्रश्न: ${enquiry.question}
प्राप्त समय: ${new Date(enquiry.createdAt).toLocaleString('hi-IN')}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl rounded-3xl border border-maroon-100 bg-white p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-navy-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-maroon-100 px-3 py-0.5 text-xs font-bold text-maroon-900">
                {enquiry.id}
              </span>
              <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs text-navy-700">
                {enquiry.type === 'appointment' ? 'अपॉइंटमेंट बुकिंग' : enquiry.type === 'manual' ? 'मैन्युअल' : 'सामान्य पूछताछ'}
              </span>
            </div>
            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-navy-900 font-devanagari" lang="hi">
              {enquiry.name}
            </h2>
            <p className="text-xs text-navy-500">
              प्राप्त समय: {new Date(enquiry.createdAt).toLocaleString('hi-IN', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-navy-400 hover:bg-cream-100 hover:text-navy-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Contact & Action Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={`tel:${enquiry.mobile.replace(/\s+/g, '')}`}
            className="flex-1 min-w-[130px] rounded-xl bg-navy-900 py-2.5 px-4 text-center text-xs font-semibold text-white hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Phone className="h-4 w-4 text-gold-300" />
            <span>कॉल करें</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] rounded-xl bg-emerald-600 py-2.5 px-4 text-center text-xs font-semibold text-white hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp संदेश</span>
          </a>

          <button
            onClick={handleCopy}
            className="rounded-xl border border-navy-200 bg-cream-50 px-3 py-2.5 text-xs text-navy-700 hover:bg-cream-100 flex items-center gap-1.5"
            title="विवरण कॉपी करें"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'कॉपी हो गया' : 'कॉपी'}</span>
          </button>
        </div>

        {/* Status Controller */}
        <div className="mt-5 rounded-2xl bg-cream-50/70 p-4 border border-maroon-100/50">
          <label className="text-xs font-bold text-navy-800 uppercase tracking-wide block mb-2">
            पूछताछ की वर्तमान स्थिति (Status):
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'new', label: 'नई पूछताछ (New)', color: 'bg-blue-100 text-blue-900 border-blue-300' },
              { id: 'contacted', label: 'संपर्क किया (Contacted)', color: 'bg-amber-100 text-amber-900 border-amber-300' },
              { id: 'in_progress', label: 'प्रक्रियाधीन (In Progress)', color: 'bg-purple-100 text-purple-900 border-purple-300' },
              { id: 'completed', label: 'पूर्ण (Completed)', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
              { id: 'cancelled', label: 'रद्द (Cancelled)', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => handleStatusChange(st.id as EnquiryStatus)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition-all ${
                  status === st.id
                    ? `${st.color} font-bold ring-2 ring-maroon-700 shadow-xs`
                    : 'bg-white text-navy-600 border-navy-200 hover:bg-cream-100'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client & Birth Chart Details */}
        <div className="mt-6 space-y-4">
          <h3 className="text-sm font-bold text-maroon-900 flex items-center gap-1.5 border-b border-maroon-100 pb-1 font-devanagari">
            <User className="h-4 w-4" />
            जातक संपर्क एवं जन्म कुंडली विवरण
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 text-xs">
            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">मोबाइल नंबर:</span>
              <span className="font-semibold text-navy-900 text-sm">{enquiry.mobile}</span>
            </div>

            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">ईमेल:</span>
              <span className="font-semibold text-navy-900">{enquiry.email || 'उपलब्ध नहीं'}</span>
            </div>

            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">लिंग (Gender):</span>
              <span className="font-semibold text-navy-900">{enquiry.gender || 'उल्लेखित नहीं'}</span>
            </div>

            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">जन्म तिथि (DOB):</span>
              <span className="font-semibold text-navy-900 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-maroon-600" />
                {enquiry.dob || 'उपलब्ध नहीं'}
              </span>
            </div>

            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">जन्म समय (Time of Birth):</span>
              <span className="font-semibold text-navy-900 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-maroon-600" />
                {enquiry.tob || 'उपलब्ध नहीं'}
              </span>
            </div>

            <div className="rounded-xl border border-navy-100 bg-white p-3">
              <span className="text-navy-400 block text-[11px]">जन्म स्थान (Place of Birth):</span>
              <span className="font-semibold text-navy-900 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-maroon-600" />
                {enquiry.pob || 'उल्लेखित नहीं'}
              </span>
            </div>
          </div>

          {/* Question / Problem Statement */}
          <div className="rounded-2xl border border-maroon-200/80 bg-cream-50/70 p-4">
            <span className="text-xs font-bold text-maroon-900 flex items-center gap-1 mb-1 font-devanagari">
              <HelpCircle className="h-4 w-4 text-maroon-700" />
              जातक का मुख्य प्रश्न / समस्या विवरण:
            </span>
            <p className="text-sm text-navy-900 leading-relaxed font-sans whitespace-pre-wrap">
              {enquiry.question}
            </p>
          </div>

          {/* Internal Admin Notes */}
          <div className="rounded-2xl border border-navy-200 bg-white p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-navy-800 flex items-center gap-1">
                <FileText className="h-4 w-4 text-navy-600" />
                आंतरिक नोट्स (Admin Remarks / Follow-up Notes):
              </span>
              <button
                onClick={handleSaveNotes}
                disabled={savingNotes}
                className="btn-primary py-1 px-3 text-xs rounded-lg flex items-center gap-1"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{savingNotes ? 'सहेज रहे हैं...' : 'नोट्स सहेजें'}</span>
              </button>
            </div>
            <textarea
              rows={3}
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="परामर्श संबंधी विवरण, फलादेश सारांश या आगामी फॉलो-अप तिथि यहाँ लिखें..."
              className="w-full rounded-xl border border-navy-200 bg-cream-50/40 p-3 text-xs text-navy-900 focus:border-maroon-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4">
          {showDeleteConfirm ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-700 font-semibold">क्या आप इसे हटाना चाहते हैं?</span>
              <button
                onClick={handleDeleteClick}
                className="rounded-lg bg-rose-600 px-3 py-1 text-xs font-bold text-white hover:bg-rose-700"
              >
                हाँ, हटाएं
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded-lg border border-navy-200 px-3 py-1 text-xs text-navy-700"
              >
                रद्द करें
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span>रिकॉर्ड हटाएं</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="rounded-xl border border-navy-300 bg-white px-5 py-2 text-xs font-semibold text-navy-700 hover:bg-cream-100 transition-colors"
          >
            बंद करें
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
