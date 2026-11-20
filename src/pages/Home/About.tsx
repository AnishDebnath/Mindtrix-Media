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

    const colorClass = idx === 0
        ? 'text-primary'
        : idx === 1
            ? 'text-secondary'
            : 'text-slate-900 dark:text-white';

    return (
        <div className="text-center min-w-[100px] md:min-w-[140px]" ref={ref}>
            <div className={`text-3xl md:text-4xl font-bold mb-1 tracking-tight ${colorClass}`}>
                {getFormattedCount()}
                {isDecimal && <span className="text-secondary text-2xl md:text-3xl ml-1">★</span>}
            </div>
            <div className="text-muted-slate font-bold text-[10px] md:text-xs tracking-wider uppercase whitespace-nowrap">{stat.label}</div>
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
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-6 shadow-sm"
                >
                    <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-rounded text-sm">info</span> About
                    </span>
                </motion.div>
                <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 leading-[1.15] tracking-tight text-slate-900 text-center">
                    We help businesses build better websites, smarter software, and stronger digital systems.{' '}
                    <span className="text-primary">Simple, effective,</span>{' '}
                    and <span className="text-secondary">built for growth.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 2xl:gap-16 bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl px-8 md:px-14 py-6 md:py-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl divide-y md:divide-y-0 md:divide-x divide-muted-slate/30"
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
