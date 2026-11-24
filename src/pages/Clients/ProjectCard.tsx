import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProjectCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const navigate = useNavigate();
    const isAlternate = index % 2 === 1;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 md:mb-8"
        >
            <div className="bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md overflow-hidden">
                <div className={`flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6 ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Left/Right Visual Box: Gradient Frame + Floating UI Preview Window */}
                    <div
                        onClick={() => navigate(`/product/${product.id}`)}
                        className={`w-full lg:w-[46%] rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 flex items-center justify-center relative overflow-hidden cursor-pointer group ${
                            isAlternate
                                ? 'bg-gradient-to-br from-secondary/20 via-amber-100/70 to-primary/15 dark:from-secondary/15 dark:via-neutral-900 dark:to-primary/10'
                                : 'bg-gradient-to-br from-primary/20 via-indigo-100/70 to-secondary/15 dark:from-primary/20 dark:via-neutral-900 dark:to-secondary/10'
                        }`}
                    >
                        {/* Subtle Grid Line Pattern */}
                        <div
                            className="absolute inset-0 opacity-30 dark:opacity-15 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(to right, rgba(99,92,247,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,92,247,0.12) 1px, transparent 1px)',
                                backgroundSize: '36px 36px'
                            }}
                        />

                        {/* Floating Inner Image Frame (Clean Image Only) */}
                        <div className="relative z-10 w-full max-w-[440px] bg-white dark:bg-neutral-950 rounded-xl md:rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-black">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right/Left Details Content */}
                    <div className="w-full lg:w-[54%] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-start text-left">
                        {/* Category/Client Label */}
                        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                            {product.client}
                        </span>

                        {/* Title */}
                        <h3
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="cursor-pointer text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight leading-tight hover:text-primary transition-colors"
                        >
                            {product.title.split(':')[0]}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                            {product.description}
                        </p>

                        {/* Services/Highlights List */}
                        <ul className="space-y-1.5 mb-6">
                            {product.services.slice(0, 4).map((service, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-400">
                                    <span className="w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="material-symbols-rounded text-xs font-bold">check</span>
                                    </span>
                                    <span className="leading-snug">{service}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Area */}
                        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                            {product.category === "Prebuilt" ? (
                                <Link
                                    to={product.buyLink || "/contact"}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group/btn"
                                >
                                    <span>Buy Now</span>
                                    <span className="material-symbols-rounded text-sm group-hover/btn:translate-x-0.5 transition-transform">shopping_cart</span>
                                </Link>
                            ) : (
                                <Link
                                    to={product.customiseLink || "/contact"}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group/btn"
                                >
                                    <span>Customise</span>
                                    <span className="material-symbols-rounded text-sm group-hover/btn:translate-x-0.5 transition-transform">tune</span>
                                </Link>
                            )}

                            <a
                                href={product.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-4 py-2 rounded-xl border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                <span className="material-symbols-rounded text-sm">visibility</span>
                                <span>{product.liveLabel || "View Live"}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
