import React, { lazy, Suspense } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import useSEO from '../../utils/useSEO';

// Lazy Components
const FAQ = lazy(() => import('../../components/FAQ'));
const CTA = lazy(() => import('../../components/CTA'));

const ContactPage: React.FC = () => {
    useSEO({
        title: 'Contact Mindtrix Media | Start Your Web & Software Project Today',
        description: 'Get in touch with Mindtrix Media. Tell us about your project and we\'ll get back to you within 24 hours. Website development, CRM, ERP & e-commerce enquiries welcome.',
        keywords: 'contact Mindtrix Media, hire web developer, web development enquiry, software development contact, get a website quote, start a project',
        canonicalPath: '/contact',
        ogTitle: 'Contact Us — Start Your Project | Mindtrix Media',
        ogDescription: 'Ready to build something great? Tell us about your project and get a response within 24 hours. Website, CRM, ERP & e-commerce development.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Mindtrix Media',
            url: 'https://mindtrixmedia.com/contact',
            description: 'Reach out to Mindtrix Media to discuss your website, CRM, ERP, or e-commerce project.',
            publisher: { '@type': 'Organization', name: 'Mindtrix Media', url: 'https://mindtrixmedia.com', email: 'mindtrixmediaindia@gmail.com' },
        },
    });
    return (
        <div className="flex flex-col pt-28 md:pt-36 2xl:pt-40">
            {/* Contact Section */}
            <div className="relative">
                <div className="pb-12 md:pb-20 2xl:pb-28 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10 w-full">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <ContactInfo />
                        </div>
                        <div className="relative h-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <Suspense fallback={null}>
                <FAQ />
            </Suspense>
            <Suspense fallback={null}>
                <CTA />
            </Suspense>
        </div>
    );
};

export default ContactPage;
