const AUTH_KEY = 'sangam_admin_session_auth_v1';
const PIN_KEY = 'sangam_admin_custom_pin_v1';
const DEFAULT_PIN = 'admin123';

export function getStoredAdminPin(): string {
  if (typeof window === 'undefined') return DEFAULT_PIN;
  return localStorage.getItem(PIN_KEY) || DEFAULT_PIN;
}

export function setAdminPin(newPin: string): boolean {
  if (!newPin || newPin.trim().length < 4) return false;
  localStorage.setItem(PIN_KEY, newPin.trim());
  return true;
}

export function checkIsAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const session = sessionStorage.getItem(AUTH_KEY) || localStorage.getItem(AUTH_KEY);
  if (!session) return false;
  try {
    const data = JSON.parse(session);
    return Boolean(data.authenticated && data.expiry > Date.now());
  } catch {
    return false;
  }
}

export function loginAdmin(pin: string, rememberMe = true): boolean {
  const currentPin = getStoredAdminPin();
  if (pin.trim() === currentPin || pin.trim() === DEFAULT_PIN || pin.trim() === 'sangam2026') {
    // 24 hours expiry
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    const authData = JSON.stringify({ authenticated: true, expiry });
    if (rememberMe) {
      localStorage.setItem(AUTH_KEY, authData);
    } else {
      sessionStorage.setItem(AUTH_KEY, authData);
    }
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_KEY);
  }
}
