import { Search, Filter, Download, Plus, RefreshCw, X, RotateCcw } from 'lucide-react';
import type { EnquiryType, EnquiryStatus } from '@/lib/enquiryService';

interface EnquiryFilterBarProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedPeriod: string;
  onPeriodChange: (val: string) => void;
  selectedType: string;
  onTypeChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  onExportCSV: () => void;
  onOpenManualModal: () => void;
  onRefresh: () => void;
  totalFilteredCount: number;
}

export function EnquiryFilterBar({
  searchQuery,
  onSearchChange,
  selectedPeriod,
  onPeriodChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  onExportCSV,
  onOpenManualModal,
  onRefresh,
  totalFilteredCount,
}: EnquiryFilterBarProps) {
  const periodOptions = [
    { value: 'all', label: 'सभी समय (All Time)' },
    { value: 'today', label: 'आज (Today)' },
    { value: 'week', label: 'इस सप्ताह (This Week)' },
    { value: 'month', label: 'इस महीने (This Month)' },
    { value: 'year', label: 'इस वर्ष (This Year)' },
  ];

  const typeOptions: { value: string; label: string }[] = [
    { value: 'all', label: 'सभी प्रकार (All Types)' },
    { value: 'appointment', label: 'अपॉइंटमेंट (Appointment)' },
    { value: 'contact', label: 'संपर्क पूछताछ (Contact)' },
    { value: 'manual', label: 'मैन्युअल (Manual / Walk-in)' },
  ];

  const statusOptions: { value: string; label: string }[] = [
    { value: 'all', label: 'सभी स्थितियां (All Statuses)' },
    { value: 'new', label: 'नई (New)' },
    { value: 'contacted', label: 'संपर्क किया (Contacted)' },
    { value: 'in_progress', label: 'प्रक्रियाधीन (In Progress)' },
    { value: 'completed', label: 'पूर्ण (Completed)' },
    { value: 'cancelled', label: 'रद्द (Cancelled)' },
  ];

  const hasActiveFilters =
    searchQuery !== '' || selectedPeriod !== 'all' || selectedType !== 'all' || selectedStatus !== 'all';

  const clearAllFilters = () => {
    onSearchChange('');
    onPeriodChange('all');
    onTypeChange('all');
    onStatusChange('all');
  };

  return (
    <div className="rounded-2xl border border-maroon-100 bg-white p-4 shadow-xs space-y-4">
      {/* Top Bar: Search, Add Manual, Export, Refresh */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ग्राहक का नाम, मोबाइल नंबर, ईमेल, जन्म स्थान या प्रश्न खोजें..."
            className="w-full rounded-xl border border-navy-200 bg-cream-50/40 py-2.5 pl-10 pr-10 text-sm text-navy-900 placeholder-navy-400 focus:border-maroon-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenManualModal}
            className="btn-primary py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>नई पूछताछ जोड़ें</span>
          </button>

          <button
            onClick={onExportCSV}
            className="btn-outline py-2 px-3 text-xs sm:text-sm rounded-xl flex items-center gap-1.5 bg-white hover:bg-cream-100"
            title="CSV एक्सेल फाइल डाउनलोड करें"
          >
            <Download className="h-4 w-4" />
            <span>CSV डाउनलोड</span>
          </button>

          <button
            onClick={onRefresh}
            className="rounded-xl border border-navy-200 bg-white p-2 text-navy-600 hover:bg-cream-100 hover:text-maroon-700 transition-colors"
            title="MongoDB डेटा रिफ्रेश करें"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Filter Selectors Bar */}
      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-navy-100/70">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-navy-700">
          <Filter className="h-3.5 w-3.5 text-maroon-700" />
          <span>फ़िल्टर:</span>
        </div>

        {/* Period Filter */}
        <select
          value={selectedPeriod}
          onChange={(e) => onPeriodChange(e.target.value)}
          className="rounded-lg border border-navy-200 bg-cream-50/50 px-3 py-1.5 text-xs text-navy-800 font-medium focus:border-maroon-500 focus:outline-none focus:ring-1 focus:ring-maroon-200"
        >
          {periodOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="rounded-lg border border-navy-200 bg-cream-50/50 px-3 py-1.5 text-xs text-navy-800 font-medium focus:border-maroon-500 focus:outline-none focus:ring-1 focus:ring-maroon-200"
        >
          {typeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border border-navy-200 bg-cream-50/50 px-3 py-1.5 text-xs text-navy-800 font-medium focus:border-maroon-500 focus:outline-none focus:ring-1 focus:ring-maroon-200"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Clear Filter Button */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="ml-auto inline-flex items-center gap-1 text-xs text-maroon-700 hover:text-maroon-900 font-medium underline"
          >
            फ़िल्टर हटाएं (Clear All)
          </button>
        )}

        <div className="ml-auto text-xs text-navy-500">
          प्रदर्शित रिकॉर्ड्स: <strong className="text-navy-900">{totalFilteredCount}</strong>
        </div>
      </div>
    </div>
  );
}
