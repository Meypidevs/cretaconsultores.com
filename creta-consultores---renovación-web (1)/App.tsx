
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { LocalLanding } from './pages/LocalLanding';
import { NotFound } from './pages/NotFound';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { LOCAL_LANDING_PAGES } from './constants';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
};

// Wrapper to hide Navbar/Footer on admin pages
const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const isAdmin = window.location.hash.includes('/admin');
  if (isAdmin) return <>{children}</>;
  return <Layout>{children}</Layout>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <LayoutWrapper>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/servicios/:id" element={<ServiceDetail />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/noticias" element={<Blog />} />
              <Route path="/noticias/:id" element={<BlogPost />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/legal/:id" element={<Legal />} />
              
              {/* SEO Local Landing Pages */}
              {LOCAL_LANDING_PAGES.map(page => (
                 <Route 
                   key={page.slug} 
                   path={`/${page.slug}`} 
                   element={<LocalLanding />} 
                 />
              ))}
              <Route path="/zona/:slug" element={<LocalLanding />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutWrapper>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
