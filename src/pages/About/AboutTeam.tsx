import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';
import preetamImg from '../../assets/team/preetam.jpeg';
import anishImg from '../../assets/team/anish.png';

const teamIcons = [
    { icon: 'groups', color: 'text-primary' },
    { icon: 'psychology', color: 'text-secondary' },
    { icon: 'code', color: 'text-primary' },
    { icon: 'auto_awesome', color: 'text-secondary' },
];

const teamMembers = [
    {
        name: "Preetam Chakraborty",
        role: "Founder & CEO",
        image: preetamImg,
    },
    {
        name: "Anish Debnath",
        role: "Co-Founder & CTO",
        image: anishImg,
    },
];

const AboutTeam: React.FC = () => {
    return (
        <section className="py-10 md:py-14 px-4 md:px-8 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
                    >
                        <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-rounded text-sm">groups</span> Our Team
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight"
                    >
                        Meet the <span className="text-primary">Creative</span>{' '}
                        <TitleIconCapsule icons={teamIcons} delay={0} />{' '}
                        <span className="text-secondary">Minds</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto font-normal"
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
