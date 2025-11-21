
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SERVICES } from '../constants';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on home page
  if (pathnames.length === 0) return null;

  // Dictionary to map slugs to readable names
  const getName = (slug: string, index: number, allPathnames: string[]) => {
    // Check if it's a service detail page
    if (allPathnames[index - 1] === 'servicios') {
      const service = SERVICES.find(s => s.id === slug);
      return service ? service.title : slug;
    }
    
    // Static mappings
    const map: Record<string, string> = {
      'servicios': 'Servicios',
      'nosotros': 'La Firma',
      'noticias': 'Actualidad',
      'contacto': 'Contacto',
      'legal': 'Información Legal',
    };

    return map[slug] || slug.replace(/-/g, ' '); // Fallback: remove hyphens
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-3">
      <div className="container mx-auto px-4 md:px-6">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <li>
            <Link to="/" className="hover:text-secondary flex items-center transition-colors">
              <Home size={14} className="mr-1" /> Inicio
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getName(value, index, pathnames);

            return (
              <li key={to} className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-slate-300" />
                {isLast ? (
                  <span className="font-semibold text-primary capitalize truncate max-w-[200px]">
                    {name}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-secondary transition-colors capitalize">
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
