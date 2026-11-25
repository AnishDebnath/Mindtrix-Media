import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import rentaloneLogo from '@/assets/brand logo/rentalone.png';
import tphLogo from '@/assets/brand logo/the-photographer-house.png';
import goldLogo from '@/assets/brand logo/rajkiya-jewellers.png';

export interface ProductCardItem {
    id: string;
    title: string;
    category: string;
    logo: string;
    path: string;
}

export interface ProductsProps {
    onClose?: () => void;
    isMobile?: boolean;
}

// 3 Featured Products requested by user
const featuredProducts: ProductCardItem[] = [
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

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.04,
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        scale: 0.98,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export const Products: React.FC<ProductsProps> = ({ onClose, isMobile = false }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasDragged, setHasDragged] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setHasDragged(false);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 4) {
            setHasDragged(true);
        }
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (!scrollRef.current) return;
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        if (e.deltaY !== 0) {
            scrollRef.current.scrollLeft += e.deltaY;
        }
    };

    const filteredProducts = selectedCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter(p => p.category === selectedCategory);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className={isMobile ? 'w-full' : 'bg-white dark:bg-[#0A0A0A] rounded-2xl p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden'}>

                {/* Top Header: Semantic Products Icon + Heading (Desktop only, mobile sheet has own header) */}
                {!isMobile && (
                    <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-rounded text-primary text-xl">widgets</span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                            Mindtrix Media <span className="text-primary">Products</span>
                        </h3>
                    </motion.div>
                )}

                {/* Category Filter Pills: Draggable on mouse and touch */}
                <motion.div
                    ref={scrollRef}
                    variants={itemVariants}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onWheel={handleWheel}
                    style={{ WebkitOverflowScrolling: 'touch' }}
                    className="flex items-center gap-1.5 mb-3.5 overflow-x-auto pb-1 scrollbar-none select-none cursor-grab active:cursor-grabbing touch-pan-x"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                if (!hasDragged) {
                                    setSelectedCategory(cat.id);
                                }
                            }}
                            className={`relative flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0 select-none ${selectedCategory === cat.id
                                ? 'text-white'
                                : 'text-slate-600 dark:text-neutral-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900'
                                }`}
                        >
                            {selectedCategory === cat.id && (
                                <motion.div
                                    layoutId={isMobile ? "mobile-category-active-pill" : "category-active-pill"}
                                    className="absolute inset-0 bg-primary rounded-xl shadow-xs"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                                />
                            )}
                            <span className="relative z-10 material-symbols-rounded text-sm mr-1.5">{cat.icon}</span>
                            <span className="relative z-10 whitespace-nowrap">{cat.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Products Grid: Column format in mobile window, 3-column grid on desktop */}
                <motion.div variants={itemVariants} className={`grid ${isMobile ? 'grid-cols-1 gap-2.5' : 'grid-cols-3 gap-2 sm:gap-3'} mb-3.5`}>
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.94 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                <Link
                                    to={product.path}
                                    onClick={onClose}
                                    className="group flex flex-col items-center cursor-pointer"
                                >
                                    {/* Card Graphic Viewport */}
                                    <div className={`relative w-full ${isMobile ? 'h-24' : 'h-20 sm:h-24 md:h-28'} rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300 p-2 sm:p-3 flex items-center justify-center overflow-hidden`}>
                                        {/* 45-degree Top-Left Corner Ribbon */}
                                        <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none z-10 rounded-tl-xl">
                                            <div
                                                style={{
                                                    left: '-32px',
                                                    top: '18px',
                                                    width: '120px',
                                                    height: '18px',
                                                    transform: 'rotate(-45deg)',
                                                    transformOrigin: 'center'
                                                }}
                                                className="absolute bg-secondary text-slate-950 font-black text-[8px] sm:text-[8.5px] uppercase tracking-wider flex items-center justify-center whitespace-nowrap shadow-xs select-none"
                                            >
                                                Coming Soon
                                            </div>
                                        </div>

                                        <img
                                            src={product.logo}
                                            alt={product.title}
                                            className="max-h-9 sm:max-h-12 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Product Title Below Div */}
                                    <h4 className={`${isMobile ? 'text-xs' : 'text-[10px]'} sm:text-xs md:text-sm font-semibold text-slate-900 dark:text-neutral-200 tracking-tight group-hover:text-primary transition-colors mt-1.5 text-center truncate w-full px-0.5`}>
                                        {product.title}
                                    </h4>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* BOTTOM ROW: Direct page redirect on mobile, full banner on desktop */}
                <motion.div variants={itemVariants}>
                    {isMobile ? (
                        <Link
                            to="/products"
                            onClick={onClose}
                            className="group/banner flex items-center justify-between bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 transition-all duration-200 active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                                <span className="material-symbols-rounded text-primary text-base">widgets</span>
                                <span>View All Mindtrix Media Products</span>
                            </div>
                            <span className="material-symbols-rounded text-sm text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary group-hover/banner:translate-x-0.5 transition-all">
                                arrow_forward
                            </span>
                        </Link>
                    ) : (
                        <Link
                            to="/products"
                            onClick={onClose}
                            className="group/banner flex items-center justify-between bg-[#F8FAFC] dark:bg-black hover:bg-slate-100 dark:hover:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-primary/40 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 shadow-xs active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-2 text-xs truncate">
                                <span className="material-symbols-rounded text-primary text-base shrink-0">groups</span>
                                <span className="font-semibold text-slate-800 dark:text-neutral-200 truncate">
                                    Built by Mindtrix Media for modern businesses
                                </span>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary transition-colors flex items-center gap-0.5 shrink-0 ml-1.5">
                                View all
                                <span className="material-symbols-rounded text-sm group-hover/banner:translate-x-0.5 transition-transform">chevron_right</span>
                            </span>
                        </Link>
                    )}
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Products;
