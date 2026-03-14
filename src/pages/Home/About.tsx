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

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(stat.count.replace(/,/g, '').replace(/[M+]/g, ''));
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setDisplayCount(Math.floor(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, stat.count]);

    const getFormattedCount = () => {
        const formatted = displayCount.toLocaleString();
        if (stat.count.includes('M')) return `${formatted}M+`;
        if (stat.count.includes('+')) return `${formatted}+`;
        return formatted;
    };

    return (
        <div className="text-center min-w-[100px] md:min-w-[140px]" ref={ref}>
            <div className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-secondary mb-1 md:mb-1.5 font-display tracking-tight">
                {getFormattedCount()}
            </div>
            <div className="text-slate-900 dark:text-slate-100 font-bold text-[10px] md:text-xs 2xl:text-sm tracking-tight uppercase whitespace-nowrap">{stat.label}</div>
        </div>
    );
};

const About: React.FC = () => {
    const stats: Stat[] = [
        { count: '50+', label: 'Projects Delivered' },
        { count: '100+', label: 'Clients Worldwide' },
        { count: '15+', label: 'Countries Served' },
    ];

    return (
        <section className="py-8 md:py-12 2xl:py-16" id="about">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-[3rem] border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs">✦ About</span>
                </motion.div>
                <motion.h2 {...fadeInUp} className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold mb-8 md:mb-12 leading-tight text-slate-900 dark:text-white text-center">
                    We help businesses build better websites, smarter software, and stronger digital systems. <span className="text-primary">Simple, effective,</span> and <span className="text-secondary">built for growth.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 2xl:gap-12 bg-white dark:bg-slate-900 rounded-[1.5rem] 2xl:rounded-[2rem] px-8 md:px-12 py-6 md:py-8 shadow-xl shadow-slate-200/50 dark:shadow-black/50 border-2 border-dashed border-slate-200 dark:border-slate-800"
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
