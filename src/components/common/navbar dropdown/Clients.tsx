import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

import tphLogo from '@/assets/brand logo/tph.png';
import charuLogo from '@/assets/brand logo/charu-enterpirse.png';
import garulinkLogo from '@/assets/brand logo/garulink.png';
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

export const Clients: React.FC<ClientsProps> = ({ onClose }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden">

                {/* Top Header: Enterprise Partners */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-rounded text-primary text-xl">handshake</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Mindtrix Media <span className="text-primary">Enterprise Partners</span>
                    </h3>
                </motion.div>

                {/* TOP ROW: 4 Active Long-term Partner Client Cards */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {featuredClients.map((client) => (
                        <motion.div key={client.id} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                            <Link
                                to={client.path}
                                onClick={onClose}
                                className="group flex flex-col items-center cursor-pointer"
                            >
                                {/* Card Graphic Viewport: Just Logo like products dropdown */}
                                <div className="relative w-full h-24 md:h-28 rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300 p-3 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-12 max-w-[80%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Client Name Below Div */}
                                <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200 mt-2 group-hover:text-primary transition-colors text-center truncate w-full px-1">
                                    {client.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SECTION LABEL: Projects */}
                <motion.div variants={itemVariants} className="mb-2 px-1">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                        Pre-built Projects
                    </span>
                </motion.div>

                {/* MIDDLE SECTION: 2-Column List of Mindtrix Built Projects */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5 mb-4">
                    {projectList.map((item) => (
                        <motion.div key={item.id} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                            <Link
                                to={`/product/${item.id}`}
                                onClick={onClose}
                                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all group/item"
                            >
                                <span className="material-symbols-rounded text-base text-slate-400 dark:text-neutral-500 group-hover/item:text-primary transition-colors shrink-0">
                                    {getProjectIcon(item.id)}
                                </span>
                                <span className="truncate">{item.title}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* BOTTOM BANNER */}
                <motion.div variants={itemVariants}>
                    <Link
                        to="/clients"
                        onClick={onClose}
                        className="group/banner flex items-center justify-between bg-[#F8FAFC] dark:bg-black hover:bg-slate-100 dark:hover:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-primary/40 rounded-xl px-4 py-2.5 transition-all duration-300 shadow-xs"
                    >
                        <div className="flex items-center gap-2.5 text-xs truncate">
                            <span className="px-2 py-0.5 text-[9.5px] font-black uppercase tracking-wider bg-primary/10 dark:bg-primary/20 text-primary border border-primary/25 rounded-md leading-none shrink-0">
                                Stories
                            </span>
                            <span className="font-semibold text-slate-800 dark:text-neutral-200 truncate">
                                See how our technology scales businesses worldwide
                            </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary transition-colors flex items-center gap-1 shrink-0 ml-2">
                            Explore
                            <span className="material-symbols-rounded text-sm group-hover/banner:translate-x-0.5 transition-transform">chevron_right</span>
                        </span>
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Clients;
