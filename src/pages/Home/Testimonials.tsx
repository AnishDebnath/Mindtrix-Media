import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
const imageTestimonials = [
    {
        name: "Ethan Moore",
        title: "Co-founder, NovaTech",
        text: "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
    },
    {
        name: "Ansh",
        title: "Co-founder, NovaTech",
        text: "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
    },
    {
        name: "Narendra Modi",
        title: "Prime Minister of India",
        text: "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
    }
];

const scrollTestimonials = [
    {
        handle: "@mark_locus",
        name: "Mark Locus",
        text: "Bro who edits your videos? The pacing and cuts are SO clean.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@tonysa",
        name: "Tony Sa",
        text: "Whoever’s editing your videos now... they deserve a raise this was smooth af",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@johnbai",
        name: "John Bai",
        text: "Editing leveled up big time. Timing, cuts, music — everything’s just right",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@chrismaw",
        name: "Chris Maw",
        text: "Noticed the pacing and flow are so much better lately. You working with someone new?",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@jemmy",
        name: "Jemmy",
        text: "This feels super polished now. Loving the new vibe — your editor is killing it",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80"
    }
];

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
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Testimonials</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight flex justify-center items-center gap-x-3 whitespace-nowrap"
                    >
                        <span>Kind words from</span>
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-xl flex items-center justify-center transform rotate-[10deg] border-t border-white/20 relative top-1.5"
                        >
                            <span className="material-symbols-rounded text-white text-lg md:text-xl drop-shadow-md">sentiment_satisfied</span>
                        </motion.div>
                        <span>clients</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We've partnered with creators, founders, and studios who value editing that works, here's what they had to say.
                    </motion.p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">

                    {/* Left Column - Featured Card + Marquee */}
                    <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-5 min-w-0">

                        {/* Featured Testimonial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[220px] 2xl:h-[260px] rounded-[1.5rem] overflow-hidden group"
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
                                            <blockquote className="text-sm md:text-lg 2xl:text-xl font-bold text-white leading-tight min-h-[3em] md:min-h-[2.5em]">
                                                "{featuredTestimonial.text}"
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
                                                <p className="font-bold text-base 2xl:text-lg">{featuredTestimonial.name}</p>
                                                <p className="text-white/60 text-xs 2xl:text-sm">
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
                                    <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] 2xl:w-[360px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[1rem] md:rounded-[1.2rem] p-4 md:p-5 mr-4 shadow-xl shadow-black/5">
                                        <div className="flex flex-col gap-2 md:gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-shrink-0 relative">
                                                    <img src={item.avatar} alt={item.handle} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-slate-800 object-cover border-2 border-primary/20" />
                                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                                                        <span className="material-symbols-rounded text-[6px] md:text-[8px] text-white">verified</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight">{item.name || item.handle}</p>
                                                    <p className="text-primary font-bold text-[9px] md:text-[10px] tracking-wider uppercase">{item.handle}</p>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium line-clamp-2">
                                                "{item.text}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                            {/* Gradient Fade Edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] dark:from-background-dark to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] dark:from-background-dark to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column - Sticky CTA Card */}
                    <div className="w-full lg:w-[280px] 2xl:w-[340px] flex-shrink-0 flex flex-col">
                        <div className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#111] text-white rounded-[1.5rem] p-8 md:p-10 lg:p-8 2xl:p-10 text-center relative overflow-hidden shadow-2xl h-full lg:min-h-[300px] 2xl:min-h-[340px] flex flex-col items-center justify-between gap-8 md:gap-10 lg:gap-8 2xl:gap-0"
                            >
                                <div className="flex flex-col items-center gap-3 relative z-10 w-full">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-white/10 bg-white/5 shadow-inner">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl md:text-2xl 2xl:text-3xl font-display font-bold leading-tight">
                                        Book a 15-min call
                                    </h3>
                                </div>

                                <div className="w-full flex flex-col items-center gap-5 relative z-10">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full font-bold text-sm hover:scale-105 transition-transform group w-full max-w-[200px] shadow-lg shadow-black/10"
                                    >
                                        Book a Call
                                        <div className="w-8 h-8 bg-[#FF5C00] rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                                            <span className="material-symbols-rounded text-base">arrow_forward</span>
                                        </div>
                                    </Link>

                                    <div className="flex flex-col items-center gap-0.5">
                                        <p className="text-slate-400 text-[10px] 2xl:text-xs font-bold uppercase tracking-widest">Prefer to Email?</p>
                                        <a
                                            href="mailto:ajoy.sayhello@gmail.com"
                                            className="text-slate-200 hover:text-white transition-colors text-sm font-medium border-b border-white/10"
                                        >
                                            ajoy.sayhello@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-1.5 relative z-10 w-full">
                                    {['Collaboration', 'Business Inquiry', 'Want My Videos Edited', 'Send Me Samples'].map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] 2xl:text-[10px] font-bold text-slate-400 hover:bg-white/10 transition-colors cursor-default whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Background Effects */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Testimonials;
