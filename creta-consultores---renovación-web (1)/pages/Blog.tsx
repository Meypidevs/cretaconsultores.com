import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useData } from '../context/DataContext';

export const Blog: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const { posts } = useData();

  const categories: string[] = ['Todos', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesCategory = filter === 'Todos' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Blog y Actualidad Fiscal"
        description="Noticias y novedades sobre fiscalidad, laboral y empresa. Manténgase informado con los artículos de nuestros expertos en Creta Consultores."
      />

      <div className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Blog Corporativo</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Actualidad y Noticias</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Análisis experto sobre las últimas novedades legislativas, fiscales y empresariales. Manténgase informado para tomar mejores decisiones.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-slate-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Buscar noticias..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 w-full md:w-64 focus:outline-none focus:border-secondary transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Link to={`/noticias/${post.id}`} key={post.id} className="block h-full">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary z-10 uppercase tracking-wide">
                      {post.category}
                    </div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                       <span>{post.date}</span>
                       <span>•</span>
                       <span>Por {post.author}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-secondary font-semibold text-sm flex items-center mt-auto group-hover:translate-x-1 transition-transform">
                      Leer artículo completo <Filter className="w-3 h-3 ml-1 rotate-90" />
                    </div>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500">
              No se encontraron noticias que coincidan con su búsqueda.
            </div>
          )}
        </div>

        {/* Pagination Mock */}
        {filteredPosts.length > 0 && (
          <div className="mt-16 flex justify-center gap-2">
             <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</button>
          </div>
        )}
      </div>
    </div>
  );
};