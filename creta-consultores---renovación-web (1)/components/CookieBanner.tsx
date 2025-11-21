
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('creta_cookie_consent');
    if (!consent) {
      // Small delay to not overwhelm user immediately
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('creta_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('creta_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h4 className="font-serif font-bold text-primary mb-2">Valoramos su privacidad</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Puede obtener más información en nuestra <Link to="/legal/cookies" className="text-secondary underline hover:text-yellow-700">Política de Cookies</Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={handleDecline}
            className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-md"
          >
            Aceptar todas
          </button>
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-slate-600"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
