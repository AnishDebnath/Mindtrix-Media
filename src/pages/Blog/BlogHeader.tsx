import React from 'react';
import { motion } from 'framer-motion';

const BlogHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-8 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm flex items-center gap-2">
                    <span className="material-symbols-rounded text-sm">edit_note</span> Blog & Resources
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl 2xl:text-7xl font-display font-extrabold tracking-tighter leading-[1.1] text-[#111] dark:text-white"
            >
                <div className="flex flex-wrap justify-center items-center gap-x-3.5 md:gap-x-5">
                    <span>Creator Insights</span>
                    <motion.span
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="relative inline-flex w-12 h-6 md:w-20 md:h-12 lg:w-24 lg:h-14 2xl:w-32 2xl:h-20 rounded-full overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-inner shadow-black/10"
                    >
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Blog" />
                    </motion.span>
                    <span className="text-primary">& Tips</span>
                </div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-sm md:text-lg 2xl:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-6 md:mt-10 leading-relaxed font-medium px-4"
            >
                Deep dives into video strategy, editing techniques, and content growth.
            </motion.p>
        </div>
    );
};

export default BlogHeader;
