import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

import tphLogo from '@/assets/brand logo/the-photographer-house.png';
import charuLogo from '@/assets/brand logo/charu-enterprises.png';
import garulinkLogo from '@/assets/brand logo/gaurlink.png';
import biswabanglaLogo from '@/assets/brand logo/biswabangla-nordic-association.png';
import { products } from '@/data/products';

export interface ClientCardItem {
    id: string;
    name: string;
    logo: string;
    path: string;
}

export interface ClientsProps {
    onClose?: () => void;
    isMobile?: boolean;
}

// 4 Active Long-term Partner Clients
const featuredClients: ClientCardItem[] = [
    {
        id: 'tph',
        name: 'The Photographer House',
        logo: tphLogo,
        path: '/clients'
    },
    {
        id: 'charu',
        name: 'Charu Enterprise',
        logo: charuLogo,
        path: '/clients'
    },
    {
        id: 'garulink',
        name: 'Garulink Global',
        logo: garulinkLogo,
        path: '/clients'
    },
    {
        id: 'biswabangla',
        name: 'Biswabangla Nordic',
        logo: biswabanglaLogo,
        path: '/clients'
    }
];

// Helper to assign semantic icons based on product id
const getProjectIcon = (id: string): string => {
    switch (id) {
        case 'car-rental-erp':
            return 'directions_car';
        case 'jewellery-crm-system':
            return 'diamond';
        case 'luxury-jewellery-ecommerce-platform':
            return 'storefront';
        case 'ecommerce-platform':
            return 'shopping_cart';
        case 'digital-business-card':
            return 'badge';
        case 'fence-fittings-ecommerce':
            return 'local_shipping';
        default:
            return 'deployed_code';
    }
};

// Filter projects from data folder, excluding TPH as requested
const projectList = products.filter(
    (p) => p.id !== 'the-photographers-house' && p.id !== 'tph' && !p.title.toLowerCase().includes('photographer')
);

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.03,
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

export const Clients: React.FC<ClientsProps> = ({ onClose, isMobile = false }) => {
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

                {/* Top Header: Enterprise Partners (Desktop only, mobile sheet has own header) */}
                {!isMobile && (
                    <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-rounded text-primary text-xl">handshake</span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                            Mindtrix Media <span className="text-primary">Enterprise Partners</span>
                        </h3>
                    </motion.div>
                )}

                {/* TOP ROW: 4 Active Long-term Partner Client Cards */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3.5">
                    {featuredClients.map((client) => (
                        <motion.div key={client.id} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                            <Link
                                to={client.path}
                                onClick={onClose}
                                className="group flex flex-col items-center cursor-pointer"
                            >
                                {/* Card Graphic Viewport: Just Logo like products dropdown */}
                                <div className="relative w-full h-18 sm:h-24 md:h-28 rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300 p-2 sm:p-3 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-8 sm:max-h-12 max-w-[80%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Client Name Below Div */}
                                <span className="text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-neutral-200 mt-1.5 group-hover:text-primary transition-colors text-center truncate w-full px-1">
                                    {client.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SECTION LABEL: Projects */}
                <motion.div variants={itemVariants} className="mb-1.5 px-0.5">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                        Pre-built Projects
                    </span>
                </motion.div>

                {/* MIDDLE SECTION: List of Mindtrix Built Projects */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-x-6 sm:gap-y-0.5 mb-3.5">
                    {projectList.map((item) => (
                        <motion.div key={item.id} whileHover={{ x: 2 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.15 }}>
                            <Link
                                to={`/clients/${item.id}`}
                                onClick={onClose}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all group/item ${isMobile
                                        ? 'bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-white/[0.06] text-slate-800 dark:text-neutral-200 hover:border-primary/40'
                                        : 'text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900'
                                    }`}
                            >
                                <span className="material-symbols-rounded text-base text-slate-400 dark:text-neutral-500 group-hover/item:text-primary transition-colors shrink-0">
                                    {getProjectIcon(item.id)}
                                </span>
                                <span className="truncate flex-1">{item.title}</span>
                                {isMobile && (
                                    <span className="material-symbols-rounded text-xs text-slate-400 dark:text-neutral-500 group-hover/item:text-primary shrink-0">
                                        chevron_right
                                    </span>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* BOTTOM BANNER: Direct page redirect on mobile, full banner on desktop */}
                <motion.div variants={itemVariants}>
                    {isMobile ? (
                        <Link
                            to="/clients"
                            onClick={onClose}
                            className="group/banner flex items-center justify-between bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 transition-all duration-200 active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                                <span className="material-symbols-rounded text-primary text-base">handshake</span>
                                <span>View All Clients and Projects</span>
                            </div>
                            <span className="material-symbols-rounded text-sm text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary group-hover/banner:translate-x-0.5 transition-all">
                                arrow_forward
                            </span>
                        </Link>
                    ) : (
                        <Link
                            to="/clients"
                            onClick={onClose}
                            className="group/banner flex items-center justify-between bg-[#F8FAFC] dark:bg-black hover:bg-slate-100 dark:hover:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-primary/40 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 shadow-xs active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-2 text-xs truncate">
                                <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-primary/10 dark:bg-primary/20 text-primary border border-primary/25 rounded leading-none shrink-0">
                                    Stories
                                </span>
                                <span className="font-semibold text-slate-800 dark:text-neutral-200 truncate">
                                    See how our technology scales businesses worldwide
                                </span>
                            </div>
                            <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary transition-colors flex items-center gap-0.5 shrink-0 ml-1.5">
                                Explore
                                <span className="material-symbols-rounded text-sm group-hover/banner:translate-x-0.5 transition-transform">chevron_right</span>
                            </span>
                        </Link>
                    )}
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Clients;
