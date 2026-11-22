import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import whiteLogo from '@/assets/white-logo.png';
import blackLogo from '@/assets/black-logo.png';
import { Products, Clients, More } from './navbar dropdown';

interface NavItem {
    name: string;
    path: string;
    isExternal?: boolean;
    isNew?: boolean;
    hasDropdown?: boolean;
}

const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients', hasDropdown: true },
    { name: 'Creative', path: 'https://creative.mindtrixmedia.com/', isExternal: true, isNew: true },
    { name: 'About us', path: '/about' },
    { name: 'More', path: '#', hasDropdown: true },
];

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        setActiveDropdown(null);
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

    const handleLinkMouseEnter = (name: string, path: string, hasDropdown?: boolean) => {
        setHoveredPath(path);
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        if (hasDropdown) {
            setActiveDropdown(name);
        } else {
            setActiveDropdown(null);
        }
    };

    const handleNavMouseLeave = () => {
        setHoveredPath(null);
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 180);
    };

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        if (path === '/products' || path === '/product') {
            return location.pathname === '/products' || location.pathname === '/product' || location.pathname.startsWith('/product/');
        }
        if (path === '/clients') {
            return location.pathname === '/clients' || location.pathname.startsWith('/clients/');
        }
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-[999] flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'} px-4`}
                onMouseLeave={handleNavMouseLeave}
            >
                <div className="relative flex justify-center w-full lg:w-auto">
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="w-full lg:w-auto bg-white/95 dark:bg-black/60 backdrop-blur-xl border border-slate-300/80 dark:border-white/[0.1] rounded-2xl shadow-md shadow-slate-200/50 dark:shadow-[0_0_24px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-between lg:justify-start lg:gap-3 xl:gap-4 px-3 py-1.5 transition-all duration-300 relative z-20"
                    >
                        {/* Logo */}
                        <Link to="/" className="flex items-center group ml-1 sm:ml-2 py-1">
                            <img src={darkMode ? whiteLogo : blackLogo} alt="Mindtrix Media" className="h-6 md:h-7 2xl:h-8 w-auto object-contain" />
                        </Link>


                        {/* Desktop Nav */}
                        <div
                            className="hidden lg:flex items-center bg-slate-100/90 dark:bg-neutral-900/50 rounded-xl p-1 border border-slate-200 dark:border-white/[0.06]"
                            onMouseLeave={() => setHoveredPath(null)}
                        >
                            {navLinks.map((link) => {
                                const isLinkActive = !link.isExternal && isActive(link.path);
                                const linkContent = (
                                    <>
                                        {isLinkActive && !link.isNew && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-slate-200/90 dark:border-white/10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            />
                                        )}

                                        {hoveredPath === link.path && !isLinkActive && !link.isNew && (
                                            <motion.div
                                                layoutId="nav-hover-pill"
                                                className="absolute inset-0 bg-slate-200/70 dark:bg-white/[0.06] rounded-lg"
                                                transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                                            />
                                        )}

                                        <span className="relative z-10 flex items-center gap-1.5">
                                            <span>{link.name}</span>
                                            {link.hasDropdown && (
                                                <span className={`material-symbols-rounded text-sm transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                                                    expand_more
                                                </span>
                                            )}
                                            {link.isNew && (
                                                <span className="px-1.5 py-0.5 text-[8.5px] font-black uppercase tracking-wider bg-white text-slate-950 rounded shadow-xs leading-none">
                                                    New
                                                </span>
                                            )}
                                        </span>
                                    </>
                                );

                                const linkClass = link.isNew
                                    ? `relative px-3 py-1 rounded-lg text-xs lg:text-sm font-bold transition-all duration-200 bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 hover:brightness-110 flex items-center gap-1.5 group select-none`
                                    : `relative px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${isLinkActive ? 'text-primary font-bold dark:text-white' : 'text-slate-700 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white'}`;

                                return link.isExternal ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={() => handleLinkMouseEnter(link.name, link.path, link.hasDropdown)}
                                        className={linkClass}
                                    >
                                        {linkContent}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => {
                                            setActiveDropdown(null);
                                        }}
                                        onMouseEnter={() => handleLinkMouseEnter(link.name, link.path, link.hasDropdown)}
                                        className={linkClass}
                                    >
                                        {linkContent}
                                    </Link>
                                );
                            })}
                        </div>


                        {/* Actions */}
                        <div className="flex items-center gap-2 mr-1">
                            <Link
                                to="/contact"
                                className="hidden lg:flex bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black pl-3.5 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-sm group"
                            >
                                Contact us
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

                    {/* Mega & Regular Dropdown Menu Views */}
                    <AnimatePresence>
                        {activeDropdown && (
                            <div
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleNavMouseLeave}
                                className={`absolute top-full pt-2 z-[1000] ${activeDropdown === 'More'
                                    ? 'right-2 lg:right-24 xl:right-28'
                                    : 'left-0 right-0 w-full'
                                    }`}
                            >
                                {activeDropdown === 'Products' && (
                                    <Products onClose={() => setActiveDropdown(null)} />
                                )}
                                {activeDropdown === 'Clients' && (
                                    <Clients onClose={() => setActiveDropdown(null)} />
                                )}
                                {activeDropdown === 'More' && (
                                    <More onClose={() => setActiveDropdown(null)} />
                                )}
                            </div>
                        )}
                    </AnimatePresence>
                </div>
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
                                {navLinks.map((link, i) => {
                                    const isLinkActive = !link.isExternal && isActive(link.path);
                                    const mobileClass = link.isNew
                                        ? `flex items-center justify-between px-5 py-3.5 rounded-xl group transition-all duration-300 bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-white font-bold shadow-md shadow-primary/25`
                                        : `flex items-center justify-between px-5 py-3.5 rounded-xl group transition-all duration-300 ${isLinkActive
                                            ? 'bg-primary/10 dark:bg-primary/20 text-primary font-bold border border-primary/25 shadow-sm'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent'
                                        }`;
                                    const mobileContent = (
                                        <>
                                            <span className="text-base font-semibold tracking-tight flex items-center gap-2">
                                                <span>{link.name}</span>
                                                {link.isNew && (
                                                    <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-white text-slate-950 rounded-full shadow-xs">
                                                        New
                                                    </span>
                                                )}
                                            </span>
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${link.isNew ? 'bg-white/20 text-white' : isLinkActive ? 'bg-primary text-white scale-105 shadow-sm' : 'bg-slate-100 dark:bg-white/10 text-slate-400 group-hover:bg-primary group-hover:text-white'}`}>
                                                <span className="material-symbols-rounded text-base">
                                                    {link.isExternal ? 'arrow_outward' : isLinkActive ? 'check' : 'arrow_forward'}
                                                </span>
                                            </div>
                                        </>
                                    );

                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 + 0.1 }}
                                        >
                                            {link.isExternal ? (
                                                <a
                                                    href={link.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={mobileClass}
                                                >
                                                    {mobileContent}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={link.path}
                                                    className={mobileClass}
                                                >
                                                    {mobileContent}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="pt-6 pb-2 px-2"
                                >
                                    <Link
                                        to="/contact"
                                        className="w-full bg-slate-950 dark:bg-white text-white dark:text-black h-10 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-between group shadow-sm active:scale-95 transition-all"
                                    >
                                        Contact us
                                        <div className="w-7 h-7 bg-white/20 dark:bg-black/10 rounded-lg flex items-center justify-center text-white dark:text-black">
                                            <span className="material-symbols-rounded text-base group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
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
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Available for projects</span>
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
