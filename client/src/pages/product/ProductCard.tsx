import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { Product } from './productsData';

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
            className="py-10 md:py-16 border-t border-slate-200 dark:border-slate-800 first:border-t-0"
        >
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Section (Image) */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group perspective-1000" onClick={() => navigate(`/product/${product.id}`)}>
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02 ] cursor-pointer">
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                                {/* Overlays Tags */}
                                {/* <div className="absolute top-4 left-4 flex gap-2 font-sans z-10 transition-transform duration-500 group-hover:-translate-y-1">
                                    <span className="px-3 py-1.5 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#111] dark:text-white border border-white/20 shadow-lg">
                                        {product.category}
                                    </span>
                                </div> */}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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

                    <h3 onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-[1.1] hover:text-primary transition-colors duration-300">
                        {product.title.split(':')[0]}
                    </h3>

                    {/* Key Features List */}
                    <ul className="space-y-3 mb-8 md:mb-10">
                        {product.services.slice(0, 4).map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="material-symbols-rounded text-[12px] text-secondary font-bold">check</span>
                                </div>
                                <span className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Action Area */}
                    <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                        <Link
                            to={product.buyLink || "/contact"}
                            className="bg-[#111] dark:bg-white text-white dark:text-[#111] px-6 h-11 rounded-full font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group/btn"
                        >
                            Buy Now
                            <span className="material-symbols-rounded text-base group-hover/btn:translate-x-1 transition-transform">shopping_cart</span>
                        </Link>

                        <a
                            href={product.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-6 h-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-white/10 transition-all font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-widest hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-rounded text-base">visibility</span>
                            {product.liveLabel || "View Live"}
                        </a>

                        <Link
                            to={product.customiseLink || "/contact"}
                            className="group flex items-center gap-2 px-5 h-11 rounded-full font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            Customise
                            <span className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-rounded text-[10px]">tune</span>
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ProductCard;
