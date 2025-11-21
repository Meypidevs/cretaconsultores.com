import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 bg-slate-50 flex items-center justify-center">
      <SEO title="Página no encontrada (404)" description="La página que buscas no existe." />
      
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-9xl font-serif font-bold text-primary/10 select-none">404</div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary -mt-12 mb-6 relative z-10">
            Página no encontrada
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Lo sentimos, parece que la página que está buscando no existe o ha sido movida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" /> Volver al Inicio
            </Link>
            <Link 
              to="/servicios" 
              className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-secondary hover:text-secondary transition-colors"
            >
              <Search size={18} className="mr-2" /> Ver Servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};