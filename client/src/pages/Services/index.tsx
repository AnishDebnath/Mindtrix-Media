import React, { lazy, Suspense } from 'react';
import { servicesList } from './servicesData';
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import useSEO from '../../utils/useSEO';

// Lazy Components
const FAQ = lazy(() => import('../../components/FAQ'));
const Process = lazy(() => import('../../components/Process'));
const WhyChooseUs = lazy(() => import('../../components/WhyChooseUs'));
const CTA = lazy(() => import('../../components/CTA'));

const ServicesPage: React.FC = () => {
    useSEO({
        title: 'Our Services | Custom Web Design, CRM, ERP & E-commerce Development — Mindtrix Media',
        description: 'Mindtrix Media offers custom website design, e-commerce development, CRM & ERP system development, SEO optimisation, and website maintenance for businesses worldwide.',
        keywords: 'web design services, custom CRM development services, ERP development services, ecommerce development services, SEO services, website maintenance, responsive web design services, SaaS development services',
        canonicalPath: '/services',
        ogTitle: 'Services — Custom Web, CRM, ERP & E-commerce Development | Mindtrix Media',
        ogDescription: 'From custom websites and e-commerce to CRM & ERP systems — explore how Mindtrix Media can transform your business digitally.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Services by Mindtrix Media',
            url: 'https://mindtrixmedia.com/services',
            itemListElement: [
                { '@type': 'Service', position: 1, name: 'Custom Website Development', provider: { '@type': 'Organization', name: 'Mindtrix Media' }, description: 'Bespoke, high-performance websites tailored to your brand and business goals.' },
                { '@type': 'Service', position: 2, name: 'E-Commerce Development', provider: { '@type': 'Organization', name: 'Mindtrix Media' }, description: 'Powerful online stores with seamless checkout, product management and payment integration.' },
                { '@type': 'Service', position: 3, name: 'CRM System Development', provider: { '@type': 'Organization', name: 'Mindtrix Media' }, description: 'Custom CRM platforms that centralise your customer data and automate your sales pipeline.' },
                { '@type': 'Service', position: 4, name: 'ERP Software Development', provider: { '@type': 'Organization', name: 'Mindtrix Media' }, description: 'End-to-end ERP solutions to connect and automate every aspect of your business operations.' },
                { '@type': 'Service', position: 5, name: 'SEO & Performance Optimisation', provider: { '@type': 'Organization', name: 'Mindtrix Media' }, description: 'Technical SEO and Core Web Vitals optimisation to rank higher and load faster.' },
            ],
        },
    });
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

            <Suspense fallback={null}>
                <WhyChooseUs />
                <Process />
                <FAQ />
                <CTA />
            </Suspense>
        </div>
    );
};

export default ServicesPage;
