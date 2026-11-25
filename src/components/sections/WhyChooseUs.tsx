import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../ui/TitleIconCapsule';

// ponytail: local video assets
import builtForBusinessVid from '@/assets/why-choose-us/built-for-business.mp4';
import startSmallVid from '@/assets/why-choose-us/start-small.mp4';
import onTimeVid from '@/assets/why-choose-us/on-time.mp4';

const chooseIcons = [
    { icon: 'handshake', color: 'text-primary' },
    { icon: 'star', color: 'text-secondary' },
    { icon: 'military_tech', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
];

const mediaIcons = [
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'bolt', color: 'text-primary' },
    { icon: 'speed', color: 'text-secondary' },
    { icon: 'public', color: 'text-primary' },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">verified</span> Why Choose Us
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-3 text-slate-900 dark:text-white leading-tight"
                    >
                        Why Clients Choose{' '}
                        <TitleIconCapsule icons={chooseIcons} delay={0} />
                        <br />
                        <span className="text-primary">Mindtrix</span>{' '}
                        <TitleIconCapsule icons={mediaIcons} delay={700} initialIndex={1} />{' '}
                        <span className="text-secondary">Media</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        We are a website and software development agency based in Kolkata, India, building digital solutions for businesses worldwide. We keep things simple, fast, and built to last.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-5">
                    {/* Card 1: Bold and purposeful */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-3 md:mb-0 lg:mb-3 relative overflow-hidden border border-slate-100 dark:border-white/[0.06] shrink-0">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={builtForBusinessVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-2 pb-2 pt-0.5 md:pb-0 md:px-4 lg:px-2 lg:pb-2 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">Built For Your Business</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">Every website and system we build is designed around how your business actually works. No cookie-cutter templates. No generic solutions. Just something that fits you perfectly.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Easy to customize */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row-reverse lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-3 md:mb-0 lg:mb-3 relative overflow-hidden border border-slate-100 dark:border-white/[0.06] shrink-0">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src={startSmallVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-2 pb-2 pt-0.5 md:pb-0 md:px-4 lg:px-2 lg:pb-2 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">Start Small, Own Anytime</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">Start with our affordable yearly subscription to launch your website or software without high upfront costs. Upgrade anytime to full ownership with complete source files and total control.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Fast delivery time */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden border border-slate-100 dark:border-white/[0.06] shrink-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={onTimeVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-2 pb-2 pt-0.5 md:pb-0 md:px-4 lg:px-2 lg:pb-2 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">On Time, Every Time</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">We follow a clear process: prototype, build, test, launch. Projects stay on track and within scope. You always know what's happening and when it will be ready.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
