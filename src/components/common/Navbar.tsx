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
    darkMode?: boolean;
    toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode = false }) => {
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const moreBtnRef = useRef<HTMLAnchorElement | null>(null);
    const [moreDropdownWidth, setMoreDropdownWidth] = useState<number>(245);

    const updateMoreDropdownWidth = () => {
        if (moreBtnRef.current && navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const moreRect = moreBtnRef.current.getBoundingClientRect();
            const calculatedWidth = Math.round(navRect.right - moreRect.left);
            if (calculatedWidth > 0) {
                setMoreDropdownWidth(calculatedWidth);
            }
        }
    };

    useEffect(() => {
        updateMoreDropdownWidth();
        window.addEventListener('resize', updateMoreDropdownWidth);
        return () => window.removeEventListener('resize', updateMoreDropdownWidth);
    }, []);

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
        setActiveDropdown(null);
    }, [location]);

    const handleLinkMouseEnter = (name: string, path: string, hasDropdown?: boolean) => {
        setHoveredPath(path);
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        if (hasDropdown) {
            if (name === 'More') {
                updateMoreDropdownWidth();
            }
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
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-[999] hidden lg:flex justify-center transition-[padding] duration-300 ease-out ${scrolled ? 'pt-4' : 'pt-6'} px-4`}
            onMouseLeave={handleNavMouseLeave}
        >
            <div className="relative flex justify-center w-auto">
                <nav
                    ref={navRef}
                    className="w-auto bg-white dark:bg-[#0A0A0A] border border-slate-300 dark:border-white/[0.1] rounded-2xl shadow-md shadow-slate-200/50 dark:shadow-[0_0_24px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-start gap-3 xl:gap-4 px-3 py-1.5 transition-all duration-300 relative z-20"
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center group ml-1 sm:ml-2 py-1">
                        <img src={darkMode ? whiteLogo : blackLogo} alt="Mindtrix Media" className="h-6 md:h-7 2xl:h-8 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div
                        className="flex items-center bg-slate-100 dark:bg-neutral-900 rounded-xl p-1 border border-slate-200 dark:border-white/[0.06]"
                        onMouseLeave={() => setHoveredPath(null)}
                    >
                        {navLinks.map((link) => {
                            const isLinkActive = !link.isExternal && isActive(link.path);
                            const linkContent = (
                                <>
                                    {isLinkActive && !link.isNew && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-white dark:bg-black rounded-lg shadow-xs"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    {hoveredPath === link.path && !isLinkActive && !link.isNew && (
                                        <motion.div
                                            layoutId="hoverPill"
                                            className="absolute inset-0 bg-white/60 dark:bg-white/10 rounded-lg"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <span>{link.name}</span>
                                        {link.hasDropdown && (
                                            <span className={`material-symbols-rounded text-sm transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-primary' : ''}`}>
                                                keyboard_arrow_down
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
                                : `relative px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${isLinkActive ? 'text-primary font-bold dark:text-white' : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'}`;

                            return link.isExternal ? (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                    onMouseEnter={() => handleLinkMouseEnter(link.name, link.path, link.hasDropdown)}
                                >
                                    {linkContent}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    ref={link.name === 'More' ? moreBtnRef : undefined}
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
                            className="flex bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black pl-3.5 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-sm group"
                        >
                            Contact us
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>
                    </div>

                </nav>

                {/* Mega & Regular Dropdown Menu Views */}
                <AnimatePresence mode="wait">
                    {activeDropdown && (
                        <motion.div
                            key={activeDropdown}
                            onMouseEnter={handleDropdownMouseEnter}
                            onMouseLeave={handleNavMouseLeave}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={activeDropdown === 'More' && moreDropdownWidth ? { width: `${moreDropdownWidth}px` } : undefined}
                            className={`absolute top-full pt-2 z-[1000] ${activeDropdown === 'More'
                                ? 'right-0'
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Navbar;
