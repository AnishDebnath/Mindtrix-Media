import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';
import { products } from '../../data/products';

const productIcons = [
    { icon: 'deployed_code', color: 'text-primary' },
    { icon: 'apps', color: 'text-secondary' },
    { icon: 'widgets', color: 'text-primary' },
    { icon: 'layers', color: 'text-secondary' },
];

const qualityIcons = [
    { icon: 'auto_awesome', color: 'text-secondary' },
    { icon: 'star', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
    { icon: 'diamond', color: 'text-primary' },
];

interface FeaturedProductsProps {
    projectIds?: string[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ projectIds }) => {
    const featuredItems = projectIds
        ? projectIds.map(id => products.find(p => p.id === id)).filter((p): p is typeof products[0] => !!p)
        : products.filter(p => p.featured).slice(0, 4);

    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="featured-products">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">folder_open</span> Featured Work
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        Products{' '}
                        <TitleIconCapsule icons={productIcons} delay={0} />{' '}
                        <span className="text-primary">That Speak</span>{' '}
                        <TitleIconCapsule icons={qualityIcons} delay={700} initialIndex={1} />{' '}
                        <span className="text-secondary">for Themselves</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        Here's a glimpse of the digital platforms and systems we've engineered for our clients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-7xl mx-auto">
                    {featuredItems.map((product, idx) => (
                        <Link key={idx} to={`/product/${product.id}`} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover="hover"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white dark:bg-neutral-950/70 rounded-2xl md:rounded-3xl p-2 md:p-2.5 pb-3 border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md backdrop-blur-md transition-all duration-300 h-full"
                            >
                                {/* Image Frame */}
                                <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 mb-2.5 md:mb-3 border border-slate-100 dark:border-white/[0.06]">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />

                                    {product.featuredTag && (
                                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/85 backdrop-blur-md border border-secondary/50 text-secondary text-[9px] font-bold uppercase tracking-widest rounded-lg shadow-sm z-10 flex items-center gap-1">
                                            <span>★</span> {product.featuredTag}
                                        </div>
                                    )}
                                </div>

                                {/* Info Area */}
                                <div className="px-2 flex justify-between items-end gap-4">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors duration-300 truncate">
                                            {product.title}
                                        </h3>
                                        <p className="text-muted-slate font-semibold text-xs md:text-sm truncate">{product.client}</p>
                                    </div>
                                    <motion.div
                                        className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 rounded-xl border border-slate-300 dark:border-white/[0.1] bg-white dark:bg-neutral-900/60 flex items-center justify-center group-hover:bg-slate-950 group-hover:border-slate-950 dark:group-hover:bg-primary dark:group-hover:border-primary transition-all duration-300 overflow-hidden shadow-sm"
                                    >
                                        <motion.span
                                            variants={{
                                                initial: { rotate: 0 },
                                                hover: { rotate: 45 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="material-symbols-rounded text-slate-500 dark:text-neutral-300 group-hover:text-white transition-colors text-lg md:text-xl"
                                        >
                                            arrow_outward
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
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
                            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Explore All Products</span>
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
