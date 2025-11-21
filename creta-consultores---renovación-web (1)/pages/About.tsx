import React, { useEffect } from 'react';
import { TEAM } from '../constants';
import { Award, Users, Briefcase, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nosotros - La Firma" 
        description="Conozca a Creta Consultores. Más de 25 años de experiencia en asesoría empresarial. Equipo senior de economistas y abogados en Sant Cugat."
      />

       {/* Header */}
       <div className="bg-slate-50 py-20">
         <div className="container mx-auto px-4 md:px-6">
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">La Firma</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Más de 25 años de experiencia y compromiso</h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Creta Consultores es el resultado de la unión de profesionales con una dilatada trayectoria en el asesoramiento empresarial, unidos por una misma visión: la excelencia en el servicio.
            </p>
          </div>
       </div>

       {/* History / Values */}
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="prose prose-lg text-slate-600">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Nuestra Trayectoria</h2>
              <p>
                Fundada a finales de los años 90, Creta Consultores nació con la vocación de ofrecer una alternativa a las grandes firmas de auditoría y a las gestorías tradicionales. Buscábamos cubrir el hueco existente para la PYME que requiere un asesoramiento de alta calidad técnica pero con un trato cercano y personalizado.
              </p>
              <p>
                Durante estas décadas, hemos crecido junto a nuestros clientes, acompañándolos en sus procesos de expansión, internacionalización y relevo generacional. Hoy en día, contamos con un equipo multidisciplinar capaz de dar respuesta a la creciente complejidad del entorno legal y económico.
              </p>
              <h3 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Nuestra Filosofía</h3>
              <p>
                Entendemos la consultoría no como un gasto, sino como una inversión. Nuestro objetivo es aportar valor, anticipándonos a los problemas y detectando oportunidades de ahorro y mejora para su negocio.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center">
                 <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Clock size={24} />
                 </div>
                 <h4 className="font-bold text-primary text-lg mb-2">+25 Años</h4>
                 <p className="text-sm text-slate-500">De experiencia continuada en el sector.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center mt-8">
                 <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Users size={24} />
                 </div>
                 <h4 className="font-bold text-primary text-lg mb-2">Equipo Senior</h4>
                 <p className="text-sm text-slate-500">Profesionales altamente cualificados.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center">
                 <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Briefcase size={24} />
                 </div>
                 <h4 className="font-bold text-primary text-lg mb-2">360º</h4>
                 <p className="text-sm text-slate-500">Servicio integral para la empresa.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center mt-8">
                 <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                   <Award size={24} />
                 </div>
                 <h4 className="font-bold text-primary text-lg mb-2">Calidad</h4>
                 <p className="text-sm text-slate-500">Compromiso ético y profesional.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-primary py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Profesionales</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Nuestro Equipo Directivo</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map(member => (
                <div key={member.id} className="bg-slate-800 rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-secondary text-xs font-bold uppercase tracking-wide mb-4">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};