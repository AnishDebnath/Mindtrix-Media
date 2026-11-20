import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageTestimonials, scrollTestimonials } from '@/data/testimonialData';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredTestimonial = imageTestimonials[currentIndex];
    const marqueeTestimonials = scrollTestimonials;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % imageTestimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + imageTestimonials.length) % imageTestimonials.length);
    };

    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-[#6366f1] font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">reviews</span> Testimonials
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight"
                    >
                        Kind Words <span className="text-[#6366f1]">from Clients</span>{' '}
                        <span className="text-[#ffc659]">Worldwide</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        We've partnered with founders, startups, and established brands to build digital solutions that drive results.
                    </motion.p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

                    {/* Left Column - Featured Card + Marquee */}
                    <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-5 min-w-0">

                        {/* Featured Testimonial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[300px] 2xl:h-[360px] rounded-2xl md:rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={featuredTestimonial.image}
                                        alt="Workspace"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 md:p-8 2xl:p-10 flex flex-col justify-between">
                                {/* Top: Counter */}
                                <div>
                                    <span className="text-white/60 font-bold mb-1.5 text-[10px] md:text-xs block">
                                        {(currentIndex + 1).toString().padStart(2, '0')} / {imageTestimonials.length.toString().padStart(2, '0')}
                                    </span>
                                    <div className="h-0.5 w-10 bg-white/30" />
                                </div>

                                {/* Bottom: Quote + Author */}
                                <div className="space-y-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            <blockquote className="text-sm md:text-base font-normal text-white/90 leading-relaxed min-h-[3em] md:min-h-[2.5em]">
                                                {featuredTestimonial.text}
                                            </blockquote>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex items-end justify-between gap-4">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-white"
                                            >
                                                <p className="font-semibold text-sm md:text-base">{featuredTestimonial.name}</p>
                                                <p className="text-white/60 text-xs">
                                                    {featuredTestimonial.title}
                                                </p>
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="flex gap-2 relative z-20">
                                            <button
                                                onClick={handlePrev}
                                                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
                                            >
                                                <span className="material-symbols-rounded text-base">arrow_back</span>
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
                                            >
                                                <span className="material-symbols-rounded text-base">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Marquee Testimonials */}
                        <div className="w-full relative overflow-hidden mask-linear-fade flex-1 flex flex-col justify-center">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                className="flex gap-5 w-max"
                            >
                                {[...marqueeTestimonials, ...marqueeTestimonials, ...marqueeTestimonials].map((item, i) => (
                                    <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] 2xl:w-[360px] bg-white dark:bg-neutral-950/70 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] rounded-xl md:rounded-2xl p-4 md:p-5 mr-4 shadow-sm">
                                        <div className="flex flex-col gap-2 md:gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-shrink-0 relative">
                                                    <img src={item.avatar} alt={item.handle} className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 dark:bg-neutral-800 object-cover border border-slate-200 dark:border-white/[0.1]" />
                                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#6366f1] rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900">
                                                        <span className="material-symbols-rounded text-[6px] md:text-[8px] text-white">verified</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight">{item.name || item.handle}</p>
                                                        <span className="text-[#ffc659] text-[10px]">★</span>
                                                    </div>
                                                    <p className="text-[#94a3b8] font-bold text-[9px] md:text-[10px] tracking-wider uppercase">{item.handle}</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-neutral-400 text-[11px] md:text-xs leading-relaxed font-normal line-clamp-2">
                                                "{item.text}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                            {/* Gradient Fade Edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] dark:from-black to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] dark:from-black to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column - Sticky CTA Card */}
                    <div className="w-full lg:w-[280px] 2xl:w-[340px] flex-shrink-0 flex flex-col">
                        <div className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-neutral-950 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center relative overflow-hidden border border-slate-200/90 dark:border-white/[0.1] shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full lg:min-h-[300px] 2xl:min-h-[360px] flex flex-col items-center justify-center gap-6"
                            >
                                <div className="flex flex-col items-center gap-3 relative z-10 w-full">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50 shadow-inner">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-display font-bold leading-tight text-slate-900 dark:text-white">
                                        Book a 15-min call
                                    </h3>
                                </div>

                                <div className="w-full flex flex-col items-center gap-4 relative z-10">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-between gap-2 bg-slate-950 text-white hover:bg-slate-800 font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl transition-all group w-full shadow-sm active:scale-95"
                                    >
                                        <span>Book a Call</span>
                                        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-black">
                                            <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                                        </div>
                                    </Link>

                                    <div className="flex flex-col items-center gap-0.5">
                                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Prefer to Email?</p>
                                        <a
                                            href="mailto:mindtrixmediaindia@gmail.com"
                                            className="text-slate-800 hover:text-[#6366f1] transition-colors text-sm font-semibold border-b border-slate-200"
                                        >
                                            mindtrixmediaindia@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-1.5 relative z-10 w-full">
                                    {['Web Development', 'E-commerce', 'CRM Systems', 'Business Automation'].map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-default whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Background Effects */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6366f1]/5 blur-[100px] rounded-full pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Testimonials;
