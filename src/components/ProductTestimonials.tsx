import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Stephan P.",
        handle: "@steipete",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephan",
        text: "Tried Claw by @steipete. I tried to build my own AI assistant bots before, and I am very impressed how many hard things Claw gets right. Persistence, context...",
    },
    {
        name: "Aryeh Dubois",
        handle: "@AryehDubois",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryeh",
        text: "It feels like I have a junior developer always ready to help. It's incredibly fast and accurate.",
    },
    {
        name: "Mark Jaquith",
        handle: "@markjaquith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
        text: "I've been saying for like six months that even if LLMs suddenly stopped improving, we could spend *years* discovering new transformative uses.",
    },
    {
        name: "Philo",
        handle: "@Philo01",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Philo",
        text: "Feels like we're living in the future.",
    },
    {
        name: "Senator NFTs",
        handle: "@Senator_NFTs",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Senator",
        text: "OpenClaw is a game changer. The potential for custom extensions is huge, and AI really speeds up the process.",
    },
    {
        name: "M. Neves",
        handle: "@mneves",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neves",
        text: "Try @openclaw. And you can talk to it.",
    },
    {
        name: "Sarah J.",
        handle: "@sarah_dev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        text: "The speed at which I can iterate now is mind-blowing. Highly recommended.",
    },
    {
        name: "Alex T.",
        handle: "@alexthedev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        text: "This tool has completely changed my workflow. I can't imagine going back.",
    }
];

const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
    <motion.div
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="flex-shrink-0 w-[280px] md:w-[340px] 2xl:w-[380px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[1rem] md:rounded-[1.2rem] p-5 md:p-6 mr-4 md:mr-6 shadow-xl shadow-black/5"
    >
        <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-3 pb-2">
                <div className="flex-shrink-0 relative">
                    <img src={item.avatar} alt={item.handle} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-slate-800 object-cover border-2 border-primary/20" />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                        <span className="material-symbols-rounded text-[6px] md:text-[8px] text-white">verified</span>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-slate-900 dark:text-white text-xs md:text-sm leading-tight">{item.name}</p>
                    <p className="text-primary font-bold text-[9px] md:text-[10px] tracking-wider uppercase">{item.handle}</p>
                </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium line-clamp-2">
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
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">stars</span> Wall of Love
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight"
                >
                    Trusted by builders <span className="text-primary">everywhere.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Join 100+ businesses and brands who have accelerated their growth with our premium digital solutions and strategic expertise.
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
