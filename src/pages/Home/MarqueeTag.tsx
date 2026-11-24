import React from 'react';
import { motion } from 'framer-motion';
const marqueeItems = [
    "Free Prototype — No Risk",
    "Business Websites That Convert",
    "Custom CRM & ERP Systems",
    "E-commerce That Sells",
    "10+ Global Clients Served",
    "SEO & Performance Optimization",
    "Website Maintenance & Support",
    "4.7 Stars Client Rating"
];

const MarqueeTag: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 overflow-hidden relative z-20">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    initial={{ x: "-25%" }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex items-center gap-6 pr-6"
                    style={{ width: "max-content" }}
                >
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 shadow-sm whitespace-nowrap min-w-max transition-colors duration-300"
                        >
                            <span className={`text-xs ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>✦</span>
                            <span className="font-sans font-semibold text-slate-900 text-xs md:text-sm tracking-tight">
                                {text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarqueeTag;
