import { env } from '@/env';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type EnquiryType = 'appointment' | 'contact' | 'manual';
export type EnquiryStatus = 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';

export interface Enquiry {
  id: string;
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
  createdAt: string; // ISO String
  updatedAt: string; // ISO String
  source?: string;
}

export interface EnquiryStats {
  today: number;
  thisWeek: number;
  thisMonth: number;
  thisYear: number;
  total: number;
  byStatus: {
    new: number;
    contacted: number;
    in_progress: number;
    completed: number;
    cancelled: number;
  };
  byType: {
    appointment: number;
    contact: number;
    manual: number;
  };
}

const STORAGE_KEY = 'sangam_jyotish_enquiries_v1';

// Initialize Supabase client if configured
let supabase: SupabaseClient | null = null;
if (env.supabaseUrl && env.supabaseAnonKey) {
  try {
    supabase = createClient(env.supabaseUrl, env.supabaseAnonKey);
  } catch (err) {
    console.warn('Failed to initialize Supabase client:', err);
  }
}

// Empty by default - only real enquiries from MongoDB Atlas
const SAMPLE_ENQUIRIES: Enquiry[] = [];

/**
 * Helper to generate unique human-readable enquiry IDs
 */
export function generateEnquiryId(): string {
  const timestamp = Date.now().toString().slice(-4);
  const random = Math.floor(100 + Math.random() * 900);
  return `ENQ-${timestamp}${random}`;
}

/**
 * Helper to fetch from backend API with timeout and error handling
 */
async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  const baseUrl = env.apiBaseUrl || (typeof window !== 'undefined' ? '/api' : '');
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const res = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`API request to ${endpoint} returned status ${res.status}`);
      return null;
    }

    const json = await res.json();
    return json.data !== undefined ? json.data : json;
  } catch (err) {
    return null;
  }
}

/**
 * Fetch all enquiries (Backend API MongoDB -> Supabase -> Local Storage)
 */
export async function getEnquiries(): Promise<Enquiry[]> {
  // 1. Fetch from Backend Express API (MongoDB Atlas)
  const apiData = await fetchApi<any[]>('/enquiries');
  if (apiData !== null && Array.isArray(apiData)) {
    const normalized: Enquiry[] = apiData.map((item) => ({
      id: item.id || item._id,
      name: item.name,
      mobile: item.phone || item.mobile,
      email: item.email || '',
      gender: item.gender || '',
      dob: item.dob || '',
      tob: item.tob || '',
      pob: item.pob || '',
      question: item.question || '',
      type: (item.type || 'appointment') as EnquiryType,
      status: (item.status || 'new') as EnquiryStatus,
      adminNotes: item.adminNotes || '',
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: item.updatedAt || new Date().toISOString(),
      source: item.source || 'Website Form',
    }));

    // Cache real data locally
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  // 2. If Supabase is active, try to fetch from Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('createdAt', { ascending: false });

      if (!error && data) {
        const normalized = data.map((item: any) => ({
          ...item,
          mobile: item.mobile || item.phone || '',
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return normalized;
      }
    } catch (err) {
      console.warn('Supabase fetch failed, fallback to local storage:', err);
    }
  }

  // 3. Fallback to locally stored real enquiries (filtering out any old demo data)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: Enquiry[] = JSON.parse(raw);
      // Filter out legacy dummy entries
      const cleanData = parsed.filter(
        (item) => !['ENQ-1001', 'ENQ-1002', 'ENQ-1003', 'ENQ-1004', 'ENQ-1005'].includes(item.id)
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanData));
      return cleanData.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
  } catch (e) {
    // Ignore JSON parse errors
  }

  return [];
}

/**
 * Save a new enquiry (Backend MongoDB Atlas -> Supabase -> Local Storage)
 */
export async function saveEnquiry(
  payload: Omit<Enquiry, 'id' | 'status' | 'createdAt' | 'updatedAt'> & {
    id?: string;
    status?: EnquiryStatus;
  }
): Promise<Enquiry> {
  const now = new Date().toISOString();
  const newEnquiry: Enquiry = {
    id: payload.id || generateEnquiryId(),
    name: payload.name.trim(),
    mobile: payload.mobile.trim(),
    email: payload.email?.trim() || '',
    gender: payload.gender || '',
    dob: payload.dob || '',
    tob: payload.tob || '',
    pob: payload.pob || '',
    question: payload.question.trim(),
    type: payload.type,
    status: payload.status || 'new',
    adminNotes: payload.adminNotes || '',
    createdAt: now,
    updatedAt: now,
    source: payload.source || (payload.type === 'appointment' ? 'अपॉइंटमेंट फॉर्म' : 'संपर्क फॉर्म'),
  };

  // 1. Save to local storage for immediate optimistic UI
  try {
    const list = await getEnquiries();
    const updated = [newEnquiry, ...list.filter((item) => item.id !== newEnquiry.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }

  // 2. Save to Backend MongoDB Atlas API
  try {
    const apiResult = await fetchApi<any>('/enquiries', {
      method: 'POST',
      body: JSON.stringify({
        name: newEnquiry.name,
        phone: newEnquiry.mobile,
        email: newEnquiry.email,
        gender: newEnquiry.gender,
        dob: newEnquiry.dob,
        tob: newEnquiry.tob,
        pob: newEnquiry.pob,
        question: newEnquiry.question,
        type: newEnquiry.type,
        status: newEnquiry.status,
        adminNotes: newEnquiry.adminNotes,
        source: newEnquiry.source,
      }),
    });
    if (apiResult && (apiResult.id || apiResult._id)) {
      newEnquiry.id = apiResult.id || apiResult._id;
    }
  } catch (err) {
    console.warn('Backend API save failed (saved locally):', err);
  }

  // 3. Save to Supabase if connected
  if (supabase) {
    try {
      await supabase.from('enquiries').upsert(newEnquiry);
    } catch (err) {
      console.warn('Supabase sync error (cached locally):', err);
    }
  }

  // Trigger custom event so admin panel updates in real-time
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('enquiry_created', { detail: newEnquiry }));
  }

  return newEnquiry;
}

