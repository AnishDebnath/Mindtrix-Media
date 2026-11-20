import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articles } from '../../data/blog';

const Blog: React.FC = () => {
    const featuredArticles = articles.filter(article => article.featured).slice(0, 4);
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-[#6366f1] font-semibold uppercase text-xs tracking-wider">✦ Blog</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900 tracking-tight leading-tight"
                    >
                        Insights & <span className="text-[#6366f1]">Expertise</span>{' '}
                        <span className="text-[#ffc659]">Shared.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        Fresh perspectives on custom software architecture, e-commerce engineering, and system automation.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
                    {featuredArticles.map((post, i) => (
                        <Link to={`/blog/${post.id}`} key={i} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group cursor-pointer bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-3 md:p-3.5 pb-4 border border-slate-200/80 dark:border-white/[0.08] dark:hover:border-neutral-700 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300"
                            >
                                <div className="mb-3 overflow-hidden rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/[0.06]">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        loading="lazy"
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-2">
                                    <h3 className="text-base md:text-lg font-bold mb-1.5 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-neutral-400 leading-relaxed text-xs md:text-sm line-clamp-2">
                                        {post.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Explore All Insights</span>
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
