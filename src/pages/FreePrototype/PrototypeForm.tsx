import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendPrototypeEmail } from '@/api';
import { sanitizePhone, isContactValid } from '@/utils/validation';
import { servicesList } from '@/data/servicesData';

const projectTypes = servicesList.map(s => ({ label: s.title, value: s.title }));

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
        setFormData(prev => ({
            ...prev,
            [name]: name === 'phone' ? sanitizePhone(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isContactValid(formData.email, formData.phone)) {
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
            className="relative overflow-hidden bg-white dark:bg-neutral-950/70 backdrop-blur-md p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/90 dark:border-white/[0.08]"
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
            `}</style>
            {/* Decorative Ribbon */}
            <div className="absolute top-0 right-0 bg-secondary text-slate-950 text-[12px] md:text-[13px] font-black uppercase tracking-[0.15em] py-1.5 px-12 rotate-45 translate-x-[28%] translate-y-[45%] shadow-md z-10 border-b border-black/10">
                Free
            </div>


            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-3.5 z-0" onClick={() => isDropdownOpen && setIsDropdownOpen(false)}>
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 ml-1">Full Name <span className="text-primary">*</span></label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 ml-1">Email <span className="text-primary">*</span></label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 ml-1">Phone No <span className="text-primary">*</span></label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9+ ]*"
                            className="w-full bg-white dark:bg-neutral-900/60 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
                            placeholder="+91 XXXXX-XXXXX"
                        />
                    </div>
                </div>

                <div className="space-y-1.5 relative">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 ml-1">Project Type <span className="text-primary">*</span></label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDropdownOpen(!isDropdownOpen);
                            }}
                            className={`w-full text-left bg-white dark:bg-neutral-900/60 border rounded-xl px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm outline-none transition-all shadow-sm ${isDropdownOpen ? 'border-primary ring-2 ring-primary/20' : 'border-slate-300 dark:border-white/10 hover:border-primary/50'}`}
                        >
                            <span className={formData.projectType ? "text-slate-900 font-medium" : "text-slate-400"}>
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
                                    className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-y-auto max-h-[340px] z-20 custom-scrollbar"
                                >

                                    {projectTypes.map((type) => (
                                        <li
                                            key={type.value}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelect(type.value);
                                            }}
                                            className={`px-4 py-2.5 text-xs sm:text-sm cursor-pointer transition-colors flex items-center justify-between ${formData.projectType === type.value
                                                ? 'bg-primary/10 text-primary font-medium'
                                                : 'text-slate-700 hover:bg-slate-50'
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
                    <label className="text-xs font-semibold text-slate-800 ml-1">Current Website <span className="text-slate-400 font-normal text-[10px] ml-1">(Optional)</span></label>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-2xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
                        placeholder="https://www.yourbrandsite.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-800 ml-1">Project Description <span className="text-primary">*</span></label>
                    <textarea
                        required
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-2xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none placeholder:text-slate-400 shadow-sm"
                        placeholder="Tell us about the problem you want to solve..."
                    />
                </div>

                <div className="space-y-4">
                    {status === 'success' && (
                        <p className="text-xs font-medium text-emerald-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">check_circle</span>
                            Prototype request sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-xs font-medium text-red-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">error</span>
                            Failed to send request. Please try again.
                        </p>
                    )}
                    {status === 'invalid' && (
                        <p className="text-xs font-medium text-orange-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">warning</span>
                            Please provide a valid email & phone number.
                        </p>
                    )}

                    <button
                        disabled={status === 'sending'}
                        className="w-full group bg-slate-950 dark:bg-white text-white dark:text-black h-10 sm:h-11 rounded-xl font-medium text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-neutral-200 shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span>{status === 'sending' ? 'Sending...' : 'Claim Free Prototype'}</span>
                        {status === 'sending' ? (
                            <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <span className="material-symbols-rounded text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                                rocket_launch
                            </span>
                        )}
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

