import React from 'react';
import { motion } from 'framer-motion';
import { productTestimonials as testimonials, ProductTestimonial } from '@/data/testimonialData';
import TitleIconCapsule from '../ui/TitleIconCapsule';

const trustIcons = [
    { icon: 'verified', color: 'text-primary' },
    { icon: 'stars', color: 'text-secondary' },
    { icon: 'favorite', color: 'text-primary' },
    { icon: 'thumb_up', color: 'text-secondary' },
];

const growthIcons = [
    { icon: 'trending_up', color: 'text-secondary' },
    { icon: 'rocket_launch', color: 'text-primary' },
    { icon: 'public', color: 'text-secondary' },
    { icon: 'storefront', color: 'text-primary' },
];

const TestimonialCard: React.FC<{ item: ProductTestimonial }> = ({ item }) => (
    <motion.div
        whileHover={{ scale: 1.02, translateY: -4 }}
        className="flex-shrink-0 w-[260px] md:w-[300px] 2xl:w-[340px] bg-white dark:bg-neutral-950/70 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] rounded-xl md:rounded-2xl p-3 md:p-3.5 mr-3 md:mr-4 shadow-sm"
    >
        <div className="flex flex-col gap-1.5 md:gap-2">
            <div className="flex items-center gap-2.5 pb-1">
                <div className="flex-shrink-0 relative">
                    <img src={item.avatar} alt={item.handle} loading="lazy" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-100 dark:bg-neutral-800 object-cover border border-slate-200 dark:border-white/[0.1]" />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900">
                        <span className="material-symbols-rounded text-[6px] md:text-[8px] text-white">verified</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight">{item.name}</p>
                    <p className="text-primary font-bold text-[9px] md:text-[10px] tracking-wider uppercase">{item.handle}</p>
                </div>
            </div>
            <p className="text-slate-600 dark:text-neutral-400 text-[11px] md:text-xs leading-relaxed font-normal line-clamp-2">
                "{item.text}"
            </p>
        </div>
    </motion.div>
);

const ProductTestimonials: React.FC = () => {
    const row1 = [...testimonials].sort(() => Math.random() - 0.5);
    const row2 = [...testimonials].sort(() => Math.random() - 0.5);

    return (
        <section className="py-10 2xl:py-16 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="mb-10 md:mb-12 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                >
                    <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                        <span className="material-symbols-rounded text-sm">stars</span> Wall of Love
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                >
                    Trusted by{' '}
                    <TitleIconCapsule icons={trustIcons} delay={0} />{' '}
                    <span className="text-primary">Growing</span>{' '}
                    <TitleIconCapsule icons={growthIcons} delay={700} initialIndex={1} />{' '}
                    <span className="text-secondary">Businesses</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                >
                    Join 20+ businesses and brands who have accelerated their growth with our premium digital solutions and strategic expertise.
                </motion.p>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 relative">
                {/* Row 1: Right to Left */}
                <div className="flex overflow-hidden relative w-full group">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {[...row1, ...row1].map((item, idx) => (
                            <TestimonialCard key={`r1-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="flex overflow-hidden relative w-full group">
                    <motion.div
                        className="flex"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 45
                        }}
                    >
                        {[...row2, ...row2].map((item, idx) => (
                            <TestimonialCard key={`r2-${idx}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Gradient Mask Overlays */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default ProductTestimonials;
