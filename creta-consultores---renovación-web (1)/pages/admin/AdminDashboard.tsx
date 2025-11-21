
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Users, Settings, LogOut, 
  Plus, Edit, Trash2, Search, TrendingUp, Eye, Save, X,
  Image as ImageIcon, Upload, Bold, Italic, List, Type, Quote,
  Globe, ChevronLeft, CheckCircle2, Menu
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { BlogPost } from '../../types';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('blog');
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Editor States
  const [editorTab, setEditorTab] = useState<'content' | 'seo' | 'preview'>('content');
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  
  const { logout, user } = useAuth();
  const { posts, addPost, updatePost, deletePost } = useData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleNewPost = () => {
    setCurrentPost({
      id: '',
      title: '',
      category: 'Fiscal',
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
      author: 'Redacción',
      excerpt: '',
      content: '',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      seoTitle: '',
      seoDescription: '',
      keywords: ''
    });
    setIsEditing(true);
    setEditorTab('content');
    // Close sidebar on mobile if open
    setIsSidebarOpen(false);
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost({
      ...post,
      seoTitle: post.seoTitle || post.title,
      seoDescription: post.seoDescription || post.excerpt,
      keywords: post.keywords || ''
    });
    setIsEditing(true);
    setEditorTab('content');
  };

  const handleDeletePost = (id: string) => {
    if(window.confirm('¿Estás seguro de que quieres eliminar esta noticia? Esta acción no se puede deshacer.')) {
      deletePost(id);
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPost.title || !currentPost.excerpt) return;

    // Auto-fill SEO if empty
    const postToSave = {
      ...currentPost,
      seoTitle: currentPost.seoTitle || currentPost.title,
      seoDescription: currentPost.seoDescription || currentPost.excerpt
    };

    if (currentPost.id) {
      updatePost(postToSave as BlogPost);
    } else {
      const newId = Math.random().toString(36).substr(2, 9);
      addPost({ ...postToSave, id: newId } as BlogPost);
    }
    setIsEditing(false);
  };

  // --- Simulated Image Upload Logic ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentPost(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Rich Text Toolbar Logic ---
  const insertFormat = (tagStart: string, tagEnd: string = '') => {
    if (!contentRef.current) return;
    
    const start = contentRef.current.selectionStart;
    const end = contentRef.current.selectionEnd;
    const text = currentPost.content || '';
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);

    const newText = `${before}${tagStart}${selection}${tagEnd}${after}`;
    
    setCurrentPost(prev => ({ ...prev, content: newText }));
    
    // Restore focus (simplified)
    setTimeout(() => contentRef.current?.focus(), 0);
  };

  // --- Sub-Components for the Editor ---

  const EditorToolbar = () => (
    <div className="flex items-center gap-1 p-2 bg-slate-50 border-b border-slate-200 rounded-t-lg overflow-x-auto no-scrollbar">
      <button type="button" onClick={() => insertFormat('<strong>', '</strong>')} className="p-2 hover:bg-slate-200 rounded text-slate-600 shrink-0" title="Negrita"><Bold size={18} /></button>
      <button type="button" onClick={() => insertFormat('<em>', '</em>')} className="p-2 hover:bg-slate-200 rounded text-slate-600 shrink-0" title="Cursiva"><Italic size={18} /></button>
      <div className="w-px h-6 bg-slate-300 mx-1 shrink-0"></div>
      <button type="button" onClick={() => insertFormat('<h3>', '</h3>')} className="p-2 hover:bg-slate-200 rounded text-slate-600 shrink-0" title="Subtítulo H3"><Type size={18} /></button>
      <button type="button" onClick={() => insertFormat('<ul>\n<li>', '</li>\n</ul>')} className="p-2 hover:bg-slate-200 rounded text-slate-600 shrink-0" title="Lista"><List size={18} /></button>
      <button type="button" onClick={() => insertFormat('<blockquote>', '</blockquote>')} className="p-2 hover:bg-slate-200 rounded text-slate-600 shrink-0" title="Cita"><Quote size={18} /></button>
    </div>
  );

  const EditorContentTab = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <input 
          type="text" 
          placeholder="Título de la Noticia"
          value={currentPost.title} 
          onChange={e => setCurrentPost({...currentPost, title: e.target.value})}
          className="w-full px-0 py-4 text-2xl md:text-3xl font-serif font-bold border-b-2 border-slate-100 focus:border-secondary outline-none placeholder-slate-300"
          required
        />
      </div>

      {/* Image Uploader */}
      <div 
        className="relative w-full h-48 md:h-64 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300 hover:border-secondary transition-colors flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
        onClick={() => fileInputRef.current?.click()}
      >
        {currentPost.image ? (
          <>
            <img src={currentPost.image} alt="Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold flex items-center gap-2"><Upload size={20} /> Cambiar Imagen</span>
            </div>
          </>
        ) : (
          <div className="text-center text-slate-400 p-4">
            <ImageIcon size={48} className="mx-auto mb-2 text-slate-300" />
            <p className="font-semibold">Subir imagen</p>
            <p className="text-xs mt-1">Recomendado: 1200x600px</p>
          </div>
        )}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={handleImageUpload} 
        />
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Resumen (Extracto)</label>
        <textarea 
          placeholder="Breve resumen que aparecerá en la lista de noticias..."
          value={currentPost.excerpt}
          onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none h-24 resize-none"
          required
        ></textarea>
      </div>

      {/* Rich Text Area */}
      <div className="border border-slate-200 rounded-lg shadow-sm bg-white">
        <EditorToolbar />
        <textarea 
          ref={contentRef}
          placeholder="Escribe aquí el contenido del artículo..."
          value={currentPost.content}
          onChange={e => setCurrentPost({...currentPost, content: e.target.value})}
          className="w-full px-6 py-6 h-[300px] md:h-[400px] outline-none font-sans text-base md:text-lg text-slate-700 resize-y"
        ></textarea>
      </div>
    </div>
  );

  const EditorSEOTab = () => (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-100">
        <h3 className="flex items-center gap-2 font-bold text-blue-800 mb-4">
          <Globe size={20} /> Vista Previa en Google
        </h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 font-sans">
           <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs">CC</div>
              <div className="overflow-hidden">
                <div className="text-xs text-slate-800 truncate">cretaconsultores.com › noticias</div>
              </div>
           </div>
           <div className="text-lg md:text-xl text-[#1a0dab] hover:underline cursor-pointer font-medium truncate mb-1">
             {currentPost.seoTitle || currentPost.title || 'Título de la Noticia'}
           </div>
           <div className="text-sm text-[#4d5156] line-clamp-2">
             {currentPost.seoDescription || currentPost.excerpt || 'Descripción del artículo que aparecerá en los resultados de búsqueda...'}
           </div>
        </div>
      </div>

      <div className="space-y-4">
         <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Meta Título</label>
            <input 
              type="text" 
              value={currentPost.seoTitle || ''} 
              onChange={e => setCurrentPost({...currentPost, seoTitle: e.target.value})}
              placeholder={currentPost.title}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary/50 outline-none"
            />
            <p className="text-xs text-slate-400 mt-1 flex justify-between">
              <span>Recomendado: 50-60 caracteres</span>
              <span className={`${(currentPost.seoTitle?.length || 0) > 60 ? 'text-red-500' : 'text-green-500'}`}>
                {currentPost.seoTitle?.length || 0} caracteres
              </span>
            </p>
         </div>

         <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Meta Descripción</label>
            <textarea 
              value={currentPost.seoDescription || ''} 
              onChange={e => setCurrentPost({...currentPost, seoDescription: e.target.value})}
              placeholder={currentPost.excerpt}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary/50 outline-none h-24"
            ></textarea>
             <p className="text-xs text-slate-400 mt-1 flex justify-between">
              <span>Recomendado: 150-160 caracteres</span>
              <span className={`${(currentPost.seoDescription?.length || 0) > 160 ? 'text-red-500' : 'text-green-500'}`}>
                {currentPost.seoDescription?.length || 0} caracteres
              </span>
            </p>
         </div>

         <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Palabras Clave (Keywords)</label>
            <input 
              type="text" 
              value={currentPost.keywords || ''} 
              onChange={e => setCurrentPost({...currentPost, keywords: e.target.value})}
              placeholder="Ej: fiscalidad, renta 2024, empresas"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary/50 outline-none"
            />
         </div>
      </div>
    </div>
  );

  const SidebarSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Publicación</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">Categoría</label>
            <select 
              value={currentPost.category}
              onChange={e => setCurrentPost({...currentPost, category: e.target.value})}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-secondary"
            >
              <option value="Fiscal">Fiscal</option>
              <option value="Laboral">Laboral</option>
              <option value="Mercantil">Mercantil</option>
              <option value="Concursal">Concursal</option>
              <option value="Juridico">Jurídico</option>
              <option value="Actualidad">Actualidad</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">Autor</label>
             <input 
              type="text" 
              value={currentPost.author} 
              onChange={e => setCurrentPost({...currentPost, author: e.target.value})}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-secondary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">Fecha Visible</label>
             <input 
              type="text" 
              value={currentPost.date} 
              onChange={e => setCurrentPost({...currentPost, date: e.target.value})}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-secondary"
            />
          </div>
        </div>
      </div>

      {/* Quick Preview Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hidden md:block" onClick={() => setEditorTab('preview')}>
         <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-2">
           <Eye size={16} /> Vista Previa Rápida
         </div>
         <div className="aspect-video bg-slate-100 rounded mb-2 overflow-hidden">
           {currentPost.image && <img src={currentPost.image} className="w-full h-full object-cover" alt="" />}
         </div>
         <div className="h-2 bg-slate-200 rounded w-3/4 mb-1"></div>
         <div className="h-2 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  // --- Main Render ---

  if (isEditing) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col animate-fade-in">
        <SEO title="Editor de Noticias" description="Panel de edición" />
        
        {/* Editor Top Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shadow-sm gap-2">
          <div className="flex items-center gap-2 md:gap-4">
             <button 
                onClick={() => setIsEditing(false)} 
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                title="Volver"
             >
               <ChevronLeft size={24} />
             </button>
             <div className="hidden md:block h-6 w-px bg-slate-200"></div>
             <h1 className="font-bold text-slate-800 text-base md:text-lg truncate max-w-[150px] md:max-w-none">
                {currentPost.id ? 'Editar' : 'Nuevo'}
             </h1>
          </div>

          <div className="flex items-center bg-slate-100 rounded-lg p-1 overflow-x-auto">
             <button 
               onClick={() => setEditorTab('content')}
               className={`px-2 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${editorTab === 'content' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Contenido
             </button>
             <button 
               onClick={() => setEditorTab('seo')}
               className={`px-2 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${editorTab === 'seo' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               SEO
             </button>
             <button 
               onClick={() => setEditorTab('preview')}
               className={`px-2 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${editorTab === 'preview' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Vista
             </button>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-xs text-slate-400 hidden lg:block">
                {currentPost.id ? 'Editado' : 'Borrador'}
             </span>
             <button 
               onClick={handleSavePost}
               className="bg-primary hover:bg-slate-800 text-white px-3 md:px-6 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5 text-sm md:text-base"
             >
               <Save size={18} /> <span className="hidden md:inline">Publicar</span>
             </button>
          </div>
        </header>

        {/* Editor Workspace */}
        <div className="flex-1 container mx-auto max-w-6xl p-4 md:p-6">
           {editorTab === 'content' && (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2">
                 <EditorContentTab />
               </div>
               <div className="lg:col-span-1">
                 <SidebarSettings />
               </div>
             </div>
           )}

           {editorTab === 'seo' && (
             <div className="py-4 md:py-8">
               <EditorSEOTab />
             </div>
           )}

           {editorTab === 'preview' && (
             <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden border border-slate-200 min-h-[80vh]">
               <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="p-0">
                  {/* Simulated Blog Post View */}
                  <div className="h-[30vh] md:h-[40vh] relative w-full overflow-hidden">
                    <img 
                      src={currentPost.image || 'https://via.placeholder.com/1200x600'} 
                      alt="Cover" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto px-6 md:px-8 py-8 md:py-12 -mt-10 md:-mt-20 relative z-10 bg-white rounded-t-xl shadow-lg">
                     <span className="text-secondary font-bold uppercase text-xs tracking-wider mb-2 block">{currentPost.category}</span>
                     <h1 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-6">{currentPost.title}</h1>
                     <div className="prose prose-lg prose-slate">
                       <p className="lead font-medium text-slate-600 italic border-l-4 border-secondary pl-4 mb-8">{currentPost.excerpt}</p>
                       <div dangerouslySetInnerHTML={{ __html: currentPost.content || '' }} />
                     </div>
                  </div>
               </div>
             </div>
           )}
        </div>
      </div>
    );
  }

  // --- Dashboard View (List) ---
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      <SEO title="Dashboard" description="Panel de Administración" />
      
      {/* Mobile Overlay for Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-primary text-white flex flex-col shadow-xl 
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:relative md:shadow-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-slate-700 bg-slate-900 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center font-serif font-bold text-white">C</div>
             <h2 className="font-serif text-xl font-bold">Creta Admin</h2>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-400">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => { setActiveTab('dashboard'); setIsEditing(false); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'dashboard' ? 'bg-white/10 text-white border-l-4 border-secondary' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
             onClick={() => { setActiveTab('blog'); setIsEditing(false); setIsSidebarOpen(false); }}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === 'blog' ? 'bg-white/10 text-white border-l-4 border-secondary' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            <FileText size={20} /> Noticias / Blog
          </button>
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-600 uppercase">Sistema</div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors font-medium">
            <Users size={20} /> Usuarios
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors font-medium">
            <Settings size={20} /> Configuración
          </button>
        </nav>

        <div className="p-4 border-t border-slate-700 bg-slate-900">
          <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-secondary transition-colors mb-4 px-2">
             <Eye size={16} /> Ver web pública
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold text-sm w-full text-left px-2">
             <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-[1600px] overflow-hidden w-full">
        {/* Dashboard Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-800 hover:bg-slate-200 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                {activeTab === 'dashboard' ? 'Resumen General' : 'Gestión de Contenidos'}
              </h1>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Bienvenido de nuevo, <strong>{user}</strong></p>
            </div>
          </div>
          
          <div className="flex gap-4 items-center self-end md:self-auto">
             <div className="text-right hidden sm:block">
               <p className="text-xs font-bold text-slate-400 uppercase">Estado</p>
               <p className="text-sm font-bold text-green-500 flex items-center gap-1 justify-end"><div className="w-2 h-2 rounded-full bg-green-500"></div> En línea</p>
             </div>
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary font-bold border-2 border-secondary text-xl">
               {user ? user.charAt(0).toUpperCase() : 'A'}
             </div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl"><TrendingUp size={24}/></div>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">+12%</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Visitas Totales</p>
              <p className="text-3xl md:text-4xl font-serif font-bold text-slate-800">1,240</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={24}/></div>
                 <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">Nuevo</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Leads Contacto</p>
              <p className="text-3xl md:text-4xl font-serif font-bold text-slate-800">8</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveTab('blog')}>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><FileText size={24}/></div>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Artículos Publicados</p>
              <p className="text-3xl md:text-4xl font-serif font-bold text-slate-800">{posts.length}</p>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in flex flex-col min-h-[600px]">
            <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
              <div className="relative w-full md:w-96 group">
                <Search className="absolute left-3 top-3 text-slate-400 group-hover:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar artículo..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                />
              </div>
              <button 
                onClick={handleNewPost}
                className="bg-primary hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors text-sm font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full md:w-auto justify-center"
              >
                <Plus size={20} /> <span className="hidden sm:inline">Crear Noticia</span> <span className="sm:hidden">Crear</span>
              </button>
            </div>
            
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left min-w-[800px]">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-4 md:px-8 py-5">Artículo</th>
                    <th className="px-4 md:px-6 py-5">Categoría</th>
                    <th className="px-4 md:px-6 py-5">Fecha</th>
                    <th className="px-4 md:px-6 py-5">Estado</th>
                    <th className="px-4 md:px-6 py-5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-4 md:px-8 py-4 md:py-5 max-w-xs md:max-w-md">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-slate-200 shrink-0 border border-slate-100">
                             <img src={post.image} alt="" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="font-bold text-slate-800 text-base md:text-lg leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">{post.title}</p>
                              <p className="text-xs text-slate-400 line-clamp-1">{post.excerpt}</p>
                           </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 inline-block">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-5 text-sm text-slate-500 font-medium">
                        {post.date}
                      </td>
                       <td className="px-4 md:px-6 py-5">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 w-fit">
                          <CheckCircle2 size={12} /> Publicado
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-5 text-right">
                        <div className="flex justify-end gap-2 opacity-100 md:opacity-60 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleEditPost(post)}
                            className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-secondary hover:border-secondary rounded-lg transition-colors shadow-sm" 
                            title="Editar"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 bg-white border border-slate-200 text-slate-500 hover:text-red-500 hover:border-red-500 rounded-lg transition-colors shadow-sm" 
                            title="Eliminar"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-20">
                        <div className="flex flex-col items-center justify-center text-slate-400">
                          <FileText size={48} className="mb-4 opacity-20" />
                          <p className="text-lg font-medium mb-2">No hay noticias publicadas</p>
                          <button onClick={handleNewPost} className="text-secondary hover:underline font-bold">Crear la primera noticia</button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-400 font-medium uppercase tracking-wide">
              Mostrando {posts.length} artículos
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
