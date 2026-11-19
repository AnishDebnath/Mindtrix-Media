import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeFaqs } from '@/data/faqData';

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16">
                    {/* Left Column - Text */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ FAQ</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-[1.1]"
                        >
                            Questions <span className='text-secondary'>We<br />
                                Get Asked</span> Often
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md"
                        >
                            Simple answers about our website development, CRM, ERP, and software services.
                        </motion.p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {homeFaqs.map((faq, index) => {
                            const isOpen = openFAQ === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`rounded-[1.2rem] transition-all duration-300 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl ${isOpen ? 'bg-white dark:bg-slate-900 p-4 md:p-5' : 'bg-white/80 dark:bg-slate-900/50 px-4 py-3.5 hover:bg-white dark:hover:bg-slate-900'}`}
                                >
                                    <button
                                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        className="flex justify-between items-start w-full text-left gap-4"
                                    >
                                        <h4 className={`font-bold text-sm md:text-lg 2xl:text-xl leading-snug ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                                            {faq.q}
                                        </h4>
                                        <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800' : 'border-slate-200 dark:border-slate-800'}`}>
                                            <span className={`material-symbols-rounded text-lg transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                                                expand_more
                                            </span>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-3.5 md:p-4 bg-slate-100 dark:bg-slate-800 rounded-lg md:rounded-xl">
                                                    <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm 2xl:text-base leading-relaxed">
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
