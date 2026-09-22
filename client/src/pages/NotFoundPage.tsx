import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream-50 py-16 px-4">
      <SEO
        title="404 पृष्ठ नहीं मिला (Page Not Found)"
        description="क्षमा करें, आप जिस पृष्ठ की खोज कर रहे हैं वह उपलब्ध नहीं है।"
        noindex={true}
      />
      <div className="max-w-md w-full text-center card-premium p-8 sm:p-12 shadow-card">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-maroon-50 text-maroon-700">
          <span className="font-devanagari text-4xl font-bold">ॐ</span>
        </div>
        <span className="font-display text-6xl font-bold text-maroon-700">404</span>
        <h1 className="mt-3 font-devanagari text-2xl font-bold text-navy-900" lang="hi">
          पृष्ठ नहीं मिला
        </h1>
        <p className="mt-2 text-sm text-navy-600 leading-relaxed" lang="hi">
          आप जिस पृष्ठ की खोज कर रहे हैं वह उपलब्ध नहीं है अथवा स्थानांतरित कर दिया गया है।
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary text-sm">
            <Home className="h-4 w-4" />
            <span lang="hi">होमपेज पर जाएँ</span>
          </Link>
          <Link to="/services" className="btn-outline text-sm">
            <span lang="hi">हमारी सेवाएं</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
