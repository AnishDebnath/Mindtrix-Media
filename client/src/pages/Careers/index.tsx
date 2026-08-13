import React from 'react';
import { motion } from 'framer-motion';
import CareerHeader from './CareerHeader';
import CareerCard from './CareerCard';
import { openings } from './CareerData';
import useSEO from '../../utils/useSEO';

const CareersPage: React.FC = () => {
    useSEO({
        title: 'Careers at Mindtrix Media | Freelance Sales Executive Job in Kolkata',
        description: 'We\'re hiring a Freelance Sales Executive (Female) in Kolkata. Commission-based, 100% work from home, flexible hours. Apply now at Mindtrix Media.',
        keywords: 'sales executive job Kolkata, Mindtrix Media careers, freelancing jobs Kolkata, digital marketing sales job, work from home sales job',
        canonicalPath: '/careers',
        ogTitle: 'Careers — Mindtrix Media',
        ogDescription: 'Join our team or get in touch about potential opportunities at Mindtrix Media.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: 'Freelance Sales Executive (Female)',
            url: 'https://mindtrixmedia.com/careers',
            employmentType: 'CONTRACTOR',
            jobLocation: {
                '@type': 'Place',
                address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' },
            },
            hiringOrganization: { '@type': 'Organization', name: 'Mindtrix Media', sameAs: 'https://www.mindtrixmedia.com' },
            description: 'Mindtrix Media is hiring a Freelance Sales Executive (Female), based in Kolkata, work from home. Commission-based income with no earning cap. Promote custom websites, CRM, ERP and business automation solutions to businesses across Kolkata and India. Transparent direct hiring — no fees, no middlemen.',
            email: 'mindtrixmediaindia@gmail.com',
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
                <CareerHeader />

                {/* Current Openings Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-8 md:py-12 2xl:py-16 relative"
                >
                    {openings.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            {openings.map((opening, idx) => (
                                <CareerCard key={idx} opening={opening} index={idx} />
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
