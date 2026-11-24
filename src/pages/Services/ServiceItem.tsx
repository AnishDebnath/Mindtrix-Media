import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceItemProps {
    service: {
        title: string;
        description: string;
        image: string;
        tags: string[];
    };
    index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
    const isAlternate = index % 2 === 1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 md:mb-8"
        >
            <div className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md overflow-hidden">
                <div className={`flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6 ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Left/Right Visual Box: Gradient Frame + Floating 4/3 Image Window */}
                    <div
                        className={`w-full lg:w-[46%] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 flex items-center justify-center relative overflow-hidden group ${
                            isAlternate
                                ? 'bg-gradient-to-br from-secondary/20 via-amber-100/70 to-primary/15 dark:from-secondary/15 dark:via-neutral-900 dark:to-primary/10'
                                : 'bg-gradient-to-br from-primary/20 via-indigo-100/70 to-secondary/15 dark:from-primary/20 dark:via-neutral-900 dark:to-secondary/10'
                        }`}
                    >
                        {/* Subtle Grid Line Pattern */}
                        <div
                            className="absolute inset-0 opacity-30 dark:opacity-15 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(to right, rgba(99,92,247,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,92,247,0.12) 1px, transparent 1px)',
                                backgroundSize: '36px 36px',
                            }}
                        />

                        {/* Floating Inner Image Frame (4/3 Ratio) */}
                        <div className="relative z-10 w-full max-w-[440px] bg-white dark:bg-neutral-950 rounded-xl md:rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-black">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right/Left Details Content (Preserving ServiceItem content) */}
                    <div className="w-full lg:w-[54%] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-start text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-12 h-[2px] bg-primary" />
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">0{index + 1}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight leading-tight">
                            {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-5 max-w-xl font-normal">
                            {service.description}
                        </p>

                        {/* Features/Tags Grid */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {service.tags.map((tag, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-slate-100 dark:bg-white/[0.05] rounded-lg px-3 py-1 border border-slate-200/80 dark:border-white/[0.08] transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    <span className="text-xs font-medium text-slate-700 dark:text-neutral-300">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Actions (Matching Hero section buttons, equal height) */}
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                            <Link
                                to="/free-prototype"
                                className="inline-flex items-center justify-center gap-2 h-10 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                            >
                                <span>Free Prototype</span>
                                <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                    <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                                </div>
                            </Link>

                            <Link
                                to="/clients"
                                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 dark:text-neutral-200 dark:hover:text-white bg-white hover:bg-slate-50 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 border border-slate-300 dark:border-white/[0.1] shadow-sm backdrop-blur-md transition-all active:scale-95"
                            >
                                <span>View Work</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ServiceItem;
