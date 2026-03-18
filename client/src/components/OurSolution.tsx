import React from 'react';
import { motion } from 'framer-motion';

const OurSolution: React.FC = () => {
    const [highlightSolution, setHighlightSolution] = React.useState(true);

    const problems = [
        "My website is old and doesn't get results.",
        "I don't know who to trust for development.",
        "Managing customers in spreadsheets is messy.",
        "My business data is scattered everywhere.",
        "I need a website but don't know where to start."
    ];

    const solutions = [
        "A fresh, modern website built to convert.",
        "A trusted agency with a clear, proven process.",
        "A custom CRM that organizes your clients and sales.",
        "An ERP system that connects all your operations.",
        "A free prototype first — so you see it before we build it."
    ];

    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="solution">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Our Solution</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Common Problems. <span className="text-secondary">Simple Solutions.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <p className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Real challenges businesses face — and how Mindtrix Media solves them.
                        </p>

                        {/* Comparison Toggle */}
                        <div className="flex items-center gap-3 bg-white dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow mt-2">
                            <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${!highlightSolution ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Problem</span>
                            <button
                                onClick={() => setHighlightSolution(!highlightSolution)}
                                className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 px-1 ${highlightSolution ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                            >
                                <motion.div
                                    className="w-4 h-4 bg-white rounded-full shadow-sm"
                                    animate={{ x: highlightSolution ? 24 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                            <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${highlightSolution ? 'text-primary' : 'text-slate-400'}`}>Solution</span>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-900/40 rounded-[2rem] p-2 md:p-4 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                            {/* Problems Column */}
                            <div className={`flex flex-col p-8 md:p-12 transition-all duration-500 ${highlightSolution ? 'opacity-50 blur-[1px] grayscale' : 'opacity-100'}`}>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">Business Challenges</h3>
                                <ul className="space-y-8">
                                    {problems.map((problem, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-5 text-slate-600 dark:text-slate-400 font-medium text-base 2xl:text-lg"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center">
                                                <span className="material-symbols-rounded text-red-500 text-sm font-bold">close</span>
                                            </div>
                                            {problem}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions Column */}
                            <motion.div
                                className="flex flex-col bg-[#121212] rounded-[1.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500"
                                animate={{
                                    opacity: highlightSolution ? 1 : 0.3,
                                    scale: highlightSolution ? 1 : 0.98,
                                    filter: highlightSolution ? 'grayscale(0%)' : 'grayscale(100%)'
                                }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-12 text-center relative z-10">Our Solution</h3>
                                <ul className="space-y-8 relative z-10">
                                    {solutions.map((solution, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-5 text-white/90 font-medium text-base 2xl:text-lg"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                                                <span className="material-symbols-rounded text-white text-sm font-bold">check</span>
                                            </div>
                                            {solution}
                                        </motion.li>
                                    ))}
                                </ul>
                                {/* Subtle decorative glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurSolution;
