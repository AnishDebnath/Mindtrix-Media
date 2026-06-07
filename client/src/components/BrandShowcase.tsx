import React from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '@/utils/cloudinary';

const BrandShowcase: React.FC = () => {
    const brands = [
        { id: 1, name: 'Brand 1', image: getCloudinaryUrl("TPH_miatat.png"), slant: false },
        { id: 2, name: 'Brand 2', image: getCloudinaryUrl("Charu_dnt5kf.png"), slant: true },
    ];

    return (
        <div className="py-0 px-8 overflow-hidden">
            <div className="relative flex items-center">
                <motion.div
                    animate={{
                        x: [0, -2500],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12 md:gap-24 2xl:gap-32 items-center whitespace-nowrap px-8"
                >
                    {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 transition-all duration-300 cursor-pointer min-w-[250px] ${brand.slant ? 'italic' : ''}`}
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-20 md:h-28 2xl:h-32 w-auto object-contain block"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BrandShowcase;
