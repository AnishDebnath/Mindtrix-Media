import React from 'react';
import { motion } from 'framer-motion';

import { categories } from '../../data/products';

interface ProductFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const getCategoryIcon = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes('website') || lower.includes('web')) return 'language';
    if (lower.includes('ecommerce') || lower.includes('e-commerce')) return 'shopping_bag';
    if (lower.includes('erp') || lower.includes('crm') || lower.includes('software')) return 'dashboard';
    return 'widgets';
};

const ProductFilter: React.FC<ProductFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex justify-center mb-6 md:mb-8 px-4">
            <div className="inline-grid grid-cols-2 items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/[0.12] shadow-sm backdrop-blur-md">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    const icon = getCategoryIcon(cat);
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`group relative flex items-center justify-center gap-1.5 min-w-[125px] sm:min-w-[140px] px-3 sm:px-4 py-1.5 rounded-xl text-[14px] font-semibold tracking-tight transition-all duration-200 whitespace-nowrap select-none cursor-pointer ${
                                isActive
                                    ? 'text-white'
                                    : 'text-slate-600 dark:text-neutral-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-900'
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeClientFilterPill"
                                    className="absolute inset-0 rounded-xl bg-primary shadow-xs"
                                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                />
                            )}
                            <span
                                className={`material-symbols-rounded text-sm relative z-10 transition-colors ${
                                    isActive ? 'text-white' : 'text-slate-400 dark:text-neutral-500 group-hover:text-primary dark:group-hover:text-primary'
                                }`}
                            >
                                {icon}
                            </span>
                            <span className="relative z-10">{cat}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductFilter;
