import React from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '@/utils/cloudinary';

const BrandShowcase: React.FC = () => {
    const brands = [
        { id: 1, name: 'Brand 1', image: getCloudinaryUrl("tph_gfjmyo.png"), slant: false },
        { id: 2, name: 'Brand 2', image: getCloudinaryUrl("charu_ypwood.png"), slant: false },
        { id: 3, name: 'Brand 3', image: getCloudinaryUrl("gconnect_gpyufu.png"), slant: false },
        { id: 4, name: 'Brand 4', image: getCloudinaryUrl("crh_ctephp.png"), slant: false },
        { id: 5, name: 'Brand 5', image: getCloudinaryUrl("gold_zfz6i0.png"), slant: false },
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
                    className="flex gap-4 md:gap-6 2xl:gap-10 items-center whitespace-nowrap px-8"
                >
                    {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className={`flex items-center transition-all duration-300 cursor-pointer min-w-max ${brand.slant ? 'italic' : ''}`}
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="h-20 md:h-28 2xl:h-32 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BrandShowcase;
