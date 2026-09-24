import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { WhatsAppModalProvider } from '@/context/WhatsAppModalContext';
import { WhatsAppConsultationModal } from '@/components/modals/WhatsAppConsultationModal';

// Route-level code splitting
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const AstrologersPage = lazy(() => import('@/pages/AstrologersPage').then((m) => ({ default: m.AstrologersPage })));
const AppointmentPage = lazy(() => import('@/pages/AppointmentPage').then((m) => ({ default: m.AppointmentPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage })));
const FAQPage = lazy(() => import('@/pages/FAQPage').then((m) => ({ default: m.FAQPage })));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const DisclaimerPage = lazy(() => import('@/pages/DisclaimerPage').then((m) => ({ default: m.DisclaimerPage })));
const AdminPage = lazy(() => import('@/pages/admin/AdminPage').then((m) => ({ default: m.AdminPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function App() {
  return (
    <BrowserRouter>
      <WhatsAppModalProvider>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/astrologers" element={<AstrologersPage />} />
              <Route path="/appointment" element={<AppointmentPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/*" element={<AdminPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
        <WhatsAppConsultationModal />
      </WhatsAppModalProvider>
    </BrowserRouter>
  );
}

export default App;

