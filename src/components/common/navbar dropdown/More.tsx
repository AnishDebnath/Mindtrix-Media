import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

export interface MoreProps {
    onClose?: () => void;
}

const moreLinks = [
    {
        title: 'Blog',
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

export const More: React.FC<MoreProps> = ({ onClose }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden">

                {/* Primary Nav Options: font sizes matching Products/Clients dropdowns */}
                <div className="space-y-0.5 mb-2">
                    {moreLinks.map((item) => (
                        <motion.div key={item.title} variants={itemVariants}>
                            <Link
                                to={item.path}
                                onClick={onClose}
                                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 dark:text-neutral-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all group/item"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-rounded text-base text-slate-400 dark:text-neutral-500 group-hover/item:text-primary transition-colors shrink-0">
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
                                    chevron_right
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM ROW: Highlighted according to website theme */}
                <motion.div variants={itemVariants}>
                    <Link
                        to="/free-prototype"
                        onClick={onClose}
                        className="group/banner flex items-center justify-between bg-primary/10 dark:bg-primary/20 hover:bg-primary/15 dark:hover:bg-primary/25 border border-primary/30 dark:border-primary/40 hover:border-primary/70 rounded-xl px-3 py-2 transition-all duration-300 shadow-xs"
                    >
                        <div className="flex items-center gap-2 text-xs">
                            <span className="material-symbols-rounded text-primary text-base shrink-0 group-hover/banner:scale-105 transition-transform">
                                rocket_launch
                            </span>
                            <span className="font-semibold text-slate-900 dark:text-white group-hover/banner:text-primary text-xs md:text-sm whitespace-nowrap transition-colors">
                                Free Prototype
                            </span>
                        </div>
                        <span className="material-symbols-rounded text-sm text-slate-400 dark:text-neutral-500 group-hover/banner:text-primary group-hover/banner:translate-x-0.5 transition-transform shrink-0 ml-2">
                            chevron_right
                        </span>
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default More;
