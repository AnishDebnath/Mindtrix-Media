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
                <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 p-6 md:p-12 overflow-hidden relative shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center relative z-10">
                        {/* Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 bg-white shadow-sm mb-4"
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
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
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
                                className="text-sm md:text-base text-slate-600 dark:text-neutral-400 mb-8 leading-relaxed font-normal"
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
                            <div className="relative aspect-[4/3]">
                                {/* Back Card */}
                                <div className="absolute top-8 right-8 inset-0 bg-slate-100 dark:bg-neutral-900/40 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/[0.04] transform rotate-6 opacity-60" />
                                {/* Middle Card */}
                                <div className="absolute top-4 right-4 inset-0 bg-slate-200 dark:bg-neutral-900/60 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/[0.06] transform rotate-3 opacity-80" />

                                {/* Front Card (Main Visual) */}
                                <div className="absolute inset-0 bg-white dark:bg-black rounded-2xl md:rounded-3xl border border-slate-200/80 dark:border-white/[0.1] shadow-2xl overflow-hidden flex flex-col group/card">
                                    <img
                                        src={freePrototypeImg}
                                        alt="Free Prototype"
                                        className="w-full h-full object-cover object-top brightness-[0.7] dark:brightness-[0.5]"
                                    />

                                    {/* "Approved" Stamp Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 2, rotate: -20, x: "-50%", y: "-50%" }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: -15, x: "-50%", y: "-50%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                                        className="absolute top-1/2 left-1/2 border-2 md:border-4 border-green-500 text-green-500 font-bold text-lg md:text-2xl px-5 md:px-8 py-2.5 md:py-4 rounded-xl uppercase tracking-widest z-20 whitespace-nowrap bg-white/10 dark:bg-black/20"
                                        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
                                    >
                                        Free Prototype
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
