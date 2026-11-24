import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const buildIcons = [
    { icon: 'code_blocks', color: 'text-primary' },
    { icon: 'web', color: 'text-secondary' },
    { icon: 'terminal', color: 'text-primary' },
    { icon: 'database', color: 'text-secondary' },
];

const deliverIcons = [
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'shopping_bag', color: 'text-primary' },
    { icon: 'dashboard', color: 'text-secondary' },
    { icon: 'hub', color: 'text-primary' },
];
const services = [
    {
        title: "Custom Website Development",
        desc: "We build professional, fast websites for your business. Every site is designed to look great, load fast, and turn visitors into customers.",
        tags: [
            { text: "SEO Optimized", icon: "search" },
            { text: "Mobile Friendly", icon: "smartphone" },
            { text: "High Performance", icon: "rocket_launch" }
        ]
    },
    {
        title: "Website Optimization & Maintenance",
        desc: "Keep your site running at peak performance. We handle speed optimization, security updates, and regular maintenance so you can focus on growing your business.",
        tags: [
            { text: "Speed Boost", icon: "speed" },
            { text: "Security Patching", icon: "security" },
            { text: "Uptime Monitoring", icon: "monitor_heart" }
        ]
    },
    {
        title: "CRM & Business System Development",
        desc: "Scale your operations with custom software. From tracking leads to automating sales workflows, we build systems that keep your business organized and efficient.",
        tags: [
            { text: "Lead Tracking", icon: "trending_up" },
            { text: "Sales Automation", icon: "auto_mode" },
            { text: "Business Insights", icon: "analytics" }
        ]
    },
    {
        title: "E-commerce Solutions",
        desc: "Launch a powerful online store designed to sell. We integrate secure payment gateways, manage inventory, and create a smooth shopping journey for your customers.",
        tags: [
            { text: "Secure Payments", icon: "credit_card" },
            { text: "Inventory Management", icon: "inventory" },
            { text: "Cart Optimization", icon: "shopping_cart_checkout" }
        ]
    },
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
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">design_services</span> Services
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        What <span className="text-primary">We Build</span>{' '}
                        <TitleIconCapsule icons={buildIcons} delay={0} />{' '}
                        For <span className="text-secondary">Your Business</span>{' '}
                        <TitleIconCapsule icons={deliverIcons} delay={700} initialIndex={1} />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto font-normal"
                    >
                        Mindtrix Media builds custom websites, e-commerce stores, CRM systems, business platforms, and more for businesses of all sizes across the world.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 max-w-7xl mx-auto">
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
                                whileHover={{ y: -4 }}
                                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-950/70 p-4 md:p-5 flex flex-col justify-between min-h-[175px] md:min-h-[195px] 2xl:min-h-[215px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 hover:border-slate-300 hover:shadow-md dark:border-white/[0.08] dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 ${colSpan}`}
                            >
                                <div className="absolute inset-0 opacity-20 pointer-events-none"
                                    style={{
                                        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                                        backgroundSize: "32px 32px"
                                    }}>
                                </div>
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="relative z-10 text-left">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">{service.desc}</p>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-2 mt-4 md:mt-5 mb-0">
                                    {service.tags.map((tag, i) => {
                                        const iconColor = (idx + i) % 2 === 0 ? 'text-primary' : 'text-secondary';
                                        return (
                                            <div key={i} className="flex items-center gap-1.5 bg-slate-50 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/[0.08] rounded-lg px-3 py-1 text-slate-800 dark:text-neutral-300 text-[10px] md:text-xs font-semibold transition-colors">
                                                <span className={`material-symbols-rounded text-sm md:text-base ${iconColor}`}>{tag.icon}</span>
                                                {tag.text}
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Explore All Services</span>
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
