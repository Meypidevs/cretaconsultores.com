
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, LOCAL_LANDING_PAGES } from '../constants';
import { useData } from '../context/DataContext';
import { CheckCircle2, Calculator, Users, BarChart3, Scale, Gavel, TrendingUp, ChevronRight, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

// Helper to get icon
const getIcon = (name: string) => {
  switch(name) {
    case 'Calculator': return <Calculator className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
    case 'Scale': return <Scale className="w-6 h-6" />;
    case 'Gavel': return <Gavel className="w-6 h-6" />;
    case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
    default: return <Calculator className="w-6 h-6" />;
  }
};

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const { posts } = useData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center container mx-auto">
        <SEO title="Servicio no encontrado" description="Página no encontrada" />
        <h1 className="text-4xl font-bold text-primary mb-4">Servicio no encontrado</h1>
        <Link to="/servicios" className="text-secondary underline">Volver a servicios</Link>
      </div>
    );
  }

  // Filter related blog posts from dynamic data
  const relatedPosts = posts.filter(post => 
    service.title.includes(post.category) ||
    post.category.includes(service.title) ||
    (service.id === 'fiscal' && post.category === 'Fiscal') ||
    (service.id === 'laboral' && post.category === 'Laboral') ||
    (service.id === 'mercantil' && post.category === 'Mercantil') ||
    (service.id === 'concursal' && post.category === 'Concursal') ||
    (service.id === 'emprendedores' && post.category === 'Mercantil')
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={service.title}
        description={service.shortDescription}
        image={service.image}
      />

      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
         <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80"></div>
         </div>
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Área de Práctica</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{service.title}</h1>
            <p className="text-lg text-slate-200 max-w-2xl">{service.shortDescription}</p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sticky top-32">
              <h3 className="font-bold text-primary text-lg mb-4">Nuestros Servicios</h3>
              <ul className="space-y-2">
                {SERVICES.map(s => (
                  <li key={s.id}>
                    <Link 
                      to={`/servicios/${s.id}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        s.id === id 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-white hover:shadow-sm text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {getIcon(s.iconName)}
                        <span className="text-sm font-medium line-clamp-1">{s.title}</span>
                      </div>
                      {s.id !== id && <ChevronRight size={16} />}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-secondary/10 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2">¿Necesita ayuda?</h4>
                <p className="text-sm text-slate-600 mb-4">Contacte con nuestros especialistas para una primera valoración.</p>
                <Link to="/contacto" className="flex items-center gap-2 text-secondary font-bold hover:underline">
                  <Phone size={18} /> Contactar
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            <div 
              className="prose prose-lg prose-slate max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: service.longDescription }}
            />

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">¿Qué incluye este servicio?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Strip */}
            <div className="mt-12 p-8 bg-primary text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
               <div>
                 <h3 className="text-2xl font-serif font-bold mb-2">Solicite Presupuesto</h3>
                 <p className="text-slate-300">Sin compromiso. Analizamos sus necesidades.</p>
               </div>
               <Link 
                 to="/contacto"
                 className="bg-secondary hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
               >
                 Pedir Cita
               </Link>
            </div>

            {/* Related Blog Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 border-t border-gray-100 pt-12">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Artículos relacionados</h3>
                <div className="grid grid-cols-1 gap-6">
                  {relatedPosts.map(post => (
                     <Link key={post.id} to={`/noticias/${post.id}`} className="group block bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-md rounded-lg p-4 transition-all">
                        <div className="flex gap-4">
                           <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden">
                             <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                           </div>
                           <div>
                              <span className="text-xs font-bold text-secondary uppercase mb-1 block">{post.category}</span>
                              <h4 className="font-bold text-slate-800 group-hover:text-primary mb-2 leading-tight">{post.title}</h4>
                              <div className="text-sm text-secondary font-semibold flex items-center">
                                Leer más <ArrowRight size={14} className="ml-1" />
                              </div>
                           </div>
                        </div>
                     </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Local SEO Links */}
            <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-secondary" /> 
                Disponible en su zona
              </h4>
              <p className="text-sm text-slate-600 mb-4">Prestamos este servicio de forma presencial y telemática en las principales áreas de negocio del Vallès.</p>
              <div className="flex flex-wrap gap-2">
                {LOCAL_LANDING_PAGES.map(page => (
                   <Link key={page.slug} to={`/${page.slug}`} className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full hover:border-secondary hover:text-secondary transition-colors">
                     {page.city}
                   </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
