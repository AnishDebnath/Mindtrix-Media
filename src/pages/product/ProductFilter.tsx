import React from 'react';
import { motion } from 'framer-motion';

import { categories } from '../../data/products';

interface ProductFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex justify-center mb-6 md:mb-8 px-4">
            <div className="inline-flex flex-wrap items-center justify-center bg-white/80 dark:bg-neutral-900/50 backdrop-blur-xl p-1 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                {categories.map((cat, i) => (
                    <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative w-[110px] md:w-[135px] h-[36px] flex justify-center items-center rounded-xl text-xs md:text-sm font-medium tracking-tight transition-all duration-300 ${activeCategory === cat
                            ? 'text-white dark:text-black'
                            : 'text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                    >
                        <span className="relative z-10">{cat}</span>
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-slate-950 dark:bg-white rounded-xl shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;
