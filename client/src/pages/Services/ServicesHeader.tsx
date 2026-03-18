import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">✦ Our Expertise</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl 2xl:text-7xl font-display font-extrabold tracking-tighter leading-[1.1] text-[#111] dark:text-white"
            >
                <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6">
                    <span>Services</span>
                    <motion.span
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative inline-flex w-12 h-6 md:w-20 md:h-12 lg:w-24 lg:h-14 2xl:w-32 2xl:h-20 rounded-full overflow-hidden items-center justify-center bg-blue-100 align-middle shadow-inner"
                    >
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Services" />
                    </motion.span>
                    <span className="text-secondary">We Offer</span>
                </div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-sm md:text-lg 2xl:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-6 md:mt-10 leading-relaxed font-medium px-4"
            >
                Mindtrix Media builds custom CRM systems, ERP platforms, business websites, and e-commerce solutions to help companies grow and operate efficiently worldwide.            </motion.p>
        </div>
    );
};

export default ServicesHeader;
