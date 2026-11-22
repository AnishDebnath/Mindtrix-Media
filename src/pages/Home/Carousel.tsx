import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ponytail: local carousel product images
import tphCover from '@/assets/products/the photographer house/cover.png';
import charuCover from '@/assets/products/charu enterprise/cover.png';
import charuEcommerceCover from '@/assets/products/charu enterprise ecommerce/cover.png';
import jewelleryCover from '@/assets/products/jewellery ecommerce/cover.png';
import ecommerceCover from '@/assets/products/ecommerce/cover.png';
import jewelleryCrmHome from '@/assets/products/gold crm/home.png';
import carRentalHome from '@/assets/products/car rental erp/home.png';

const carouselItems = [
    {
        id: 1,
        title: "The Photographers House",
        category: "Photographer Portfolio with Booking Feature",
        img: tphCover,
        link: "/product/the-photographers-house"
    },
    {
        id: 2,
        title: "Digital Business Card Platform",
        category: "Digital Business Card & Company Landing Page",
        img: charuCover,
        link: "/product/digital-business-card"
    },
    {
        id: 3,
        title: "Fence Fittings E-Commerce",
        category: "E-Commerce Platform",
        img: charuEcommerceCover,
        link: "/product/fence-fittings-ecommerce"
    },
    {
        id: 4,
        title: "Luxury Jewellery E-Commerce Platform",
        category: "E-Commerce Platform",
        img: jewelleryCover,
        link: "/product/luxury-jewellery-ecommerce-platform"
    },
    {
        id: 5,
        title: "E-Commerce Platform",
        category: "E-Commerce Website",
        img: ecommerceCover,
        link: "/product/ecommerce-platform"
    },
    {
        id: 6,
        title: "Jewellery Management System (CRM)",
        category: "CRM System",
        img: jewelleryCrmHome,
        link: "/product/jewellery-crm-system"
    },
    {
        id: 7,
        title: "Car Rental System (ERP)",
        category: "CRM System",
        img: carRentalHome,
        link: "/product/car-rental-erp"
    },
];

interface CarouselProps {
    windowWidth: number;
}

const Carousel: React.FC<CarouselProps> = ({ windowWidth }) => {
    // Duplicate items for seamless loop
    const marqueeItems = [...carouselItems, ...carouselItems, ...carouselItems];

    return (
        <div className="w-full relative z-20 pb-8 md:pb-12 2xl:pb-16 pt-0 overflow-hidden bg-transparent">
            {/* Fade Filters */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-30 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-30 pointer-events-none" />

            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-33.33%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className="flex gap-4 md:gap-6 px-4 min-w-max"
                >
                    {marqueeItems.map((item, index) => (
                        <Link
                            key={`${item.id}-${index}`}
                            to={item.link}
                            className="relative flex-shrink-0 w-[320px] sm:w-[500px] bg-white dark:bg-neutral-950/70 rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-white/[0.08] dark:hover:border-neutral-700 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 group flex flex-col"
                        >
                            {/* Image & Content Container */}
                            <div className="w-full h-[280px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden relative isolate group/image border border-slate-100 dark:border-white/[0.05]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Floating Glass Content Card */}
                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200/60 dark:border-white/[0.1] shadow-lg flex items-center justify-between gap-3 z-10 transition-transform duration-300 group-hover:scale-[1.01]">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors duration-300 truncate">{item.title}</h3>
                                        <p className="text-[10px] md:text-xs text-slate-500 dark:text-neutral-400 font-medium uppercase tracking-wider truncate">{item.category}</p>
                                    </div>

                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-md"
                                    >
                                        <span className="material-symbols-rounded text-[16px] sm:text-[20px] transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
