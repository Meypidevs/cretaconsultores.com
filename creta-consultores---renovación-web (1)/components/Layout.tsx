
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { Breadcrumbs } from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Only show Breadcrumbs on non-home pages and put it below the fixed navbar spacing */}
      {!isHome && (
        <div className="pt-[72px] md:pt-[88px]"> 
          <Breadcrumbs />
        </div>
      )}

      {/* 
        If it's NOT home, we remove the top padding from main because breadcrumbs container 
        already pushes content down. If it IS home, main needs no padding as Hero handles it via pt-20 inside Home.tsx
        Actually, simplest is: Navbar is fixed.
        Home handles its own padding.
        Inner pages usually have pt-24.
        If Breadcrumbs exist, they take that space.
      */}
      <main className={`flex-grow ${!isHome ? '' : ''}`}>
        {children}
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};
