import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import { getImageKitUrl } from "@/utils/imagekit";

const teamMembers = [
    {
        name: "Preetam Chakraborty",
        role: "Founder & CEO",
        image: getImageKitUrl("preetam_ycnlib.jpg"),
    },
    {
        name: "Anish Debnath",
        role: "Co-Founder & CTO",
        image: getImageKitUrl("anish_huixzn.jpg"),
    },
];

const AboutTeam: React.FC = () => {
    return (
        <section className="py-16 2xl:py-24 px-4 md:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 bg-white shadow-sm mb-4"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">groups</span> Our Team
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight"
                    >
                        Meet the <span className="text-primary">creative</span> minds.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        The talented individuals behind every frame, cut, and creative decision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4 xl:gap-8">
                    {teamMembers.map((member, i) => (
                        <TeamMember key={i} member={member} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
