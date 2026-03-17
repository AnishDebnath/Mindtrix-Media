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

const Home: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

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
