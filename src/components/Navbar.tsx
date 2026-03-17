import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/mindtrix-media-logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/product' },
    { name: 'Services', path: '/services' },
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
];

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'} px-4`}>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-full max-w-5xl bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-full shadow-xl shadow-black/5 dark:shadow-black/20 flex items-center justify-between p-1.5 md:p-2 transition-all duration-300"
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group ml-4">
                        <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform overflow-hidden">
                            <img src={logo} alt="Mindtrix Media" className="w-6 h-6 md:w-7 md:h-7 object-contain" />
                        </div>
                        <span className="font-display font-bold text-base md:text-xl tracking-tight text-slate-900 dark:text-white">
                            Mindtrix Media
                        </span>
                    </Link>


                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center bg-slate-100/80 dark:bg-white/5 rounded-full p-1 border border-slate-200 dark:border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-2 lg:px-2.5 xl:px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'text-primary dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-md -z-10 border border-slate-200 dark:border-white/5"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 md:gap-3 mr-4">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-rounded block dark:hidden text-xl">dark_mode</span>
                            <span className="material-symbols-rounded hidden dark:block text-xl">light_mode</span>
                        </button>

                        <Link
                            to="/product"
                            className="hidden lg:flex bg-[#111] dark:bg-white text-white dark:text-[#111] pl-4 pr-1.5 py-1.5 rounded-full font-bold text-xs md:text-sm items-center gap-2.5 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/5 group"
                        >

                            Explore All Products
                            <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                                <span className="material-symbols-rounded text-lg">arrow_outward</span>
                            </div>
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-8 h-8 rounded-xl flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-slate-200 shadow-lg shadow-black/10 transition-all active:scale-90"
                        >
                            <span className="material-symbols-rounded text-xl">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>

                </motion.nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-[5.5rem] left-4 right-4 z-50 bg-white/98 dark:bg-[#0A0A0A]/98 backdrop-blur-3xl rounded-[2.5rem] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-white/10 lg:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-1.5">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`flex items-center justify-between px-6 py-4 rounded-[1.5rem] group transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-primary/10 dark:bg-primary/20 text-primary font-bold'
                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="text-base font-semibold tracking-tight">{link.name}</span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive(link.path) ? 'bg-primary text-white scale-110' : 'bg-slate-100 dark:bg-white/10 text-slate-400 group-hover:bg-primary group-hover:text-white'}`}>
                                                <span className="material-symbols-rounded text-lg">
                                                    {isActive(link.path) ? 'check' : 'arrow_forward'}
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-6 pb-2 px-2"
                                >
                                    <Link
                                        to="/product"
                                        className="w-full bg-[#111] dark:bg-white text-white dark:text-[#111] py-1.5 pl-6 pr-1.5 rounded-full font-bold text-base flex items-center justify-between group shadow-xl shadow-black/10 active:scale-[0.98] transition-all"
                                    >
                                        Explore All Products
                                        <div className="w-8 h-8 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center text-white dark:text-[#111] group-hover:rotate-45 transition-transform duration-300">
                                            <span className="material-symbols-rounded text-lg">rocket_launch</span>
                                        </div>
                                    </Link>
                                </motion.div>

                                {/* Mini Footer in Menu */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="px-6 py-4 flex items-center justify-center border-t border-slate-100 dark:border-white/5 mt-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Available for projects</span>
                                    </div>

                                </motion.div>
                            </nav>
                        </motion.div>

                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
