import React from 'react';
import { motion } from 'framer-motion';

const MarqueeProduct: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-canvas dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-canvas dark:from-black to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-6 md:gap-8">
                {/* Row 1 - Left */}
                <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        className="flex whitespace-nowrap gap-8 md:gap-12 pr-8 md:pr-12 items-center"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8 md:gap-12">
                                <span className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black text-slate-950 dark:text-white tracking-tight select-none">
                                    Let’s build together.
                                </span>
                                <span className="text-2xl sm:text-3xl md:text-5xl text-primary">✦</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right */}
                <div className="flex">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        className="flex whitespace-nowrap gap-8 md:gap-12 pr-8 md:pr-12 items-center"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8 md:gap-12">
                                <span className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black text-slate-950 dark:text-white tracking-tight select-none">
                                    Let’s build together.
                                </span>
                                <span className="text-2xl sm:text-3xl md:text-5xl text-secondary">✦</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarqueeProduct;
