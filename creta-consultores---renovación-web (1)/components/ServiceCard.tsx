import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import { Calculator, Users, BarChart3, Scale, Gavel, TrendingUp, ArrowRight } from 'lucide-react';

// Map string icon names to components
const IconMap: Record<string, React.ElementType> = {
  Calculator,
  Users,
  BarChart3,
  Scale,
  Gavel,
  TrendingUp
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Defensive check to prevent crash if data is missing
  if (!service) return null;
  
  const Icon = IconMap[service.iconName] || TrendingUp;
  // Ensure features is an array before slicing
  const features = Array.isArray(service.features) ? service.features : [];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon size={28} className="text-primary group-hover:text-secondary transition-colors duration-300" />
      </div>
      
      <h3 className="font-serif text-xl font-bold text-primary mb-3">{service.title}</h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
        {service.shortDescription}
      </p>
      
      <ul className="space-y-2 mb-8 flex-grow">
        {features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center text-xs text-slate-500">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 shrink-0"></span>
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={`/servicios/${service.id}`} className="inline-flex items-center text-sm font-semibold text-secondary hover:text-yellow-700 transition-colors mt-auto">
        Saber más <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};