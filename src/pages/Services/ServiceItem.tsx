import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceItemProps {
    service: {
        title: string;
        description: string;
        image: string;
        tags: string[];
    };
    index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="py-10 md:py-16 border-t border-slate-200 dark:border-slate-800"
        >
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 2xl:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Section (Image) */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            {/* Inner Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-12 h-[2px] bg-primary" />
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">0{index + 1}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight leading-tight">
                        {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl font-normal">
                        {service.description}
                    </p>

                    {/* Features/Tags Grid */}
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                        {service.tags.map((tag, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-slate-100 dark:bg-white/[0.05] rounded-lg px-3 py-1 border border-slate-200/80 dark:border-white/[0.08] transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                <span className="text-xs font-medium text-slate-700 dark:text-neutral-300">
                                    {tag}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                        <Link
                            to="/free-prototype"
                            className="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black pl-3.5 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>Free Prototype</span>
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        </Link>

                        <Link
                            to="/product?category=Customized"
                            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 pl-3.5 pr-1.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.1] font-medium text-xs sm:text-sm backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>View Work</span>
                            <div className="w-6 h-6 bg-white dark:bg-white/10 rounded-lg border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-neutral-200 group-hover:translate-x-0.5 transition-transform duration-300">
                                <span className="material-symbols-rounded text-sm">arrow_forward</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ServiceItem;
