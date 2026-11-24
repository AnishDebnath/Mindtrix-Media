import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface Stat {
    count: string;
    label: string;
    icon: string;
}

const stats: Stat[] = [
    { count: '10', label: 'Projects Delivered', icon: 'code' },
    { count: '7', label: 'Clients Worldwide', icon: 'groups' },
    { count: '5', label: 'Countries Reached', icon: 'public' },
    { count: '98', label: 'Client Satisfaction', icon: 'analytics' },
];

const StatItem: React.FC<{ stat: Stat; idx: number; isLast: boolean }> = ({ stat, idx, isLast }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(stat.count.replace(/,/g, ''));
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setDisplayCount(Math.floor(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, stat.count]);

    // Handle suffixes/prefixes for labels
    const getFormattedCount = () => {
        const formatted = displayCount.toLocaleString();
        if (stat.label === 'Countries Reached') return `${formatted}+`;
        if (stat.label === 'Client Satisfaction') return `${formatted}%`;
        return `${formatted}+`;
    };

    const isSecondary = idx % 2 === 1;
    const iconColor = isSecondary ? 'text-secondary' : 'text-primary';
    const accentBg = isSecondary ? 'bg-secondary' : 'bg-primary';
    const hoverTextColor = isSecondary ? 'group-hover:text-secondary' : 'group-hover:text-primary';

    return (
        <motion.div
            ref={ref}
            whileHover="hover"
            className={`flex flex-col items-center justify-center py-4 px-2.5 sm:px-4 md:py-6 ${
                idx % 2 === 0 ? 'border-r' : ''
            } ${idx < 2 ? 'border-b lg:border-b-0' : ''} ${
                !isLast ? 'lg:border-r' : ''
            } border-slate-200/60 dark:border-white/[0.06] group relative overflow-hidden transition-all duration-500`}
        >
            {/* Glossy Hover Highlight */}
            <div className={`absolute inset-0 bg-gradient-to-b ${isSecondary ? 'from-secondary/[0.06]' : 'from-primary/[0.04]'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <motion.div
                variants={{
                    hover: { y: -8, scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex flex-col items-center"
            >
                <div className="flex items-center justify-center gap-2 mb-1">
                    <div className={`text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight ${hoverTextColor} transition-colors duration-300`}>
                        {getFormattedCount()}
                    </div>
                    <div className={`w-7 h-7 md:w-8 md:h-8 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center ${iconColor} shadow-sm border border-slate-100 dark:border-white/5 group-hover:shadow-lg ${isSecondary ? 'group-hover:shadow-secondary/15' : 'group-hover:shadow-primary/15'} transition-all duration-300 shrink-0`}>
                        <motion.span
                            variants={{
                                hover: { rotate: 12, scale: 1.1 }
                            }}
                            className="material-symbols-rounded text-lg md:text-xl"
                        >
                            {stat.icon}
                        </motion.span>
                    </div>
                </div>

                <div className="text-slate-500 dark:text-slate-400 font-medium text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-wider text-center opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                </div>
            </motion.div>

            {/* Interactive Bottom Accent */}
            <motion.div
                variants={{
                    hover: { width: '40%', opacity: 1 }
                }}
                initial={{ width: '0%', opacity: 0 }}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] ${accentBg} rounded-full blur-[1px]`}
            />
        </motion.div>
    );
};

const AboutStats: React.FC = () => {
    return (
        <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl -z-10 rounded-[3rem] opacity-30" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] max-w-4xl mx-auto"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <StatItem
                            key={idx}
                            stat={stat}
                            idx={idx}
                            isLast={idx === stats.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </motion.div>
        </div>
    );
};

export default AboutStats;
