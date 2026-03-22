import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutValues from './AboutValues';
import AboutStats from './AboutStats';
import AboutTeam from './AboutTeam';
import { WhyChooseUs, ProductTestimonials, BrandShowcase, CTA } from '../../components';
import useSEO from '../../utils/useSEO';


const AboutPage: React.FC = () => {
    useSEO({
        title: 'About Mindtrix Media | Web & Software Development Agency — Kolkata, India',
        description: 'Meet the team behind Mindtrix Media — a website and software development agency based in Kolkata, India. We build CRM, ERP, e-commerce & SaaS solutions for businesses worldwide.',
        keywords: 'about Mindtrix Media, web development agency Kolkata, software development team India, digital agency about us, CRM ERP development agency',
        canonicalPath: '/about',
        ogTitle: 'About Mindtrix Media — Our Mission, Vision & Team',
        ogDescription: 'We are a Kolkata-based digital agency building professional websites, CRM, ERP & SaaS products for companies worldwide. Learn our story and meet our team.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Mindtrix Media',
            url: 'https://mindtrixmedia.com/about',
            description: 'A Kolkata-based web and software development agency specialising in CRM, ERP, SaaS, and e-commerce solutions for global businesses.',
            publisher: {
                '@type': 'Organization',
                name: 'Mindtrix Media',
                url: 'https://mindtrixmedia.com',
            },
        },
    });
    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="pb-8 md:pb-12 2xl:pb-16 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <AboutHeader />
                <div className="mb-10 md:mb-12">
                    <BrandShowcase />
                </div>
                <AboutHeroImage />
                <AboutStats />
            </div>
            <AboutValues />
            <AboutTeam />
            <WhyChooseUs />
            <ProductTestimonials />
            <CTA />
        </div>
    );
};

export default AboutPage;
