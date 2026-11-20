import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';

const CountUp: React.FC<{ val: number }> = ({ val }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const controls = animate(0, val, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => setCount(Math.floor(value)),
        });
        return () => controls.stop();
    }, [val]);
    return <>{count.toLocaleString()}</>;
};

const Hero: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    return (
        <header className="pt-28 md:pt-36 2xl:pt-40 relative flex flex-col items-center justify-center">

            {/* Main Hero Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10 text-center pb-12 md:pb-16">
                {/* Available for New Projects Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center mb-5 md:mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 shadow-sm backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                            Available for New Projects
                        </span>
                    </div>
                </motion.div>

                {/* Trusted Badge */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeOut",
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8"
                >
                    <div
                        className="flex items-center h-12 cursor-pointer"
                        onMouseEnter={() => setIsAvatarHovered(true)}
                        onMouseLeave={() => setIsAvatarHovered(false)}
                    >
                        {[
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, x: -15, scale: 0.8 },
                                    show: { opacity: 1, x: 0, scale: 1 }
                                }}
                                animate={{
                                    marginLeft: i === 0 ? 0 : (isAvatarHovered ? -6 : -16),
                                    zIndex: i,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="relative rounded-full border-2 border-white dark:border-neutral-900 overflow-hidden w-8 h-8 md:w-9 md:h-9 shadow-sm"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={src}
                                    alt="Founder"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 10 },
                            show: { opacity: 1, x: 0 }
                        }}
                        className="text-center sm:text-left"
                    >
                        <div className="flex items-center justify-center sm:justify-start gap-1 mb-0.5">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1), type: "spring", stiffness: 300, damping: 15 }}
                                    className="material-symbols-rounded text-[#ffc659] text-[14px] md:text-[15px]"
                                >
                                    star
                                </motion.span>
                            ))}
                        </div>
                        <p className="text-[11px] md:text-xs font-semibold text-slate-700 dark:text-neutral-300 flex items-center justify-center sm:justify-start gap-1">
                            Trusted by <CountUp val={10} />+ clients worldwide
                        </p>
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 max-w-5xl mx-auto"
                >
                    <span className="block text-slate-900">
                        Websites & Business Software
                    </span>
                    <span className="block mt-2">
                        <span className="text-[#6366f1]">Built to Scale</span>{' '}
                        <span className="text-[#ffc659]">Worldwide.</span>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed font-normal"
                >
                    We build high-performance business websites, e-commerce platforms, custom CRM systems, and ERP solutions for businesses worldwide. Fast, secure, and built to grow with you.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
                >
                    <Link
                        to="/free-prototype"
                        className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                    >
                        <span>Get Your Free Prototype</span>
                        <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                            <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                        </div>
                    </Link>
                    <Link
                        to="/product"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 dark:text-neutral-200 dark:hover:text-white bg-white hover:bg-slate-50 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 border border-slate-300 dark:border-white/[0.1] shadow-sm backdrop-blur-md transition-all active:scale-95"
                    >
                        <span>Explore Work</span>
                    </Link>
                </motion.div>
                <p className="mt-3 text-xs text-slate-600 dark:text-neutral-400 font-medium tracking-tight">
                    <span className="text-[#ffc659] font-bold">Zero risk</span> <span className="text-[#94a3b8]">|</span> we build a working prototype before you pay anything.
                </p>
            </div>
        </header>
    );
};

export default Hero;
