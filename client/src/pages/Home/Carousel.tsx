import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getCloudinaryUrl } from '@/utils/cloudinary';

const carouselItems = [
    {
        id: 1,
        title: "The Photographers House",
        category: "Photographer Portfolio with Booking Feature",
        img: getCloudinaryUrl('cover_yidgjt.png'),
        link: "/product/the-photographers-house"
    },
    {
        id: 2,
        title: "Charu Enterprise",
        category: "Digital Business Card & Company Landing Page",
        img: getCloudinaryUrl('cover_fowio8.png'),
        link: "/product/charu-enterprise"
    },
    {
        id: 3,
        title: "Charu Enterprise E-Commerce",
        category: "E-Commerce Platform",
        img: getCloudinaryUrl("cover_qw2egu.png"),
        link: "/product/charu-enterprise-ecommerce"
    },
    {
        id: 4,
        title: "Luxury Jewellery E-Commerce Platform",
        category: "E-Commerce Platform",
        img: getCloudinaryUrl("cover_jbmyuv.png"),
        link: "/product/luxury-jewellery-ecommerce-platform"
    },
    {
        id: 5,
        title: "E-Commerce Platform",
        category: "E-Commerce Website",
        img: getCloudinaryUrl("cover_pfkodo.png"),
        link: "/product/ecommerce-platform"
    },
    {
        id: 6,
        title: "Jewellery Management System (CRM)",
        category: "CRM System",
        img: getCloudinaryUrl("home_zpa3i8.png"),
        link: "/product/jewellery-crm-system"
    },
    {
        id: 7,
        title: "Car Rental System (ERP)",
        category: "CRM System",
        img: getCloudinaryUrl("home_w6npmd.png"),
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
                            className="relative flex-shrink-0 w-[320px] sm:w-[500px] bg-white dark:bg-slate-900/50 rounded-[2rem] sm:rounded-[2.5rem] p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col gap-4"
                        >
                            {/* Image & Content Container */}
                            <div className="w-full h-[280px] sm:h-[400px] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden relative isolate group/image">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Floating Glass Content Card */}
                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-[1.2rem] sm:rounded-[1.5rem] bg-white/10 dark:bg-black/60 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between gap-3 z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors duration-300 truncate">{item.title}</h3>
                                        <p className="text-[10px] md:text-xs text-slate-200 font-medium opacity-80 uppercase tracking-wider truncate">{item.category}</p>
                                    </div>

                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-md group-hover:rotate-45"
                                    >
                                        <span className="material-symbols-rounded text-[16px] sm:text-[20px]">arrow_outward</span>
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
