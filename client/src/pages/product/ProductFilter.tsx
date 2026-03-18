import React from 'react';
import { motion } from 'framer-motion';

import { categories } from './productsData';

interface ProductFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex justify-center mb-6 md:mb-8 px-4">
            <div className="inline-flex flex-wrap items-center justify-center bg-white/80 dark:bg-black/10 backdrop-blur-xl p-1.5 rounded-full border border-slate-200 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/20">
                {categories.map((cat, i) => (
                    <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative w-[120px] md:w-[150px] h-[44px] flex justify-center items-center rounded-full text-xs md:text-sm font-bold tracking-tight transition-all duration-300 ${activeCategory === cat
                            ? 'text-white'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                    >
                        <span className="relative z-10">{cat}</span>
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
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
