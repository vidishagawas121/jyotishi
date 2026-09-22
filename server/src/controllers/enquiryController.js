import { Enquiry } from '../models/Enquiry.js';
import { connectDB } from '../config/db.js';

/**
 * Helper to compute period boundaries based on Indian Standard Time / Local Time
 */
function getPeriodDateRange(period) {
  const now = new Date();
  let start = new Date(now);

  if (period === 'today') {
    start.setHours(0, 0, 0, 0);
  } else if (period === 'this_week') {
    const day = now.getDay();
    const diff = (day === 0 ? 6 : day - 1); // Monday as start of week
    start.setDate(now.getDate() - diff);
    start.setHours(0, 0, 0, 0);
  } else if (period === 'this_month') {
    start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  } else if (period === 'this_year') {
    start = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
  } else {
    return null;
  }

  return { $gte: start, $lte: now };
}

/**
 * @desc Create new Enquiry
 * @route POST /api/enquiries
 */
export async function createEnquiry(req, res) {
  try {
    await connectDB();
    const {
      name,
      phone,
      mobile,
      email,
      service,
      serviceTitle,
      astrologer,
      preferredDate,
      preferredTime,
      dob,
      tob,
      pob,
      gender,
      question,
      type,
      status,
      adminNotes,
      source,
    } = req.body || {};

    const contactPhone = phone || mobile;

    if (!name || !contactPhone) {
      return res.status(400).json({
        success: false,
        message: 'कृपया नाम और मोबाइल नंबर दर्ज करें (Name and Phone are required)',
      });
    }

    const enquiry = await Enquiry.create({
      name: String(name).trim(),
      phone: String(contactPhone).trim(),
      email: email ? String(email).trim() : '',
      service: service || 'kundli-analysis',
      serviceTitle: serviceTitle || 'कुंडली विश्लेषण',
      astrologer: astrologer || 'any',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      dob: dob || '',
      tob: tob || '',
      pob: pob || '',
      gender: gender || '',
      question: question || '',
      type: type || 'appointment',
      status: status || 'new',
      adminNotes: adminNotes || '',
      source: source || 'Website Form',
    });

    return res.status(201).json({
      success: true,
      message: 'पूछताछ सफलतापूर्वक दर्ज की गई (Enquiry created successfully)',
      data: enquiry,
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return res.status(error.name === 'ValidationError' ? 400 : 500).json({
      success: false,
      message: 'त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Get all enquiries with optional filters
 * @route GET /api/enquiries
 */
export async function getEnquiries(req, res) {
  try {
    await connectDB();
    const { search, status, type, period, limit = 200, skip = 0 } = req.query;

    const query = {};

    // Search by name, phone, email, service, question, place of birth
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { phone: searchRegex },
        { email: searchRegex },
        { serviceTitle: searchRegex },
        { question: searchRegex },
        { pob: searchRegex },
      ];
    }

    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Filter by type
    if (type && type !== 'all') {
      query.type = type;
    }

    // Filter by period
    if (period && period !== 'all') {
      const dateRange = getPeriodDateRange(period);
      if (dateRange) {
        query.createdAt = dateRange;
      }
    }

    const total = await Enquiry.countDocuments(query);
    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 })
      .skip(Number(skip))
      .limit(Number(limit));

    return res.json({
      success: true,
      count: enquiries.length,
      total,
      data: enquiries,
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Get aggregated analytics and statistics
 * @route GET /api/enquiries/stats
 */
export async function getStats(req, res) {
  try {
    await connectDB();
    const now = new Date();

    // Start of Today
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);

    // Start of This Week (Monday)
    const day = now.getDay();
    const diff = (day === 0 ? 6 : day - 1);
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - diff);
    weekStart.setHours(0, 0, 0, 0);

    // Start of This Month
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);

    // Start of This Year
    const yearStart = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);

    const [
      total,
      today,
      thisWeek,
      thisMonth,
      thisYear,
      newCount,
      contactedCount,
      inProgressCount,
      completedCount,
      cancelledCount,
    ] = await Promise.all([
      Enquiry.countDocuments({}),
      Enquiry.countDocuments({ createdAt: { $gte: todayStart } }),
      Enquiry.countDocuments({ createdAt: { $gte: weekStart } }),
      Enquiry.countDocuments({ createdAt: { $gte: monthStart } }),
      Enquiry.countDocuments({ createdAt: { $gte: yearStart } }),
      Enquiry.countDocuments({ status: 'new' }),
      Enquiry.countDocuments({ status: 'contacted' }),
      Enquiry.countDocuments({ status: 'in_progress' }),
      Enquiry.countDocuments({ status: 'completed' }),
      Enquiry.countDocuments({ status: 'cancelled' }),
    ]);

    return res.json({
      success: true,
      data: {
        total,
        today,
        thisWeek,
        thisMonth,
        thisYear,
        byStatus: {
          new: newCount,
          contacted: contactedCount,
          in_progress: inProgressCount,
          completed: completedCount,
          cancelled: cancelledCount,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Get single enquiry by ID
 * @route GET /api/enquiries/:id
 */
export async function getEnquiryById(req, res) {
  try {
    await connectDB();
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'पूछताछ नहीं मिली (Enquiry not found)',
      });
    }

    return res.json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Update enquiry status and/or admin notes
 * @route PATCH /api/enquiries/:id
 */
export async function updateEnquiry(req, res) {
  try {
    await connectDB();
    const { status, adminNotes } = req.body;
    const updateFields = {};

    if (status) updateFields.status = status;
    if (adminNotes !== undefined) updateFields.adminNotes = adminNotes;

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'पूछताछ नहीं मिली (Enquiry not found)',
      });
    }

    return res.json({
      success: true,
      message: 'अपडेट सफलतापूर्वक सहेजा गया (Updated successfully)',
      data: enquiry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Delete an enquiry
 * @route DELETE /api/enquiries/:id
 */
export async function deleteEnquiry(req, res) {
  try {
    await connectDB();
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'पूछताछ नहीं मिली (Enquiry not found)',
      });
    }

    return res.json({
      success: true,
      message: 'पूछताछ हटाई गई (Enquiry deleted)',
      data: { id: req.params.id },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}

/**
 * @desc Seed sample realistic demo enquiries for testing
 * @route POST /api/enquiries/seed
 */
export async function seedDemoEnquiries(req, res) {
  try {
    const count = await Enquiry.countDocuments({});
    if (count > 0) {
      return res.json({
        success: true,
        message: `डेटाबेस में पहले से ${count} पूछताछ मौजूद हैं`,
      });
    }

    const demoData = [
      {
        name: 'अमित कुमार शर्मा',
        phone: '+91 9876543210',
        email: 'amit.sharma@example.com',
        service: 'kundli-analysis',
        serviceTitle: 'जन्म कुंडली विश्लेषण',
        astrologer: 'पं. राधेश्याम शास्त्री',
        preferredDate: new Date().toISOString().split('T')[0],
        preferredTime: '10:00 AM',
        dob: '1992-05-14',
        tob: '06:45',
        pob: 'वाराणसी, उत्तर प्रदेश',
        gender: 'male',
        question: 'करियर में आ रही बाधाएं और नई नौकरी का अनुकूल समय क्या है?',
        type: 'appointment',
        status: 'new',
        adminNotes: 'WhatsApp पर जन्म विवरण भेजा गया है।',
      },
      {
        name: 'सुनीता त्रिपाठी',
        phone: '+91 9811223344',
        email: 'sunita.t@example.com',
        service: 'marriage-matching',
        serviceTitle: 'विवाह एवं कुंडली मिलान',
        astrologer: 'आचार्य विद्याधर जोशी',
        preferredDate: new Date().toISOString().split('T')[0],
        preferredTime: '02:30 PM',
        dob: '1996-11-20',
        tob: '14:15',
        pob: 'हरिद्वार, उत्तराखंड',
        gender: 'female',
        question: 'वर-कन्या कुंडली मिलान, नाड़ी दोष एवं मांगलिक विचार हेतु।',
        type: 'appointment',
        status: 'contacted',
        adminNotes: '36 गुण मिलान रिपोर्ट तैयार है।',
      },
      {
        name: 'राजेश कुमार वर्मा',
        phone: '+91 9988776655',
        email: 'rajesh.v@example.com',
        service: 'business-wealth',
        serviceTitle: 'व्यापार एवं धन वृद्धि',
        astrologer: 'any',
        preferredDate: new Date().toISOString().split('T')[0],
        preferredTime: '04:00 PM',
        dob: '1985-08-02',
        tob: '11:20',
        pob: 'जयपुर, राजस्थान',
        gender: 'male',
        question: 'नया व्यापार शुरू करने का शुभ मुहूर्त और ग्रह स्थिति।',
        type: 'appointment',
        status: 'in_progress',
        adminNotes: 'शुभ मुहूर्त 24 तारीख का दिया गया।',
      },
      {
        name: 'डॉ. मीनाक्षी चतुर्वेदी',
        phone: '+91 9765432100',
        email: 'meenakshi@example.com',
        service: 'general-consultation',
        serviceTitle: 'सामान्य ज्योतिष परामर्श',
        astrologer: 'any',
        question: 'संस्थान के परामर्श समय व दक्षिणा के संबंध में जानकारी चाहिए।',
        type: 'contact',
        status: 'completed',
        adminNotes: 'परामर्श पूर्ण हुआ।',
      },
    ];

    await Enquiry.insertMany(demoData);

    return res.status(201).json({
      success: true,
      message: 'नमूना डेटाबेस रिकॉर्ड सफलतापूर्वक दर्ज किए गए',
      count: demoData.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'सर्वर त्रुटि: ' + error.message,
    });
  }
}
