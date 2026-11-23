import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../ui/TitleIconCapsule';

const problemIcons = [
    { icon: 'lightbulb', color: 'text-primary' },
    { icon: 'psychology', color: 'text-secondary' },
    { icon: 'tips_and_updates', color: 'text-primary' },
    { icon: 'help', color: 'text-secondary' },
];

const solutionIcons = [
    { icon: 'magic_button', color: 'text-secondary' },
    { icon: 'bolt', color: 'text-primary' },
    { icon: 'task_alt', color: 'text-secondary' },
    { icon: 'check_circle', color: 'text-primary' },
];

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
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">lightbulb</span> Our Solution
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        Common Problems{' '}
                        <TitleIconCapsule icons={problemIcons} delay={0} />.{' '}
                        <span className="text-primary">Simple</span>{' '}
                        <TitleIconCapsule icons={solutionIcons} delay={700} initialIndex={1} />{' '}
                        <span className="text-secondary">Solutions.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
                            Real challenges businesses face — and how Mindtrix Media solves them.
                        </p>

                        {/* Comparison Toggle */}
                        <div className="flex items-center gap-3 bg-white dark:bg-neutral-900/60 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/[0.1] shadow-sm backdrop-blur-md mt-2">
                            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${!highlightSolution ? 'text-slate-900 font-bold dark:text-white' : 'text-slate-600 dark:text-neutral-500'}`}>Problem</span>
                            <button
                                onClick={() => setHighlightSolution(!highlightSolution)}
                                className={`w-11 h-6 rounded-full flex items-center transition-colors duration-300 px-0.5 ${highlightSolution ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-neutral-800'}`}
                            >
                                <motion.div
                                    className="w-5 h-5 bg-white rounded-full shadow-sm"
                                    animate={{ x: highlightSolution ? 20 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${highlightSolution ? 'text-primary font-bold' : 'text-slate-600'}`}>Solution</span>
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-3 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                            {/* Problems Column */}
                            <div className={`flex flex-col p-6 md:p-10 transition-all duration-500 ${highlightSolution ? 'opacity-50 blur-[0.5px] grayscale' : 'opacity-100'}`}>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center tracking-tight">Business Challenges</h3>
                                <ul className="space-y-6">
                                    {problems.map((problem, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-4 text-slate-600 dark:text-neutral-400 font-medium text-sm md:text-base"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center">
                                                <span className="material-symbols-rounded text-red-500 text-xs font-bold">close</span>
                                            </div>
                                            {problem}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions Column */}
                            <motion.div
                                className="flex flex-col bg-slate-50 dark:bg-neutral-900/80 rounded-xl md:rounded-2xl p-6 md:p-10 border border-slate-200/90 dark:border-white/[0.08] shadow-md relative overflow-hidden transition-all duration-500"
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
                                            className="flex items-center gap-5 text-slate-800 dark:text-white/90 font-medium text-sm sm:text-base"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30">
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
