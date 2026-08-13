import React from 'react';
import { motion } from 'framer-motion';
import CareersHeader from './CareersHeader';
import useSEO from '../../utils/useSEO';

interface Opening {
    title: string;
    type: string;
    location: string;
    description: string;
}

const openings: Opening[] = [];

const CareersPage: React.FC = () => {
    useSEO({
        title: 'Careers at Mindtrix Media | Web Development Jobs & Opportunities',
        description: 'Explore careers at Mindtrix Media. We build websites, CRM, ERP and SaaS products. Join our team — currently no open positions, but we welcome talent.',
        keywords: 'Mindtrix Media careers, web development jobs, software developer jobs, CRM ERP careers, join our team, jobs at digital agency',
        canonicalPath: '/careers',
        ogTitle: 'Careers — Mindtrix Media',
        ogDescription: 'Join our team or get in touch about potential opportunities at Mindtrix Media.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Mindtrix Media',
            url: 'https://mindtrixmedia.com/careers',
            description: 'A Kolkata-based web and software development agency. Careers page with information about joining the team.',
            logo: 'https://mindtrixmedia.com/src/assets/mindtrix-media-logo.png',
            address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' },
            contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'mindtrixmediaindia@gmail.com' },
        },
    });

    return (
        <div className="pt-28 md:pt-36 2xl:pt-40 pb-0 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <CareersHeader />

                {/* Current Openings Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-8 md:py-12 2xl:py-16 relative"
                >
                    <div className={openings.length > 0 ? 'text-center max-w-2xl mx-auto mb-10 md:mb-12' : 'mb-0'}>
                        {openings.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block mb-6 px-4 py-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                            >
                                <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                                    <span className="material-symbols-rounded text-sm">work</span> Current Openings
                                </span>
                            </motion.div>
                        )}
                        {openings.length > 0 && (
                            <>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 md:mb-6"
                                >
                                    Open <br />
                                    <span className="text-secondary">Vacancies</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                                >
                                    Explore our current opportunities below and join a team building products for clients worldwide.
                                </motion.p>
                            </>
                        )}
                    </div>

                    {openings.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {openings.map((opening, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -10, scale: 1.015 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "tween", duration: 0.3, ease: "easeOut", delay: idx * 0.1 }}
                                    className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <div className="relative z-10 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary group-hover:bg-primary/20 transition-all duration-300">
                                                {opening.type}
                                            </span>
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:bg-primary/20 transition-all duration-300">
                                                {opening.location}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                            {opening.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-6 flex-1">
                                            {opening.description}
                                        </p>
                                        <motion.a
                                            href="mailto:mindtrixmediaindia@gmail.com"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary text-white px-5 py-2.5 rounded-xl font-display font-bold text-sm shadow-lg shadow-primary/20 transition-all self-start"
                                        >
                                            <span className="material-symbols-rounded text-sm">arrow_forward</span>
                                            Apply Now
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
                            {/* Left Card - No Openings Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.015 }}
                                viewport={{ once: true }}
                                transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                                className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-10 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative flex flex-col justify-center"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg mb-5 group-hover:bg-primary/20 transition-all duration-300">
                                        <span className="material-symbols-rounded text-2xl text-primary group-hover:scale-110 transition-transform duration-300">work_off</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        We&apos;re Not Hiring Right Now
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm 2xl:text-base leading-relaxed mb-6 max-w-sm">
                                        No open positions at the moment. But we&apos;re always keen to hear from talented people who share our values.
                                    </p>
                                    <div className="flex items-center gap-2 mb-8">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Open to Talent</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <motion.a
                                            href="mailto:mindtrixmediaindia@gmail.com?subject=Job%20Inquiry"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary text-white px-6 py-3 rounded-xl font-display font-bold text-sm shadow-lg shadow-primary/20 transition-all"
                                        >
                                            <span className="material-symbols-rounded text-sm">send</span>
                                            Email Us
                                        </motion.a>
                                        <motion.a
                                            href="/contact"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 px-6 py-3 rounded-xl font-display font-bold text-sm transition-colors"
                                        >
                                            <span className="material-symbols-rounded text-sm">chat</span>
                                            Contact Us
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Card - How It Works */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.015 }}
                                viewport={{ once: true }}
                                transition={{ type: "tween", duration: 0.3, ease: "easeOut", delay: 0.15 }}
                                className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-10 border border-slate-200/60 dark:border-white/10 shadow-xl group hover:shadow-2xl overflow-hidden relative flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative z-10 flex-1">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">How Hiring Works</h4>
                                    <div className="space-y-6">
                                        {[
                                            { icon: 'mark_email_unread', step: 'Send Your Portfolio', desc: 'Email us your work and what you do.' },
                                            { icon: 'forum', step: 'We Get Back to You', desc: 'We reply when an opportunity opens up.' },
                                            { icon: 'group_add', step: 'Join the Team', desc: 'Onboard with us on a real client project.' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                                    <span className="material-symbols-rounded text-primary text-xl">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <h5 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-primary transition-colors duration-300">{item.step}</h5>
                                                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </motion.section>
            </div>
        </div>
    );
};

export default CareersPage;
