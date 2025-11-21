import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LOCAL_LANDING_PAGES, CONTACT_INFO, SERVICES } from '../constants';
import { MapPin, Phone, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export const LocalLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const pageData = LOCAL_LANDING_PAGES.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageData]);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageData.seoTitle.replace(' | Creta Consultores', '')} // Remove if needed to avoid double branding logic in SEO component
        description={pageData.seoDescription}
      />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           {/* Abstract background pattern or map image could go here */}
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
             alt={`Oficinas cerca de ${pageData.city}`}
             className="w-full h-full object-cover"
           />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-secondary font-bold text-sm uppercase tracking-wider mb-6 border border-white/10">
              <MapPin size={16} /> Servicio en {pageData.city}
           </div>
           <h1 
             className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
             dangerouslySetInnerHTML={{ __html: pageData.heroTitle }}
           />
           <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
             {pageData.introText}
           </p>
           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-secondary hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-1"
              >
                Solicitar Cita
              </Link>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Llamar Ahora
              </a>
           </div>
        </div>
      </div>

      {/* Main Local Content */}
      <div className="container mx-auto px-4 md:px-6 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg prose-slate max-w-none">
               <h2 className="font-serif text-3xl font-bold text-primary">Asesoramiento experto cerca de usted</h2>
               <div dangerouslySetInnerHTML={{ __html: pageData.localContent }} />
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg">
               <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">¿Por qué elegir Creta Consultores?</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary mt-1">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Experiencia Contrastada</h4>
                      <p className="text-sm text-slate-600">Más de 25 años asesorando empresas en el Vallès Occidental.</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Ubicación Estratégica</h4>
                      <p className="text-sm text-slate-600">Oficinas centrales en Sant Cugat (Edificio Fórum), con fácil acceso y parking.</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Trato Directo</h4>
                      <p className="text-sm text-slate-600">Sin centralitas impersonales. Hable directamente con su asesor.</p>
                    </div>
                 </li>
               </ul>
            </div>
         </div>
      </div>

      {/* Services Summary */}
      <div className="bg-gray-50 py-20">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-primary mb-4">Nuestros Servicios en {pageData.city}</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">Cobertura integral para todas las necesidades legales y económicas de su negocio.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {SERVICES.slice(0, 6).map(service => (
                 <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <h3 className="font-bold text-primary text-lg mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{service.shortDescription}</p>
                    <Link to={`/servicios/${service.id}`} className="text-secondary text-sm font-semibold hover:underline flex items-center">
                       Más información <ArrowRight size={14} className="ml-1" />
                    </Link>
                 </div>
               ))}
            </div>
            <div className="text-center mt-10">
               <Link to="/servicios" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all">
                  Ver todos los servicios
               </Link>
            </div>
         </div>
      </div>

      {/* Map & CTA */}
      <div className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
               <div className="lg:w-1/2 p-12 text-white flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Visítenos en Sant Cugat</h2>
                  <p className="text-slate-300 text-lg mb-8">
                     Nuestras oficinas centrales están equipadas para recibirle con la máxima comodidad y confidencialidad.
                  </p>
                  <div className="space-y-4 text-slate-200">
                     <p className="flex items-center gap-3">
                        <MapPin className="text-secondary" /> {CONTACT_INFO.address}
                     </p>
                     <p className="flex items-center gap-3">
                        <Phone className="text-secondary" /> {CONTACT_INFO.phone}
                     </p>
                  </div>
                  <div className="mt-10">
                     <Link to="/contacto" className="bg-secondary hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold inline-block transition-colors">
                        Cómo llegar
                     </Link>
                  </div>
               </div>
               <div className="lg:w-1/2 min-h-[300px]">
                  <iframe 
                    src="https://maps.google.com/maps?q=Crta.+Rubí,+40,+Sant+Cugat+del+Vallès&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    title="Ubicación Creta Consultores"
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};