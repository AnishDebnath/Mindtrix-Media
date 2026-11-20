import React from 'react';
import { motion } from 'framer-motion';

const CareerHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 bg-white shadow-sm mb-4"
            >
                <span className="text-[#6366f1] font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">groups</span> Careers
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 max-w-4xl mx-auto"
            >
                Grow With Us. <br />
                <span className="text-[#6366f1]">Build The</span>{' '}
                <span className="text-[#ffc659]">Future.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal px-4"
            >
                We're a Kolkata-based digital agency building websites, CRM, ERP & SaaS products. Explore career opportunities with us.
            </motion.p>
        </div>
    );
};

export default CareerHeader;