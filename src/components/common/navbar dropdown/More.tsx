import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

export interface MoreProps {
    onClose?: () => void;
    isMobile?: boolean;
}

interface MoreLinkItem {
    title: string;
    icon: string;
    path: string;
    badge?: string;
    isExternal?: boolean;
}

const moreLinks: MoreLinkItem[] = [
    {
        title: 'Blog & Articles',
        icon: 'article',
        path: '/blog',
    },
    {
        title: 'Careers',
        icon: 'work',
        badge: 'Hiring',
        path: '/careers',
    },
];

const mobileExtraLinks: MoreLinkItem[] = [
    {
        title: 'Creative Studio',
        icon: 'palette',
        path: 'https://creative.mindtrixmedia.com/',
        isExternal: true,
        badge: 'New',
    },
    {
        title: 'About Us',
        icon: 'corporate_fare',
        path: '/about',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.04,
        },
    },
    exit: {
        opacity: 0,
        y: 6,
        scale: 0.98,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -6 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18, ease: "easeOut" } },
};

export const More: React.FC<MoreProps> = ({ onClose, isMobile = false }) => {
    const allLinks = isMobile ? [...mobileExtraLinks, ...moreLinks] : moreLinks;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className={isMobile ? 'w-full' : 'bg-white dark:bg-[#0A0A0A] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden'}>

                {/* Nav Options */}
                <div className="space-y-1.5 mb-2.5">
                    {allLinks.map((item) => {
                        const linkClass = `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group/item ${
                            isMobile
                                ? 'bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-white/[0.06] text-slate-800 dark:text-neutral-200 hover:border-primary/40'
                                : 'text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900'
                        }`;

                        const linkContent = (
                            <>
                                <div className="flex items-center gap-2.5">
                                    <span className="material-symbols-rounded text-base text-primary/80 dark:text-primary group-hover/item:text-primary transition-colors shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="truncate">{item.title}</span>
                                    {item.badge && (
                                        <span className="px-1.5 py-0.5 text-[8.5px] font-black uppercase tracking-wider bg-secondary text-slate-950 rounded shadow-xs leading-none">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <span className="material-symbols-rounded text-xs text-slate-400 dark:text-neutral-500 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-transform shrink-0 ml-2">
                                    {item.isExternal ? 'arrow_outward' : 'chevron_right'}
                                </span>
                            </>
                        );

                        return (
                            <motion.div key={item.title} variants={itemVariants}>
                                {item.isExternal ? (
                                    <a
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={onClose}
                                        className={linkClass}
                                    >
                                        {linkContent}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className={linkClass}
                                    >
                                        {linkContent}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* BOTTOM ROW: Free Prototype banner */}
                <motion.div variants={itemVariants}>
                    <Link
                        to="/free-prototype"
                        onClick={onClose}
                        className="group/banner flex items-center justify-between bg-primary/10 dark:bg-primary/20 hover:bg-primary/15 dark:hover:bg-primary/25 border border-primary/30 dark:border-primary/40 hover:border-primary/70 rounded-xl px-3.5 py-2.5 transition-all duration-300 shadow-xs active:scale-[0.99]"
                    >
                        <div className="flex items-center gap-2 text-xs">
                            <span className="material-symbols-rounded text-primary text-base shrink-0 group-hover/banner:scale-105 transition-transform">
                                rocket_launch
                            </span>
                            <span className="font-semibold text-slate-900 dark:text-white group-hover/banner:text-primary text-xs sm:text-sm whitespace-nowrap transition-colors">
                                Free Prototype
                            </span>
                            <span className="px-1.5 py-0.5 text-[8px] font-bold bg-primary text-white rounded">
                                Free
                            </span>
                        </div>
                        <span className="material-symbols-rounded text-sm text-slate-400 dark:text-neutral-500 group-hover/banner:text-primary group-hover/banner:translate-x-0.5 transition-transform shrink-0 ml-2">
                            chevron_right
                        </span>
                    </Link>
                </motion.div>

                {/* If mobile, include full Contact Team button */}
                {isMobile && (
                    <motion.div variants={itemVariants} className="mt-2.5">
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className="w-full bg-slate-950 dark:bg-white text-white dark:text-black h-10 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
                        >
                            <span>Contact Our Team</span>
                            <div className="w-6 h-6 bg-white/20 dark:bg-black/10 rounded-lg flex items-center justify-center text-white dark:text-black">
                                <span className="material-symbols-rounded text-sm">arrow_outward</span>
                            </div>
                        </Link>
                    </motion.div>
                )}

            </div>
        </motion.div>
    );
};

export default More;
