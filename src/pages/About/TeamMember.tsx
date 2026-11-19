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
            <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] border border-slate-200/60 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-2.5 h-full flex flex-col">
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden bg-slate-50 dark:bg-slate-800/50 rounded-[1rem] mb-3 border border-slate-100 dark:border-white/5">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Area */}
                <div className="p-4 pt-1 lg:p-3 lg:pt-0.5 xl:p-4 xl:pt-1 flex flex-col flex-1 relative">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-base md:text-lg lg:text-base 2xl:text-xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
                            {member.name}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-[9px] md:text-[10px] lg:text-[9px] 2xl:text-[11px] font-bold uppercase tracking-widest flex items-start gap-2 leading-tight">
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
