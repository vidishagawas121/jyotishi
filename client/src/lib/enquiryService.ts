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

// Initial sample inquiries to provide a rich out-of-the-box experience
const SAMPLE_ENQUIRIES: Enquiry[] = [
  {
    id: 'ENQ-1001',
    name: 'राजेश कुमार शर्मा',
    mobile: '+91 98765 43210',
    email: 'rajesh.sharma@example.com',
    gender: 'पुरुष',
    dob: '1992-08-15',
    tob: '06:45',
    pob: 'वाराणसी, उत्तर प्रदेश',
    question: 'करियर में पदोन्नति और कार्यक्षेत्र परिवर्तन के योग कब तक बन रहे हैं? वर्तमान में काफी अवरोध आ रहे हैं।',
    type: 'appointment',
    status: 'new',
    adminNotes: 'पहला संपर्क, करियर फलादेश एवं रत्न सुझाव की आवश्यकता।',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    source: 'वेबसाइट अपॉइंटमेंट फॉर्म',
  },
  {
    id: 'ENQ-1002',
    name: 'प्रिया एवं अमित वर्मा',
    mobile: '+91 98112 34567',
    email: 'priya.verma@example.com',
    gender: 'महिला',
    dob: '1996-11-22',
    tob: '14:30',
    pob: 'लखनऊ, उत्तर प्रदेश',
    question: 'विवाह हेतु 36 गुण मिलान और मांगलिक दोष विचार कराना है। क्या गुण मिलान अनुकूल रहेगा?',
    type: 'appointment',
    status: 'contacted',
    adminNotes: 'WhatsApp पर बात हुई, दोनों की कुंडलियां प्राप्त हो गई हैं।',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago (Today)
    updatedAt: new Date().toISOString(),
    source: 'वेबसाइट अपॉइंटमेंट फॉर्म',
  },
  {
    id: 'ENQ-1003',
    name: 'सुनील गुप्ता',
    mobile: '+91 97654 32109',
    email: 'sunil.gupta@bizmail.com',
    gender: 'पुरुष',
    dob: '1985-03-10',
    tob: '10:15',
    pob: 'इंदौर, मध्य प्रदेश',
    question: 'नया व्यापार आरंभ करने हेतु शुभ मुहूर्त एवं व्यापारिक वास्तु दोष का समाधान जानना चाहते हैं।',
    type: 'contact',
    status: 'in_progress',
    adminNotes: 'व्यापारिक वास्तु लेआउट का अध्ययन जारी है।',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago (This week)
    updatedAt: new Date().toISOString(),
    source: 'संपर्क फॉर्म',
  },
  {
    id: 'ENQ-1004',
    name: 'अनीता देशपांडे',
    mobile: '+91 94230 12345',
    email: 'anita.d@example.com',
    gender: 'महिला',
    dob: '1990-07-04',
    tob: '18:20',
    pob: 'पुणे, महाराष्ट्र',
    question: 'शनि की साढ़े साती चल रही है, मानसिक अशांति एवं स्वास्थ्य कष्ट के निवारण हेतु नवग्रह शांति पूजा विधान।',
    type: 'appointment',
    status: 'completed',
    adminNotes: 'परामर्श पूर्ण हुआ। नवग्रह शांति जप व सात्विक दान विधि बताई गई। जातक संतुष्ट।',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(), // 12 days ago (This month)
    updatedAt: new Date().toISOString(),
    source: 'वेबसाइट अपॉइंटमेंट फॉर्म',
  },
  {
    id: 'ENQ-1005',
    name: 'विकास मेहरा',
    mobile: '+91 99887 76655',
    email: 'vikas.mehra@company.com',
    gender: 'पुरुष',
    dob: '1988-12-30',
    tob: '04:10',
    pob: 'दिल्ली',
    question: 'धन लाभ एवं अचल संपत्ति (मकान) खरीदने का शुभ समय व वित्तीय स्थिरता के ज्योतिषीय उपाय।',
    type: 'contact',
    status: 'completed',
    adminNotes: 'चतुर्थ भाव एवं बृहस्पति गोचर के आधार पर संपत्ति क्रय मुहूर्त दिया गया।',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(), // 45 days ago (This year)
    updatedAt: new Date().toISOString(),
    source: 'संपर्क फॉर्म',
  },
];

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
  if (!env.apiBaseUrl) return null;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const res = await fetch(`${env.apiBaseUrl}${endpoint}`, {
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
    // Graceful offline fallback
    return null;
  }
}

/**
 * Fetch all enquiries (Backend API MongoDB -> Supabase -> Local Storage)
 */
export async function getEnquiries(): Promise<Enquiry[]> {
  let localData: Enquiry[] = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      localData = JSON.parse(raw);
    } else {
      localData = SAMPLE_ENQUIRIES;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
    }
  } catch (e) {
    localData = SAMPLE_ENQUIRIES;
  }

  // 1. Try Backend Express API (MongoDB Atlas)
  const apiData = await fetchApi<any[]>('/enquiries');
  if (apiData && Array.isArray(apiData) && apiData.length > 0) {
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

    // Cache locally
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

      if (!error && data && data.length > 0) {
        const map = new Map<string, Enquiry>();
        localData.forEach((item) => map.set(item.id, item));
        data.forEach((item: Enquiry) => map.set(item.id, item));
        const merged = Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
    } catch (err) {
      console.warn('Supabase fetch failed, fallback to local storage:', err);
    }
  }

  return localData.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
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
 * Reset data to default sample set (helpful for admin preview/demo)
 */
export function resetSampleData(): Enquiry[] {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_ENQUIRIES));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('enquiry_reset'));
  }
  return SAMPLE_ENQUIRIES;
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
