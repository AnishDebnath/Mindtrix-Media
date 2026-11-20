import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

interface Stat {
    count: string;
    label: string;
}

const StatItem: React.FC<{ stat: Stat; idx: number }> = ({ stat, idx }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isDecimal = stat.count.includes('.');

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(stat.count.replace(/,/g, '').replace(/[M+]/g, ''));
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setDisplayCount(value),
            });
            return () => controls.stop();
        }
    }, [isInView, stat.count]);

    const getFormattedCount = () => {
        if (isDecimal) {
            return displayCount.toFixed(1);
        }
        const formatted = Math.floor(displayCount).toLocaleString();
        if (stat.count.includes('M')) return `${formatted}M+`;
        if (stat.count.includes('+')) return `${formatted}+`;
        return formatted;
    };

    return (
        <div className="text-center min-w-[100px] md:min-w-[140px]" ref={ref}>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                {getFormattedCount()}
            </div>
            <div className="text-slate-500 dark:text-neutral-400 font-medium text-[10px] md:text-xs tracking-wider uppercase whitespace-nowrap">{stat.label}</div>
        </div>
    );
};

const About: React.FC = () => {
    const stats: Stat[] = [
        { count: '10+', label: 'Projects Delivered' },
        { count: '7+', label: 'Clients Worldwide' },
        { count: '4.7', label: 'Client Rating' },
    ];

    return (
        <section className="py-8 md:py-12 2xl:py-16" id="about">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.12] bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                >
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase text-xs tracking-wider">✦ About</span>
                </motion.div>
                <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 leading-[1.15] tracking-tight text-slate-900 dark:text-white text-center">
                    We help businesses build better websites, smarter software, and stronger digital systems.{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Simple, effective, and built for growth.
                    </span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 2xl:gap-16 bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl px-8 md:px-14 py-6 md:py-8 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl"
                >
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} stat={stat} idx={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
