import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../product/products';

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="featured-products">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Products / Projects</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
                    >
                        Product <span className="text-secondary">that speak</span> for itself
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Here's a glimpse of what our digital solutions have brought to life for our clients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {featuredProducts.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white dark:bg-slate-900/50 rounded-[1.5rem] p-2.5 pb-5 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Frame */}
                            <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden bg-black mb-4 md:mb-5 border border-slate-100 dark:border-slate-800">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />

                                {product.featured && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#FF4D4D] to-[#FF0000] text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg z-10 border border-white/20">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Info Area */}
                            <div className="px-6 flex justify-between items-end">
                                <div>
                                    <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold text-slate-900 dark:text-white mb-1 font-display">{product.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm 2xl:text-base">{product.category}</p>
                                </div>
                                <motion.div
                                    className="w-10 h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 overflow-hidden shadow-sm"
                                >
                                    <motion.span
                                        variants={{
                                            initial: { rotate: 0 },
                                            hover: { rotate: 45 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="material-symbols-rounded text-slate-400 group-hover:text-white transition-colors text-xl md:text-2xl 2xl:text-3xl"
                                    >
                                        arrow_outward
                                    </motion.span>
                                </motion.div>
                            </div>
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
                            to="/product"
                            className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-xl group"
                        >
                            <span>Explore All Products</span>
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

export default FeaturedProducts;
