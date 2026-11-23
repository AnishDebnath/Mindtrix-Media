import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../ui/TitleIconCapsule';

// ponytail: local process video assets
import dropRequirementVid from '@/assets/process/drop-requirement.mp4';
import magicVid from '@/assets/process/magic.mp4';
import feedbackVid from '@/assets/process/feedback.mp4';
import launchVid from '@/assets/process/launch.mp4';

const planIcons = [
    { icon: 'conversion_path', color: 'text-primary' },
    { icon: 'schema', color: 'text-secondary' },
    { icon: 'draw', color: 'text-primary' },
    { icon: 'assignment', color: 'text-secondary' },
];

const workIcons = [
    { icon: 'published_with_changes', color: 'text-secondary' },
    { icon: 'check_circle', color: 'text-primary' },
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'speed', color: 'text-primary' },
];

const Process: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="process">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">route</span> Process
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        How <span className="text-primary">We Plan</span>{' '}
                        <TitleIconCapsule icons={planIcons} delay={0} />{' '}
                        & <span className="text-secondary">Work</span>{' '}
                        <TitleIconCapsule icons={workIcons} delay={700} initialIndex={1} />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        A simple, structured process that takes your idea from planning to a launched, working system.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
                    {/* Step 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 hover:border-slate-300 dark:border-white/[0.08] dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-3 bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/[0.06] overflow-hidden shrink-0 mx-auto w-full">
                            <span className="absolute top-3 left-3 z-30 text-xs font-mono font-bold text-primary bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-muted-slate/40 shadow-sm">01</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={dropRequirementVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-3 pb-3 pt-1">
                            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">Drop Your Requirement</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">Share your idea, business goals, and project requirements with us. We listen carefully to understand exactly what you want to build.</p>
                        </div>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 hover:border-slate-300 dark:border-white/[0.08] dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-3 bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/[0.06] overflow-hidden shrink-0 w-full">
                            <span className="absolute top-3 left-3 z-30 text-xs font-mono font-bold text-secondary bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-muted-slate/40 shadow-sm">02</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={magicVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-3 pb-3 pt-1">
                            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">We Do Our Magic</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">Our team designs and develops your website or software using the best technologies built for your business needs.</p>
                        </div>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 hover:border-slate-300 dark:border-white/[0.08] dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-3 bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/[0.06] overflow-hidden shrink-0 w-full">
                            <span className="absolute top-3 left-3 z-30 text-xs font-mono font-bold text-primary bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-muted-slate/40 shadow-sm">03</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={feedbackVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-3 pb-3 pt-1">
                            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">Feedback? Easy</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">You review the project and share feedback. We refine and improve everything until it matches your expectations perfectly.</p>
                        </div>
                    </motion.div>

                    {/* Step 04 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 hover:border-slate-300 dark:border-white/[0.08] dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-3 bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/[0.06] overflow-hidden shrink-0 w-full">
                            <span className="absolute top-3 left-3 z-30 text-xs font-mono font-bold text-secondary bg-white/95 dark:bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-muted-slate/40 shadow-sm">04</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={launchVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-3 pb-3 pt-1">
                            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">Launch & Ongoing Support</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">We launch your website or system and stay available for support. We monitor performance, fix issues quickly, and provide updates to help your business grow.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Process;
