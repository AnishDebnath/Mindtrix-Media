import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    return (
        <section className="py-8 md:py-12 2xl:py-16 bg-transparent" id="process">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Process</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6"
                    >
                        How We Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        A simple, structured process that takes your idea from discovery to a live, working system.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
                    {/* Step 01 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] flex items-center justify-center relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 shrink-0 mx-auto w-full p-8 md:p-10">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">01</span>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <svg className="absolute w-full h-full max-w-[240px] max-h-[120px] pointer-events-none opacity-40 md:opacity-100" viewBox="0 0 256 128">
                                    <path d="M 40 40 Q 128 40 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                                    <path d="M 40 90 Q 128 90 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                                    <path d="M 216 64 L 128 64" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" className="dark:stroke-slate-700" />
                                </svg>
                                <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-primary to-orange-400 shadow-lg shadow-primary/30 flex items-center justify-center animate-pulse">
                                    <span className="material-symbols-rounded text-white text-2xl">auto_awesome</span>
                                </div>
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[15%] w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center p-2 md:p-2.5 z-20">
                                    <img src="https://cdn.simpleicons.org/dropbox/0061FF" alt="Dropbox" className="w-full h-full object-contain" />
                                </motion.div>
                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[15%] left-[25%] w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center p-2 z-20">
                                    <img src="https://cdn.simpleicons.org/googledrive" alt="Drive" className="w-full h-full object-contain" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Discovery & Planning</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">We learn about your business, goals, and requirements. Then we plan the full scope of your project so there are no surprises later.</p>
                        </div>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] flex items-center justify-center gap-4 md:gap-6 relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 shrink-0 p-6 md:p-8">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">02</span>
                            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-xl p-2.5 shadow-xl transform -translate-y-4">
                                <img src="https://cdn.simpleicons.org/capcut/white" alt="CapCut" className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 md:w-18 md:h-18 bg-[#111] rounded-xl p-3 shadow-2xl z-10 relative">
                                <img src="https://cdn.simpleicons.org/davinciresolve/white" alt="DaVinci" className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1, rotate: -3 }} className="w-12 h-12 md:w-14 md:h-14 bg-[#2D004F] rounded-xl p-2.5 shadow-xl transform translate-y-4">
                                <img src="https://cdn.simpleicons.org/adobepremierepro/9999FF" alt="Premiere" className="w-full h-full object-contain" />
                            </motion.div>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Free Prototype & Design</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">Before we write code, we build a free working prototype. You see how your website or system will look and work. You review it, request changes, and approve it — all before full development begins.</p>
                        </div>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] flex flex-col items-center justify-center relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 shrink-0 p-6 md:p-8">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">03</span>
                            <div className="w-full h-full flex flex-col items-center justify-center relative">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm mb-4 self-center md:self-start ml-2 md:ml-12 relative max-w-[80%]"
                                >
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="absolute -left-9 top-0 w-7 h-7 rounded-full border-2 border-white dark:border-slate-900" alt="Client" />
                                    <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Requested a Revision</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    className="bg-primary text-white rounded-2xl rounded-br-none px-5 py-2.5 shadow-lg shadow-primary/30 self-center md:self-end mr-0 md:mr-10 transform rotate-1 max-w-[80%]"
                                >
                                    <p className="text-[13px] font-bold flex items-center gap-2">
                                        Revision is in progress! <span className="material-symbols-rounded text-sm">check_circle</span>
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Development & Testing</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">We build your website or software with clean, structured code. Every feature is tested on all devices and browsers. We make sure everything works perfectly before going live.</p>
                        </div>
                    </motion.div>

                    {/* Step 04 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-2.5 shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="aspect-[16/10] flex flex-col items-center justify-center relative mb-4 bg-slate-50 dark:bg-slate-800/50 rounded-[1.2rem] border border-slate-100 dark:border-slate-800/50 shrink-0 p-6 md:p-8">
                            <span className="absolute top-4 left-4 z-30 text-sm font-bold text-slate-400 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800">04</span>
                            <motion.div whileHover={{ y: -5 }} className="bg-slate-900 text-white rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg mb-4 transform -rotate-2">
                                <span className="material-symbols-rounded text-orange-400">movie</span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold">Final_Cut_v2.mp4</span>
                                    <span className="text-[10px] text-slate-400">1.2 GB • Ready to upload</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm mb-6 transform rotate-2 z-10">
                                <span className="material-symbols-rounded text-blue-500">image</span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Thumbnail.png</span>
                                    <span className="text-[10px] text-slate-400">2.4 MB • High Res</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="px-4 pb-5">
                            <h3 className="text-base md:text-lg 2xl:text-xl font-bold text-slate-900 dark:text-white mb-2">Launch & Ongoing Support</h3>
                            <p className="text-slate-500 text-xs md:text-sm 2xl:text-base leading-relaxed">We launch your website or system and stay available for support. We monitor performance, fix issues quickly, and help you grow with updates and new features over time.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Process;
