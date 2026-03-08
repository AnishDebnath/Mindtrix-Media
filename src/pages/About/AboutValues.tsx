import React from 'react';
import { motion } from 'framer-motion';

const AboutValues: React.FC = () => {
    return (
        <section className="py-10 2xl:py-16 px-4 md:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                            <span className="material-symbols-rounded text-sm">rocket_launch</span> Agency Purpose
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 md:mb-6"
                    >
                        Our <span className="text-primary">Mission</span> & <span className="text-primary">Vision.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                    >
                        The principles that define who we are and where we're headed.
                    </motion.p>
                </div>

                {/* Bento Grid Layout - Perfectly Synced Hover Effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Mission Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.015 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        className="lg:col-span-2 bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        {/* Master Color Gradient - Perfectly Synced with Y-Shift and Scale */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-primary text-3xl">rocket_launch</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-relaxed">
                                    Empowering creators to scale their impact through high-retention, conversion-focused video editing that converts viewers into fans.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision Card - Medium */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.015 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="mb-6">
                                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-primary text-2xl group-hover:scale-110 transition-transform duration-300">visibility</span>
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                                Our Vision
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-relaxed">
                                Setting the global standard for creative post-production where every frame serves a purpose.
                            </p>
                        </div>
                    </motion.div>

                    {/* Strategy Card - Medium with Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.015 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                        <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden z-20">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                                alt="Strategy"
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <div className="w-12 h-12 bg-white/90 dark:bg-slate-900/90 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-primary text-xl group-hover:scale-110 transition-transform">auto_awesome</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 relative z-20">
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-primary transition-colors duration-300">
                                Our Strategy
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-relaxed">
                                Merging human creative intuition with hyper-efficient workflows.
                            </p>
                        </div>
                    </motion.div>

                    {/* Culture Card - Large with Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.015 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        className="lg:col-span-2 bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0)',
                                backgroundSize: '24px 24px'
                            }} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200/60 dark:border-white/10 group-hover:bg-primary/10 transition-all duration-300">
                                    <span className="material-symbols-rounded text-primary text-2xl transition-colors">favorite</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 group-hover:border-primary/30 transition-colors" />
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 group-hover:border-primary/30 transition-colors" />
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/60 dark:border-white/10 group-hover:border-primary/30 transition-colors" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl 2xl:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                Our Culture
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-relaxed mb-6 md:mb-8">
                                A results-obsessed collective of artists and strategists dedicated to the long-term success and scaling of the creators we serve.
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 backdrop-blur-sm rounded-full border border-slate-200/60 dark:border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                    <span className="text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-bold">Collaboration First</span>
                                </div>
                                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 backdrop-blur-sm rounded-full border border-slate-200/60 dark:border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                    <span className="text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-bold">Results Driven</span>
                                </div>
                                <div className="px-4 py-2 bg-slate-100 dark:bg-white/5 backdrop-blur-sm rounded-full border border-slate-200/60 dark:border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                    <span className="text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-bold">Always Learning</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