/**
 * Update an existing enquiry's status or notes
 */
export async function updateEnquiry(
  id: string,
  updates: Partial<Pick<Enquiry, 'status' | 'adminNotes' | 'name' | 'mobile' | 'email' | 'question'>>
): Promise<Enquiry | null> {
  const list = await getEnquiries();
  const index = list.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updatedItem: Enquiry = {
    ...list[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  list[index] = updatedItem;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

  // Update in Backend API (MongoDB Atlas)
  try {
    await fetchApi(`/enquiries/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  } catch (err) {
    console.warn('Backend API update failed:', err);
  }

  if (supabase) {
    try {
      await supabase.from('enquiries').update(updates).eq('id', id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('enquiry_updated', { detail: updatedItem }));
  }

  return updatedItem;
}

/**
 * Delete an enquiry
 */
export async function deleteEnquiry(id: string): Promise<boolean> {
  const list = await getEnquiries();
  const updated = list.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // Delete in Backend API (MongoDB Atlas)
  try {
    await fetchApi(`/enquiries/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.warn('Backend API delete failed:', err);
  }

  if (supabase) {
    try {
      await supabase.from('enquiries').delete().eq('id', id);
    } catch (err) {
      console.warn('Supabase delete failed:', err);
    }
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('enquiry_deleted', { detail: id }));
  }

  return true;
}

/**
 * Clear local cache
 */
export function resetSampleData(): Enquiry[] {
  localStorage.removeItem(STORAGE_KEY);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('enquiry_reset'));
  }
  return [];
}

/**
 * Calculate Enquiry Statistics (Today, Week, Month, Year, Total)
 */
export function calculateStats(enquiries: Enquiry[]): EnquiryStats {
  const now = new Date();

  // Start of today (00:00:00)
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  // 7 days ago timestamp
  const sevenDaysAgo = startOfToday - 6 * 24 * 60 * 60 * 1000;

  // Start of this month (1st day 00:00:00)
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  // Start of this year (Jan 1 00:00:00)
  const startOfYear = new Date(now.getFullYear(), 0, 1).getTime();

  const stats: EnquiryStats = {
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    thisYear: 0,
    total: enquiries.length,
    byStatus: {
      new: 0,
      contacted: 0,
      in_progress: 0,
      completed: 0,
      cancelled: 0,
    },
    byType: {
      appointment: 0,
      contact: 0,
      manual: 0,
    },
  };

  for (const item of enquiries) {
    const itemTime = new Date(item.createdAt).getTime();

    // Time-based breakdown
    if (itemTime >= startOfToday) {
      stats.today += 1;
    }
    if (itemTime >= sevenDaysAgo) {
      stats.thisWeek += 1;
    }
    if (itemTime >= startOfMonth) {
      stats.thisMonth += 1;
    }
    if (itemTime >= startOfYear) {
      stats.thisYear += 1;
    }

    // Status breakdown
    if (stats.byStatus[item.status] !== undefined) {
      stats.byStatus[item.status] += 1;
    }

    // Type breakdown
    if (stats.byType[item.type] !== undefined) {
      stats.byType[item.type] += 1;
    }
  }

  return stats;
}

/**
 * Export filtered enquiries to downloadable CSV file
 */
export function exportEnquiriesToCSV(enquiries: Enquiry[], filename = 'sangam_jyotish_enquiries.csv') {
  if (!enquiries.length) {
    alert('डाउनलोड करने के लिए कोई रिकॉर्ड उपलब्ध नहीं है।');
    return;
  }

  const headers = [
    'Enquiry ID',
    'Date & Time',
    'Name',
    'Mobile',
    'Email',
    'Gender',
    'DOB',
    'Birth Time',
    'Birth Place',
    'Type',
    'Status',
    'Question / Problem',
    'Admin Notes',
    'Source',
  ];

  const escapeCSV = (val: string | undefined | null) => {
    if (!val) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = enquiries.map((e) => [
    escapeCSV(e.id),
    escapeCSV(new Date(e.createdAt).toLocaleString('hi-IN')),
    escapeCSV(e.name),
    escapeCSV(e.mobile),
    escapeCSV(e.email || ''),
    escapeCSV(e.gender || ''),
    escapeCSV(e.dob || ''),
    escapeCSV(e.tob || ''),
    escapeCSV(e.pob || ''),
    escapeCSV(e.type === 'appointment' ? 'अपॉइंटमेंट' : e.type === 'manual' ? 'मैन्युअल' : 'संपर्क पूछताछ'),
    escapeCSV(e.status),
    escapeCSV(e.question),
    escapeCSV(e.adminNotes || ''),
    escapeCSV(e.source || ''),
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
