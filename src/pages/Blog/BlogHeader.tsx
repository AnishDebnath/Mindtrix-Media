import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const blogIcons = [
    { icon: 'edit_note', color: 'text-primary' },
    { icon: 'lightbulb', color: 'text-secondary' },
    { icon: 'article', color: 'text-primary' },
    { icon: 'auto_awesome', color: 'text-secondary' },
];

const BlogHeader: React.FC = () => {
    return (
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
            >
                <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">edit_note</span> Blog & Resources
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
            >
                Digital Solutions{' '}
                <TitleIconCapsule icons={blogIcons} delay={0} />{' '}
                <span className="text-primary">&amp;</span>{' '}
                <span className="text-secondary">Strategy</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto font-normal"
            >
                Expert insights on custom software development, e-commerce scaling, and business process automation.
            </motion.p>
        </div>
    );
};

export default BlogHeader;
