import { useState, useEffect, useMemo } from 'react';
import {
  getEnquiries,
  updateEnquiry,
  deleteEnquiry,
  saveEnquiry,
  calculateStats,
  exportEnquiriesToCSV,
  type Enquiry,
  type EnquiryStatus,
  type EnquiryType,
} from '@/lib/enquiryService';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminStatsCards } from '@/components/admin/AdminStatsCards';
import { EnquiryFilterBar } from '@/components/admin/EnquiryFilterBar';
import { EnquiryTable } from '@/components/admin/EnquiryTable';
import { EnquiryDetailModal } from '@/components/admin/EnquiryDetailModal';
import { ManualEnquiryModal } from '@/components/admin/ManualEnquiryModal';
import { SEO } from '@/components/ui/SEO';

interface AdminDashboardPageProps {
  onLogout: () => void;
}

export function AdminDashboardPage({ onLogout }: AdminDashboardPageProps) {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all'); // all, today, week, month, year
  const [selectedType, setSelectedType] = useState('all'); // all, appointment, contact, manual
  const [selectedStatus, setSelectedStatus] = useState('all'); // all, new, contacted, in_progress, completed, cancelled

  // Modals State
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [showManualModal, setShowManualModal] = useState(false);

  // Fetch enquiries
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getEnquiries();
      setEnquiries(data);
    } catch (err) {
      console.error('Failed to load enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Auto-refresh when tab is focused
    const handleFocus = () => loadData();
    window.addEventListener('focus', handleFocus);

    // Auto-poll every 10 seconds for new customer bookings
    const intervalId = setInterval(loadData, 10000);

    // Listen to real-time events across windows/tabs
    const handleCreated = () => loadData();
    const handleUpdated = () => loadData();
    const handleDeleted = () => loadData();
    const handleReset = () => loadData();

    window.addEventListener('enquiry_created', handleCreated);
    window.addEventListener('enquiry_updated', handleUpdated);
    window.addEventListener('enquiry_deleted', handleDeleted);
    window.addEventListener('enquiry_reset', handleReset);

    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(intervalId);
      window.removeEventListener('enquiry_created', handleCreated);
      window.removeEventListener('enquiry_updated', handleUpdated);
      window.removeEventListener('enquiry_deleted', handleDeleted);
      window.removeEventListener('enquiry_reset', handleReset);
    };
  }, []);

  // Compute stats on whole dataset
  const stats = useMemo(() => calculateStats(enquiries), [enquiries]);

  // Filtered dataset
  const filteredEnquiries = useMemo(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const sevenDaysAgo = startOfToday - 6 * 24 * 60 * 60 * 1000;
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const startOfYear = new Date(now.getFullYear(), 0, 1).getTime();

    return enquiries.filter((item) => {
      const itemTime = new Date(item.createdAt).getTime();

      // 1. Period filter
      if (selectedPeriod === 'today' && itemTime < startOfToday) return false;
      if (selectedPeriod === 'week' && itemTime < sevenDaysAgo) return false;
      if (selectedPeriod === 'month' && itemTime < startOfMonth) return false;
      if (selectedPeriod === 'year' && itemTime < startOfYear) return false;

      // 2. Type filter
      if (selectedType !== 'all' && item.type !== selectedType) return false;

      // 3. Status filter
      if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;

      // 4. Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.mobile.includes(q) ||
          (item.email && item.email.toLowerCase().includes(q)) ||
          item.question.toLowerCase().includes(q) ||
          (item.pob && item.pob.toLowerCase().includes(q)) ||
          item.id.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [enquiries, selectedPeriod, selectedType, selectedStatus, searchQuery]);

  // Actions
  const handleUpdateStatus = async (id: string, newStatus: EnquiryStatus, notes?: string) => {
    await updateEnquiry(id, { status: newStatus, adminNotes: notes });
    await loadData();
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus, adminNotes: notes ?? prev.adminNotes } : null));
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    await deleteEnquiry(id);
    await loadData();
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(null);
    }
  };

  const handleManualSave = async (payload: {
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
  }) => {
    await saveEnquiry(payload);
    await loadData();
  };

  const handleExportCSV = () => {
    exportEnquiriesToCSV(
      filteredEnquiries,
      `sangam_jyotish_enquiries_${selectedPeriod}_${new Date().toISOString().slice(0, 10)}.csv`
    );
  };

  return (
    <div className="min-h-screen bg-cream-50/80 font-sans pb-16">
      <SEO title="व्यवस्थापक डैशबोर्ड | संगम ज्योतिष संस्थान" noindex={true} />

      {/* Header */}
      <AdminHeader onLogout={onLogout} />

      {/* Main Container */}
      <main className="container-px mt-6 sm:mt-8 space-y-6">
        {/* Welcome & Overview Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-maroon-100/80 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-950 font-devanagari" lang="hi">
              पूछताछ एवं अपॉइंटमेंट डैशबोर्ड
            </h1>
            <p className="text-xs text-navy-600 mt-0.5">
              आज, सप्ताह, माह व वर्ष की ग्राहक पूछताछ का लाइव विश्लेषण एवं प्रबंधन (MongoDB Atlas)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              MongoDB लाइव
            </span>
          </div>
        </div>

        {/* 1. Analytics & Counters (Today, Week, Month, Year, Total) */}
        <section>
          <AdminStatsCards
            stats={stats}
            activePeriod={selectedPeriod}
            onPeriodSelect={(period) => setSelectedPeriod(period)}
          />
        </section>

        {/* 2. Filter & Search Controls */}
        <section>
          <EnquiryFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            onExportCSV={handleExportCSV}
            onOpenManualModal={() => setShowManualModal(true)}
            onRefresh={loadData}
            totalFilteredCount={filteredEnquiries.length}
          />
        </section>

        {/* 3. Enquiry Data Table & Mobile Cards */}
        <section>
          {loading ? (
            <div className="rounded-2xl border border-navy-100 bg-white p-12 text-center text-navy-500 text-sm">
              डेटा लोड हो रहा है...
            </div>
          ) : (
            <EnquiryTable
              enquiries={filteredEnquiries}
              onViewDetails={(enq) => setSelectedEnquiry(enq)}
              onUpdateStatus={handleUpdateStatus}
              onDelete={handleDeleteEnquiry}
            />
          )}
        </section>
      </main>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <EnquiryDetailModal
          enquiry={selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDeleteEnquiry}
        />
      )}

      {/* Manual Enquiry Create Modal */}
      <ManualEnquiryModal
        isOpen={showManualModal}
        onClose={() => setShowManualModal(false)}
        onSave={handleManualSave}
      />
    </div>
  );
}
