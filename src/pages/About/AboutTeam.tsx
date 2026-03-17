import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import preetamImage from '../../assets/preetam.jpeg';
import anishImage from '../../assets/anish.jpeg';

const teamMembers = [
    {
        name: "Preetam Chakraborty",
        role: "Founder & Chief Executive Officer",
        image: preetamImage,
        socials: {
            linkedin: "https://www.linkedin.com/in/preetam-chakraborty-b3b4a7304/",
            instagram: "https://instagram.com",
        }
    },
    {
        name: "Anish Debnath",
        role: "Co-Founder & Lead Developer",
        image: anishImage,
        socials: {
            twitter: "https://x.com/anishdebnath07",
            linkedin: "https://www.linkedin.com/in/anish-debnath-7b3516211",
            instagram: "https://www.instagram.com/aanishdebnath/",
            website: "https://anishdebnath.netlify.app/"
        }
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
                        className="inline-block mb-6 px-4 py-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                            <span className="material-symbols-rounded text-sm">groups</span> Our Team
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl 2xl:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 md:mb-6"
                    >
                        Meet the <span className="text-secondary">creative</span> minds.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base 2xl:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
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
