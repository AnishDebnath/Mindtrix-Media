import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface MoreProps {
    onClose?: () => void;
}

const moreItems = [
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
            className="w-64 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-white/10 overflow-hidden">
                <div className="space-y-1">
                    {moreItems.map((item) => (
                        <Link
                            key={item.title}
                            to={item.path}
                            onClick={onClose}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8FAFC] dark:hover:bg-black border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="material-symbols-rounded text-primary text-lg">
                                    {item.icon}
                                </span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </span>
                            </div>
                            {item.badge && (
                                <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-secondary text-slate-950 rounded-md shadow-xs leading-none">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Optional Prototype link at bottom */}
                <div className="mt-1.5 pt-1.5 border-t border-slate-200 dark:border-white/10">
                    <Link
                        to="/free-prototype"
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F8FAFC] dark:hover:bg-black text-xs font-semibold text-slate-600 dark:text-neutral-400 hover:text-primary transition-all group"
                    >
                        <span>Need a Mindtrix Media prototype?</span>
                        <span className="material-symbols-rounded text-sm group-hover:translate-x-0.5 transition-transform text-primary">
                            arrow_forward
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default More;
