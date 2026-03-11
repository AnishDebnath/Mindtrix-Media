import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/mindtrix-media-logo.png';

const footerSocials = [
    { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin/white", link: "#" },
    { name: "X", icon: "https://cdn.simpleicons.org/x/white", link: "#" },
    { name: "Behance", icon: "https://cdn.simpleicons.org/behance/white", link: "#" }
];

const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { name: "Our Projects", path: "/" },
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
        <footer className="bg-transparent px-4 md:px-6 2xl:px-8 pb-4 md:pb-6 2xl:pb-6 pt-0 transition-colors duration-500 relative z-10 mt-2 md:mt-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full bg-[#000000] rounded-[1.5rem] px-5 pt-7 pb-10 md:pt-10 md:pb-12 2xl:p-14 relative overflow-hidden flex flex-col justify-between"
            >
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                        {/* Branding */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <Link to="/" className="flex items-center gap-3 mb-6 group">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform overflow-hidden p-1.5">
                                    <img src={logo} alt="Mindtrix Media" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Mindtrix Media</span>
                            </Link>
                            <h3 className="text-lg md:text-xl 2xl:text-2xl font-display font-bold text-white mb-4 md:mb-5 leading-tight">Do you like what you see?</h3>
                            <p className="text-slate-400 text-sm md:text-base max-w-sm mb-5 md:mb-6 leading-relaxed">Let’s work together to turn your dream project into reality.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group text-sm md:text-base">
                                Let's Talk with Us
                                <span className="material-symbols-rounded scale-75 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12 pt-0 md:pt-4">
                            {footerLinks.map((col, idx) => (
                                <div key={idx}>
                                    <h4 className="text-white font-bold mb-5 md:mb-6 text-sm md:text-base">{col.title}</h4>
                                    <ul className="space-y-3 text-xs md:text-sm text-slate-400 font-medium">
                                        {col.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <Link
                                                    to={link.path}
                                                    className="hover:text-white transition-all duration-300 flex items-center gap-0 hover:gap-2 group/link"
                                                >
                                                    <div className="w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover/link:w-1.5 group-hover/link:h-1.5" />
                                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Socials */}
                            <div>
                                <h4 className="text-white font-bold mb-5 md:mb-6 text-sm md:text-base">Get In Touch</h4>
                                <p className="text-slate-400 mb-4 text-xs md:text-sm">Connect with us via our socials</p>
                                <div className="flex gap-3">
                                    {footerSocials.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                                            aria-label={social.name}
                                        >
                                            <img src={social.icon} alt={social.name} className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-auto pt-6 md:pt-8 lg:pt-16 pb-4">
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none select-none">
                            <h1 className="text-[20vw] md:text-[18vw] lg:text-[16vw] 2xl:text-[14vw] font-black text-center text-white/[0.04] leading-[0.75] tracking-tighter whitespace-nowrap font-display translate-y-[15%]">Mindtrix</h1>
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
