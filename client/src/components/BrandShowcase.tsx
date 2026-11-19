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
        { id: 1, name: 'The Photographer House', image: tphLogo, slant: false },
        { id: 2, name: 'Charu Enterprise', image: charuLogo, slant: false },
        { id: 3, name: 'GConnect', image: gconnectLogo, slant: false },
        { id: 4, name: 'Camera Rental House', image: crhLogo, slant: false },
        { id: 5, name: 'Gold CRM', image: goldLogo, slant: false },
        { id: 6, name: 'Biswabangla Nordic Association', image: biswabanglaLogo, slant: false },
        { id: 7, name: 'Garulink', image: garulinkLogo, slant: false },
        { id: 8, name: 'Rent Alone', image: rentaloneLogo, slant: false },
    ];

    return (
        <div className="py-4 md:py-6 px-8 overflow-hidden">
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
                            className={`flex items-center transition-all duration-300 cursor-pointer min-w-max ${brand.slant ? 'italic' : ''}`}
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
