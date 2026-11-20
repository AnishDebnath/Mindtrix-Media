import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 bg-white shadow-sm mb-4"
            >
                <span className="text-[#6366f1] font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">edit_note</span> Blog & Resources
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 max-w-4xl mx-auto"
            >
                Digital Solutions <br />
                <span className="text-[#6366f1]">&amp;</span>{' '}
                <span className="text-[#ffc659]">Strategy</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal px-4"
            >
                Expert insights on custom software development, e-commerce scaling, and business process automation.
            </motion.p>
        </div>
    );
};

export default BlogHeader;
