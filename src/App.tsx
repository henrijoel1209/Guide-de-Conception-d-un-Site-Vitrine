import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Home as HomeIcon, User, BookOpen, Mail, Code } from 'lucide-react';

// Composants
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Exercices from './pages/Exercices';

// Définition des types
type PageType = 'home' | 'about' | 'courses' | 'contact' | 'exercices';

interface NavigationItem {
  id: PageType;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Mettre à jour currentPage en fonction de l'URL
  useEffect(() => {
    const path = location.pathname.substring(1) || 'home';
    if (['home', 'about', 'courses', 'contact', 'exercices'].includes(path)) {
      setCurrentPage(path as PageType);
    }
  }, [location]);

  const navigation: NavigationItem[] = [
    { id: 'home', label: 'Accueil', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
    { id: 'about', label: 'À propos', icon: <User className="w-5 h-5" />, path: '/about' },
    { id: 'courses', label: 'Mes cours', icon: <BookOpen className="w-5 h-5" />, path: '/courses' },
    { id: 'exercices', label: 'Exercices', icon: <Code className="w-5 h-5" />, path: '/exercices' },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" />, path: '/contact' },
  ];

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        navigation={navigation} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
