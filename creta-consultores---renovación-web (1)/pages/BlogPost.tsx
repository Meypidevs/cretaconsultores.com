
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { useData } from '../context/DataContext';
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPost } = useData();
  const post = getPost(id || '');

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center container mx-auto min-h-screen">
        <SEO title="Artículo no encontrado" description="Error 404" />
        <h1 className="text-4xl font-bold text-primary mb-4">Artículo no encontrado</h1>
        <Link to="/noticias" className="text-secondary font-semibold hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Volver al Blog
        </Link>
      </div>
    );
  }

  // Find related service
  const relatedService = SERVICES.find(s => 
    s.title.includes(post.category) ||
    (post.category === 'Fiscal' && s.id === 'fiscal') ||
    (post.category === 'Laboral' && s.id === 'laboral') ||
    (post.category === 'Mercantil' && s.id === 'mercantil') ||
    (post.category === 'Concursal' && s.id === 'concursal')
  );

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
      />

      {/* Hero Image */}
      <div className="h-[40vh] md:h-[50vh] relative w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
           {/* Overlay content could go here */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative -mt-20 z-10 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold uppercase text-xs tracking-wider flex items-center gap-1">
              <Tag size={14} /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User size={16} /> {post.author}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg prose-slate max-w-none mb-12">
            <p className="lead text-xl text-slate-600 font-medium mb-8 border-l-4 border-secondary pl-6 italic">
              {post.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Related Service CTA */}
          {relatedService && (
            <div className="my-12 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
               <div className="hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center text-secondary shadow-sm shrink-0 border border-slate-100">
                  <ArrowRight size={24} />
               </div>
               <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">¿Necesita asesoramiento profesional?</span>
                  <h4 className="font-bold text-primary text-lg mb-2">Consulte con nuestro departamento de {relatedService.title}</h4>
                  <p className="text-slate-600 text-sm mb-0">{relatedService.shortDescription.substring(0, 100)}...</p>
               </div>
               <Link to={`/servicios/${relatedService.id}`} className="whitespace-nowrap bg-primary hover:bg-slate-800 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-md">
                  Ver Servicios
               </Link>
            </div>
          )}

          <div className="border-t border-gray-100 pt-8 flex justify-between items-center">
             <Link to="/noticias" className="flex items-center text-primary font-semibold hover:text-secondary transition-colors">
               <ArrowLeft size={20} className="mr-2" /> Volver a Noticias
             </Link>
             
             <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
               <Share2 size={20} /> <span className="hidden sm:inline">Compartir</span>
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};
