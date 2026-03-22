import React, { useState, useEffect } from 'react';
import {
    FreePrototype,
    WhyChooseUs,
    Process,
    FAQ,
    BrandShowcase,
    OurSolution,
    CTA
} from '../../components';
import Hero from './Hero';
import Carousel from './Carousel';
import MarqueeTag from './MarqueeTag';
import About from './About';
import Services from './Services';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Blog from './Blog';
import FooterMarquee from './FooterMarquee';
import useSEO from '../../utils/useSEO';

const Home: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useSEO({
        title: 'Mindtrix Media | Website Development & Software Solutions — CRM, ERP & E-commerce',
        description: 'Mindtrix Media builds professional websites, e-commerce stores, custom CRM systems, and ERP platforms for businesses worldwide. See a free prototype before you pay — zero risk.',
        keywords: 'website development company, custom CRM development, ERP software development, ecommerce website development, business website design, web development agency India, SaaS development, responsive web design, Mindtrix Media',
        canonicalPath: '/',
        ogTitle: 'Mindtrix Media — Professional Website & Software Development Agency',
        ogDescription: 'We build websites, e-commerce stores, CRM systems & ERP platforms for businesses worldwide. Free prototype before development. Zero risk.',
        structuredData: {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Organization',
                    '@id': 'https://mindtrixmedia.com/#organization',
                    name: 'Mindtrix Media',
                    url: 'https://mindtrixmedia.com',
                    logo: 'https://mindtrixmedia.com/src/assets/mindtrix-media-logo.png',
                    description: 'Website development and software solutions agency specialising in custom CRM, ERP, SaaS and e-commerce platforms for businesses worldwide.',
                    address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' },
                    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@mindtrixmedia.com' },
                    sameAs: ['https://www.linkedin.com/company/mindtrix-media', 'https://twitter.com/MindtrixMedia'],
                },
                {
                    '@type': 'WebSite',
                    '@id': 'https://mindtrixmedia.com/#website',
                    url: 'https://mindtrixmedia.com',
                    name: 'Mindtrix Media',
                    publisher: { '@id': 'https://mindtrixmedia.com/#organization' },
                    potentialAction: { '@type': 'SearchAction', target: 'https://mindtrixmedia.com/blog?q={search_term_string}', 'query-input': 'required name=search_term_string' },
                },
            ],
        },
    });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative z-10">
            <Hero />
            <Carousel windowWidth={windowWidth} />
            <MarqueeTag />
            <About />
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20">
                <BrandShowcase />
            </div>
            <FreePrototype />
            <WhyChooseUs />
            <Services />
            <Process />
            <FeaturedProducts />
            <OurSolution />
            <Testimonials />
            <FAQ />
            <Blog />
            <FooterMarquee />
            <CTA />
        </div>
    );
};

export default Home;
