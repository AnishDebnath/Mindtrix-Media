import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import ProductFilter from './ProductFilter';
import { products, categories } from '../../data/products';
import useSEO from '../../utils/useSEO';

// Lazy Components
const FreePrototype = lazy(() => import('../../components/sections/FreePrototype'));
const Process = lazy(() => import('../../components/sections/Process'));
const ProductTestimonials = lazy(() => import('../../components/product/ProductTestimonials'));
const CTA = lazy(() => import('../../components/sections/CTA'));

const ProductPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category');
    
    // Check if the query category exists in our categories list
    const validInitialCategory = initialCategory && categories.includes(initialCategory) 
        ? initialCategory 
        : categories[0];

    const [activeCategory, setActiveCategory] = useState(validInitialCategory);

    useSEO({
        title: 'Clients & Case Studies | Engineered Projects — Mindtrix Media',
        description: 'Explore Mindtrix Media\'s portfolio of real client case studies and custom-built digital solutions — from e-commerce stores to ERP and CRM systems.',
        keywords: 'Mindtrix clients, client case studies, custom website portfolio, web design portfolio, e-commerce templates, corporate website design',
        canonicalPath: '/clients',
        ogTitle: 'Clients & Case Studies | Mindtrix Media',
        ogDescription: 'Real-world digital platforms and systems we’ve engineered for industry leaders worldwide.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Clients & Case Studies — Mindtrix Media',
            url: 'https://mindtrixmedia.com/clients',
            description: 'A showcase of client transformations and custom digital solutions built by Mindtrix Media.',
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

            <Suspense fallback={null}>
                <FreePrototype />
            </Suspense>
            <Suspense fallback={null}>
                <Process />
            </Suspense>
            <Suspense fallback={null}>
                <ProductTestimonials />
            </Suspense>
            <Suspense fallback={null}>
                <CTA />
            </Suspense>
        </div>
    );
};

export default ProductPage;
