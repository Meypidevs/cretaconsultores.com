
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { SEO } from '../components/SEO';
import { useData } from '../context/DataContext';

export const Home: React.FC = () => {
  const { posts } = useData();
  
  // Get latest 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Creta Consultores" 
        description="Asesoría integral para empresas en Barcelona y Sant Cugat. Especialistas en Fiscal, Laboral, Contable y Jurídico. Más de 25 años de experiencia."
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Office Skyscraper" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 block animate-fade-in">
              Experiencia y Confianza
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Soluciones integrales para su <span className="text-secondary">tranquilidad</span> empresarial.
            </h1>
            <p className="text-lg text-slate-200 mb-10 leading-relaxed max-w-2xl animate-fade-in-up delay-100">
              En Creta Consultores combinamos experiencia y visión moderna para ofrecer servicios de asesoría fiscal, laboral y jurídica adaptados a los retos de hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link 
                to="/servicios"
                className="bg-secondary hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Nuestros Servicios <ArrowRight size={18} />
              </Link>
              <Link 
                to="/contacto" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-center transition-all"
              >
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Value Prop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Experiencia Probada</h3>
              <p className="text-slate-600">Más de 25 años asesorando a empresas líderes en sus sectores con un equipo multidisciplinar.</p>
            </div>
            <div className="text-center p-6 border-x border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Atención Personalizada</h3>
              <p className="text-slate-600">Cada cliente es único. Asignamos un asesor personal que conoce a fondo su negocio.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Tecnología Avanzada</h3>
              <p className="text-slate-600">Utilizamos las últimas herramientas digitales para agilizar gestiones y mejorar la comunicación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2 block">Qué hacemos</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Áreas de Especialización</h2>
            </div>
            <Link to="/servicios" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors mt-4 md:mt-0">
              Ver todos los servicios <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link to="/servicios" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
              Ver todos los servicios <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80" 
                alt="Meeting Room" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Comprometidos con su crecimiento</h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                En Creta Consultores, entendemos que detrás de cada empresa hay personas, sueños y esfuerzo. Nuestro objetivo no es solo cumplir con las obligaciones legales, sino convertirnos en un socio estratégico que impulse su desarrollo.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Respuesta ágil y proactiva ante cambios legislativos.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Transparencia total en nuestros honorarios y gestiones.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Confidencialidad y ética profesional rigurosa.</span>
                </li>
              </ul>
              <Link 
                to="/nosotros"
                className="inline-block bg-secondary hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Conozca al Equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">Actualidad y Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <Link to={`/noticias/${post.id}`} key={post.id} className="block group">
                <article className="cursor-pointer h-full flex flex-col">
                  <div className="overflow-hidden rounded-xl mb-4 h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="bg-slate-100 px-2 py-1 rounded text-primary font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Strip */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-yellow-400 to-secondary"></div>
         <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
           <h2 className="text-3xl font-serif font-bold text-white mb-4">¿Listo para optimizar su negocio?</h2>
           <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Solicite una primera consulta gratuita y descubra cómo podemos ayudarle a alcanzar sus objetivos.</p>
           <Link 
             to="/contacto" 
             className="inline-block bg-white text-primary hover:bg-secondary hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg"
           >
             Contactar con un Asesor
           </Link>
         </div>
      </section>
    </div>
  );
};
