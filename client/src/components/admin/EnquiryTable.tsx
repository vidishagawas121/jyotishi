import { Eye, Phone, MessageCircle, Calendar, Clock, MapPin, Trash2, ArrowUpDown } from 'lucide-react';
import type { Enquiry, EnquiryStatus } from '@/lib/enquiryService';

interface EnquiryTableProps {
  enquiries: Enquiry[];
  onViewDetails: (enquiry: Enquiry) => void;
  onUpdateStatus: (id: string, status: EnquiryStatus) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function EnquiryTable({
  enquiries,
  onViewDetails,
  onUpdateStatus,
  onDelete,
}: EnquiryTableProps) {
  if (enquiries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-navy-200 bg-white p-12 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-cream-100 text-maroon-700">
          <Calendar className="h-6 w-6" />
        </div>
        <h3 className="text-base font-bold text-navy-900 font-devanagari">
          कोई पूछताछ नहीं मिली
        </h3>
        <p className="mt-1 text-xs text-navy-500 max-w-sm mx-auto">
          चुने गए फ़िल्टर या खोज के अनुसार कोई रिकॉर्ड उपलब्ध नहीं है। फ़िल्टर बदलें या नई पूछताछ जोड़ें।
        </p>
      </div>
    );
  }

  const getStatusBadge = (status: EnquiryStatus) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'contacted':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'in_progress':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'cancelled':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: EnquiryStatus) => {
    switch (status) {
      case 'new':
        return 'नई (New)';
      case 'contacted':
        return 'संपर्क किया';
      case 'in_progress':
        return 'प्रक्रियाधीन';
      case 'completed':
        return 'पूर्ण (Done)';
      case 'cancelled':
        return 'रद्द';
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-maroon-100 bg-white shadow-xs">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left text-xs text-navy-800">
          <thead className="bg-cream-100/70 border-b border-maroon-100/60 font-semibold text-navy-900 uppercase tracking-wider text-[11px]">
            <tr>
              <th className="py-3 px-4">ID / दिनांक</th>
              <th className="py-3 px-4">जातक का नाम व संपर्क</th>
              <th className="py-3 px-4">जन्म विवरण (Kundli Data)</th>
              <th className="py-3 px-4">प्रकार एवं प्रश्न विवरण</th>
              <th className="py-3 px-4">स्थिति (Status)</th>
              <th className="py-3 px-4 text-right">कार्यवाही (Actions)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100/70 font-sans">
            {enquiries.map((e) => {
              const cleanPhone = e.mobile.replace(/[^0-9]/g, '');
              const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                `नमस्ते ${e.name} जी, संगम ज्योतिष संस्थान से संपर्क किया जा रहा है।`
              )}`;

              return (
                <tr key={e.id} className="hover:bg-cream-50/60 transition-colors">
                  {/* ID & Date */}
                  <td className="py-3.5 px-4 align-top">
                    <span className="font-mono font-bold text-maroon-900 block text-xs">
                      {e.id}
                    </span>
                    <span className="text-[11px] text-navy-500 block mt-0.5">
                      {new Date(e.createdAt).toLocaleDateString('hi-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="text-[10px] text-navy-400 block font-mono">
                      {new Date(e.createdAt).toLocaleTimeString('hi-IN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </td>

                  {/* Customer Info */}
                  <td className="py-3.5 px-4 align-top">
                    <button
                      onClick={() => onViewDetails(e)}
                      className="font-bold text-navy-950 hover:text-maroon-700 text-left font-devanagari text-sm block"
                    >
                      {e.name}
                    </button>
                    <a
                      href={`tel:${e.mobile.replace(/\s+/g, '')}`}
                      className="text-xs text-navy-700 hover:text-maroon-600 block mt-0.5 font-medium"
                    >
                      {e.mobile}
                    </a>
                    {e.email && (
                      <span className="text-[11px] text-navy-400 block truncate max-w-[170px]">
                        {e.email}
                      </span>
                    )}
                  </td>

                  {/* Birth Info */}
                  <td className="py-3.5 px-4 align-top text-xs space-y-0.5">
                    {e.dob ? (
                      <div className="flex items-center gap-1 text-navy-700">
                        <Calendar className="h-3 w-3 text-maroon-600 flex-shrink-0" />
                        <span>{e.dob}</span>
                      </div>
                    ) : (
                      <span className="text-navy-400 text-[11px]">DOB उपलब्ध नहीं</span>
                    )}
                    {e.tob && (
                      <div className="flex items-center gap-1 text-navy-600 text-[11px]">
                        <Clock className="h-3 w-3 text-navy-400 flex-shrink-0" />
                        <span>{e.tob}</span>
                      </div>
                    )}
                    {e.pob && (
                      <div className="flex items-center gap-1 text-navy-600 text-[11px]">
                        <MapPin className="h-3 w-3 text-navy-400 flex-shrink-0" />
                        <span className="truncate max-w-[130px]">{e.pob}</span>
                      </div>
                    )}
                  </td>

                  {/* Type & Question */}
                  <td className="py-3.5 px-4 align-top max-w-xs">
                    <span className="inline-block rounded-md bg-cream-200/80 px-2 py-0.5 text-[10px] font-semibold text-maroon-900 mb-1">
                      {e.type === 'appointment'
                        ? '📅 अपॉइंटमेंट'
                        : e.type === 'manual'
                        ? '✍️ मैन्युअल'
                        : '💬 संपर्क'}
                    </span>
                    <p className="text-xs text-navy-800 line-clamp-2 leading-relaxed" title={e.question}>
                      {e.question}
                    </p>
                  </td>

                  {/* Status Dropdown */}
                  <td className="py-3.5 px-4 align-top">
                    <select
                      value={e.status}
                      onChange={(ev) => onUpdateStatus(e.id, ev.target.value as EnquiryStatus)}
                      className={`rounded-lg border px-2 py-1 text-[11px] font-semibold transition-colors focus:outline-none cursor-pointer ${getStatusBadge(
                        e.status
                      )}`}
                    >
                      <option value="new">नई (New)</option>
                      <option value="contacted">संपर्क किया</option>
                      <option value="in_progress">प्रक्रियाधीन</option>
                      <option value="completed">पूर्ण (Done)</option>
                      <option value="cancelled">रद्द</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 align-top text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onViewDetails(e)}
                        className="rounded-lg border border-navy-200 bg-cream-50 p-1.5 text-navy-700 hover:bg-navy-900 hover:text-white transition-colors"
                        title="पूरा विवरण देखें"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </button>

                      <a
                        href={`tel:${e.mobile.replace(/\s+/g, '')}`}
                        className="rounded-lg border border-navy-200 bg-cream-50 p-1.5 text-navy-700 hover:bg-navy-900 hover:text-white transition-colors"
                        title="कॉल करें"
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </a>

                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-emerald-300 bg-emerald-50 p-1.5 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                        title="WhatsApp करें"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                      </a>

                      <button
                        onClick={() => {
                          if (confirm(`क्या आप ${e.name} की पूछताछ हटाना चाहते हैं?`)) {
                            onDelete(e.id);
                          }
                        }}
                        className="rounded-lg border border-navy-100 p-1.5 text-navy-400 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                        title="हटाएं"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="divide-y divide-navy-100 lg:hidden">
        {enquiries.map((e) => {
          const cleanPhone = e.mobile.replace(/[^0-9]/g, '');
          const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
            `नमस्ते ${e.name} जी, संगम ज्योतिष संस्थान से संपर्क किया जा रहा है।`
          )}`;

          return (
            <div key={e.id} className="p-4 space-y-3 hover:bg-cream-50/50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-maroon-900 mr-2">
                    {e.id}
                  </span>
                  <span className="rounded bg-cream-200 px-1.5 py-0.5 text-[10px] font-semibold text-maroon-900">
                    {e.type === 'appointment' ? 'अपॉइंटमेंट' : e.type === 'manual' ? 'मैन्युअल' : 'संपर्क'}
                  </span>
                  <h4
                    onClick={() => onViewDetails(e)}
                    className="font-bold text-navy-950 font-devanagari text-base mt-1 cursor-pointer"
                  >
                    {e.name}
                  </h4>
                </div>

                <select
                  value={e.status}
                  onChange={(ev) => onUpdateStatus(e.id, ev.target.value as EnquiryStatus)}
                  className={`rounded-lg border px-2 py-1 text-xs font-semibold ${getStatusBadge(
                    e.status
                  )}`}
                >
                  <option value="new">नई (New)</option>
                  <option value="contacted">संपर्क किया</option>
                  <option value="in_progress">प्रक्रियाधीन</option>
                  <option value="completed">पूर्ण</option>
                  <option value="cancelled">रद्द</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-navy-600 bg-cream-50/70 p-2.5 rounded-xl border border-navy-100/50">
                <div>
                  <span className="text-[10px] text-navy-400 block">मोबाइल:</span>
                  <a href={`tel:${e.mobile.replace(/\s+/g, '')}`} className="font-semibold text-navy-900">
                    {e.mobile}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-navy-400 block">जन्म तिथि / समय:</span>
                  <span className="font-medium text-navy-800">
                    {e.dob || 'N/A'} {e.tob ? `(${e.tob})` : ''}
                  </span>
                </div>
              </div>

              <p className="text-xs text-navy-800 line-clamp-2 leading-relaxed bg-white p-2 rounded-lg border border-navy-100">
                {e.question}
              </p>

              <div className="flex items-center justify-between pt-1 text-[11px] text-navy-400">
                <span>
                  {new Date(e.createdAt).toLocaleDateString('hi-IN', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDetails(e)}
                    className="btn-outline py-1 px-2.5 text-xs rounded-lg"
                  >
                    विवरण देखें
                  </button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-emerald-600 p-2 text-white"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`tel:${e.mobile.replace(/\s+/g, '')}`}
                    className="rounded-lg bg-navy-900 p-2 text-white"
                  >
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
