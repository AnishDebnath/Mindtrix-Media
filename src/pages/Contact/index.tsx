import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { FAQ, CTA } from '../../components';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col pt-20 md:pt-24">
            {/* Contact Section */}
            <div className="relative min-h-[85vh] flex items-center justify-center pb-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}>
                </div>

                <div className="py-8 md:py-12 2xl:py-16 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10 w-full">
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
            <div>
                <FAQ />
            </div>
            <CTA />
        </div>
    );
};

export default ContactPage;
