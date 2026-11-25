import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const missionIcons = [
    { icon: 'rocket_launch', color: 'text-primary' },
    { icon: 'flag', color: 'text-secondary' },
    { icon: 'target', color: 'text-primary' },
    { icon: 'bolt', color: 'text-secondary' },
];

const visionIcons = [
    { icon: 'visibility', color: 'text-secondary' },
    { icon: 'auto_awesome', color: 'text-primary' },
    { icon: 'lightbulb', color: 'text-secondary' },
    { icon: 'public', color: 'text-primary' },
];

const AboutValues: React.FC = () => {
    return (
        <section className="py-10 2xl:py-16 px-4 md:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md shadow-sm mb-4"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">rocket_launch</span> Agency Purpose
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 leading-tight"
                    >
                        Our <span className="text-primary">Mission</span>{' '}
                        <TitleIconCapsule icons={missionIcons} delay={0} />{' '}
                        &amp; <span className="text-secondary">Vision</span>{' '}
                        <TitleIconCapsule icons={visionIcons} delay={700} initialIndex={1} />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
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
                        className="lg:col-span-2 bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        {/* Master Color Gradient - Perfectly Synced with Y-Shift and Scale */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-3.5 md:gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-11 h-11 bg-primary/10 dark:bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-primary text-xl">rocket_launch</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    Our Mission
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    To help businesses worldwide automate their operations, manage their customers, and scale efficiently through custom-built software systems — CRM platforms, ERP solutions, SaaS products, and digital infrastructure that actually fits how they work.
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
                        className="bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/0 via-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="mb-3.5">
                                <div className="w-11 h-11 bg-secondary/10 dark:bg-secondary/15 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-secondary text-xl group-hover:scale-110 transition-transform duration-300">visibility</span>
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-secondary transition-colors duration-300">
                                Our Vision
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                                To be the world's most trusted custom software development agency — where every business, regardless of size or location, can access the same calibre of digital systems used by the world's leading enterprises.
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
                        className="bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-xl relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/0 via-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                        <div className="h-36 sm:h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden z-20">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                                alt="Strategy"
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 z-20">
                                <div className="w-10 h-10 bg-white/90 dark:bg-slate-900/90 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-secondary/20 transition-all duration-300">
                                    <span className="material-symbols-rounded text-secondary text-lg group-hover:scale-110 transition-transform">auto_awesome</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-5 relative z-20">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-secondary transition-colors duration-300">
                                Our Approach
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                                We always prototype first, build second. Every system is shaped around your specific workflows, not the other way around.
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
                        className="lg:col-span-2 bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-xl overflow-hidden relative transition-[background-color,border-color,box-shadow,opacity] duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0)',
                                backgroundSize: '24px 24px'
                            }} />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between mb-3.5">
                                    <div className="w-11 h-11 bg-primary/10 dark:bg-primary/15 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                                        <span className="material-symbols-rounded text-primary text-xl transition-colors">favorite</span>
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    Our Culture
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                                    A results-driven team of engineers, designers, and strategists who are deeply invested in the long-term success of every business we serve. We don't just build software — we build systems that help companies grow.
                                </p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {[
                                    { icon: 'groups', text: 'Client-Centric', color: 'text-primary' },
                                    { icon: 'trending_up', text: 'Results Driven', color: 'text-secondary' },
                                    { icon: 'verified_user', text: 'Transparency First', color: 'text-primary' },
                                ].map((tag, i) => (
                                    <div key={i} className="flex items-center gap-1.5 bg-slate-50 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/[0.08] rounded-lg px-3 py-1 text-slate-800 dark:text-neutral-300 text-[10px] md:text-xs font-semibold transition-colors">
                                        <span className={`material-symbols-rounded text-sm md:text-base ${tag.color}`}>{tag.icon}</span>
                                        {tag.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
