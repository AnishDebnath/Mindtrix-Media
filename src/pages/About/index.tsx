import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutValues from './AboutValues';
import AboutStats from './AboutStats';
import AboutTeam from './AboutTeam';
import { WhyChooseUs, WorkTestimonials, BrandShowcase, CTA } from '../../components';


const AboutPage: React.FC = () => {
    return (
        <div className="pt-20 md:pt-24 pb-0 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="py-8 md:py-10 lg:py-12 2xl:py-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 2xl:px-20 relative z-10">
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
            <WorkTestimonials />
            <CTA />
        </div>
    );
};

export default AboutPage;
