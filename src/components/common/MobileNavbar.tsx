import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import whiteLogo from '@/assets/white-logo.png';
import blackLogo from '@/assets/black-logo.png';
import { Products, Clients, More } from './navbar dropdown';

interface MobileNavbarProps {
    darkMode?: boolean;
    toggleTheme?: () => void;
}

type DropdownType = 'Products' | 'Clients' | 'More';

interface MobileDockItem {
    name: 'Home' | 'Products' | 'Services' | 'Clients' | 'More';
    path: string;
    icon: string;
    hasDropdown?: boolean;
    dropdownType?: DropdownType;
}

const mobileDockItems: MobileDockItem[] = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Products', path: '/products', icon: 'widgets', hasDropdown: true, dropdownType: 'Products' },
    { name: 'Services', path: '/services', icon: 'design_services' },
    { name: 'Clients', path: '/clients', icon: 'handshake', hasDropdown: true, dropdownType: 'Clients' },
    { name: 'More', path: '#', icon: 'more_horiz', hasDropdown: true, dropdownType: 'More' },
];

const MobileNavbar: React.FC<MobileNavbarProps> = ({ darkMode = false }) => {
    const [activeDropdown, setActiveDropdown] = useState<DropdownType | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on route change
    useEffect(() => {
        setActiveDropdown(null);
    }, [location.pathname]);

    // Prevent body scrolling when dropdown window is open
    useEffect(() => {
        if (activeDropdown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeDropdown]);

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

    const isMoreRouteActive = ['/about', '/blog', '/careers', '/free-prototype', '/contact'].some(p => isActive(p));

    return (
        <div className="lg:hidden">
            {/* Mobile Top Header Bar */}
            <motion.header
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[990] px-4 transition-[padding] duration-300 ${scrolled ? 'pt-3' : 'pt-5'
                    }`}
            >
                <div className="max-w-md mx-auto bg-white dark:bg-[#0A0A0A] border border-slate-300 dark:border-white/[0.1] rounded-2xl shadow-md shadow-slate-200/50 dark:shadow-[0_0_24px_rgba(0,0,0,0.5)] px-3.5 py-2 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group py-0.5">
                        <img
                            src={darkMode ? whiteLogo : blackLogo}
                            alt="Mindtrix Media"
                            className="h-6 w-auto object-contain"
                        />
                    </Link>

                    {/* Top Action Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Quick Contact CTA */}
                        <Link
                            to="/contact"
                            className="bg-slate-950 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-xl font-medium text-xs flex items-center gap-1.5 shadow-xs active:scale-95 transition-all"
                        >
                            Contact
                            <span className="material-symbols-rounded text-xs">arrow_outward</span>
                        </Link>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Bottom App Navigation Dock */}
            <motion.nav
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed bottom-3 inset-x-3 sm:inset-x-8 max-w-md mx-auto z-[990]"
                aria-label="Mobile app navigation dock"
            >
                <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl border border-slate-200 dark:border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.65)] p-1.5 flex items-center justify-around">
                    {mobileDockItems.map((item) => {
                        const isCurrentOpen = activeDropdown === item.dropdownType;
                        const isItemActive = activeDropdown
                            ? isCurrentOpen
                            : (item.dropdownType === 'More'
                                ? isMoreRouteActive
                                : isActive(item.path));

                        const handleItemClick = (e: React.MouseEvent) => {
                            if (item.hasDropdown && item.dropdownType) {
                                e.preventDefault();
                                setActiveDropdown(prev => prev === item.dropdownType ? null : item.dropdownType!);
                            } else {
                                setActiveDropdown(null);
                            }
                        };

                        const iconName = isCurrentOpen ? 'close' : item.icon;

                        const content = (
                            <>
                                {isItemActive && (
                                    <motion.div
                                        layoutId="mobile-dock-active"
                                        className="absolute inset-0 bg-slate-100 dark:bg-neutral-800 rounded-xl"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="material-symbols-rounded text-xl leading-none z-10 transition-transform duration-200">
                                    {iconName}
                                </span>
                                <span className="text-[10px] tracking-tight mt-0.5 z-10 font-medium">
                                    {isCurrentOpen ? 'Close' : item.name}
                                </span>
                            </>
                        );

                        const buttonClass = `relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 flex-1 ${isItemActive
                            ? 'text-primary dark:text-white font-semibold'
                            : 'text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                            }`;

                        if (item.hasDropdown) {
                            return (
                                <button
                                    key={item.name}
                                    onClick={handleItemClick}
                                    className={buttonClass}
                                    aria-label={`Toggle ${item.name} menu`}
                                >
                                    {content}
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleItemClick}
                                className={buttonClass}
                            >
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </motion.nav>

            {/* Mobile Floating Dropdown Window: Ends just before bottom navbar */}
            <AnimatePresence>
                {activeDropdown && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveDropdown(null)}
                            className="fixed inset-0 bg-black/40 z-[980]"
                        />

                        {/* Floating Window Above Bottom Navbar */}
                        <motion.div
                            key={activeDropdown}
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed bottom-[5.5rem] inset-x-3 sm:inset-x-8 max-w-md mx-auto z-[985] bg-white dark:bg-[#0A0A0A] rounded-2xl border border-slate-200 dark:border-white/10 shadow-[0_16px_45px_rgba(0,0,0,0.2)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.85)] max-h-[calc(100vh-9.5rem)] overflow-y-auto p-3.5"
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/10 px-0.5">
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-rounded text-base">
                                            {activeDropdown === 'Products' ? 'widgets' : activeDropdown === 'Clients' ? 'handshake' : 'more_horiz'}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                                        {activeDropdown === 'Products' && (
                                            <>Mindtrix Media <span className="text-primary">Products</span></>
                                        )}
                                        {activeDropdown === 'Clients' && (
                                            <>Mindtrix Media <span className="text-primary">Enterprise Partners</span></>
                                        )}
                                        {activeDropdown === 'More' && (
                                            <>Mindtrix Media <span className="text-primary">More Options</span></>
                                        )}
                                    </h3>
                                </div>

                                <button
                                    onClick={() => setActiveDropdown(null)}
                                    className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-neutral-800 text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white active:scale-90 transition-all shrink-0"
                                    aria-label="Close window"
                                >
                                    <span className="material-symbols-rounded text-base">close</span>
                                </button>
                            </div>

                            {/* Specific Dropdown Content */}
                            <div className="w-full">
                                {activeDropdown === 'Products' && (
                                    <Products onClose={() => setActiveDropdown(null)} isMobile={true} />
                                )}
                                {activeDropdown === 'Clients' && (
                                    <Clients onClose={() => setActiveDropdown(null)} isMobile={true} />
                                )}
                                {activeDropdown === 'More' && (
                                    <More onClose={() => setActiveDropdown(null)} isMobile={true} />
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;
