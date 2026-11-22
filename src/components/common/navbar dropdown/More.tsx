import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

export const More: React.FC<MoreProps> = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-72 sm:w-80 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden">

                {/* Primary Nav Options: font sizes matching Products/Clients dropdowns */}
                <div className="space-y-0.5 mb-2">
                    {moreLinks.map((item) => (
                        <Link
                            key={item.title}
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
                            <span className="material-symbols-rounded text-xs text-slate-400 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-transform shrink-0 ml-2">
                                chevron_right
                            </span>
                        </Link>
                    ))}
                </div>

                {/* BOTTOM ROW: Highlighted Free Prototype Focus */}
                <Link
                    to="/free-prototype"
                    onClick={onClose}
                    className="group/banner flex items-center justify-between bg-gradient-to-r from-primary/15 via-primary/5 to-transparent dark:from-primary/25 dark:via-primary/10 dark:to-black/30 hover:from-primary/20 hover:via-primary/10 border border-primary/35 dark:border-primary/40 hover:border-primary rounded-xl px-4 py-2.5 transition-all duration-300 shadow-xs"
                >
                    <div className="flex items-center gap-2.5 text-xs truncate">
                        <span className="material-symbols-rounded text-primary text-base shrink-0">rocket_launch</span>
                        <span className="font-bold text-slate-900 dark:text-white group-hover/banner:text-primary text-xs md:text-sm truncate transition-colors">
                            Free Website Prototype
                        </span>
                    </div>
                    <span className="material-symbols-rounded text-sm text-primary group-hover/banner:translate-x-0.5 transition-transform shrink-0 ml-2">
                        chevron_right
                    </span>
                </Link>

            </div>
        </motion.div>
    );
};

export default More;
