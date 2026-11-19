import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Product = lazy(() => import('./pages/product'));
const Contact = lazy(() => import('./pages/Contact'));
const FreePrototypePage = lazy(() => import('./pages/FreePrototype'));
const ProductDetail = lazy(() => import('./pages/product/ProductDetail'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const Careers = lazy(() => import('./pages/Careers'));
const Footer = lazy(() => import('./components/Footer'));

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
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/free-prototype" element={<FreePrototypePage />} />
              </Routes>
              <div className="w-full max-w-[1440px] mx-auto">
                <Footer />
              </div>
            </Suspense>
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