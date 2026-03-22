import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';
import { FreePrototype, Process, ProductTestimonials, CTA } from '../../components';
import { products, categories } from './productsData';
import useSEO from '../../utils/useSEO';



const ProductPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');
    
    // Check if the query category exists in our categories list
    const validInitialCategory = initialCategory && categories.includes(initialCategory) 
        ? initialCategory 
        : categories[0];

    const [activeCategory, setActiveCategory] = useState(validInitialCategory);

    useSEO({
        title: 'Products & Projects | Prebuilt Website Templates & Custom Builds — Mindtrix Media',
        description: 'Explore Mindtrix Media\'s portfolio of prebuilt website templates and custom-built digital solutions — from e-commerce stores to CRM systems and corporate websites.',
        keywords: 'prebuilt website templates, buy website template, custom website portfolio, web design portfolio, e-commerce templates, corporate website design, Mindtrix Media products',
        canonicalPath: '/product',
        ogTitle: 'Products — Prebuilt Templates & Custom Solutions | Mindtrix Media',
        ogDescription: 'Buy ready-to-launch website templates or explore our custom-built digital solutions. E-commerce, CRM, ERP & corporate websites.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Products & Projects — Mindtrix Media',
            url: 'https://mindtrixmedia.com/product',
            description: 'A showcase of prebuilt website templates and custom digital solutions built by Mindtrix Media.',
            publisher: { '@type': 'Organization', name: 'Mindtrix Media', url: 'https://mindtrixmedia.com' },
        },
    });

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
