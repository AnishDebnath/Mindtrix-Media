import React from 'react';
import { motion } from 'framer-motion';
const homeArticles = [
    {
        title: 'Why Custom CRMs Outperform Off-the-Shelf Software',
        desc: "Generic tools don't fit every business. Discover how tailored CRM systems drive efficiency and growth.",
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: '5 SEO Strategies for Scalable E-commerce in 2024',
        desc: "Ranking high on Google is just the start. Learn how to optimize for both search engines and user conversion.",
        img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'How Business Automation Saves 20+ Hours Weekly',
        desc: 'Stop wasting time on manual tasks. We break down the best workflows to automate your business operations.',
        img: 'https://images.unsplash.com/photo-1518186239751-08183ca2032e?auto=format&fit=crop&w=800&q=80'
    },
    {
        title: "The Importance of Fast, High-Performance Web Architecture",
        desc: "Speed is a ranking factor. Learn how modern tech stacks (like Next.js) can boost your revenue through speed.",
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
];

const Blog: React.FC = () => {
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
                    {homeArticles.map((post, i) => (
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
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold mb-1.5 text-slate-900 dark:text-white group-hover:text-[#FF5C00] transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base 2xl:text-lg">
                                {post.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
