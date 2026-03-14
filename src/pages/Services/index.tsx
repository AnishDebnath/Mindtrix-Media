import React from 'react';
const servicesList = [
    {
        title: "Custom Website Development",
        description: "We build professional, fast business websites from scratch. Every site is designed to look great, load quickly, and turn visitors into paying customers.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
        tags: ["SEO Optimized", "Mobile Responsive", "High Performance"]
    },
    {
        title: "E-commerce Solutions",
        description: "Launch a secure, high-converting online store. We build e-commerce websites with smooth payment processing, inventory management, and a great shopping experience.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Payment Integration", "Inventory Control", "Mobile-First"]
    },
    {
        title: "Responsive Web Design",
        description: "Your website must look perfect on every device. We design fully responsive websites that adapt to phones, tablets, and desktops without losing quality.",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Mobile Friendly", "All Screen Sizes", "Modern UI"]
    },
    {
        title: "SEO & Website Performance Optimization",
        description: "We make your website faster and more visible on Google. Our SEO and performance services include speed optimization, Core Web Vitals fixes, and technical SEO audits.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000",
        tags: ["Core Web Vitals", "SEO Audit", "Speed Optimization"]
    },
    {
        title: "Branding & UI/UX Consulting",
        description: "Good design builds trust. We help you create a consistent brand identity and user-friendly interface that makes your business look professional and credible.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
        tags: ["Brand Identity", "UI Design", "UX Strategy"]
    },
    {
        title: "Website Maintenance & Support",
        description: "We keep your website updated, secure, and running smoothly. Our maintenance plans include security patches, content updates, bug fixes, and performance checks.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        tags: ["Security Updates", "Bug Fixes", "Ongoing Support"]
    },
    {
        title: "Website Migration & Upgrade",
        description: "Moving to a new platform or upgrading your old website? We handle complete website migrations without data loss, downtime, or broken links.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Zero Downtime", "Data Integrity", "Platform Migration"]
    },
    {
        title: "CRM System Development",
        description: "We build custom CRM systems that help you manage clients, track leads, and automate follow-ups. Everything your sales team needs, built exactly for your workflow.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        tags: ["Lead Tracking", "Sales Automation", "Client Dashboard"]
    },
    {
        title: "ERP Software Development",
        description: "Connect your inventory, finance, HR, and operations into one system. Our custom ERP platforms give your team real-time data and help your business run smoothly.",
        image: "https://images.unsplash.com/photo-1626785774583-b756dfe96564?auto=format&fit=crop&q=80&w=1000",
        tags: ["Inventory & Finance", "HR Management", "Live Reporting"]
    },
    {
        title: "Business Website Development",
        description: "A professional business website that builds trust and drives enquiries. We create clean, fast, and SEO-ready websites that represent your brand online.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1000",
        tags: ["Professional Design", "Lead Generation", "SEO Ready"]
    }
];
import ServiceItem from './ServiceItem';
import ServicesHeader from './ServicesHeader';
import { FAQ, Process, WhyChooseUs, CTA } from '../../components';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            <div className="pb-8 md:pb-12 2xl:pb-16 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
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
