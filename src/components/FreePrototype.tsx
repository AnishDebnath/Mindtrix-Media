import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FreePrototype: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 md:p-12 overflow-hidden relative">
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center relative z-10">
                        {/* Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-primary/30 bg-primary/5 backdrop-blur-sm"
                            >
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Our Unique Guarantee</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1]"
                            >
                                See It Before <br />
                                We <span className="text-primary">Build It.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-sm md:text-base 2xl:text-lg text-slate-600 dark:text-slate-300 mb-8 md:mb-10 leading-relaxed"
                            >
                                We believe in earning your trust first. That's why we design a
                                <strong> free, high-fidelity prototype</strong> of your website before you sign any contract or pay a single cent.
                                Visualize the result, give feedback, and move forward with 100% confidence.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 md:gap-6"
                            >
                                <Link to="/free-prototype" className="px-8 py-3.5 rounded-full bg-primary text-white font-bold text-sm md:text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/25">
                                    Get Your Free Prototype
                                </Link>
                                <Link to="/process" className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-bold text-sm md:text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
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
                            <div className="relative aspect-square md:aspect-[4/3]">
                                {/* Back Card */}
                                <div className="absolute top-8 right-8 inset-0 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 transform rotate-6 opacity-60" />
                                {/* Middle Card */}
                                <div className="absolute top-4 right-4 inset-0 bg-slate-200 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 transform rotate-3 opacity-80" />

                                {/* Front Card (Main Visual) */}
                                <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col p-4 md:p-6">
                                    {/* Mock UI Header */}
                                    <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-800 h-2 w-32 rounded-full" />
                                    </div>

                                    {/* Mock UI Content */}
                                    <div className="flex-1 space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-2/3 space-y-3">
                                                <div className="h-8 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-lg" />
                                                <div className="h-4 w-full bg-slate-50 dark:bg-slate-800/50 rounded" />
                                                <div className="h-4 w-5/6 bg-slate-50 dark:bg-slate-800/50 rounded" />
                                            </div>
                                            <div className="w-1/3 bg-primary/10 rounded-xl flex items-center justify-center">
                                                <span className="material-symbols-rounded text-primary text-2xl md:text-4xl">design_services</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 pt-4">
                                            <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-xl" />
                                            <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-xl" />
                                            <div className="aspect-square bg-slate-50 dark:bg-slate-800/50 rounded-xl" />
                                        </div>

                                        {/* "Approved" Stamp Animation */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 2, rotate: -20 }}
                                            whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                                            className="absolute md:bottom-[4rem] md:right-[5rem] bottom-4 right-4 border-2 md:border-4 border-green-500 text-green-500 font-black text-xs md:text-lg 2xl:text-xl px-2 md:px-4 py-1.5 md:py-2 rounded-lg uppercase tracking-widest opacity-80"
                                            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
                                        >
                                            Free Prototype
                                        </motion.div>
                                    </div>
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
