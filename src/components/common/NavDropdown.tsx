import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import rentaloneLogo from '@/assets/brand logo/rentalone.png';
import tphLogo from '@/assets/brand logo/tph.png';
import goldLogo from '@/assets/brand logo/gold.png';

export interface ProductDropdownCard {
    id: string;
    title: string;
    category: string;
    logo: string;
    path: string;
}

export interface NavDropdownProps {
    onClose?: () => void;
}

// 3 Featured Products requested by user
const featuredProducts: ProductDropdownCard[] = [
    {
        id: 'rentalone',
        title: 'RentAlone',
        category: 'erp',
        logo: rentaloneLogo,
        path: '/product/car-rental-erp'
    },
    {
        id: 'digital-album',
        title: 'Digital Album',
        category: 'media',
        logo: tphLogo,
        path: '/product/the-photographers-house'
    },
    {
        id: 'digital-invitation',
        title: 'Digital Invitation',
        category: 'events',
        logo: goldLogo,
        path: '/product'
    }
];

const categories = [
    { id: 'all', label: 'All', icon: 'grid_view' },
    { id: 'erp', label: 'ERP & Fleet', icon: 'directions_car' },
    { id: 'media', label: 'Media & Studio', icon: 'photo_camera' },
    { id: 'events', label: 'Events & RSVP', icon: 'celebration' },
];

export const NavDropdown: React.FC<NavDropdownProps> = ({ onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProducts = selectedCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter(p => p.category === selectedCategory);

    return (
        <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden">

                {/* Top Header: Semantic Products Icon + Heading */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-rounded text-primary text-xl">widgets</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Mindtrix Media <span className="text-primary">Products</span>
                    </h3>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-0.5 scrollbar-none">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                selectedCategory === cat.id
                                    ? 'bg-primary text-white shadow-xs'
                                    : 'text-slate-600 dark:text-neutral-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900'
                            }`}
                        >
                            <span className="material-symbols-rounded text-sm mr-1.5">{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* 3 Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    to={product.path}
                                    onClick={onClose}
                                    className="group flex flex-col items-center cursor-pointer"
                                >
                                    {/* Card Graphic Viewport: Just Logo with 45-degree Top-Left Corner Ribbon */}
                                    <div className="relative w-full h-24 md:h-28 rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300 p-3 flex items-center justify-center overflow-hidden">
                                        {/* 45-degree Top-Left Corner Ribbon */}
                                        <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none z-10 rounded-tl-xl">
                                            <div
                                                style={{
                                                    left: '-32px',
                                                    top: '16px',
                                                    width: '110px',
                                                    height: '16px',
                                                    transform: 'rotate(-45deg)',
                                                    transformOrigin: 'center'
                                                }}
                                                className="absolute bg-secondary text-slate-950 font-black text-[7.5px] uppercase tracking-wider flex items-center justify-center whitespace-nowrap shadow-xs select-none"
                                            >
                                                Coming Soon
                                            </div>
                                        </div>

                                        <img
                                            src={product.logo}
                                            alt={product.title}
                                            className="max-h-12 max-w-[80%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Product Title Below Div */}
                                    <h4 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-neutral-200 tracking-tight group-hover:text-primary transition-colors mt-2 text-center truncate w-full px-1">
                                        {product.title}
                                    </h4>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* BOTTOM ROW: Clean bare icon, proper typography contrast */}
                <Link
                    to="/product"
                    onClick={onClose}
                    className="group/banner flex items-center justify-between bg-[#F8FAFC] dark:bg-black hover:bg-slate-100 dark:hover:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-primary/40 rounded-xl px-4 py-2.5 transition-all duration-300 shadow-xs"
                >
                    <div className="flex items-center gap-2.5 text-xs truncate">
                        <span className="material-symbols-rounded text-primary text-base shrink-0">groups</span>
                        <span className="font-semibold text-slate-800 dark:text-neutral-200 truncate">
                            Built for modern businesses &amp; scalable teams
                        </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary transition-colors flex items-center gap-1 shrink-0 ml-2">
                        View all
                        <span className="material-symbols-rounded text-sm group-hover/banner:translate-x-0.5 transition-transform">chevron_right</span>
                    </span>
                </Link>

            </div>
        </motion.div>
    );
};

export default NavDropdown;
