import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const transformIcons = [
    { icon: 'auto_awesome', color: 'text-primary' },
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'trending_up', color: 'text-primary' },
    { icon: 'handshake', color: 'text-secondary' },
];

const deployIcons = [
    { icon: 'deployed_code', color: 'text-secondary' },
    { icon: 'terminal', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
    { icon: 'public', color: 'text-primary' },
];

const ProductHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-sm mb-4"
            >
                <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">deployed_code</span> Our Clients &amp; Projects
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white max-w-3xl mx-auto mb-3"
            >
                Client Transformations{' '}
                <TitleIconCapsule icons={transformIcons} delay={0} />{' '}
                <br className="hidden sm:inline" />
                <span className="text-primary">&amp; Engineered</span>{' '}
                <TitleIconCapsule icons={deployIcons} delay={700} initialIndex={1} />{' '}
                <span className="text-secondary">Deployments</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal px-4"
            >
                A showcase of the websites, enterprise platforms, and digital systems we’ve engineered for our clients worldwide.
            </motion.p>
        </div>
    );
};

export default ProductHeader;
