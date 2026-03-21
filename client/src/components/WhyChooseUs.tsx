import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Import Videos
import BuiltForBusinessVideo from '../assets/why-choose-us/built-for-business.mp4';
import StartSmallVideo from '../assets/why-choose-us/start-small.mp4';

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
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Why Choose Us</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold mt-4 mb-4 text-slate-900 dark:text-white"
                    >
                        Why Clients Choose <br />
                        <span className="text-secondary">Mindtrix Media</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
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
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-[1.2rem] aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden border border-slate-100 dark:border-slate-800 shrink-0">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={BuiltForBusinessVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5 md:pb-0 md:px-8 lg:px-4 lg:pb-5 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold mb-2 text-slate-900 dark:text-white">Built For Your Business</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">Every website and system we build is designed around how your business actually works. No cookie-cutter templates. No generic solutions. Just something that fits you perfectly.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Easy to customize */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row-reverse lg:flex-col group bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-[#0A0A0A] rounded-[1.2rem] aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden border border-slate-800 shrink-0">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={StartSmallVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-4 pb-5 md:pb-0 md:px-8 lg:px-4 lg:pb-5 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold mb-2 text-slate-900 dark:text-white">Start Small, Own Anytime</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">Start with our affordable yearly subscription to launch your website or software without high upfront costs. Upgrade anytime to full ownership with complete source files and total control.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Fast delivery time */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row lg:flex-col group bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-[1.2rem] aspect-[4/3] md:w-1/2 lg:w-full mb-4 md:mb-0 lg:mb-4 relative overflow-hidden flex items-center justify-center gap-3 md:gap-4 lg:gap-2 xl:gap-4 px-4 md:px-6 lg:px-12 xl:px-6 border border-slate-100 dark:border-slate-800 shrink-0">
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
                                    className="bg-white dark:bg-slate-900 p-2 md:p-2.5 lg:p-1 xl:p-2.5 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800 w-[28%] min-w-[70px] md:w-28 lg:w-[70px] xl:w-28 aspect-[3/4] flex flex-col"
                                >
                                    <div className={`
                                        flex-1 flex items-center justify-center rounded-xl mb-0.5 xl:mb-1 border
                                        ${item.highlight
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-inner border-green-500'
                                            : 'bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800'}
                                     `}>
                                        <span className="text-xl md:text-2xl lg:text-[18px] xl:text-2xl font-bold tracking-tight">
                                            {item.d.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="text-center py-1.5 lg:py-0.5 xl:py-2">
                                        <div className={`text-[8px] md:text-[10px] lg:text-[7.5px] xl:text-[10px] font-medium ${item.highlight ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-400'}`}>{item.l}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="px-4 pb-5 md:pb-0 md:px-8 lg:px-4 lg:pb-5 md:flex-1 md:flex md:flex-col md:justify-center">
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold mb-2 text-slate-900 dark:text-white">On Time, Every Time</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">We follow a clear process: prototype, build, test, launch. Projects stay on track and within scope. You always know what's happening and when it will be ready.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
