
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { useAuth } from '../../context/AuthContext';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulación de credenciales seguras
    // En producción esto se valida contra Firebase Auth
    setTimeout(() => {
      if (email === 'admin@cretaconsultores.com' && password === 'admin123') {
        login(email);
        navigate('/admin/dashboard');
      } else if (email && password) {
        // For demo purposes, allow any other email if password is 'demo'
        if (password === 'demo') {
            login(email);
            navigate('/admin/dashboard');
        } else {
            setError('Credenciales incorrectas. (Prueba: admin@cretaconsultores.com / admin123)');
        }
      } else {
        setError('Por favor, introduce usuario y contraseña');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <SEO title="Acceso Clientes" description="Portal de gestión" />
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <div className="p-8 text-center bg-slate-50 border-b border-slate-100">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 shadow-lg">
             <ShieldCheck size={32} />
           </div>
           <h1 className="font-serif text-2xl font-bold text-primary">Creta Manager</h1>
           <p className="text-slate-500 text-sm">Panel de Gestión de Contenidos</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 border border-red-100">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Usuario / Email</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary focus:bg-white transition-all"
                placeholder="admin@cretaconsultores.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary focus:bg-white transition-all"
                placeholder="admin123"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-slate-800 text-white py-4 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
          >
            {loading ? 'Verificando...' : (
              <>Entrar al Panel <ArrowRight size={18} /></>
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-xs text-slate-400">Acceso seguro 256-bit SSL</p>
          </div>
        </form>
      </div>
    </div>
  );
};
