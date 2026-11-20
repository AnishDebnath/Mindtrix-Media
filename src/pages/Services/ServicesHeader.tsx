import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.12] bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            >
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase text-xs tracking-wider">✦ Our Expertise</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 dark:text-white max-w-4xl mx-auto"
            >
                Services <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    We Offer
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal px-4"
            >
                Mindtrix Media builds custom CRM systems, ERP platforms, business websites, and e-commerce solutions to help companies grow and operate efficiently worldwide.
            </motion.p>
        </div>
    );
};

export default ServicesHeader;
