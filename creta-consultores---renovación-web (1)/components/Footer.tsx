
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Lock } from 'lucide-react';
import { CONTACT_INFO, LOCAL_LANDING_PAGES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column - Wider */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <ShieldCheck size={32} className="text-secondary" />
              <div>
                <h3 className="font-serif text-2xl font-bold leading-none">CRETA</h3>
                <p className="text-xs tracking-widest uppercase text-slate-400">Consultores</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Asesoramiento integral para empresas y particulares. Nos comprometemos con su éxito a través de la excelencia, la ética y la profesionalidad desde hace más de 25 años.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.linkedin} className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
              <a href={CONTACT_INFO.twitter} className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Áreas Práctica</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicios/fiscal" className="hover:text-secondary transition-colors">Asesoría Fiscal</Link></li>
              <li><Link to="/servicios/laboral" className="hover:text-secondary transition-colors">Gestión Laboral</Link></li>
              <li><Link to="/servicios/concursal" className="hover:text-secondary transition-colors">Derecho Concursal</Link></li>
              <li><Link to="/servicios/herencias" className="hover:text-secondary transition-colors">Herencias</Link></li>
              <li><Link to="/servicios/mercantil" className="hover:text-secondary transition-colors">Mercantil</Link></li>
            </ul>
          </div>

           {/* Local SEO Links (New) */}
           <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Zonas de Actuación</h4>
            <ul className="space-y-3 text-sm">
              {LOCAL_LANDING_PAGES.map(page => (
                <li key={page.slug}>
                  <Link to={`/${page.slug}`} className="hover:text-secondary transition-colors">
                    {page.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span className="text-xs">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Creta Consultores S.L. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-4 md:mt-0">
            <Link to="/legal/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/legal/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/legal/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
            {/* Enlace discreto al Admin */}
            <Link to="/admin" className="hover:text-secondary transition-colors opacity-50 hover:opacity-100" title="Acceso Interno">
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
