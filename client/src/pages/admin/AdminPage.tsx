import { useState, useEffect } from 'react';
import { checkIsAdminAuthenticated, logoutAdmin } from '@/lib/adminAuth';
import { AdminLoginPage } from './AdminLoginPage';
import { AdminDashboardPage } from './AdminDashboardPage';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(true);

  useEffect(() => {
    const authed = checkIsAdminAuthenticated();
    setIsAuthenticated(authed);
    setChecking(false);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center text-cream-100">
        <div className="text-center space-y-3">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold-400 border-r-transparent"></div>
          <p className="text-xs text-gold-300">प्रमाणीकरण जांच...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboardPage onLogout={handleLogout} />;
}
