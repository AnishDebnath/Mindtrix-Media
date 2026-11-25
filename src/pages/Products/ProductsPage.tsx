import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../../utils/useSEO';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const ProductTestimonials = lazy(() => import('../../components/sections/ProductTestimonials'));
const CTA = lazy(() => import('../../components/sections/CTA'));

const scaleIcons = [
    { icon: 'deployed_code', color: 'text-primary' },
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'auto_awesome', color: 'text-primary' },
    { icon: 'apps', color: 'text-secondary' },
];

const leadIcons = [
    { icon: 'trending_up', color: 'text-secondary' },
    { icon: 'terminal', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
    { icon: 'bolt', color: 'text-primary' },
];

import rentaloneLogo from '@/assets/brand logo/rentalone.png';
import tphLogo from '@/assets/brand logo/the-photographer-house.png';
import goldLogo from '@/assets/brand logo/rajkiya-jewellers.png';
import charuLogo from '@/assets/brand logo/charu-enterprises.png';
import crhLogo from '@/assets/brand logo/camera-rental-house.png';
import garulinkLogo from '@/assets/brand logo/gaurlink.png';

interface ProductItem {
    id: string;
    title: string;
    category: 'erp' | 'media' | 'events' | 'crm';
    categoryLabel: string;
    status: 'Live in Production' | 'Coming Soon' | 'Beta Preview';
    logo: string;
    description: string;
    features: string[];
    path: string;
    external?: boolean;
}

const productList: ProductItem[] = [
    {
        id: 'rentalone',
        title: 'RentAlone Mobility & Fleet ERP',
        category: 'erp',
        categoryLabel: 'ERP & Fleet',
        status: 'Coming Soon',
        logo: rentaloneLogo,
        description: 'End-to-end car & fleet rental automation architecture with real-time GPS telematics, automated bookings, digital KYC, and maintenance tracking.',
        features: ['Live Fleet GPS', 'Automated Dispatch', 'Dynamic Rate Engine', 'Digital Driver KYC'],
        path: '/product/car-rental-erp'
    },
    {
        id: 'digital-album',
        title: 'Digital Album Cloud Studio',
        category: 'media',
        categoryLabel: 'Media & Studio',
        status: 'Coming Soon',
        logo: tphLogo,
        description: 'Cloud-native interactive presentation platform for professional studios and photographers. Instant proofing, client feedback, and secure delivery.',
        features: ['Ultra-Fast CDN', 'Interactive Proofing', 'Dynamic Watermarking', 'WhatsApp Sharing'],
        path: '/product/the-photographers-house'
    },
    {
        id: 'digital-invitation',
        title: 'Digital Invitation & RSVP Engine',
        category: 'events',
        categoryLabel: 'Events & RSVP',
        status: 'Coming Soon',
        logo: goldLogo,
        description: 'Interactive multimedia invitation platform for high-end weddings, VIP galas, and corporate summits with live RSVP tracking and QR guest check-in.',
        features: ['Custom Micro-Site', 'Live RSVP Sync', 'QR Ticket Check-In', 'Google Maps / Calendar'],
        path: '/free-prototype'
    }
];

const categoryTabs = [
    { id: 'all', label: 'All Products', icon: 'grid_view' },
    { id: 'erp', label: 'ERP & Fleet', icon: 'directions_car' },
    { id: 'media', label: 'Media & Studio', icon: 'photo_camera' },
    { id: 'events', label: 'Events & RSVP', icon: 'celebration' }
];

export const ProductsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useSEO({
        title: 'Mindtrix Media Products — Proprietary Software & ERP Platforms',
        description: 'Explore Mindtrix Media\'s suite of proprietary ERP platforms, media studio ecosystems, and intelligent SaaS solutions built for business growth.',
        keywords: 'Mindtrix products, ERP software, fleet rental software, digital album, digital invitation, jewellery CRM, wholesale ERP',
        canonicalPath: '/products'
    });

    const filtered = selectedCategory === 'all'
        ? productList
        : productList.filter(item => item.category === selectedCategory);

    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative bg-[#F8FAFC] dark:bg-black text-slate-900 dark:text-white min-h-screen">
            {/* Top Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">

                {/* Hero Header (Same as Clients Page Header) */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-sm mb-4"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">widgets</span> Mindtrix Product Ecosystem
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white max-w-3xl mx-auto mb-3"
                    >
                        Engineered for <span className="text-primary">Scale</span>{' '}
                        <TitleIconCapsule icons={scaleIcons} delay={0} />{' '}
                        <br className="hidden sm:inline" />
                        Built to <span className="text-secondary">Lead</span>{' '}
                        <TitleIconCapsule icons={leadIcons} delay={700} initialIndex={1} />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal px-4"
                    >
                        Explore Mindtrix Media's suite of proprietary ERP platforms, media studio software, and specialized business solutions engineered for maximum operational throughput.
                    </motion.p>
                </div>

                {/* Filter Tabs (Same scrollable segmented pill bar as Marquee/Home) */}
                <div className="flex justify-center mb-8 md:mb-10 px-4">
                    <div
                        className="inline-flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/[0.12] shadow-sm backdrop-blur-md max-w-full overflow-x-auto no-scrollbar scrollbar-none touch-pan-x select-none"
                    >
                        {categoryTabs.map((tab) => {
                            const isActive = selectedCategory === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={(e) => {
                                        setSelectedCategory(tab.id);
                                        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                    }}
                                    className={`group relative flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-[14px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap select-none cursor-pointer shrink-0 ${isActive
                                        ? 'text-white'
                                        : 'text-slate-600 dark:text-neutral-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-900'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeProductFilterPill"
                                            className="absolute inset-0 rounded-xl bg-primary shadow-xs"
                                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                    <span
                                        className={`material-symbols-rounded text-sm relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400 dark:text-neutral-500 group-hover:text-primary dark:group-hover:text-primary'
                                            }`}
                                    >
                                        {tab.icon}
                                    </span>
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Products Stack (Same card design as Clients Page ProjectCard) */}
                <motion.div
                    layout
                    className="flex flex-col max-w-6xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((product, index) => {
                            const isAlternate = index % 2 === 1;
                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    viewport={{ once: true, margin: '-10%' }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    className="mb-6 md:mb-8"
                                >
                                    <div className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md overflow-hidden">
                                        <div className={`flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6 ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>

                                            {/* Left/Right Visual Box: Gradient Frame + Floating Brand Logo Window */}
                                            <div
                                                className={`w-full lg:w-[46%] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 flex items-center justify-center relative overflow-hidden group ${isAlternate
                                                    ? 'bg-gradient-to-br from-secondary/20 via-amber-100/70 to-primary/15 dark:from-secondary/15 dark:via-neutral-900 dark:to-primary/10'
                                                    : 'bg-gradient-to-br from-primary/20 via-indigo-100/70 to-secondary/15 dark:from-primary/20 dark:via-neutral-900 dark:to-secondary/10'
                                                    }`}
                                            >
                                                {/* Subtle Grid Line Pattern */}
                                                <div
                                                    className="absolute inset-0 opacity-30 dark:opacity-15 pointer-events-none"
                                                    style={{
                                                        backgroundImage: 'linear-gradient(to right, rgba(99,92,247,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,92,247,0.12) 1px, transparent 1px)',
                                                        backgroundSize: '36px 36px',
                                                    }}
                                                />

                                                {/* Floating Inner Clean Logo Frame (4/3 Ratio) */}
                                                <div className="relative z-10 w-full max-w-[440px] bg-white dark:bg-neutral-950 rounded-xl md:rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                                                    <div className="aspect-[4/3] w-full flex items-center justify-center p-8 bg-slate-50/70 dark:bg-black/60">
                                                        <img
                                                            src={product.logo}
                                                            alt={product.title}
                                                            loading="lazy"
                                                            className="max-h-24 max-w-[75%] object-contain filter group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right/Left Details Content */}
                                            <div className="w-full lg:w-[54%] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-start text-left">
                                                {/* Category Label */}
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                                    {product.categoryLabel}
                                                </span>

                                                {/* Title */}
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight leading-tight">
                                                    {product.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-4">
                                                    {product.description}
                                                </p>

                                                {/* Features List */}
                                                <ul className="space-y-1.5 mb-6">
                                                    {product.features.slice(0, 4).map((feat, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
                                                            <span className="w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                                                <span className="material-symbols-rounded text-xs font-bold">check</span>
                                                            </span>
                                                            <span className="leading-snug">{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Action Area */}
                                                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                                                    <Link
                                                        to={product.path}
                                                        className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group/btn"
                                                    >
                                                        <span>Explore Architecture</span>
                                                        <span className="material-symbols-rounded text-sm group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                                                    </Link>

                                                    <Link
                                                        to="/contact"
                                                        className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-4 py-2 rounded-xl border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all"
                                                    >
                                                        <span>Inquire</span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

            </div>

            <Suspense fallback={null}>
                <ProductTestimonials />
                <CTA />
            </Suspense>
        </div>
    );
};

export default ProductsPage;
