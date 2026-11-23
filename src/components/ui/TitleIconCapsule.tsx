import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TitleIconItem {
    icon: string;
    color?: string;
}

interface TitleIconCapsuleProps {
    icons: TitleIconItem[];
    interval?: number;
    delay?: number;
    initialIndex?: number;
    className?: string;
}

export const TitleIconCapsule: React.FC<TitleIconCapsuleProps> = ({
    icons,
    interval = 2400,
    delay = 0,
    initialIndex = 0,
    className = ''
}) => {
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        if (!icons || icons.length <= 1) return;

        let timer: NodeJS.Timeout;
        const startTimeout = setTimeout(() => {
            timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % icons.length);
            }, interval);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (timer) clearInterval(timer);
        };
    }, [icons, interval, delay]);

    if (!icons || icons.length === 0) return null;

    const current = icons[index % icons.length];
    const color = current.color || (index % 2 === 0 ? 'text-primary' : 'text-secondary');

    return (
        <span
            className={`inline-flex items-center justify-center align-middle mx-1 sm:mx-2.5 h-[0.95em] w-[1.14em] rounded-md sm:rounded-xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 shadow-xs overflow-hidden relative -top-[0.06em] select-none p-0 shrink-0 ${className}`}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={current.icon}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`material-symbols-rounded text-[0.82em] leading-none ${color}`}
                >
                    {current.icon}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default TitleIconCapsule;
