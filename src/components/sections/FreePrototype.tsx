import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '../ui/TitleIconCapsule';
// ponytail: local asset import
import freePrototypeImg from '@/assets/free-prototype.png';

const seeIcons = [
    { icon: 'visibility', color: 'text-primary' },
    { icon: 'preview', color: 'text-secondary' },
    { icon: 'auto_awesome', color: 'text-primary' },
    { icon: 'search', color: 'text-secondary' },
];

const buildIcons = [
    { icon: 'code_blocks', color: 'text-secondary' },
    { icon: 'architecture', color: 'text-primary' },
    { icon: 'terminal', color: 'text-secondary' },
    { icon: 'rocket_launch', color: 'text-primary' },
];

const FreePrototype: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="bg-white dark:bg-neutral-950 rounded-2xl md:rounded-3xl border border-slate-200/90 dark:border-white/[0.1] p-6 md:p-12 overflow-hidden relative shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center relative z-10">
                        {/* Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 shadow-sm mb-4"
                            >
                                <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                                    <span className="material-symbols-rounded text-sm">verified_user</span> Our Unique Guarantee
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight"
                            >
                                See It First{' '}
                                <TitleIconCapsule icons={seeIcons} delay={0} />
                                . <br />
                                Then We <span className="text-primary">Build It</span>{' '}
                                <TitleIconCapsule icons={buildIcons} delay={700} initialIndex={1} />.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed font-normal"
                            >
                                Most agencies ask you to pay first. We don't.
                                Before development starts, we build a <strong className="text-slate-900 dark:text-white font-semibold">free, working prototype</strong> of your website or system.
                                You see exactly how it works. You give feedback. Then we build the real thing. Zero risk.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row sm:flex-nowrap gap-3.5"
                            >
                                <Link to="/free-prototype" className="w-fit whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-black font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all">
                                    Get Your Free Prototype
                                </Link>
                                <Link to="/process" className="w-fit whitespace-nowrap px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95">
                                    How It Works
                                </Link>
                            </motion.div>
                        </div>

                        {/* Visuals */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative"
                        >
                            {/* Card Stack Effect */}
                            <div className="relative p-3 sm:p-5">
                                {/* Behind Card 2: Primary Indigo Theme Card (Top-Right) */}
                                <div className="absolute inset-3 sm:inset-5 rounded-2xl md:rounded-3xl bg-indigo-50/90 dark:bg-neutral-900 border border-primary/30 dark:border-primary/35 shadow-xl transform rotate-[4deg] sm:rotate-[5.5deg] translate-x-3 sm:translate-x-6 -translate-y-2 sm:-translate-y-4 pointer-events-none transition-transform duration-500 flex flex-col overflow-hidden">
                                    {/* Mock Browser Header */}
                                    <div className="h-7 sm:h-8 px-3.5 flex items-center justify-between border-b border-primary/15 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03]">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400/90" />
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/90" />
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400/90" />
                                        </div>
                                        <div className="w-16 h-1.5 sm:h-2 rounded bg-primary/20 dark:bg-white/10" />
                                    </div>
                                    {/* Mock Card Content Wireframe */}
                                    <div className="p-3.5 sm:p-4 flex flex-col gap-2">
                                        <div className="w-3/4 h-2.5 sm:h-3 rounded bg-primary/15 dark:bg-white/10" />
                                        <div className="w-1/2 h-2 rounded bg-primary/10 dark:bg-white/5" />
                                    </div>
                                </div>

                                {/* Behind Card 1: Secondary Amber Theme Card (Bottom-Left) */}
                                <div className="absolute inset-3 sm:inset-5 rounded-2xl md:rounded-3xl bg-amber-50/80 dark:bg-neutral-900 border border-secondary/40 dark:border-secondary/30 shadow-lg transform -rotate-[3deg] sm:-rotate-[4.5deg] -translate-x-2 sm:-translate-x-4 translate-y-2 sm:translate-y-4 pointer-events-none transition-transform duration-500 flex flex-col overflow-hidden">
                                    {/* Mock Browser Header */}
                                    <div className="h-7 sm:h-8 px-3.5 flex items-center justify-between border-b border-secondary/20 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03]">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-400/80" />
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/80" />
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400/80" />
                                        </div>
                                        <div className="w-14 h-1.5 sm:h-2 rounded bg-secondary/25 dark:bg-white/10" />
                                    </div>
                                    {/* Mock Card Content Wireframe */}
                                    <div className="p-3.5 sm:p-4 flex flex-col gap-2">
                                        <div className="w-2/3 h-2.5 sm:h-3 rounded bg-secondary/20 dark:bg-white/10" />
                                        <div className="w-1/3 h-2 rounded bg-secondary/10 dark:bg-white/5" />
                                    </div>
                                </div>

                                {/* Front Card (Main Visual) */}
                                <div className="relative z-20 aspect-[4/3] rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-950 border border-slate-300 dark:border-white/20 shadow-2xl overflow-hidden flex flex-col group/card">
                                    <img
                                        src={freePrototypeImg}
                                        alt="Free Prototype"
                                        className="w-full h-full object-cover object-top brightness-95 dark:brightness-85 group-hover/card:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* "Approved" Stamp Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 2, rotate: -20, x: "-50%", y: "-50%" }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: -12, x: "-50%", y: "-50%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                                        className="absolute top-1/2 left-1/2 border-2 md:border-3 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-base md:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-xl uppercase tracking-wider z-20 whitespace-nowrap bg-white/90 dark:bg-black/85 backdrop-blur-md shadow-xl"
                                        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.15)" }}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <span className="material-symbols-rounded text-base md:text-xl">verified</span>
                                            Free Prototype
                                        </span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreePrototype;
