import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ponytail: local carousel product images
import tphCover from '@/assets/products/the photographer house/cover.png';
import tphGallery from '@/assets/products/the photographer house/gallery.png';
import tphBooking from '@/assets/products/the photographer house/booking.png';
import tphHome from '@/assets/products/the photographer house/home.png';

import charuCover from '@/assets/products/charu enterprise/cover.png';
import charuEcommerceCover from '@/assets/products/charu enterprise ecommerce/cover.png';
import jewelleryCover from '@/assets/products/jewellery ecommerce/cover.png';
import ecommerceCover from '@/assets/products/ecommerce/cover.png';

import jewelleryCrmHome from '@/assets/products/gold crm/home.png';
import crmBilling from '@/assets/products/gold crm/billing.png';
import crmSettings from '@/assets/products/gold crm/settings.png';
import crmHr from '@/assets/products/gold crm/hr payroll.png';

import carRentalHome from '@/assets/products/car rental erp/home.png';
import carRentalCar from '@/assets/products/car rental erp/car.png';
import carRentalDriver from '@/assets/products/car rental erp/driver.png';
import carRentalAccounts from '@/assets/products/car rental erp/accounts.png';
import carRentalAudit from '@/assets/products/car rental erp/audit.png';

interface CarouselItem {
    id: string | number;
    title: string;
    category: string;
    img: string;
    link: string;
}

const allProjectsItems: CarouselItem[] = [
    {
        id: 'p-1',
        title: "The Photographers House",
        category: "Photographer Portfolio & Booking Platform",
        img: tphCover,
        link: "/product/the-photographers-house"
    },
    {
        id: 'p-2',
        title: "Digital Business Card Platform",
        category: "Digital Business Card & Company Landing",
        img: charuCover,
        link: "/product/digital-business-card"
    },
    {
        id: 'p-3',
        title: "Fence Fittings E-Commerce",
        category: "B2B Hardware & Industrial Store",
        img: charuEcommerceCover,
        link: "/product/fence-fittings-ecommerce"
    },
    {
        id: 'p-4',
        title: "Luxury Jewellery E-Commerce Platform",
        category: "Luxury E-Commerce & Retail",
        img: jewelleryCover,
        link: "/product/luxury-jewellery-ecommerce-platform"
    },
    {
        id: 'p-5',
        title: "E-Commerce Platform",
        category: "Modern E-Commerce Store",
        img: ecommerceCover,
        link: "/product/ecommerce-platform"
    },
    {
        id: 'p-6',
        title: "Jewellery Management System (CRM)",
        category: "Custom CRM & Inventory Suite",
        img: jewelleryCrmHome,
        link: "/product/jewellery-crm-system"
    },
    {
        id: 'p-7',
        title: "RentAlone Fleet & Rental ERP",
        category: "Car Rental ERP & Booking System",
        img: carRentalHome,
        link: "/product/car-rental-erp"
    },
];

const clientProjectsItems: CarouselItem[] = [
    {
        id: 'cp-1',
        title: "The Photographers House",
        category: "Photographer Client Platform",
        img: tphCover,
        link: "/product/the-photographers-house"
    },
    {
        id: 'cp-2',
        title: "Charu Enterprise Profile",
        category: "Corporate Profile & Smart NFC Hub",
        img: charuCover,
        link: "/product/digital-business-card"
    },
    {
        id: 'cp-3',
        title: "Charu Fittings Wholesale Store",
        category: "Fittings & Hardware E-Commerce",
        img: charuEcommerceCover,
        link: "/product/fence-fittings-ecommerce"
    },
    {
        id: 'cp-4',
        title: "Biswabangla Nordic Association",
        category: "Fine Jewellery Retail Platform",
        img: jewelleryCover,
        link: "/product/luxury-jewellery-ecommerce-platform"
    },
    {
        id: 'cp-5',
        title: "GConnect Gold Management",
        category: "Jewellery CRM & Accounting System",
        img: jewelleryCrmHome,
        link: "/product/jewellery-crm-system"
    },
];

