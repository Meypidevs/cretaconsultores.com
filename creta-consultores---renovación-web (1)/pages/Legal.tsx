import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LEGAL_PAGES } from '../constants';
import { SEO } from '../components/SEO';

export const Legal: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageData = LEGAL_PAGES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pageData) {
    return (
      <div className="pt-32 pb-20 text-center container mx-auto">
        <SEO title="Página no encontrada" description="Error 404" />
        <h1 className="text-4xl font-bold text-primary mb-4">Página no encontrada</h1>
        <Link to="/" className="text-secondary underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageData.title}
        description={`Información legal: ${pageData.title} de Creta Consultores.`}
      />
      
      <div className="bg-slate-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">{pageData.title}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <div 
          className="prose prose-slate prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      </div>
    </div>
  );
};