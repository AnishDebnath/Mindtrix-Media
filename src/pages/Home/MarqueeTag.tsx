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
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/80 dark:bg-neutral-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] dark:hover:border-white/[0.15] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] whitespace-nowrap min-w-max transition-colors duration-300"
                        >
                            <span className="text-xs text-indigo-500 dark:text-indigo-400">✦</span>
                            <span className="font-sans font-medium text-slate-700 dark:text-neutral-300 text-xs md:text-sm tracking-tight">
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
