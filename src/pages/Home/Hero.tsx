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
        <header className="pt-28 md:pt-36 lg:pt-24 2xl:pt-32 relative flex flex-col items-center justify-center">

            {/* Main Hero Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10 text-center pb-12 md:pb-16">
                {/* Available for New Projects Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center mb-4 md:mb-5"
                >
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50 backdrop-blur-sm shadow-sm transition-all hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-medium text-emerald-700 dark:text-emerald-400">
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
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-5 md:mb-7"
                >
                    <div
                        className="flex items-center h-16 cursor-pointer"
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
                                    marginLeft: i === 0 ? 0 : (isAvatarHovered ? -6 : -18),
                                    zIndex: i,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="relative rounded-full border-[2px] border-[#FAFAFA] dark:border-background-dark overflow-hidden w-9 h-9 md:w-10 md:h-10 2xl:w-11 2xl:h-11 shadow-sm"
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
                                    className="material-symbols-rounded text-[#FFC107] text-[14px] md:text-[16px]"
                                >
                                    star
                                </motion.span>
                            ))}
                        </div>
                        <p className="text-[10px] md:text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center sm:justify-start gap-1">
                            Trusted by <CountUp val={100} />+ clients
                        </p>
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl 2xl:text-7xl font-display font-extrabold tracking-tighter leading-[1.1] text-slate-900 dark:text-white"
                >
                    {/* Row 1 */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3.5 md:gap-x-6 mb-1">
                        <span>Premium</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="relative inline-flex w-10 h-6 md:w-20 md:h-12 2xl:w-28 2xl:h-16 rounded-full overflow-hidden items-center justify-center bg-orange-100 align-middle shadow-inner"
                        >
                            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover opacity-90" alt="Digital" />
                        </motion.span>
                        <span className="text-primary">Digital</span>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3.5 md:gap-x-6 mb-1">
                        <span className="text-slate-400">Solutions for</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative inline-flex w-10 h-6 md:w-20 md:h-12 2xl:w-28 2xl:h-16 rounded-full overflow-hidden items-center justify-center bg-slate-200 align-middle shadow-inner"
                        >
                            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Business" />
                        </motion.span>
                        <span>Businesses</span>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3.5 md:gap-x-6">
                        <span className="text-slate-400">based in London,</span>
                        <motion.span
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="relative inline-flex w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full overflow-hidden items-center justify-center bg-blue-100 align-middle shadow-inner border-[2px] border-white dark:border-slate-800"
                        >
                            <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="London" />
                        </motion.span>
                        <span>UK</span>
                    </div>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl 2xl:max-w-3xl mx-auto mt-4 md:mt-7 leading-relaxed font-medium"
                >
                    We build stunning websites, powerful SaaS products, and deliver exceptional social media services that help your business grow and thrive in the digital world.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 flex flex-col items-center"
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-6 pr-2 py-2 rounded-full font-bold text-sm md:text-base hover:scale-105 transition-all group shadow-xl"
                    >
                        Book a Call
                        <div className="w-10 h-10 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                            <span className="material-symbols-rounded text-xl">arrow_forward</span>
                        </div>
                    </Link>
                    <p className="mt-2 text-xs md:text-sm text-slate-500 font-medium tracking-tight">No pressure, just possibilities.</p>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
