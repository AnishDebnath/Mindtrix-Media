import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

interface ArticleCardProps {
    article: {
        id: string;
        tags: string[];
        title: string;
        desc: string;
        img: string;
        content?: any;
    };
    delay: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, delay }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="group h-full block"
        >
            <Link to={`/blog/${article.id}`} className="block h-full">
                <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.2rem] border border-slate-200/90 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-500 p-2 md:p-2.5 h-full flex flex-col">
                    {/* Image Container - Compacted */}
                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] mb-3 border border-slate-100 dark:border-white/5">
                        <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* Content Area - Balanced Spacing */}
                    <div className="px-4 pb-4 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {article.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-amber-50 dark:bg-white/5 text-amber-700 dark:text-secondary rounded-lg border border-amber-200/80 dark:border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {article.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2 font-normal">
                            {article.desc}
                        </p>

                        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between group/link">
                            <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover/link:text-primary transition-colors">
                                Read More
                            </span>
                            <motion.div
                                whileHover={{ x: 3 }}
                                className="w-7 h-7 rounded-lg bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-800 group-hover/link:bg-slate-950 group-hover/link:border-slate-950 group-hover/link:text-white transition-all duration-300 shadow-sm"
                            >
                                <span className="material-symbols-rounded text-sm">arrow_forward</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export default ArticleCard;
