'use client';

import { usePathname } from 'next/navigation';
import TopNavBar from '@/components/layout/TopNavBar';
import BottomNavBar from '@/components/layout/BottomNavBar';
import Footer from '@/components/layout/Footer';

/**
 * Conditionally renders the site shell (navbar, footer) based on the current route.
 * Auth pages (/login, /signup, /forgot-password) get a clean fullscreen canvas
 * without any navigation chrome.
 */
const AUTH_ROUTES = ['/login', '/signup', '/forgot-password'];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen">{children}</main>
      <BottomNavBar />
      <Footer />
    </>
  );
}
