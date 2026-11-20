import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="py-10 md:py-16 border-t border-slate-200/80 dark:border-white/[0.08] first:border-t-0"
        >
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Section (Image) */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group perspective-1000" onClick={() => navigate(`/product/${product.id}`)}>
                        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-slate-100 dark:bg-neutral-950/80 border border-slate-200/80 dark:border-white/[0.08] dark:hover:border-neutral-700 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-500 group-hover:scale-[1.01] cursor-pointer p-2.5">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl relative border border-slate-100 dark:border-white/[0.04]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-12 h-[2px] bg-secondary" />
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs">0{index + 1}</span>
                        <div className="w-8 h-[1px] bg-slate-200 dark:bg-white/10 ml-2" />
                        <span className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-widest">{product.client}</span>
                    </div>

                    <h3 onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight leading-tight hover:text-indigo-500 transition-colors duration-200">
                        {product.title.split(':')[0]}
                    </h3>

                    {/* Key Features List */}
                    <ul className="space-y-3 mb-8 md:mb-10">
                        {product.services.slice(0, 4).map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="material-symbols-rounded text-[12px] text-secondary font-bold">check</span>
                                </div>
                                <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Action Area */}
                    <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                        {product.category === "Prebuilt" ? (
                            <>
                                <Link
                                    to={product.buyLink || "/contact"}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 sm:px-5 h-9 sm:h-10 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group/btn"
                                >
                                    <span>Buy Now</span>
                                    <span className="material-symbols-rounded text-sm group-hover/btn:translate-x-0.5 transition-transform">shopping_cart</span>
                                </Link>

                                <a
                                    href={product.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-4 sm:px-5 h-9 sm:h-10 rounded-xl border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    <span className="material-symbols-rounded text-sm">visibility</span>
                                    <span>{product.liveLabel || "View Live"}</span>
                                </a>
                            </>
                        ) : (
                            <>
                                <Link
                                    to={product.customiseLink || "/contact"}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black px-4 sm:px-5 h-9 sm:h-10 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group/btn"
                                >
                                    <span>Customise</span>
                                    <span className="material-symbols-rounded text-sm group-hover/btn:translate-x-0.5 transition-transform">tune</span>
                                </Link>

                                <a
                                    href={product.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-4 sm:px-5 h-9 sm:h-10 rounded-xl border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    <span className="material-symbols-rounded text-sm">visibility</span>
                                    <span>{product.liveLabel || "View Live"}</span>
                                </a>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ProductCard;
