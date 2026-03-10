import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { FAQ, CTA } from '../../components';

const ContactPage: React.FC = () => {
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
            <div>
                <FAQ />
            </div>
            <CTA />
        </div>
    );
};

export default ContactPage;
