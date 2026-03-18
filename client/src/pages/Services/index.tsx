import React from 'react';
import { servicesList } from './servicesData';
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import { FAQ, Process, WhyChooseUs, CTA } from '../../components';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <ServicesHeader />

                <div className="flex flex-col mb-16">
                    {servicesList.map((service, i) => (
                        <ServiceItem key={i} service={service} index={i} />
                    ))}
                </div>
            </div>

            <WhyChooseUs />
            <Process />
            <FAQ />
            <CTA />
        </div>
    );
};

export default ServicesPage;
