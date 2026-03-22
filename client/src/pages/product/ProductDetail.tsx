import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { products } from './productsData';
import { CTA } from '../../components';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-background-dark text-slate-900 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
                    <Link to="/product" className="text-primary hover:underline">Back to Products</Link>
                </div>
            </div>
        );
    }

    const moreProducts = products.filter(p => p.id !== product.id).slice(0, 2);

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
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Case Study</span>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                {product.title.split(":")[0]}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                                {product.subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-10"
                        >
                            <a
                                href={product.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/5 group"
                            >
                                Visit Live Site
                                <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded text-lg">arrow_outward</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                </div>

                {/* Main Hero Image with Parallax */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="aspect-video w-full rounded-[1.5rem] overflow-hidden shadow-2xl mb-16 md:mb-24 ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* Overview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-5xl px-4 md:px-0"
                >
                    <h2 className="text-3xl md:text-[40px] font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Overview</h2>
                    <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400 font-normal leading-[1.8] mb-10">
                        {product.description}
                    </p>

                    <div className="mb-14">
                        <h3 className="flex items-center gap-3 text-primary text-[12px] md:text-[14px] font-bold uppercase tracking-widest mb-4">
                            <span className="w-6 h-[1px] bg-primary inline-block"></span>What we did</h3>
                        <ul className="list-disc pl-5 space-y-2 text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400 font-light">
                            {product.services.map((s, i) => (
                                <li key={i} className="pl-2">{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 gap-y-10 mb-14 border-y border-slate-200 dark:border-white/10 py-10 md:py-12">
                        <div className="flex flex-col text-left">
                            <h3 className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                                <span className="w-6 h-[1px] bg-primary inline-block"></span>Client</h3>
                            <span className="text-[14px] md:text-[16px] font-medium text-slate-900 dark:text-white">{product.client}</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                                <span className="w-6 h-[1px] bg-primary inline-block"></span>Industry</h3>
                            <span className="text-[14px] md:text-[16px] font-medium text-slate-900 dark:text-white">{product.industry}</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <h3 className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                                <span className="w-6 h-[1px] bg-primary inline-block"></span>Year</h3>
                            <span className="text-[14px] md:text-[16px] font-medium text-slate-900 dark:text-white">{product.year}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="mx-auto mb-20 md:mb-32 space-y-10 md:space-y-16">
                    {product.content.map((block, index) => {
                        if (block.type === 'text') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col gap-6 px-4 md:px-0"
                                >
                                    {block.title && (
                                        <div className="flex items-center gap-3">
                                            <h3 className="flex items-center gap-3 text-primary text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                                                <span className="w-6 h-[1px] bg-primary inline-block"></span>{block.title}</h3>
                                        </div>
                                    )}
                                    <p className="leading-relaxed text-slate-800 dark:text-slate-200 text-[14px] md:text-[16px]">
                                        {block.body}
                                    </p>
                                </motion.div>
                            );
                        } else if (block.type === 'image') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full rounded-[1.2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 ${block.className}`}
                                >
                                    <img src={block.src} alt={block.alt} loading="lazy" className="w-full h-auto" />
                                </motion.div>
                            );
                        } else if (block.type === 'grid') {
                            return (
                                <div key={index} className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    {block.images.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: i * 0.2 }}
                                            className="rounded-[1.2rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 aspect-square"
                                        >
                                            <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                        </motion.div>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 my-16 w-full" />

                {/* More Work */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-8 mb-10 md:mb-16"
                    >
                        <h2 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            More <span className="text-primary">Products</span>
                        </h2>
                        <Link to="/product" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            View All Products
                            <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {moreProducts.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover="hover"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white dark:bg-slate-900/50 rounded-[1.5rem] p-3 pb-6 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <div
                                    onClick={() => navigate(`/product/${p.id}`)}
                                    className="relative aspect-[4/3] rounded-[1rem] overflow-hidden bg-black mb-6 border border-slate-100 dark:border-slate-800 cursor-pointer"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full z-10 border border-white/10">
                                        {p.category}
                                    </div>
                                </div>

                                <div className="px-4 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 font-display leading-tight">{p.title.split(':')[0]}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{p.client}</p>
                                    </div>
                                    <motion.div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 overflow-hidden shadow-sm">
                                        <motion.span
                                            variants={{
                                                initial: { rotate: 0 },
                                                hover: { rotate: 45 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="material-symbols-rounded text-slate-400 group-hover:text-white transition-colors text-xl"
                                        >
                                            arrow_outward
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
            <CTA />
        </div>
    );
};

export default ProductDetail;
