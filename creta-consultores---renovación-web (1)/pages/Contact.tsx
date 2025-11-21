import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido";
      isValid = false;
    }

    const phoneRegex = /^[0-9+ ]{9,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Formato de teléfono no válido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Por favor, cuéntanos brevemente tu caso";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData(prev => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    if(!formData.privacy) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', privacy: false });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Contacto" 
        description="Contacte con Creta Consultores en Sant Cugat. Teléfono, email y mapa de ubicación. Solicite su cita previa para asesoría fiscal y legal."
      />

       <div className="container mx-auto px-4 md:px-6 mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Hablemos</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Estamos aquí para ayudarle. Envíenos un mensaje o visítenos en nuestras oficinas.</p>
        </div>

        <div className="container mx-auto px-4 md:px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Información de Contacto</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-full text-secondary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Dirección</p>
                      <p className="text-slate-600">{CONTACT_INFO.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-full text-secondary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Teléfono</p>
                      <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="bg-slate-50 p-3 rounded-full text-secondary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Email</p>
                      <p className="text-slate-600">{CONTACT_INFO.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="bg-slate-50 p-3 rounded-full text-secondary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Horario</p>
                      <p className="text-slate-600">{CONTACT_INFO.schedule}</p>
                    </div>
                  </li>
                </ul>
              </div>

               {/* Google Maps Embed */}
               <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-80 w-full border border-gray-100">
                 <iframe 
                   src="https://maps.google.com/maps?q=Crta.+Rubí,+40,+Sant+Cugat+del+Vallès&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Ubicación Creta Consultores"
                 ></iframe>
               </div>
            </div>

            {/* Form */}
            <div>
               <form onSubmit={handleSubmit} noValidate className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Envíenos un mensaje</h3>
                  
                  {status === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-start gap-2">
                      <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                      <div>
                        <strong>¡Mensaje enviado!</strong><br/>
                        Gracias por contactarnos. Su mensaje ha sido recibido correctamente y le responderemos en menos de 24h laborables.
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'}`}
                        placeholder="Su nombre"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'}`}
                        placeholder="600 000 000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'}`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Asunto</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Seleccione un tema...</option>
                      <option value="Fiscal">Asesoría Fiscal</option>
                      <option value="Laboral">Asesoría Laboral</option>
                      <option value="Contable">Contabilidad</option>
                      <option value="Juridico">Servicios Jurídicos</option>
                      <option value="Otro">Otra consulta</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border outline-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20'}`}
                      placeholder="¿En qué podemos ayudarle?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
                  </div>

                  <div className="mb-8">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleCheckbox}
                        className="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                      />
                      <span className="text-sm text-slate-600">
                        He leído y acepto la <Link to="/legal/privacidad" className="text-secondary hover:underline">política de privacidad</Link>. Entiendo que mis datos serán tratados para responder a mi consulta.
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={!formData.privacy || status === 'submitting'}
                    className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                      !formData.privacy || status === 'submitting' 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary hover:bg-slate-800 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {status === 'submitting' ? 'Enviando...' : (
                      <>Enviar Mensaje <Send size={18} /></>
                    )}
                  </button>
               </form>
            </div>
          </div>
        </div>
    </div>
  );
};