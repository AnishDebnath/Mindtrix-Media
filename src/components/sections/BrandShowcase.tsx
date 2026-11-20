import React from 'react';
import { motion } from 'framer-motion';

// ponytail: import local brand assets directly
import tphLogo from '@/assets/brand logo/tph.png';
import charuLogo from '@/assets/brand logo/charu-enterpirse.png';
import gconnectLogo from '@/assets/brand logo/gconnect.png';
import crhLogo from '@/assets/brand logo/camera-rental-house.png';
import goldLogo from '@/assets/brand logo/gold.png';
import biswabanglaLogo from '@/assets/brand logo/biswabangla-nordic-association.png';
import garulinkLogo from '@/assets/brand logo/garulink.png';
import rentaloneLogo from '@/assets/brand logo/rentalone.png';

const BrandShowcase: React.FC = () => {
    const brands = [
        { name: 'The Photographer House', image: tphLogo },
        { name: 'Charu Enterprise', image: charuLogo },
        { name: 'GConnect', image: gconnectLogo },
        { name: 'Camera Rental House', image: crhLogo },
        { name: 'Gold CRM', image: goldLogo },
        { name: 'Biswabangla Nordic Association', image: biswabanglaLogo },
        { name: 'Garulink', image: garulinkLogo },
        { name: 'Rent Alone', image: rentaloneLogo },
    ];

    return (
        <div className="py-4 md:py-6 px-4 md:px-8 overflow-hidden relative">
            {/* Fade Filters */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#FAFAFA] dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#FAFAFA] dark:from-black to-transparent z-10 pointer-events-none" />

            <div className="relative flex items-center">
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 md:gap-12 2xl:gap-16 items-center whitespace-nowrap px-8"
                >
                    {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center transition-all duration-300 cursor-pointer min-w-max"
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-7 md:h-9 2xl:h-10 max-w-[110px] md:max-w-[130px] 2xl:max-w-[150px] w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-200"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BrandShowcase;
