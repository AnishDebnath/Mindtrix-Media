import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TitleIconCapsule from '../ui/TitleIconCapsule';

const pricingIcons = [
    { icon: 'payments', color: 'text-primary' },
    { icon: 'sell', color: 'text-secondary' },
    { icon: 'price_check', color: 'text-primary' },
    { icon: 'receipt_long', color: 'text-secondary' },
];

const businessIcons = [
    { icon: 'trending_up', color: 'text-secondary' },
    { icon: 'rocket_launch', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
    { icon: 'storefront', color: 'text-primary' },
];

const onePagerFeatures = [
    'Single high-converting landing page',
    'Custom design + React / Node / Tailwind build',
    '2 revision rounds',
    'Delivered in 1–2 weeks',
    'SEO, hosting & deployment handled',
    '24-hour support on a private channel',
    'Add-on: Extra pages available',
];

const companySiteFeatures = [
    { text: 'Multiple pages', tag: '3–5 pages' },
    { text: 'CMS integration + blog template' },
    { text: '3 revision rounds' },
    { text: 'Delivered in 3–4 weeks' },
    { text: 'Add-on: Extra pages available' },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-8 md:py-12 2xl:py-16 bg-transparent relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 dark:bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">payments</span> Pricing
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        Straightforward{' '}
                        <TitleIconCapsule icons={pricingIcons} delay={0} />{' '}
                        <span className="text-primary">Pricing Plans</span>{' '}
                        <TitleIconCapsule icons={businessIcons} delay={700} initialIndex={1} />{' '}
                        <br className="hidden sm:inline" />
                        Built for <span className="text-secondary">Your Business</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal"
                    >
                        Transparent scope, one-time payment, and zero hidden costs. Pick a package or request custom architecture for your company.
                    </motion.p>
                </div>

                {/* Main 2-Plan Section Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-950/70 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 dark:divide-white/[0.08]">
                        {/* Plan 1: One Pager */}
                        <div className="p-5 sm:p-6 md:p-7 flex flex-col justify-between relative group">
                            <div>
                                {/* Top Header Row: Aligned with Company Site card */}
                                <div className="flex items-center justify-between gap-3 mb-1.5 h-6 sm:h-7">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                                        One Pager
                                    </h3>
                                </div>

                                <p className="text-slate-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 min-h-[2.25rem]">
                                    A high-converting landing page,
                                    designed and built end-to-end.
                                </p>

                                {/* Price Headline */}
                                <div className="mb-4 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                                    <span className="block text-[10px] md:text-[11px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                                        Fixed scope, one-time payment
                                    </span>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                        Talk to us
                                    </div>
                                </div>

                                {/* Checklist */}
                                <ul className="space-y-2.5 mb-5">
                                    {onePagerFeatures.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                                            <span className="w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="material-symbols-rounded text-xs">check</span>
                                            </span>
                                            <span className="leading-snug">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button matching site Hero/Services canonical style */}
                            <Link
                                to="/contact"
                                className="w-full inline-flex items-center justify-between gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.01] active:scale-95 transition-all group/btn mt-1"
                            >
                                <span>Book a call</span>
                                <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white group-hover/btn:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded text-sm">arrow_outward</span>
                                </div>
                            </Link>
                        </div>

                        {/* Plan 2: Company Site */}
                        <div className="p-5 sm:p-6 md:p-7 flex flex-col justify-between relative bg-gradient-to-b from-primary/[0.03] to-transparent dark:from-primary/[0.06] group">
                            {/* Accent Glow Top Right */}
                            <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                {/* Top Header Row: Aligned with One Pager card */}
                                <div className="flex items-center justify-between gap-3 mb-1.5 h-6 sm:h-7">
                                    <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight leading-none">
                                        Company Site
                                    </h3>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary text-white shadow-xs shrink-0">
                                        <span className="material-symbols-rounded text-[11px] text-secondary">star</span>
                                        Most popular
                                    </span>
                                </div>

                                <p className="text-slate-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 min-h-[2.25rem]">
                                    A complete multi-page site that
                                    makes you look like a category leader.
                                </p>

                                {/* Price Headline */}
                                <div className="mb-4 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                                    <span className="block text-[10px] md:text-[11px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                                        Fixed scope, part-by-part payment
                                    </span>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                                        Talk to us
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2.5 flex items-center gap-1.5">
                                    <span className="material-symbols-rounded text-xs text-secondary">add_circle</span>
                                    Everything in one pager, plus
                                </div>

                                {/* Checklist */}
                                <ul className="space-y-2.5 mb-5">
                                    {companySiteFeatures.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                                            <span className="w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                                <span className="material-symbols-rounded text-xs">check</span>
                                            </span>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="leading-snug">{item.text}</span>
                                                {item.tag && (
                                                    <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/15 text-secondary-600 dark:text-secondary text-[10px] font-bold border border-secondary/30">
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button matching site Hero/Services canonical style */}
                            <div className="relative z-10 mt-1">
                                <Link
                                    to="/contact"
                                    className="w-full inline-flex items-center justify-between gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.01] active:scale-95 transition-all group/btn"
                                >
                                    <span>Book a call</span>
                                    <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white group-hover/btn:rotate-45 transition-transform duration-300">
                                        <span className="material-symbols-rounded text-sm">arrow_outward</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Subtext info */}
                <div className="text-center mt-4 text-xs text-slate-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    <p className="mb-1">
                        Fixed scope, fixed price. No hourly billing, no surprises. Book a call and we will send you a quote. We only take on a handful of builds each month.
                    </p>
                    <p>
                        <Link to="/contact" className="underline hover:text-primary transition-colors font-medium">
                            Schedule a call
                        </Link>{' '}
                        or email us at{' '}
                        <a href="mailto:mindtrixmediaindia@gmail.com" className="underline hover:text-primary transition-colors font-medium">
                            mindtrixmediaindia@gmail.com
                        </a>
                    </p>
                </div>

                {/* Bottom Custom Work Container (No section tag) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-5xl mx-auto mt-5 sm:mt-6 p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-950/70 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                    <div className="max-w-2xl">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                            Custom work
                        </h4>
                        <p className="text-slate-600 dark:text-neutral-400 text-xs leading-relaxed">
                            If you have specific requirements, whether it's a unique landing page, a SaaS web app, custom CRM/ERP, or something completely custom, let's talk and get it done together. Or write us an email at{' '}
                            <a href="mailto:mindtrixmediaindia@gmail.com" className="underline text-slate-900 dark:text-white hover:text-primary font-medium">
                                mindtrixmediaindia@gmail.com
                            </a>.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all shrink-0 self-start md:self-center group"
                    >
                        <span>Talk to us</span>
                        <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white group-hover:rotate-45 transition-transform duration-300">
                            <span className="material-symbols-rounded text-xs">arrow_outward</span>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
