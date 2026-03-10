import React from 'react';
import AboutHeader from './AboutHeader';
import AboutHeroImage from './AboutHeroImage';
import AboutValues from './AboutValues';
import AboutStats from './AboutStats';
import AboutTeam from './AboutTeam';
import { WhyChooseUs, WorkTestimonials, BrandShowcase, CTA } from '../../components';


const AboutPage: React.FC = () => {
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
            <WorkTestimonials />
            <CTA />
        </div>
    );
};

export default AboutPage;
