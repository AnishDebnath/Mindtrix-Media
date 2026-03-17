import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';
import { FreePrototype, Process, ProductTestimonials, CTA } from '../../components';

import { products, categories } from './products';



const ProductPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProducts = products.filter(p => p.category === activeCategory);

    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            <div className="pb-8 md:pb-12 2xl:pb-16 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <ProductHeader />
                <ProductFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.title} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <FreePrototype />
            <Process />
            <ProductTestimonials />
            <CTA />
        </div>
    );
};

export default ProductPage;
