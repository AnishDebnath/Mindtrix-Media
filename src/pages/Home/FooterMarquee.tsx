import React from 'react';
import { motion } from 'framer-motion';

const MarqueeProduct: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent overflow-hidden">
            <div className="flex flex-col gap-8">
                {/* Row 1 - Left */}
                <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        className="flex whitespace-nowrap gap-12 pr-12"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-6xl md:text-8xl 2xl:text-9xl font-bold text-slate-900/[0.08] dark:text-white/[0.06] tracking-tighter select-none">
                                    Let’s build together.
                                </span>
                                <span className="text-3xl md:text-5xl text-indigo-500/30">✦</span>
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
                        className="flex whitespace-nowrap gap-12 pr-12"
                    >
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12">
                                <span className="text-6xl md:text-8xl 2xl:text-9xl font-bold text-slate-900/[0.08] dark:text-white/[0.06] tracking-tighter select-none">
                                    Let’s build together.
                                </span>
                                <span className="text-3xl md:text-5xl text-purple-500/20">✦</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarqueeProduct;
