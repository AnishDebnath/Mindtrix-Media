import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, animate } from 'framer-motion';
import PrototypeForm from './PrototypeForm';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';
import useSEO from '../../utils/useSEO';

const prototypeIcons = [
    { icon: 'visibility', color: 'text-primary' },
    { icon: 'palette', color: 'text-secondary' },
    { icon: 'design_services', color: 'text-primary' },
    { icon: 'auto_awesome', color: 'text-secondary' },
];

// Lazy Components
const Process = lazy(() => import('../../components/sections/Process'));
const OurSolution = lazy(() => import('../../components/sections/OurSolution'));
const FAQ = lazy(() => import('../../components/sections/FAQ'));
const CTA = lazy(() => import('../../components/sections/CTA'));

const CountUp: React.FC<{ val: number }> = ({ val }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const controls = animate(0, val, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (value) => setCount(Math.floor(value)),
        });
        return () => controls.stop();
    }, [val]);
    return <>{count.toLocaleString()}</>;
};

const FreePrototypePage: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    useSEO({
        title: 'Free Website Prototype — See Your New Site Before You Pay | Mindtrix Media',
        description: 'Get a high-fidelity prototype of your new website completely free before any development starts. No strings attached. Mindtrix Media delivers a visual preview so you sign with confidence.',
        keywords: 'free website prototype, free web design mockup, website design preview, risk-free web development, Mindtrix Media free prototype, website before you pay',
        canonicalPath: '/free-prototype',
        ogTitle: 'Get a Free Website Prototype — Zero Risk | Mindtrix Media',
        ogDescription: 'We design a detailed prototype of your website before you pay anything. See it, love it, then we build it. Completely free — no hidden conditions.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Offer',
            name: 'Free Website Prototype',
            description: 'Mindtrix Media offers a completely free high-fidelity website prototype before any development contract is signed.',
            price: '0',
            priceCurrency: 'USD',
            url: 'https://mindtrixmedia.com/free-prototype',
            seller: { '@type': 'Organization', name: 'Mindtrix Media', url: 'https://mindtrixmedia.com' },
            availability: 'https://schema.org/InStock',
        },
    });
    return (
        <div className="flex flex-col pt-28 md:pt-36 2xl:pt-40">
            <div className="relative">


                <div className="pb-12 md:pb-20 2xl:pb-24 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Info Section */}
                        <div className="lg:sticky lg:top-32">
                            <div className="flex flex-col gap-3 mb-4">
                                {/* Available for New Projects Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="flex justify-start"
                                >
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 shadow-sm backdrop-blur-md">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                            Available for New Projects
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative flex items-center gap-2 px-3.5 py-1.5 bg-secondary rounded-xl shadow-sm border border-secondary/60 transition-all duration-300 w-fit cursor-default"
                                >
                                    <span className="material-symbols-rounded text-slate-950 text-[18px]">timer</span>
                                    <span className="text-xs font-bold text-slate-950 tracking-widest uppercase">Limited Time Offer</span>
                                </motion.div>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                            >
                                See It Before{' '}
                                <TitleIconCapsule icons={prototypeIcons} delay={0} />{' '}
                                <span className="text-primary">
                                    You Sign.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-[18px] text-slate-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-xl font-normal"
                            >
                                We're so confident in our design skills that we'll design a high-detailed prototype of your new website for <strong className="text-slate-900 dark:text-secondary underline decoration-primary/30 decoration-4 underline-offset-4">free</strong>. No hidden conditions.
                            </motion.p>

                            <div className="space-y-6">
                                {[
                                    { title: "Review Your Strategy", desc: "In-depth competitor and market analysis.", icon: "analytics", color: "blue" },
                                    { title: "Visual Prototype", desc: "Preview the product before development.", icon: "palette", color: "orange" },
                                    { title: "Risk-Free Decision", desc: "100% free, no hidden conditions.", icon: "verified", color: "blue" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${item.color === 'blue'
                                            ? 'bg-primary/10 text-primary'
                                            : 'bg-secondary/20 text-amber-700'
                                            }`}>
                                            <span className="material-symbols-rounded text-[18px]">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-neutral-400 mb-0.5">{item.title}</h3>
                                            <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-tight">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trusted Badge */}
                            <motion.div
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } }
                                }}
                                className="flex flex-row items-center justify-start gap-3 mt-6 pt-6 border-t border-slate-300 dark:border-slate-600"
                            >
                                <div
                                    className="flex items-center h-10 cursor-pointer"
                                    onMouseEnter={() => setIsAvatarHovered(true)}
                                    onMouseLeave={() => setIsAvatarHovered(false)}
                                >
                                    {[
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                                    ].map((src, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                marginLeft: i === 0 ? 0 : (isAvatarHovered ? -4 : -12),
                                                zIndex: i,
                                            }}
                                            className="relative rounded-full border-2 border-[#FAFAFA] dark:border-slate-900 overflow-hidden w-8 h-8 shadow-sm"
                                        >
                                            <img className="w-full h-full object-cover" src={src} alt="Client" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex gap-0.5 mb-0.5">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <span key={i} className="material-symbols-rounded text-secondary text-[13px]">star</span>
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        Trusted by <CountUp val={10} />+ clients
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Section */}
                        <div className="relative h-full flex flex-col justify-center">
                            <PrototypeForm />
                        </div>
                    </div>
                </div>
            </div>


            {/* FAQ Section */}
            <Suspense fallback={null}>
                <Process />
            </Suspense>
            <Suspense fallback={null}>
                <OurSolution />
            </Suspense>
            <Suspense fallback={null}>
                <FAQ />
            </Suspense>
            <Suspense fallback={null}>
                <CTA />
            </Suspense>
        </div>
    );
};

export default FreePrototypePage;
