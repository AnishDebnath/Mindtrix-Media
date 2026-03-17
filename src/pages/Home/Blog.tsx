import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articles } from '../Blog/blogData';

const Blog: React.FC = () => {
    const featuredArticles = articles.filter(article => article.featured).slice(0, 4);
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Blog</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold mb-3 text-slate-900 dark:text-white"
                    >
                        Insights & <span className="text-secondary">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                    >
                        Stay ahead of the curve with fresh perspectives on custom software, e-commerce growth, and business automation.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {featuredArticles.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="mb-3 overflow-hidden rounded-[1.2rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold mb-1.5 text-slate-900 dark:text-white group-hover:text-secondary transition-colors leading-snug line-clamp-2 min-h-[3rem] md:min-h-[3.5rem]">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base 2xl:text-lg line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                                {post.desc}
                            </p>
                        </motion.div>
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
                            className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-xl group"
                        >
                            <span>Explore All Insights</span>
                            <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                                <span className="material-symbols-rounded text-lg">arrow_forward</span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
