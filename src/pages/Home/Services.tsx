import React from 'react';
import { motion } from 'framer-motion';
const services = [
    {
        title: "Website Templates",
        desc: "Premium, ready-to-use website templates that are fully customizable, responsive, and optimized for conversions. Perfect for businesses that need a professional online presence fast.",
        tags: [
            { text: "Fully Responsive", icon: "devices" },
            { text: "SEO Optimized", icon: "search" },
            { text: "Easy Customization", icon: "tune" }
        ]
    },
    {
        title: "Custom Website Development",
        desc: "Bespoke websites tailored to your brand and business goals. From landing pages to complex web applications, we build digital experiences that convert.",
        tags: [
            { text: "Tailored Design", icon: "palette" },
            { text: "Performance Focused", icon: "rocket_launch" }
        ]
    },
    {
        title: "Social Media Services",
        desc: "Comprehensive social media management, content creation, and strategy that builds your brand and engages your audience across all platforms.",
        tags: [
            { text: "Content Strategy", icon: "campaign" },
            { text: "Multi-Platform", icon: "hub" }
        ]
    },
    {
        title: "SaaS Product Development",
        desc: "We build scalable, cloud-based software solutions that solve real problems. From MVP to full-scale product, we handle the entire development lifecycle.",
        tags: [
            { text: "Scalable Architecture", icon: "cloud" },
            { text: "User-Centric Design", icon: "person" },
            { text: "Agile Development", icon: "trending_up" }
        ]
    }
];

const Services: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent relative overflow-hidden" id="services">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Services</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
                    >
                        What We Do Best
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
                    >
                        We deliver comprehensive digital solutions that transform your business. From stunning websites to powerful SaaS products, we've got you covered.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {services.map((service, idx) => {
                        const isEvenRow = Math.floor(idx / 2) % 2 === 0;
                        const isFirstInRow = idx % 2 === 0;

                        // Layout pattern: 
                        // Row 1: 7 spans, 5 spans
                        // Row 2: 5 spans, 7 spans
                        const colSpan = isEvenRow
                            ? (isFirstInRow ? 'md:col-span-7' : 'md:col-span-5')
                            : (isFirstInRow ? 'md:col-span-5' : 'md:col-span-7');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`group relative overflow-hidden rounded-[1.5rem] bg-[#121212] p-4 md:p-5 2xl:p-6 flex flex-col justify-between min-h-[180px] md:min-h-[200px] 2xl:min-h-[240px] shadow-2xl border border-white/5 ${colSpan}`}
                            >
                                <div className="absolute inset-0 opacity-30 pointer-events-none"
                                    style={{
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
                                        backgroundSize: "32px 32px"
                                    }}>
                                </div>
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="relative z-10 text-left">
                                    <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold text-white mb-2 font-display">{service.title}</h3>
                                    <p className="text-slate-400 text-sm md:text-base 2xl:text-lg leading-relaxed">{service.desc}</p>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-2 mt-6 md:mt-8 mb-1">
                                    {service.tags.map((tag, i) => (
                                        <div key={i} className="flex items-center gap-1.5 bg-[#1A1A1A] border border-white/10 rounded-full px-2.5 py-1 text-white text-[10px] 2xl:text-xs font-bold uppercase tracking-wider group-hover:border-primary/30 transition-colors">
                                            <span className="material-symbols-rounded text-primary text-sm md:text-base">{tag.icon}</span>
                                            {tag.text}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
