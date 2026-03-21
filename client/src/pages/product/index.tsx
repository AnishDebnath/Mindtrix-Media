import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';
import { FreePrototype, Process, ProductTestimonials, CTA } from '../../components';

import { products, categories } from './productsData';



const ProductPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');
    
    // Check if the query category exists in our categories list
    const validInitialCategory = initialCategory && categories.includes(initialCategory) 
        ? initialCategory 
        : categories[0];

    const [activeCategory, setActiveCategory] = useState(validInitialCategory);

    // Update state if URL changes - e.g. when clicking a link from another page
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && categories.includes(categoryFromUrl)) {
            setActiveCategory(categoryFromUrl);
        }
    }, [searchParams]);

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
                    className="flex flex-col max-w-6xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.title} product={product} index={index} />
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