const rentaloneItems: CarouselItem[] = [
    {
        id: 'ra-1',
        title: "RentAlone — Fleet & Booking Hub",
        category: "Car Rental ERP Dashboard",
        img: carRentalHome,
        link: "/product/car-rental-erp"
    },
    {
        id: 'ra-2',
        title: "Vehicle & Fleet Inventory",
        category: "Real-time Vehicle Status & GPS",
        img: carRentalCar,
        link: "/product/car-rental-erp"
    },
    {
        id: 'ra-3',
        title: "Chauffeur & Driver Allocation",
        category: "Duty Rosters & Trip Logs",
        img: carRentalDriver,
        link: "/product/car-rental-erp"
    },
    {
        id: 'ra-4',
        title: "Billing & Financial Invoicing",
        category: "Security Deposits & GST Reports",
        img: carRentalAccounts,
        link: "/product/car-rental-erp"
    },
    {
        id: 'ra-5',
        title: "Inspection & Damage Audit Engine",
        category: "Vehicle Handover & Returns",
        img: carRentalAudit,
        link: "/product/car-rental-erp"
    },
];

const digitalAlbumItems: CarouselItem[] = [
    {
        id: 'da-1',
        title: "Digital Album Showcase",
        category: "Interactive Photo Portfolio & Cover",
        img: tphCover,
        link: "/product/the-photographers-house"
    },
    {
        id: 'da-2',
        title: "High-Resolution Proofing Gallery",
        category: "Client Photo Selection & Delivery",
        img: tphGallery,
        link: "/product/the-photographers-house"
    },
    {
        id: 'da-3',
        title: "Online Session & Shoot Booking",
        category: "Calendar Integration & Slots",
        img: tphBooking,
        link: "/product/the-photographers-house"
    },
    {
        id: 'da-4',
        title: "Interactive Client Presentation",
        category: "Private Album Web Experience",
        img: tphHome,
        link: "/product/the-photographers-house"
    },
];

const digitalInvitationItems: CarouselItem[] = [
    {
        id: 'di-1',
        title: "Digital Event Invitation & RSVP",
        category: "Interactive Event & RSVP Suite",
        img: jewelleryCrmHome,
        link: "/product"
    },
    {
        id: 'di-2',
        title: "Guest List & Seating Organizer",
        category: "Real-time Attendance Tracking",
        img: crmBilling,
        link: "/product"
    },
    {
        id: 'di-3',
        title: "Event Itinerary & Timeline",
        category: "Multi-Day Schedules & Venues",
        img: crmSettings,
        link: "/product"
    },
    {
        id: 'di-4',
        title: "Luxury Digital Stationery Suite",
        category: "Custom Animated Invites & Theme",
        img: jewelleryCover,
        link: "/product"
    },
    {
        id: 'di-5',
        title: "Vendor & Coordination Hub",
        category: "Event Planning Operations",
        img: crmHr,
        link: "/product"
    },
];

const categories = [
    { id: 'live-projects', label: 'Live-Projects', icon: 'public' },
    { id: 'pre-built-projects', label: 'Pre-built Projects', icon: 'inventory_2' },
    { id: 'rentalone', label: 'RentalOne', icon: 'directions_car' },
    { id: 'digital-album', label: 'Digital Album', icon: 'photo_library' },
    { id: 'digital-invitation', label: 'Digital Invitation', icon: 'celebration' },
];

const itemsMap: Record<string, CarouselItem[]> = {
    'live-projects': clientProjectsItems,
    'pre-built-projects': allProjectsItems,
    'rentalone': rentaloneItems,
    'digital-album': digitalAlbumItems,
    'digital-invitation': digitalInvitationItems,
};

interface CarouselProps {
    windowWidth: number;
}

