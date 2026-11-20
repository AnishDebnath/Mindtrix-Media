import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

const contactInfo = [
    {
        title: "Email Us",
        value: "mindtrixmediaindia@gmail.com",
        href: "mailto:mindtrixmediaindia@gmail.com",
        icon: "mail",
        color: "blue"
    },
    {
        title: "Call Us",
        value: "+91 89100 92451",
        href: "tel:+918910092451",
        icon: "call",
        color: "blue"
    },
    {
        title: "Office",
        value: "Kolkata, India",
        href: "https://maps.app.goo.gl/8CFaaPxF1kfkNXsB7",
        icon: "location_on",
        color: "orange"
    }
];

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

const ContactInfo: React.FC = () => {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);
    return (
        <div>
            {/* Available for New Projects Badge */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-start mb-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50 backdrop-blur-sm shadow-sm transition-all hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        Available for New Projects
                    </span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/[0.12] bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            >
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">mail</span> Contact Us
                </span>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-[1.08]"
            >
                Let's start a <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    conversation.
                </span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-slate-600 dark:text-neutral-400 mb-8 md:mb-10 leading-relaxed max-w-xl font-normal"
            >
                Ready to take your business to the next level? Fill out the form or send us an email, and <span className="text-secondary">we'll get back to you within 24 hours.</span>
            </motion.p>

            <div className="space-y-6">
                {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${info.color === 'blue'
                            ? 'bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'bg-orange-100/50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                            }`}>
                            <span className="material-symbols-rounded text-[18px]">{info.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-neutral-400 mb-0.5">{info.title}</h3>
                            <a
                                href={info.href}
                                target={info.title === "Office" ? "_blank" : undefined}
                                rel={info.title === "Office" ? "noopener noreferrer" : undefined}
                                className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                            >
                                {info.value}
                            </a>
                        </div>
                    </div>
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
                className="flex flex-row items-center justify-start gap-4 mt-10 pt-10 border-t border-slate-300 dark:border-slate-600"
            >
                <div
                    className="flex items-center h-16 cursor-pointer"
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
                                marginLeft: i === 0 ? 0 : (isAvatarHovered ? -4 : -16),
                                zIndex: i,
                            }}
                            className="relative rounded-full border-[3px] border-[#FAFAFA] dark:border-slate-900 overflow-hidden w-10 h-10 shadow-sm"
                        >
                            <img className="w-full h-full object-cover" src={src} alt="Client" />
                        </motion.div>
                    ))}
                </div>
                <div>
                    <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <span key={i} className="material-symbols-rounded text-[#FFC107] text-[16px]">star</span>
                        ))}
                    </div>
                    <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">
                        Trusted by <CountUp val={10} />+ clients
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactInfo;
