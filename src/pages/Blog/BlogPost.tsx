import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { articles } from './blogData';
import ArticleCard from './ArticleCard';
import { CTA } from '../../components';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-black text-slate-900 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const moreArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Blog Post</span>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                {article.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                                {article.desc}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Main Hero Image with Parallax */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="aspect-video w-full rounded-[1.5rem] overflow-hidden shadow-2xl mb-16 md:mb-24 ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* Content Sections */}
                <div className="mx-auto mb-20 md:mb-32 space-y-8 md:space-y-12">
                    {article.content && (article.content as any[]).map((block: any, index: number) => {
                        if (block.type === 'image') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="w-full rounded-[1.2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10"
                                >
                                    <img src={block.src} alt={block.alt} className="w-full h-auto" />
                                </motion.div>
                            );
                        }
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                className="flex flex-col gap-4"
                            >
                                <p className="leading-relaxed text-slate-800 dark:text-slate-200 text-[16px] md:text-[18px]">
                                    {block.body ?? block}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="border-t border-slate-200 dark:border-white/10 my-16 w-full" />

                {/* More Articles */}
                <div className="w-full mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:flex-row justify-between items-end gap-8 mb-16"
                    >
                        <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Read <span className="text-primary">Next</span>
                        </h2>
                        <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            View All Blogs
                            <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {moreArticles.map((a, i) => (
                            <ArticleCard key={i} article={a as any} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

            </div>
            <CTA />
        </div>
    );
};

export default BlogPost;
