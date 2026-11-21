import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../../utils/useSEO';

import rentaloneLogo from '@/assets/brand logo/rentalone.png';
import tphLogo from '@/assets/brand logo/tph.png';
import goldLogo from '@/assets/brand logo/gold.png';
import charuLogo from '@/assets/brand logo/charu-enterpirse.png';
import crhLogo from '@/assets/brand logo/camera-rental-house.png';
import garulinkLogo from '@/assets/brand logo/garulink.png';

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
    },
    {
        id: 'crh-erp',
        title: 'Camera Rental House Cloud ERP',
        category: 'erp',
        categoryLabel: 'ERP & Fleet',
        status: 'Live in Production',
        logo: crhLogo,
        description: 'Specialized cinema gear, lens, and camera rental management software with serial-number tracking, crew dispatch, and multi-day invoicing.',
        features: ['Serial Number Inventory', 'Multi-day Booking', 'Crew Management', 'Damage & Deposit Logs'],
        path: '/product/car-rental-erp'
    },
    {
        id: 'charu-wholesale',
        title: 'Charu Wholesale & Distribution ERP',
        category: 'erp',
        categoryLabel: 'ERP & Fleet',
        status: 'Live in Production',
        logo: charuLogo,
        description: 'Large-scale multi-branch wholesale inventory, GST billing, vendor replenishment, and B2B dealer distribution management system.',
        features: ['Multi-Warehouse Sync', 'GST Invoicing', 'B2B Dealer Ledger', 'Automated PO Orders'],
        path: '/product/charu-enterprise'
    },
    {
        id: 'gold-crm',
        title: 'Gold CRM & Luxury POS System',
        category: 'crm',
        categoryLabel: 'Retail & CRM',
        status: 'Live in Production',
        logo: goldLogo,
        description: 'High-precision jewellery retail point-of-sale, live bullion rate integration, bespoke order tracking, and VIP customer lifecycle management.',
        features: ['Live Gold/Silver Rates', 'Hallmark Tracking', 'Custom Order Pipeline', 'VIP Loyalty Points'],
        path: '/product/jewellery-crm-system'
    },
    {
        id: 'garulink-logistics',
        title: 'Garulink Global Logistics Engine',
        category: 'erp',
        categoryLabel: 'ERP & Fleet',
        status: 'Live in Production',
        logo: garulinkLogo,
        description: 'Global freight forwarding, automated bill-of-lading generation, customs clearance workflow, and real-time cargo container tracking.',
        features: ['Container Tracking', 'Customs Doc Automation', 'Route Optimization', 'Multi-Currency Settlement'],
        path: '/services'
    }
];

const categoryTabs = [
    { id: 'all', label: 'All Products', icon: 'grid_view' },
    { id: 'erp', label: 'ERP & Fleet', icon: 'directions_car' },
    { id: 'media', label: 'Media & Studio', icon: 'photo_camera' },
    { id: 'events', label: 'Events & RSVP', icon: 'celebration' },
    { id: 'crm', label: 'Retail & CRM', icon: 'diamond' }
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
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-20 relative bg-[#F8FAFC] dark:bg-black text-slate-900 dark:text-white min-h-screen">
            {/* Top Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">

                {/* Hero Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-xs mb-4"
                    >
                        <span className="material-symbols-rounded text-primary text-base">widgets</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-neutral-200">
                            Mindtrix Product Ecosystem
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-950 dark:text-white max-w-4xl mx-auto"
                    >
                        Engineered for <span className="text-primary">Scale</span>, Built to{' '}
                        <span className="text-secondary">Lead</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-sm md:text-base text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mt-5 leading-relaxed font-normal"
                    >
                        Explore Mindtrix Media's suite of proprietary ERP platforms, media studio software, and specialized business solutions engineered for maximum operational throughput.
                    </motion.p>

                    {/* Filter Tabs */}
                    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
                        {categoryTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${selectedCategory === tab.id
                                        ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                                        : 'bg-white dark:bg-[#0A0A0A] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/10 hover:border-primary/50'
                                    }`}
                            >
                                <span className="material-symbols-rounded text-base">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                className="group flex flex-col justify-between bg-white dark:bg-[#0A0A0A] rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                            >
                                <div>
                                    {/* Top Bar: Category Pill & Status Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-neutral-300 rounded-lg">
                                            {product.categoryLabel}
                                        </span>
                                        <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg ${product.status === 'Coming Soon'
                                                ? 'bg-secondary text-slate-950 shadow-xs'
                                                : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </div>

                                    {/* Brand Logo Card Viewport */}
                                    <div className="w-full h-32 rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 flex items-center justify-center p-4 mb-5 group-hover:border-primary/40 transition-colors">
                                        <img
                                            src={product.logo}
                                            alt={product.title}
                                            className="max-h-16 max-w-[80%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-lg md:text-xl font-bold text-slate-950 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-5">
                                        {product.description}
                                    </p>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {product.features.map((feat, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F8FAFC] dark:bg-black border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-neutral-300"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Action */}
                                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                                    <Link
                                        to={product.path}
                                        className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                    >
                                        Explore Architecture
                                        <span className="material-symbols-rounded text-sm">arrow_forward</span>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
                                    >
                                        Inquire
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Enterprise Pillars Banner */}
                <div className="rounded-2xl bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 p-8 md:p-12 mb-16 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <span className="material-symbols-rounded text-2xl">verified</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                                Zero Legacy Debt
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                                Built from the ground up with modern high-performance microservices and cloud-native databases.
                            </p>
                        </div>

                        <div>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <span className="material-symbols-rounded text-2xl">speed</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                                Rapid Custom Deployment
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                                Tailored to your company's workflows with instant API integrations and bespoke interface adaptations.
                            </p>
                        </div>

                        <div>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto md:mx-0">
                                <span className="material-symbols-rounded text-2xl">security</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                                Enterprise Security & SLA
                            </h4>
                            <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                                Complete role-based access control, cryptographic data safety, and guaranteed 99.9% system availability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-primary mb-1 block">
                            Need a Tailored System?
                        </span>
                        <h3 className="text-xl md:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Build a Custom Enterprise Platform with Mindtrix
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-neutral-400 mt-1 max-w-xl">
                            Our engineering team designs and ships bespoke ERPs, internal portals, and customer-facing SaaS platforms.
                        </p>
                    </div>
                    <Link
                        to="/free-prototype"
                        className="px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primaryDark hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center gap-2"
                    >
                        Request Free Prototype
                        <span className="material-symbols-rounded text-base">arrow_forward</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProductsPage;
