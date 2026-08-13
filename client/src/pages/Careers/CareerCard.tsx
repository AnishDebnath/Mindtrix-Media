import React from 'react';
import { motion } from 'framer-motion';
import { Opening } from './CareerData';

interface CareerCardProps {
    opening: Opening;
    index: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ opening, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.005 }}
            viewport={{ once: true }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-10">
                {/* Left - Role Info */}
                <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary group-hover:bg-primary/20 transition-all duration-300">
                            {opening.type}
                        </span>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:bg-primary/20 transition-all duration-300">
                            {opening.location}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {opening.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-5">
                        {opening.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {opening.perks.map((perk, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs md:text-sm">
                                <span className="material-symbols-rounded text-sm text-primary mt-0.5 flex-shrink-0">check_circle</span>
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right - Apply Panel */}
                <div className="flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/5 pt-6 lg:pt-0 lg:pl-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Hiring — Apply Now</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <motion.a
                                href={`mailto:${opening.applyEmail}?subject=${encodeURIComponent('Application: ' + opening.title)}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary text-white px-5 py-3 rounded-xl font-display font-bold text-sm shadow-lg shadow-primary/20 transition-all"
                            >
                                <span className="material-symbols-rounded text-sm">send</span>
                                Apply via Email
                            </motion.a>
                            {opening.whatsapp && (
                                <motion.a
                                    href={`https://wa.me/${opening.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 px-5 py-3 rounded-xl font-display font-bold text-sm transition-colors"
                                >
                                    <span className="material-symbols-rounded text-sm">chat</span>
                                    WhatsApp
                                </motion.a>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-widest">
                        <span className="material-symbols-rounded text-sm text-primary">verified</span>
                        Direct hiring · No fees · No middlemen
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CareerCard;