import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '../ui/TitleIconCapsule';
import logo from '@/assets/mindtrix-media-logo.png';

const buildIcons = [
    { icon: 'rocket_launch', color: 'text-primary' },
    { icon: 'flight_takeoff', color: 'text-secondary' },
    { icon: 'bolt', color: 'text-primary' },
    { icon: 'speed', color: 'text-secondary' },
];

const partnerIcons = [
    { icon: 'handshake', color: 'text-secondary' },
    { icon: 'group', color: 'text-primary' },
    { icon: 'thumb_up', color: 'text-secondary' },
    { icon: 'verified', color: 'text-primary' },
];

const CTA: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 px-4 bg-transparent relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 border border-slate-200/90 dark:border-white/[0.1] p-8 md:p-14 2xl:p-16 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
                {/* Radial Top Spotlight Glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, rgba(255, 198, 89, 0.05) 45%, transparent 75%)'
                    }}
                />

                {/* Subtle Radial Dot Grid Overlay */}
                <div className="absolute inset-0 [background-image:radial-gradient(rgba(100,116,139,0.18)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.05] shadow-sm mb-4">
                            <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                                <span className="material-symbols-rounded text-sm">handshake</span> Let's Work Together
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-5 sm:mb-6 tracking-tight">
                            Ready to build{' '}
                            <TitleIconCapsule icons={buildIcons} delay={0} />
                            <br />
                            <span className="text-primary">your next project</span>{' '}
                            <TitleIconCapsule icons={partnerIcons} delay={700} initialIndex={1} />{' '}
                            <span className="text-secondary">with us?</span>
                        </h2>
                        <Link
                            to="/free-prototype"
                            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Get Started Today</span>
                            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-black">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side - The Card */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, rotate: 3, y: 30 }}
                            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
                            whileHover={{ rotate: 0, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="bg-white dark:bg-neutral-900/80 backdrop-blur-xl p-6 md:p-7 rounded-2xl shadow-xl w-full max-w-sm relative border border-slate-200/90 dark:border-white/[0.12]"
                        >
                            <div className="flex items-center gap-2.5 mb-5 border-b border-slate-100 dark:border-white/[0.08] pb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Available for New Projects</span>
                            </div>

                            <div className="flex items-center gap-3 mb-5 relative">
                                <div className="flex items-center gap-2">
                                    <img src={logo} className="w-8 h-8 rounded-full border border-slate-200 object-cover bg-white p-1 shadow-sm" alt="Mindtrix Media" />
                                    <span className="text-slate-400 font-bold">+</span>
                                    <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-800 text-[10px] font-bold shadow-sm">You</div>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">Free 15-Minute Strategy Call</h3>
                            <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm mb-6 leading-relaxed">Tell us your vision. We'll show you how to engineer and scale it with zero friction.</p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-between gap-2 w-full bg-slate-950 text-white hover:bg-slate-800 pl-4 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-95 group"
                            >
                                <span>Book a Free Call</span>
                                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-black">
                                    <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
