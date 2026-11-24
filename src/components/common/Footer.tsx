import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import whiteLogo from '@/assets/white-logo.png';
import blackLogo from '@/assets/black-logo.png';

// Socials array removed in favor of inline branded SVGs matching Creative-Mindtrix-Media

const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { name: "Our Products", path: "/product" },
            { name: "About Us", path: "/#about" },
            { name: "News & Blogs", path: "/blog" },
            { name: "Our Team", path: "/about" }
        ]
    },
    {
        title: "Information",
        links: [
            { name: "Contact Us", path: "/contact" },
            { name: "Privacy Policy", path: "#" },
            { name: "Error 404", path: "#" }
        ]
    }
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-transparent px-4 md:px-6 2xl:px-8 pb-20 md:pb-6 2xl:pb-6 pt-0 transition-colors duration-500 relative z-10 mt-2 md:mt-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full bg-white dark:bg-black rounded-2xl md:rounded-3xl px-6 pt-10 pb-8 md:pt-14 md:pb-16 2xl:p-16 relative overflow-hidden flex flex-col justify-between border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10 md:mb-20">
                        {/* Branding */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <Link to="/" className="inline-block mb-6 group">
                                <img src={blackLogo} alt="Mindtrix Media" loading="lazy" className="h-7 md:h-8 2xl:h-9 w-auto object-contain block dark:hidden" />
                                <img src={whiteLogo} alt="Mindtrix Media" loading="lazy" className="h-7 md:h-8 2xl:h-9 w-auto object-contain hidden dark:block" />
                            </Link>
                            <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-4 md:mb-5 leading-tight tracking-tight">Ready to build <br />your custom software system?</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-sm mb-5 md:mb-6 leading-relaxed">From CRM and ERP platforms to SaaS products and business websites — we build systems that scale with you.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-primary transition-colors group text-sm md:text-base">
                                Start Your Project
                                <span className="material-symbols-rounded scale-75 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12 pt-0 md:pt-4">
                            {footerLinks.map((col, idx) => (
                                <div key={idx}>
                                    <h4 className="text-slate-900 dark:text-white font-bold mb-5 md:mb-6 text-sm md:text-base">{col.title}</h4>
                                    <ul className="space-y-3 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        {col.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link
                                                    to={link.path}
                                                    className="hover:text-primary transition-all duration-300 flex items-center gap-0 hover:gap-2 group/link"
                                                >
                                                    <div className="w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover/link:w-1.5 group-hover/link:h-1.5" />
                                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Socials - exact style from Creative-Mindtrix-Media */}
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-bold mb-5 md:mb-6 text-sm md:text-base">Get In Touch</h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-xs md:text-sm">Connect with us via our socials</p>
                                <div className="flex items-center flex-wrap gap-2.5">
                                    {/* Facebook */}
                                    <a
                                        href="https://www.facebook.com/people/Mindtrix-Media/61579576556432/?rdid=dQqTQc6SOeyMFPh7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BqXRrzU6g%2F"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 hover:border-[#1877f2]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#1877f2]"
                                        title="Facebook"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    {/* Instagram with signature colorful gradient */}
                                    <a
                                        href="https://www.instagram.com/mindtrixmedia"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 hover:border-[#e1306c]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#e1306c]"
                                        title="Instagram"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                                            <defs>
                                                <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#f09433" />
                                                    <stop offset="25%" stopColor="#e6683c" />
                                                    <stop offset="50%" stopColor="#dc2743" />
                                                    <stop offset="75%" stopColor="#cc2366" />
                                                    <stop offset="100%" stopColor="#bc1888" />
                                                </linearGradient>
                                            </defs>
                                            <path fill="url(#ig-grad-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/@Mindtrixmediaindia"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 hover:border-[#ff0000]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#ff0000]"
                                        title="YouTube"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>

                                    {/* X (Twitter) */}
                                    <a
                                        href="https://x.com/Mindtrixmediain"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-neutral-900 dark:text-white"
                                        title="X (Twitter)"
                                    >
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/company/mindtrix-media"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-white/10 hover:border-[#0077b5]/50 shadow-xs flex items-center justify-center hover:scale-110 transition-all text-[#0077b5]"
                                        title="LinkedIn"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-auto pt-2 md:pt-8 lg:pt-16 pb-2 sm:pb-4">
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none select-none">
                            <h1 className="text-[20vw] md:text-[18vw] lg:text-[16vw] 2xl:text-[14vw] font-black text-center text-slate-900/[0.07] dark:text-white/[0.05] leading-[0.75] tracking-tighter whitespace-nowrap font-display translate-y-[15%]">Mindtrix</h1>
                        </div>
                        <div className="relative z-10 text-center">
                            <p className="text-slate-500 text-xs md:text-sm font-medium">© All Right Reserved by Mindtrix Media - 2025</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
