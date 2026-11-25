import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TitleIconCapsule from '../ui/TitleIconCapsule';
import { homeFaqs } from '@/data/faqData';

const askIcons = [
    { icon: 'live_help', color: 'text-primary' },
    { icon: 'quiz', color: 'text-secondary' },
    { icon: 'help', color: 'text-primary' },
    { icon: 'contact_support', color: 'text-secondary' },
];

const answerIcons = [
    { icon: 'verified', color: 'text-secondary' },
    { icon: 'task_alt', color: 'text-primary' },
    { icon: 'info', color: 'text-secondary' },
    { icon: 'check', color: 'text-primary' },
];

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-start">
                    {/* Left Column - Text */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                        >
                            <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                                <span className="material-symbols-rounded text-sm">help</span> FAQ
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                        >
                            Questions We{' '}
                            <TitleIconCapsule icons={askIcons} delay={0} />
                            <br />
                            <span className="text-primary">Get Asked</span>{' '}
                            <TitleIconCapsule icons={answerIcons} delay={700} initialIndex={1} />{' '}
                            <span className="text-secondary">Often</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed max-w-md font-normal"
                        >
                            Clear answers about our website development, CRM, ERP, and software solutions.
                        </motion.p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-2.5">
                        {homeFaqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            const isSecondary = index % 2 === 1;
                            const openBorder = isSecondary ? 'border-secondary/50 dark:border-secondary/40' : 'border-primary/40 dark:border-primary/40';
                            const openTitle = isSecondary ? 'text-secondary' : 'text-primary';
                            const openIconBox = isSecondary ? 'border-secondary/30 bg-secondary/15 text-secondary' : 'border-primary/30 bg-primary/10 text-primary';
                            const openAnswerBorder = isSecondary ? 'border-secondary/20 dark:border-secondary/15' : 'border-primary/15 dark:border-primary/15';
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`rounded-xl md:rounded-2xl transition-all duration-300 border shadow-sm ${isOpen ? `bg-white dark:bg-neutral-950/80 p-3 md:p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${openBorder}` : 'border-slate-200/90 hover:border-slate-300 dark:border-white/[0.08] dark:hover:border-neutral-700 bg-white dark:bg-neutral-950/50 px-3.5 py-2.5 hover:bg-slate-50 dark:hover:bg-neutral-950/70'}`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        className="flex justify-between items-start w-full text-left gap-4"
                                    >
                                        <h4 className={`font-semibold text-sm md:text-base leading-snug tracking-tight transition-colors duration-300 ${isOpen ? openTitle : 'text-slate-800 dark:text-neutral-300'}`}>
                                            {faq.q}
                                        </h4>
                                        <div className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-colors duration-300 ${isOpen ? openIconBox : 'border-slate-300 bg-slate-50 dark:bg-white/[0.05] dark:border-white/[0.08] text-slate-600 dark:text-slate-400'}`}>
                                            <span className={`material-symbols-rounded text-base transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                expand_more
                                            </span>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className={`p-2.5 md:p-3 bg-slate-50 dark:bg-black/50 rounded-lg md:rounded-xl border ${openAnswerBorder}`}>
                                                    <p className="text-slate-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
