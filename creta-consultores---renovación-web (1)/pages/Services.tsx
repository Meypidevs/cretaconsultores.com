import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { SEO } from '../components/SEO';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Servicios de Asesoría Integral"
        description="Descubra nuestros servicios de asesoría Fiscal, Laboral, Contable y Jurídica. Soluciones profesionales para empresas y autónomos en Sant Cugat y Barcelona."
      />
      
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Soluciones Integrales</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Asesoría Fiscal, Laboral, Contable y Jurídica
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos un asesoramiento 360º para su empresa. Nuestro equipo de expertos integra servicios de <strong>gestoría contable</strong>, <strong>consultoría laboral</strong> y <strong>defensa jurídica</strong> para abordar cualquier reto empresarial desde todas las perspectivas necesarias.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      
      {/* Methodology/Approach */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                   Excelencia en Gestión Empresarial y Soporte Jurídico
                 </h2>
                 <p className="text-slate-600 mb-4">
                   No somos una gestoría tradicional. Nuestro valor añadido reside en la integración de la <strong>asesoría fiscal</strong> con una visión estratégica del <strong>derecho mercantil y laboral</strong>, garantizando la proactividad y el acompañamiento constante.
                 </p>
                 <ul className="space-y-4 mt-8">
                   <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm font-bold text-lg">1</div>
                     <div>
                       <h4 className="font-bold text-primary">Auditoría Fiscal y Laboral Inicial</h4>
                       <p className="text-sm text-slate-500">Estudiamos a fondo su situación tributaria y laboral actual para detectar riesgos y áreas de mejora.</p>
                     </div>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm font-bold text-lg">2</div>
                     <div>
                       <h4 className="font-bold text-primary">Estrategia Jurídica Personalizada</h4>
                       <p className="text-sm text-slate-500">Diseñamos soluciones legales específicas adaptadas a su sector, protegiendo su patrimonio.</p>
                     </div>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm font-bold text-lg">3</div>
                     <div>
                       <h4 className="font-bold text-primary">Control Contable y Seguimiento</h4>
                       <p className="text-sm text-slate-500">Monitorizamos sus estados financieros y nos adaptamos proactivamente a los cambios normativos.</p>
                     </div>
                   </li>
                 </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Estrategia de Asesoría Fiscal y Laboral" className="rounded-xl shadow-2xl" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};