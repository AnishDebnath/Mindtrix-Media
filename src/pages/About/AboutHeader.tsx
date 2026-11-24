import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const digitalIcons = [
    { icon: 'language', color: 'text-primary' },
    { icon: 'devices', color: 'text-secondary' },
    { icon: 'code_blocks', color: 'text-primary' },
    { icon: 'bolt', color: 'text-secondary' },
];

const partnerIcons = [
    { icon: 'handshake', color: 'text-secondary' },
    { icon: 'verified', color: 'text-primary' },
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'public', color: 'text-primary' },
];

const AboutHeader: React.FC = () => {
    return (
        <div className="text-center mb-10 md:mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-sm mb-4"
            >
                <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">rocket_launch</span> Our Mission
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white max-w-3xl mx-auto mb-3"
            >
                We're Your Digital{' '}
                <TitleIconCapsule icons={digitalIcons} delay={0} />{' '}
                <br className="hidden sm:inline" />
                <span className="text-primary">Solutions</span>{' '}
                <TitleIconCapsule icons={partnerIcons} delay={700} initialIndex={1} />{' '}
                <span className="text-secondary">Partner.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal px-4"
            >
                Mindtrix Media is a website and software development agency based in Kolkata, India. We build professional business websites, e-commerce stores, CRM systems, and ERP platforms for businesses worldwide.
            </motion.p>
        </div>
    );
};

export default AboutHeader;
