# संगम ज्योतिष संस्थान (Sangam Jyotish Sansthan)

> **प्रामाणिक वैदिक ज्योतिष, कुंडली विश्लेषण एवं विवाह परामर्श वेब ऐप्लिकेशन एवं बैकएंड सर्वर**

---

## 📁 Clean Fullstack Architecture

```text
jyotishi/
├── server/                        # Backend Express.js + MongoDB Atlas API
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # MongoDB Atlas Connection with DNS resolver
│   │   ├── controllers/
│   │   │   └── enquiryController.js # Enquiry CRUD & Real-Time Analytics
│   │   ├── models/
│   │   │   └── Enquiry.js         # Mongoose Schema & Indexes
│   │   ├── routes/
│   │   │   └── enquiryRoutes.js   # Express API Endpoints (/api/enquiries)
│   │   └── server.js              # Express App Bootstrap & Health Check
│   ├── .env                       # Server Environment (MongoDB Atlas URI, Port, CORS)
│   ├── .env.example               # Template for Server Environment
│   ├── package.json               # Server Dependencies (express, mongoose, cors, dotenv)
│   └── test-db.js                 # Direct MongoDB Atlas Connection Tester
│
├── src/                           # Frontend React (TypeScript + Vite + Tailwind CSS)
│   ├── components/
│   │   ├── admin/                 # Admin Dashboard, Filter Bar, Modals, Stats Cards
│   │   ├── cards/                 # Astrologer, Service, Feature, Testimonial Cards
│   │   ├── forms/                 # Appointment & Contact Submission Forms
│   │   ├── layout/                # Navbar, Footer, TopBar, Floating WhatsApp/Call, Layout
│   │   ├── sections/              # Hero, Problem Categories, Rashi Chakra, Kundli, etc.
│   │   └── ui/                    # SEO, Reveal, LoadingSpinner, SectionHeading, etc.
│   ├── data/                      # 12 Services, Astrologers, Testimonials, Content, SEO
│   ├── env/                       # Type-Safe Client Environment Configuration
│   ├── lib/                       # Enquiry Service (MongoDB + fallback), Admin Auth, WhatsApp
│   ├── pages/
│   │   ├── admin/                 # Admin Portal (/admin) with Dashboard & PIN Login
│   │   ├── HomePage.tsx           # Homepage with Hero, Stats, Rashi Chakra & Services
│   │   ├── AboutPage.tsx          # About Sansthan & Philosophy
│   │   ├── ServicesPage.tsx       # All 12 Astrology Services Catalog
│   │   ├── ServiceDetailPage.tsx  # Dynamic In-Depth Vedic Service Pages (/services/:slug)
│   │   ├── AstrologersPage.tsx    # Certified Vedic Astrologers Directory
│   │   ├── AppointmentPage.tsx    # Consultation Booking & Birth Details Form
│   │   ├── ContactPage.tsx        # General Enquiries & Contact Form
│   │   ├── TestimonialsPage.tsx   # Verified Client Reviews
│   │   ├── FAQPage.tsx            # Frequently Asked Questions
│   │   ├── PrivacyPolicyPage.tsx  # Privacy Policy
│   │   ├── TermsPage.tsx          # Terms & Conditions
│   │   ├── DisclaimerPage.tsx     # Astrology Consultation Disclaimer
│   │   └── NotFoundPage.tsx       # 404 Page with Quick Navigation
│   ├── App.tsx                    # Router & Route-Level Code Splitting
│   ├── main.tsx                   # React DOM Entry
│   └── index.css                  # Royal Vedic Astrology Tailwind CSS Design System
│
├── public/                        # Optimized Assets, Sitemap, Robots, Manifest
├── .env                           # Client Environment Configuration
├── .env.example                   # Template for Client Environment
└── package.json                   # Root Scripts & Client Dependencies
```

---

## 🚀 Getting Started

### 1. Run Everything Concurrently (Client + Server)
```bash
npm run dev:all
```

### 2. Or Run Separately

#### Backend Server (Port 5000):
```bash
npm run server:dev     # with auto-reload (watch mode)
# or
npm run server         # standard start
```

#### Frontend Client (Port 5173):
```bash
npm run dev
```

---

## ⚙️ Environment Variables

### Client (`.env`):
```env
VITE_SITE_URL=https://sangamjyotish.com
VITE_PHONE="+91 7800224400"
VITE_PHONE_RAW="+917800224400"
VITE_WHATSAPP_NUMBER="917800224400"
VITE_EMAIL="contact@sangamjyotish.com"
VITE_API_BASE_URL="http://localhost:5000/api"
```

### Server (`server/.env`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://vidishagawas04_db_user:AempzXhGJxfIRTDn@cluster0.xxarnhq.mongodb.net/sangam_jyotish?retryWrites=true&w=majority&appName=Cluster0
CORS_ORIGIN=http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173,https://fourisetest.tech
ADMIN_PIN=admin123
```

---

## 🛡️ Admin Portal
- **URL**: `http://localhost:5173/admin`
- **Default PIN**: `admin123`
- **Features**:
  - Live Analytics Cards (Today, This Week, This Month, This Year, Total)
  - Full Enquiry Management with Status Tracking (New, Contacted, In Progress, Completed, Cancelled)
  - Search by Name, Mobile, Email, Question & Place of Birth
  - Period and Category Filters
  - Detailed Birth Chart Inspection Modal (DOB, Time of Birth, Place of Birth)
  - Instant One-Click Calling & WhatsApp Launch
  - CSV Data Export & Manual Walk-in Entry
