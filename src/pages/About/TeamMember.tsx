import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
    member: {
        name: string;
        role: string;
        image: string;
    };
    delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="group"
        >
            <div className="bg-white dark:bg-neutral-950/70 backdrop-blur-md rounded-2xl md:rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 p-2 h-full flex flex-col">
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden bg-slate-50 dark:bg-slate-800/50 rounded-xl md:rounded-2xl mb-2 border border-slate-200/60 dark:border-white/[0.06]">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Area */}
                <div className="px-2 pb-1.5 pt-0 flex flex-col flex-1 relative">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
                            {member.name}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide flex items-start gap-2 leading-tight">
                            <span className="flex-shrink-0 w-6 h-[2px] mt-1 bg-primary/30 rounded-full group-hover:w-8 group-hover:bg-primary transition-all duration-300"></span>
                            {member.role}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMember;
