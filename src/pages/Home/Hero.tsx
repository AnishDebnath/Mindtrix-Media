import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '@/components/ui/TitleIconCapsule';
import mindtrixLogo from '@/assets/mindtrix-media-logo.png';

const webIcons = [
    { icon: 'language', color: 'text-primary' },
    { icon: 'terminal', color: 'text-purple-500' },
    { icon: 'devices', color: 'text-blue-500' },
    { icon: 'code', color: 'text-indigo-500' },
];

const scaleIcons = [
    { icon: 'rocket_launch', color: 'text-secondary' },
    { icon: 'trending_up', color: 'text-emerald-500' },
    { icon: 'database', color: 'text-cyan-500' },
    { icon: 'auto_awesome', color: 'text-amber-500' },
];

const Hero: React.FC = () => {
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

                {/* Heading: 3-4 lines on mobile for readability, strictly 2 lines on desktop */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl min-[360px]:text-[1.65rem] min-[410px]:text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold tracking-tight leading-[1.24] sm:leading-[1.18] text-slate-900 dark:text-white max-w-5xl mx-auto"
                >
                    <span className="sm:block sm:whitespace-nowrap">
                        <span className="inline-block">
                            Websites
                            <TitleIconCapsule icons={webIcons} delay={0} />
                        </span>{' '}
                        <span className="inline-block">& Business Software</span>
                    </span>
                    <span className="block mt-1 sm:mt-2.5 sm:whitespace-nowrap">
                        <span className="text-primary inline-block">
                            Built to Scale{' '}
                            <TitleIconCapsule icons={scaleIcons} delay={700} initialIndex={1} />
                        </span>{' '}
                        <span className="text-secondary inline-block">Worldwide.</span>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-sm md:text-base text-slate-600 dark:text-neutral-400 max-w-lg mx-auto mt-3.5 sm:mt-4 leading-relaxed font-normal"
                >
                    Custom websites, e-commerce stores, and software systems built to scale with your business.
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
                    <span className="text-secondary font-bold">Zero risk</span> <span className="text-muted-slate">|</span> we build a working prototype before you pay anything.
                </p>

                {/* 2 Featured Products (temporarily commented out) */}
                {/* 
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
                    className="w-full max-w-md sm:max-w-lg mx-auto grid grid-cols-2 gap-2.5 sm:gap-4 mt-7 sm:mt-8"
                >
                    <Link
                        to="/product/the-photographers-house"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-neutral-900/70 border border-slate-200/90 dark:border-white/10 hover:border-primary/60 dark:hover:border-primary/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-sm backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        <div className="h-8 sm:h-9 w-8 sm:w-9 rounded-xl bg-transparent border border-slate-200/70 dark:border-white/10 flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                            <img src={mindtrixLogo} alt="Mindtrix Media" className="h-full w-full object-contain" />
                        </div>

                        <div className="min-w-0 flex-1 text-left">
                            <span className="text-[10px] text-muted-slate dark:text-neutral-500 font-semibold uppercase tracking-wider block leading-none mb-0.5">
                                Featured
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors truncate block">
                                Digital Album
                            </span>
                        </div>
                    </Link>

                    <Link
                        to="/product"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-neutral-900/70 border border-slate-200/90 dark:border-white/10 hover:border-secondary/60 dark:hover:border-secondary/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-sm backdrop-blur-md transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        <div className="h-8 sm:h-9 w-8 sm:w-9 rounded-xl bg-transparent border border-slate-200/70 dark:border-white/10 flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                            <img src={mindtrixLogo} alt="Mindtrix Media" className="h-full w-full object-contain" />
                        </div>

                        <div className="min-w-0 flex-1 text-left">
                            <span className="text-[10px] text-muted-slate dark:text-neutral-500 font-semibold uppercase tracking-wider block leading-none mb-0.5">
                                Featured
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-secondary transition-colors truncate block">
                                Digital Invitation
                            </span>
                        </div>
                    </Link>
                </motion.div>
                */}
            </div>
        </header>
    );
};

export default Hero;
