import React from 'react';
import { motion } from 'framer-motion';

// Import Process Videos
import DiscoveryVideo from '../assets/drop-requirement.mp4';
import DesignVideo from '../assets/magic.mp4';
import DevelopmentVideo from '../assets/feedback.mp4';
import LaunchVideo from '../assets/launch.mp4';

const Process: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="process">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6"
                    >
                        How <span className="text-secondary">We Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        A simple, structured process that takes your idea from planning to launch, working system.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
                    {/* Step 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 overflow-hidden shrink-0 mx-auto w-full">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">01</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={DiscoveryVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Drop Your Requirement</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">Share your idea, business goals, and project requirements with us. We listen carefully to understand exactly what you want to build.</p>
                        </div>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 overflow-hidden shrink-0 w-full">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">02</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={DesignVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">We Do Our Magic</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">Our team designs and develops your website or software using the best technologies build for your business needs.</p>
                        </div>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 overflow-hidden shrink-0 w-full">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">03</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={DevelopmentVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Feedback? Easy</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">You review the project and share feedback. We refine and improve everything until it matches your expectations perfectly.</p>
                        </div>
                    </motion.div>

                    {/* Step 04 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 overflow-hidden shrink-0 w-full">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">04</span>
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={LaunchVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Launch & Ongoing Support</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">We launch your website or system and stay available for support. We monitor performance, fix issues quickly, and updates to help your business grow.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Process;
