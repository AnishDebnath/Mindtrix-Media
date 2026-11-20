import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactEmail } from '@/api';
import { sanitizePhone, isContactValid } from '@/utils/validation';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        purpose: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'invalid'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isContactValid(formData.email, formData.phone)) {
            setStatus('invalid');
            setTimeout(() => setStatus('idle'), 5000);
            return;
        }

        setStatus('sending');

        try {
            await sendContactEmail(formData);
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                purpose: '',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'phone' ? sanitizePhone(value) : value
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-full overflow-hidden bg-white/95 backdrop-blur-2xl p-6 md:p-8 2xl:p-10 rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-200/90"
        >
            {/* Decorative background gradients */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#ffc659]/10 rounded-full blur-3xl pointer-events-none" />


            <form onSubmit={handleSubmit} className="relative h-full flex flex-col space-y-5">
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-800 ml-1">Full Name <span className="text-[#6366f1]">*</span></label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all placeholder:text-slate-400 shadow-sm"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-800 ml-1">Email Address <span className="text-[#6366f1]">*</span></label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all placeholder:text-slate-400 shadow-sm"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-800 ml-1">Phone No <span className="text-[#6366f1]">*</span></label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9+ ]*"
                            className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all placeholder:text-slate-400 shadow-sm"
                            placeholder="+91 XXXXX-XXXXX"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-800 ml-1">Contact Purpose <span className="text-[#6366f1]">*</span></label>
                    <input
                        required
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all placeholder:text-slate-400 shadow-sm"
                        placeholder="e.g. Website Development, Maintenance & Support etc."
                    />
                </div>

                <div className="flex-1 flex flex-col space-y-2">
                    <label className="text-xs font-semibold text-slate-800 ml-1">Message / Details <span className="text-[#6366f1]">*</span></label>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="flex-1 w-full bg-white border border-slate-300 rounded-xl px-5 py-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all resize-none placeholder:text-slate-400 min-h-[120px] shadow-sm"
                        placeholder="Tell us about your inquiry..."
                    />
                </div>

                <div className="flex flex-col items-center pt-2 gap-4">
                    <button
                        disabled={status === 'sending'}
                        className="w-full group bg-slate-950 dark:bg-white text-white dark:text-black pl-4 pr-1.5 py-1.5 h-10 sm:h-11 rounded-xl font-medium text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-neutral-200 shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                        {status === 'sending' ? (
                            <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <div className="w-6 h-6 bg-white dark:bg-black rounded-lg flex items-center justify-center text-black dark:text-white">
                                <span className="material-symbols-rounded text-sm group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                            </div>
                        )}
                    </button>

                    <div className="flex items-center justify-center min-h-[24px] w-full px-2">
                        {status === 'success' ? (
                            <p className="text-sm md:text-base font-bold text-emerald-500 flex items-center gap-1 whitespace-nowrap">
                                <span className="material-symbols-rounded text-lg md:text-xl">check_circle</span>
                                Message sent successfully!
                            </p>
                        ) : status === 'error' ? (
                            <p className="text-sm md:text-base font-bold text-red-500 flex items-center gap-1 whitespace-nowrap">
                                <span className="material-symbols-rounded text-lg md:text-xl">error</span>
                                Failed to send message.
                            </p>
                        ) : status === 'invalid' ? (
                            <p className="text-sm md:text-base font-bold text-orange-500 flex items-center gap-1 whitespace-nowrap">
                                <span className="material-symbols-rounded text-lg md:text-xl">warning</span>
                                Please provide a valid email & phone number.
                            </p>
                        ) : (
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc659] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc659]"></span>
                                </span>
                                <p className="text-xs md:text-sm font-medium italic whitespace-nowrap">We respond within 24 hours</p>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;

