import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendPrototypeEmail } from '../../utils/prototypeEmail';

const projectTypes = [
    { label: "Custom Website Development", value: "Custom Website Development" },
    { label: "E-commerce Solutions", value: "E-commerce Solutions" },
    { label: "Responsive Web Design", value: "Responsive Web Design" },
    { label: "SEO & Performance Optimization", value: "SEO & Performance Optimization" },
    { label: "Branding & UI/UX Consulting", value: "Branding & UI/UX Consulting" },
    { label: "Website Maintenance & Support", value: "Website Maintenance & Support" },
    { label: "Website Migration & Upgrade", value: "Website Migration & Upgrade" },
    { label: "CRM System Development", value: "CRM System Development" },
    { label: "ERP Software Development", value: "ERP Software Development" },
    { label: "Business Website Development", value: "Business Website Development" },

];

const PrototypeForm: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        website: '',
        description: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'invalid'>('idle');

    const handleSelect = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }));
        setIsDropdownOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Prevent non-numeric input for phone field (Synced with ContactForm)
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9+]/g, ''); // Allow numbers and '+'
            setFormData(prev => ({ ...prev, [name]: numericValue }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation (Synced with ContactForm)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneDigits = formData.phone.replace(/[^0-9]/g, '');

        if (!emailRegex.test(formData.email) || phoneDigits.length < 10) {
            setStatus('invalid');
            setTimeout(() => setStatus('idle'), 5000);
            return;
        }

        if (!formData.projectType) {
            alert("Please select a project type");
            return;
        }

        setStatus('sending');

        try {
            await sendPrototypeEmail(formData);
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                projectType: '',
                website: '',
                description: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send prototype request:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden bg-gradient-to-br from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-[#0A0A0A]/95 backdrop-blur-2xl p-6 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white dark:border-white/10"
        >
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                    margin: 8px 0;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #CBD5E1;
                    border-radius: 10px;
                    transition: all 0.3s;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94A3B8;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #334155;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #475569;
                }
            `}</style>
            {/* Decorative Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-orange-600 text-white text-[12px] md:text-[13px] font-black uppercase tracking-[0.15em] py-1.5 px-12 rotate-45 translate-x-[28%] translate-y-[45%] shadow-xl z-10 border-b border-white/10">
                Free
            </div>


            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-5 z-0" onClick={() => isDropdownOpen && setIsDropdownOpen(false)}>
                <div className="space-y-2">
                    <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name <span className="text-primary">*</span></label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm 2xl:text-base outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email <span className="text-primary">*</span></label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm 2xl:text-base outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone No <span className="text-primary">*</span></label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9+ ]*"
                            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm 2xl:text-base outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                            placeholder="+91 XXXXX-XXXXX"
                        />
                    </div>
                </div>

                <div className="space-y-2 relative">
                    <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Project Type <span className="text-primary">*</span></label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDropdownOpen(!isDropdownOpen);
                            }}
                            className={`w-full text-left bg-slate-50/50 dark:bg-slate-800/50 border rounded-2xl px-5 py-4 flex items-center justify-between text-sm 2xl:text-base outline-none transition-all ${isDropdownOpen ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
                        >
                            <span className={formData.projectType ? "text-slate-900 dark:text-white" : "text-slate-400"}>
                                {formData.projectType ? projectTypes.find(t => t.value === formData.projectType)?.label : "Select a project type"}
                            </span>
                            <span className={`material-symbols-rounded text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl overflow-y-auto max-h-[340px] z-20 custom-scrollbar"
                                >

                                    {projectTypes.map((type) => (
                                        <li
                                            key={type.value}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelect(type.value);
                                            }}
                                            className={`px-5 py-3 cursor-pointer transition-colors flex items-center justify-between ${formData.projectType === type.value
                                                ? 'bg-primary/5 text-primary font-medium'
                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                                                }`}
                                        >
                                            {type.label}
                                            {formData.projectType === type.value && (
                                                <span className="material-symbols-rounded text-primary text-sm">check</span>
                                            )}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Current Website <span className="text-slate-400 font-normal text-[10px] ml-1">(Optional)</span></label>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm 2xl:text-base outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="https://www.yourbrandsite.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs 2xl:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Project Description <span className="text-primary">*</span></label>
                    <textarea
                        required
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm 2xl:text-base outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                        placeholder="Tell us about the problem you want to solve..."
                    />
                </div>

                <div className="space-y-4">
                    {status === 'success' && (
                        <p className="text-sm font-bold text-emerald-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">check_circle</span>
                            Prototype request sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-sm font-bold text-red-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">error</span>
                            Failed to send request. Please try again.
                        </p>
                    )}
                    {status === 'invalid' && (
                        <p className="text-sm font-bold text-orange-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">warning</span>
                            Please provide a valid email & phone number.
                        </p>
                    )}

                    <button
                        disabled={status === 'sending'}
                        className="w-full group relative overflow-hidden bg-[#111] dark:bg-white text-white dark:text-[#111] py-1.5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10">{status === 'sending' ? 'Sending...' : 'Claim Free Prototype'}</span>
                        <div className="w-8 h-8 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            {status === 'sending' ? (
                                <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <span className="material-symbols-rounded text-lg">rocket_launch</span>
                            )}
                        </div>
                    </button>
                </div>

                <p className="text-xs text-center text-slate-400 font-medium">
                    *No advance payment required. 100% Free.
                </p>
            </form>
        </motion.div>
    );
};

export default PrototypeForm;

