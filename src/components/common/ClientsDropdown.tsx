import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import tphLogo from '@/assets/brand logo/tph.png';
import charuLogo from '@/assets/brand logo/charu-enterpirse.png';
import garulinkLogo from '@/assets/brand logo/garulink.png';
import crhLogo from '@/assets/brand logo/camera-rental-house.png';
import goldLogo from '@/assets/brand logo/gold.png';

export interface ClientDropdownCard {
    id: string;
    name: string;
    logo: string;
    path: string;
}

export interface ClientDeploymentItem {
    id: string;
    title: string;
    monogram?: string;
    icon?: string;
    path: string;
}

export interface ClientsDropdownProps {
    onClose?: () => void;
}

// 5 Featured Clients matching reference layout top row
const featuredClients: ClientDropdownCard[] = [
    {
        id: 'tph',
        name: 'The Photographer House',
        logo: tphLogo,
        path: '/product/the-photographers-house'
    },
    {
        id: 'charu',
        name: 'Charu Enterprise',
        logo: charuLogo,
        path: '/product/charu-enterprise-ecommerce'
    },
    {
        id: 'garulink',
        name: 'Garulink Global',
        logo: garulinkLogo,
        path: '/product'
    },
    {
        id: 'crh',
        name: 'Camera Rental House',
        logo: crhLogo,
        path: '/product/car-rental-erp'
    },
    {
        id: 'gold',
        name: 'Gold CRM & Luxury',
        logo: goldLogo,
        path: '/product/jewellery-crm-system'
    }
];

const clientDeploymentsCol1: ClientDeploymentItem[] = [
    { id: 'd1', title: 'Biswabangla Nordic Association', monogram: 'BN', path: '/about' },
    { id: 'd2', title: 'Charu Enterprise Wholesale ERP', monogram: 'CE', path: '/product/charu-enterprise' },
    { id: 'd3', title: 'Garulink Fleet & Logistics System', monogram: 'GL', path: '/services' },
    { id: 'd4', title: 'Rent Alone Mobility Architecture', monogram: 'RA', path: '/product/car-rental-erp' },
];

const clientDeploymentsCol2: ClientDeploymentItem[] = [
    { id: 'd5', title: 'Camera Rental House Cloud ERP', icon: 'camera_enhance', path: '/product/car-rental-erp' },
    { id: 'd6', title: 'Gold CRM & Luxury Jewellery POS', icon: 'diamond', path: '/product/luxury-jewellery-ecommerce-platform' },
    { id: 'd7', title: 'Custom Cloud Microservices', icon: 'cloud_done', path: '/free-prototype' },
    { id: 'd8', title: 'Enterprise Security Architecture', icon: 'security', path: '/about' },
];

export const ClientsDropdown: React.FC<ClientsDropdownProps> = ({ onClose }) => {
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

                {/* Top Header: Brand Icon + Title */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-rounded text-primary text-xl">verified</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Ecosystem with <span className="text-primary">Industry Leaders</span>
                    </h3>
                </div>

                {/* TOP ROW: 5 Featured App/Client Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-4">
                    {featuredClients.map((client) => (
                        <Link
                            key={client.id}
                            to={client.path}
                            onClick={onClose}
                            className="group flex flex-col items-center cursor-pointer"
                        >
                            {/* Card Graphic Viewport: Nested border radius hierarchy */}
                            <div className="w-full h-22 md:h-24 rounded-xl bg-[#F8FAFC] dark:bg-black border border-slate-200 dark:border-white/10 group-hover:border-primary/50 group-hover:shadow-sm transition-all duration-300 p-2.5 flex items-center justify-center relative overflow-hidden">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-xs group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-6 max-w-[85%] object-contain filter"
                                    />
                                </div>
                            </div>

                            {/* Client Name Below Div */}
                            <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200 mt-2 group-hover:text-primary transition-colors text-center truncate w-full px-1">
                                {client.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* SECTION LABEL: Subtle Gray Header */}
                <div className="mb-2 px-1">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                        Deployments
                    </span>
                </div>

                {/* MIDDLE SECTION: 2-Column List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-4">
                    {/* Column 1 */}
                    <div className="space-y-0.5">
                        {clientDeploymentsCol1.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={onClose}
                                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all group/item"
                            >
                                <span className="w-5 text-center text-xs font-black tracking-tight text-slate-400 dark:text-neutral-500 group-hover/item:text-primary transition-colors shrink-0">
                                    {item.monogram}
                                </span>
                                <span className="truncate">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-0.5">
                        {clientDeploymentsCol2.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={onClose}
                                className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all group/item"
                            >
                                <span className="w-5 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-rounded text-base text-slate-400 dark:text-neutral-500 group-hover/item:text-primary transition-colors">
                                        {item.icon}
                                    </span>
                                </span>
                                <span className="truncate">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* BOTTOM BANNER */}
                <Link
                    to="/about"
                    onClick={onClose}
                    className="group/banner flex items-center justify-between bg-[#F8FAFC] dark:bg-black hover:bg-slate-100 dark:hover:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-primary/40 rounded-xl px-4 py-2.5 transition-all duration-300 shadow-xs"
                >
                    <div className="flex items-center gap-2.5 text-xs truncate">
                        <span className="px-2 py-0.5 text-[9.5px] font-black uppercase tracking-wider bg-primary/10 dark:bg-primary/20 text-primary border border-primary/25 rounded-md leading-none shrink-0">
                            Stories
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-neutral-200 truncate">
                            See how enterprise leaders scale with Mindtrix technology
                        </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 group-hover/banner:text-primary transition-colors flex items-center gap-1 shrink-0 ml-2">
                        Explore
                        <span className="material-symbols-rounded text-sm group-hover/banner:translate-x-0.5 transition-transform">chevron_right</span>
                    </span>
                </Link>

            </div>
        </motion.div>
    );
};

export default ClientsDropdown;
