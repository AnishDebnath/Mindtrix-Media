import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../ui/TitleIconCapsule';

// ponytail: local video assets
import builtForBusinessVid from '@/assets/why-choose-us/built-for-business.mp4';
import startSmallVid from '@/assets/why-choose-us/start-small.mp4';

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
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden border border-slate-100 dark:border-white/[0.06] shrink-0">
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
                        <div className="px-3 pb-4 pt-1 md:pb-0 md:px-6 lg:px-3 lg:pb-4 md:flex-1 md:flex md:flex-col md:justify-center">
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
                        className="flex flex-col md:flex-row-reverse lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden border border-slate-100 dark:border-white/[0.06] shrink-0">
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
                        <div className="px-3 pb-4 pt-1 md:pb-0 md:px-6 lg:px-3 lg:pb-4 md:flex-1 md:flex md:flex-col md:justify-center">
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
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-neutral-700 backdrop-blur-md transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-black rounded-xl md:rounded-2xl aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden flex items-center justify-center gap-3 md:gap-4 lg:gap-2 xl:gap-4 px-4 md:px-6 lg:px-12 xl:px-6 border border-slate-100 dark:border-white/[0.06] shrink-0">
                            {/* Animated Mouse Pointer */}
                            <motion.div
                                animate={{
                                    x: [-110, -55, 0, 55, 110, 55, 0, -55, -110],
                                    y: [0, 100, 0, 100, 0, 100, 0, 100, 0],
                                    rotate: [0, 45, 0, 45, 0, -45, 0, -45, 0],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute z-20 pointer-events-none"
                            >
                                <span className="material-symbols-rounded text-3xl text-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">near_me</span>
                            </motion.div>

                            {[
                                { d: 13, l: 'Planning' },
                                { d: 14, l: 'Develope' },
                                { d: 24, l: 'Deliver', highlight: true }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-neutral-900/80 p-2 md:p-2.5 lg:p-1 xl:p-2.5 rounded-xl shadow-md border border-slate-200/80 dark:border-white/[0.08] w-[28%] min-w-[70px] md:w-28 lg:w-[70px] xl:w-28 aspect-[3/4] flex flex-col"
                                >
                                    <div className={`
                                        flex-1 flex items-center justify-center rounded-lg mb-0.5 xl:mb-1 border
                                        ${item.highlight
                                            ? 'bg-secondary text-slate-950 font-bold border-secondary shadow-sm'
                                            : 'bg-slate-50 dark:bg-black text-slate-900 dark:text-white border-slate-200 dark:border-white/[0.06]'}
                                     `}>
                                        <span className="text-xl md:text-2xl lg:text-[18px] xl:text-2xl font-bold tracking-tight">
                                            {item.d.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="text-center py-1.5 lg:py-0.5 xl:py-2">
                                        <div className={`text-[8px] md:text-[10px] lg:text-[7.5px] xl:text-[10px] font-semibold ${item.highlight ? 'text-slate-950 font-bold' : 'text-muted-slate'}`}>{item.l}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="px-3 pb-4 pt-1 md:pb-0 md:px-6 lg:px-3 lg:pb-4 md:flex-1 md:flex md:flex-col md:justify-center">
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
