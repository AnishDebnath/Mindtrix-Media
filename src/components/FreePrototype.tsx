import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import freePrototypeImg from '../assets/free-prototype.png';

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
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs">✦ Our Unique Guarantee</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1]"
                            >
                                See It First. <br />
                                Then We <span className="text-primary">Build It.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-sm md:text-base 2xl:text-lg text-slate-600 dark:text-slate-300 mb-8 md:mb-10 leading-relaxed"
                            >
                                Most agencies ask you to pay first. We don't.
                                Before development starts, we build a <strong className='text-secondary'>free, working prototype</strong> of your website or system.
                                You see exactly how it works. You give feedback. Then we build the real thing. No risk.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row sm:flex-nowrap gap-4 md:gap-6"
                            >
                                <Link to="/free-prototype" className="w-fit whitespace-nowrap px-8 h-11 flex justify-center items-center rounded-full bg-primary text-white font-bold text-sm md:text-base hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                                    Get Your Free Prototype
                                </Link>
                                <Link to="/process" className="w-fit whitespace-nowrap px-8 h-11 flex justify-center items-center rounded-full bg-secondary/80 text-white font-bold text-sm md:text-base hover:bg-secondary transition-all hover:scale-105 shadow-lg shadow-secondary/25">
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
                                <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col group/card">
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
                                        className="absolute top-1/2 left-1/2 border-2 md:border-4 border-green-500 text-green-500 font-black text-lg md:text-2xl 2xl:text-3xl px-5 md:px-8 py-2.5 md:py-4 rounded-xl uppercase tracking-widest z-20 whitespace-nowrap bg-white/10 dark:bg-black/20"
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
