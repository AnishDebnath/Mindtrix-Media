import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '@/assets/mindtrix-media-logo.png';

const CTA: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 px-4 bg-transparent relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto relative rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-950 border border-white/[0.1] p-8 md:p-14 2xl:p-16 shadow-[0_0_50px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            >
                {/* Radial Top Spotlight Glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 75%)'
                    }}
                />

                {/* Subtle Radial Dot Grid Overlay */}
                <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                            <span className="text-indigo-400 font-semibold uppercase text-xs tracking-wider">✦ Let's Work Together</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
                            Ready to build <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                your next project?
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md mb-8 font-normal">
                            Whether you need a high-converting website, custom CRM, ERP platform, or full SaaS system — we build software that scales with your business.
                        </p>
                        <Link
                            to="/free-prototype"
                            className="inline-flex items-center gap-2 bg-white text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Get Started Today</span>
                            <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-white">
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
                            className="bg-neutral-900/80 backdrop-blur-xl p-6 md:p-7 rounded-2xl shadow-2xl w-full max-w-sm relative border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                        >
                            <div className="flex items-center gap-2.5 mb-5 border-b border-white/[0.08] pb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[11px] font-medium text-neutral-300 uppercase tracking-wider">Available for New Projects</span>
                            </div>

                            <div className="flex items-center gap-3 mb-5 relative">
                                <div className="flex items-center gap-2">
                                    <img src={logo} className="w-8 h-8 rounded-full border border-white/20 object-cover bg-neutral-950 p-1 shadow-sm" alt="Mindtrix Media" />
                                    <span className="text-neutral-500 font-bold">+</span>
                                    <div className="w-8 h-8 rounded-full border border-white/20 bg-neutral-800 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">You</div>
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">Free 15-Minute Strategy Call</h3>
                            <p className="text-neutral-400 text-xs md:text-sm mb-6 leading-relaxed">Tell us your vision. We'll show you how to engineer and scale it with zero friction.</p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-between gap-2 w-full bg-white text-black hover:bg-neutral-200 pl-4 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-95 group"
                            >
                                <span>Book a Free Call</span>
                                <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center text-white">
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