const Carousel: React.FC<CarouselProps> = ({ windowWidth }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('live-projects');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasDragged, setHasDragged] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
        if (!scrollRef.current) return;
        const { scrollLeft: sLeft, scrollWidth: sWidth, clientWidth: cWidth } = scrollRef.current;
        setCanScrollLeft(sLeft > 6);
        setCanScrollRight(sLeft < sWidth - cWidth - 6);
    };

    useEffect(() => {
        updateScrollButtons();
        window.addEventListener('resize', updateScrollButtons);
        return () => window.removeEventListener('resize', updateScrollButtons);
    }, [windowWidth]);

    const scrollByAmount = (offset: number) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        setTimeout(updateScrollButtons, 350);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setHasDragged(false);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 4) {
            setHasDragged(true);
        }
        scrollRef.current.scrollLeft = scrollLeft - walk;
        updateScrollButtons();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        updateScrollButtons();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        updateScrollButtons();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setHasDragged(false);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX);
        if (Math.abs(walk) > 5) {
            setHasDragged(true);
        }
        scrollRef.current.scrollLeft = scrollLeft - walk;
        updateScrollButtons();
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        updateScrollButtons();
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (!scrollRef.current) return;
        if (e.deltaX === 0) {
            scrollRef.current.scrollLeft += e.deltaY;
            updateScrollButtons();
        }
    };

    const currentItems = itemsMap[selectedCategory] || clientProjectsItems;
    // Duplicate items for seamless continuous loop
    const marqueeItems = [...currentItems, ...currentItems, ...currentItems];

    return (
        <div className="w-full relative z-20 pb-8 md:pb-12 2xl:pb-16 pt-0 bg-transparent">
            {/* Top Category Select Pill Showcase: Drag to scroll on all screen sizes */}
            <div className="flex justify-center mb-6 sm:mb-8 px-4 relative z-40">
                <div className="relative max-w-full inline-flex items-center">
                    {/* Left Scroll Arrow (Desktop when overflow exists) */}
                    {canScrollLeft && (
                        <button
                            type="button"
                            onClick={() => scrollByAmount(-220)}
                            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-50 w-7 h-7 rounded-full items-center justify-center bg-white dark:bg-neutral-800 border border-slate-300 dark:border-white/10 shadow-md text-slate-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-all cursor-pointer"
                            aria-label="Scroll categories left"
                        >
                            <span className="material-symbols-rounded text-base">chevron_left</span>
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onWheel={handleWheel}
                        onScroll={updateScrollButtons}
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                        className="inline-flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/[0.12] shadow-sm backdrop-blur-md max-w-full overflow-x-auto no-scrollbar scrollbar-none touch-pan-x select-none cursor-grab active:cursor-grabbing"
                    >
                        {categories.map((cat) => {
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={(e) => {
                                        if (!hasDragged) {
                                            setSelectedCategory(cat.id);
                                            e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                                        }
                                    }}
                                    className={`group relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap select-none cursor-pointer shrink-0 ${isActive
                                            ? 'text-white'
                                            : 'text-slate-600 dark:text-neutral-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-900'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategoryPill"
                                            className="absolute inset-0 rounded-xl bg-primary shadow-xs"
                                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                    <span className={`material-symbols-rounded text-sm relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400 dark:text-neutral-500 group-hover:text-primary dark:group-hover:text-primary'
                                        }`}>
                                        {cat.icon}
                                    </span>
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Scroll Arrow (Desktop when overflow exists) */}
                    {canScrollRight && (
                        <button
                            type="button"
                            onClick={() => scrollByAmount(220)}
                            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-50 w-7 h-7 rounded-full items-center justify-center bg-white dark:bg-neutral-800 border border-slate-300 dark:border-white/10 shadow-md text-slate-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-all cursor-pointer"
                            aria-label="Scroll categories right"
                        >
                            <span className="material-symbols-rounded text-base">chevron_right</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Marquee Track Container with Localized Fade Filters (No overlap with Category Options) */}
            <div className="relative w-full overflow-hidden">
                {/* Fade Filters - Strictly constrained to Marquee Track */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-20 pointer-events-none" />

                {/* Marquee Track with Category Transition */}
                <div className="flex overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: "-33.33%" }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 0.3 },
                                x: {
                                    duration: 30,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }}
                            className="flex gap-4 md:gap-6 px-4 min-w-max"
                        >
                            {marqueeItems.map((item, index) => (
                                <Link
                                    key={`${item.id}-${index}`}
                                    to={item.link}
                                    className="relative flex-shrink-0 w-[290px] sm:w-[420px] md:w-[480px] lg:w-[520px] bg-white dark:bg-neutral-950/70 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-slate-200/80 dark:border-white/[0.08] dark:hover:border-neutral-700 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 group flex flex-col"
                                >
                                    {/* 4/3 Aspect Ratio Image & Content Frame */}
                                    <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative isolate group/image border border-slate-100 dark:border-white/[0.05]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                        />

                                        {/* Floating Glass Content Card */}
                                        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/85 dark:bg-black/65 backdrop-blur-md border border-slate-200/60 dark:border-white/[0.1] shadow-lg flex items-center justify-between gap-2.5 z-10 transition-transform duration-300 group-hover:scale-[1.01]">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm sm:text-base md:text-lg font-display font-bold text-slate-900 dark:text-white mb-0.5 tracking-tight group-hover:text-primary transition-colors duration-300 truncate">{item.title}</h3>
                                                <p className="text-muted-slate dark:text-neutral-400 font-bold text-[10px] md:text-xs tracking-wider uppercase truncate">{item.category}</p>
                                            </div>

                                            <div
                                                className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-md"
                                            >
                                                <span className="material-symbols-rounded text-[14px] sm:text-[18px] transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
