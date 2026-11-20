import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import whiteLogo from '@/assets/white-logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/product' },
    { name: 'Services', path: '/services' },
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact us', path: '/contact' },
];

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
                    className="w-full max-w-4xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.1] rounded-2xl shadow-lg shadow-black/5 dark:shadow-[0_0_24px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-between p-2 transition-all duration-300"
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center group ml-1 sm:ml-2 py-1">
                        <img src={whiteLogo} alt="Mindtrix Media" className="h-8 md:h-9 2xl:h-10 w-auto object-contain" />
                    </Link>


                    {/* Desktop Nav */}
                    <div
                        className="hidden lg:flex items-center bg-slate-100/80 dark:bg-neutral-900/50 rounded-xl p-1 border border-slate-200/60 dark:border-white/[0.06]"
                        onMouseLeave={() => setHoveredPath(null)}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onMouseEnter={() => setHoveredPath(link.path)}
                                className={`relative px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'text-primary dark:text-white' : 'text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'}`}
                            >
                                {link.name}

                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white dark:bg-white/10 rounded-lg shadow-sm -z-10 border border-slate-200 dark:border-white/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                {hoveredPath === link.path && !isActive(link.path) && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        className="absolute inset-0 bg-slate-200/80 dark:bg-white/[0.05] rounded-lg -z-10"
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>


                    {/* Actions */}
                    <div className="flex items-center gap-2 mr-1">
                        <Link
                            to="/free-prototype"
                            className="hidden lg:flex bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black pl-3.5 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-sm group"
                        >
                            Free Prototype
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
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
                            className="fixed top-[5.5rem] left-4 right-4 z-50 bg-white/98 dark:bg-[#0A0A0A]/98 backdrop-blur-3xl rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-white/10 lg:hidden overflow-hidden"
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
                                            className={`flex items-center justify-between px-5 py-3.5 rounded-xl group transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-primary/10 dark:bg-primary/20 text-primary font-bold'
                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="text-base font-semibold tracking-tight">{link.name}</span>
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive(link.path) ? 'bg-primary text-white scale-110' : 'bg-slate-100 dark:bg-white/10 text-slate-400 group-hover:bg-primary group-hover:text-white'}`}>
                                                <span className="material-symbols-rounded text-base">
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
                                        to="/free-prototype"
                                        className="w-full bg-slate-950 dark:bg-white text-white dark:text-black h-10 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-between group shadow-sm active:scale-95 transition-all"
                                    >
                                        Free Prototype
                                        <div className="w-7 h-7 bg-white/20 dark:bg-black/10 rounded-lg flex items-center justify-center text-white dark:text-black">
                                            <span className="material-symbols-rounded text-base group-hover:rotate-45 transition-transform duration-300">rocket_launch</span>
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
