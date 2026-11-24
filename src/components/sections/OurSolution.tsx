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
                <div className="text-center mb-8 md:mb-10">
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

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-950/70 p-2.5 sm:p-3 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10 items-stretch">
                            {/* Problems Column */}
                            <motion.div
                                className="p-5 sm:p-6 md:p-7 flex flex-col justify-between relative transition-all duration-500"
                                animate={{
                                    opacity: !highlightSolution ? 1 : 0.45,
                                    scale: !highlightSolution ? 1 : 0.99,
                                    filter: !highlightSolution ? 'grayscale(0%)' : 'grayscale(100%)'
                                }}
                            >
                                <div>
                                    <div className="pb-4 mb-4 border-b border-slate-100 dark:border-white/[0.06] h-10 flex items-center justify-between">
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                                            Business Challenges
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {problems.map((problem, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-medium"
                                            >
                                                <span className="w-4 h-4 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="material-symbols-rounded text-[11px] font-bold">close</span>
                                                </span>
                                                <span className="leading-snug">{problem}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Solutions Column (Separate Inset Div) */}
                            <motion.div
                                className="p-5 sm:p-6 md:p-7 flex flex-col justify-between relative bg-slate-50 dark:bg-neutral-900/80 rounded-xl md:rounded-2xl border border-slate-200/90 dark:border-white/[0.08] shadow-md transition-all duration-500 overflow-hidden"
                                animate={{
                                    opacity: highlightSolution ? 1 : 0.3,
                                    scale: highlightSolution ? 1 : 0.98,
                                    filter: highlightSolution ? 'grayscale(0%)' : 'grayscale(100%)'
                                }}
                            >
                                {/* Accent Glow Top Right */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[70px] pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="pb-4 mb-4 border-b border-slate-200/70 dark:border-white/[0.08] h-10 flex items-center justify-between gap-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight leading-none">
                                            Our Solution
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {solutions.map((solution, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-neutral-200 font-medium"
                                            >
                                                <span className="w-4 h-4 rounded-full bg-primary/15 dark:bg-primary/25 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                                    <span className="material-symbols-rounded text-xs font-bold">check</span>
                                                </span>
                                                <span className="leading-snug">{solution}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurSolution;
