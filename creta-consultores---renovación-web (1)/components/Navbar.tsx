import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-serif font-bold leading-none ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
                CRETA
              </span>
              <span className={`text-xs tracking-widest uppercase ${isScrolled ? 'text-slate-600' : 'text-slate-100 drop-shadow-md'}`}>
                Consultores
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary relative group ${
                  location.pathname === link.path 
                    ? 'text-secondary' 
                    : (isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm')
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                   location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/contacto"
              className="bg-secondary hover:bg-yellow-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Pedir Cita
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col space-y-6 text-center">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-serif ${
                location.pathname === link.path ? 'text-secondary font-bold' : 'text-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contacto"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium mx-auto w-full max-w-xs mt-4"
          >
            Contactar
          </Link>
        </nav>
      </div>
    </header>
  );
};