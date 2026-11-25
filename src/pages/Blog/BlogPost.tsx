import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { articles } from '../../data/blog';
import BlogCard from './BlogCard';
import { CTA } from '../../components/sections';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';
import useSEO from '../../utils/useSEO';

const blogPostIcons = [
    { icon: 'article', color: 'text-primary' },
    { icon: 'edit_note', color: 'text-secondary' },
    { icon: 'lightbulb', color: 'text-primary' },
    { icon: 'auto_awesome', color: 'text-secondary' },
];

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [copied, setCopied] = useState(false);
    const article = articles.find(a => a.id === id);
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useSEO(
        article
            ? {
                title: `${article.title} | Mindtrix Media Blog`,
                description: article.desc,
                keywords: `${article.tags.join(', ')}, Mindtrix Media, web development blog`,
                canonicalPath: `/blog/${article.id}`,
                ogTitle: article.title,
                ogDescription: article.desc,
                ogImage: article.img,
                twitterImage: article.img,
                structuredData: {
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: article.title,
                    description: article.desc,
                    image: article.img,
                    url: `https://mindtrixmedia.com/blog/${article.id}`,
                    author: { '@type': 'Organization', name: 'Mindtrix Media', url: 'https://mindtrixmedia.com' },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Mindtrix Media',
                        url: 'https://mindtrixmedia.com',
                        logo: { '@type': 'ImageObject', url: 'https://mindtrixmedia.com/src/assets/mindtrix-media-logo.png' },
                    },
                    keywords: article.tags.join(', '),
                    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mindtrixmedia.com/blog/${article.id}` },
                },
            }
            : {
                title: 'Article Not Found — Mindtrix Media Blog',
                description: 'The article you are looking for could not be found.',
                canonicalPath: '/blog',
            }
    );

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
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">article</span> Blog Post
                        </span>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">
                                {(() => {
                                    const words = article.title.trim().split(' ');
                                    const last = words.pop();
                                    const secondLast = words.length > 1 ? words.pop() : null;
                                    return (
                                        <>
                                            {words.join(' ')}{' '}
                                            {secondLast && <span className="text-primary">{secondLast} </span>}
                                            <TitleIconCapsule icons={blogPostIcons} delay={0} />{' '}
                                            <span className={secondLast ? 'text-secondary' : 'text-primary'}>{last}</span>
                                        </>
                                    );
                                })()}
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
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
                <div className="mx-auto mb-8 md:mb-10 space-y-8 md:space-y-12">
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

                {/* Share Article */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4 mb-10">
                    <button
                        type="button"
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        }}
                        className="inline-flex items-center gap-2 px-4 h-9 sm:h-10 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black text-xs sm:text-sm font-medium shadow-sm transition-all"
                    >
                        <span className="material-symbols-rounded text-sm">{copied ? 'check' : 'content_copy'}</span>
                        {copied ? 'Copied' : 'Copy Link'}
                    </button>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 h-9 sm:h-10 rounded-xl bg-white dark:bg-neutral-950/70 hover:border-secondary/60 border border-slate-200/90 dark:border-white/[0.08] text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                        <span className="material-symbols-rounded text-sm text-secondary">share</span>
                        X / Twitter
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 h-9 sm:h-10 rounded-xl bg-white dark:bg-neutral-950/70 hover:border-primary/60 border border-slate-200/90 dark:border-white/[0.08] text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                        <span className="material-symbols-rounded text-sm text-primary">work</span>
                        LinkedIn
                    </a>
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 h-9 sm:h-10 rounded-xl bg-white dark:bg-neutral-950/70 hover:border-secondary/60 border border-slate-200/90 dark:border-white/[0.08] text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                        <span className="material-symbols-rounded text-sm text-secondary">chat</span>
                        WhatsApp
                    </a>
                </div>

                <div className="border-t border-slate-200 dark:border-white/10 my-16 w-full" />

                {/* More Articles */}
                <div className="w-full mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-8 mb-8 md:mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Read{' '}
                            <TitleIconCapsule icons={blogPostIcons} delay={0} />{' '}
                            <span className="text-primary">Next</span>
                        </h2>
                        <Link to="/blog" className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400 hover:text-primary transition-colors">
                            View All Blogs
                            <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {moreArticles.map((a, i) => (
                            <BlogCard key={i} article={a as any} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

            </div>
            <CTA />
        </div>
    );
};

export default BlogPost;
