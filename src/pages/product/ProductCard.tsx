import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { Product } from './products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-900/50 rounded-[1.5rem] p-2 pb-4 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        >
            {/* Image Section - Home Page Style with internal padding */}
            <div
                onClick={() => navigate(`/product/${product.id}`)}
                className="relative aspect-[4/3] rounded-[1rem] overflow-hidden bg-black mb-4 border border-slate-100 dark:border-slate-800 cursor-pointer"
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />

                {/* Overlays Tags - Styled Identically */}
                <div className="absolute top-4 left-4 flex gap-2 font-sans">
                    <span className="px-3 py-1 bg-white/95 dark:bg-black/80 backdrop-blur-xl rounded-full text-[10px] md:text-[11px] 2xl:text-xs font-black uppercase tracking-widest text-[#111] dark:text-white border border-white/20 shadow-md">
                        {product.category}
                    </span>
                    <span className="px-3 py-1 bg-white/95 dark:bg-black/80 backdrop-blur-xl rounded-full text-[10px] md:text-[11px] 2xl:text-xs font-black uppercase tracking-widest text-[#111] dark:text-white border border-white/20 shadow-md">
                        {product.date.split(' ')[1]}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-3 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl 2xl:text-2xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                        {product.title.split(':')[0]}
                    </h3>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-snug mb-3 md:mb-4 font-medium line-clamp-2">
                    {product.subtitle}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 mb-4">
                    {product.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#FF5C00]/60" />
                            <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Action Area */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                    <div className="flex gap-2">
                        <Link
                            to={product.buyLink || "/contact"}
                            className="flex-[1] bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-xl py-2 px-1 font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-1 hover:bg-primary dark:hover:bg-primary hover:text-white transition-all active:scale-95"
                        >
                            <span className="material-symbols-rounded text-base">shopping_cart</span>
                            Buy Now
                        </Link>
                        <a
                            href={product.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-[1] bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-xl py-2 px-1 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1 hover:bg-slate-200 dark:hover:bg-white/10 transition-all font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-wider whitespace-nowrap active:scale-95"
                        >
                            <span className="material-symbols-rounded text-base">visibility</span>
                            {product.liveLabel || "View Live"}
                        </a>
                    </div>
                    <Link
                        to={product.customiseLink || "/contact"}
                        className="w-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 rounded-xl py-2 font-bold text-[9px] md:text-[10px] 2xl:text-xs uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-1 hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95"
                    >
                        <span className="material-symbols-rounded text-base">tune</span>
                        Customise Product
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
