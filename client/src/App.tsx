import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/product';
import Contact from './pages/Contact';
import FreePrototypePage from './pages/FreePrototype';
import ProductDetail from './pages/product/ProductDetail';
import BlogPost from './pages/Blog/BlogPost';

// Components
import { Navbar, Layout } from './components';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save original style to restore it after the jump
    const htmlElement = document.documentElement;
    const currentScrollBehavior = htmlElement.style.scrollBehavior;
    
    // Disable smooth scrolling temporarily for an instant jump
    htmlElement.style.scrollBehavior = 'auto';
    
    // Jump to top
    window.scrollTo(0, 0);
    
    // Some browsers need it directly on the element
    htmlElement.scrollTo(0, 0);
    
    // Restore original scroll behavior after a slight delay
    // This delay is necessary to ensure the jump has been processed
    const timer = setTimeout(() => {
      htmlElement.style.scrollBehavior = currentScrollBehavior;
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const AppContent: React.FC<{ darkMode: boolean; toggleTheme: () => void }> = ({ darkMode, toggleTheme }) => {
  const location = useLocation();

  return (
    <div className="font-sans">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col flex-grow"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/free-prototype" element={<FreePrototypePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent darkMode={darkMode} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

export default App;