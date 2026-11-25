import React from 'react';
import { motion } from 'framer-motion';
import TitleIconCapsule from '../../components/ui/TitleIconCapsule';

const caseStudyIcons = [
    { icon: 'deployed_code', color: 'text-primary' },
    { icon: 'auto_awesome', color: 'text-secondary' },
    { icon: 'rocket_launch', color: 'text-primary' },
    { icon: 'verified', color: 'text-secondary' },
];

interface ProjectDetailHeaderProps {
    title: string;
    subtitle: string;
    liveLink?: string;
}

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ title, subtitle, liveLink }) => {
    return (
        <div className="mb-12 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-neutral-900/60 backdrop-blur-md mb-4 shadow-sm"
            >
                <span className="text-primary font-semibold uppercase text-xs tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-sm">description</span> Case Study
                </span>
            </motion.div>

            <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">
                        <span className="text-primary">{title.split(':')[0]}</span>{' '}
                        <TitleIconCapsule icons={caseStudyIcons} delay={0} />
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
                        {subtitle}
                    </p>
                </motion.div>

                {liveLink && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8"
                    >
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black pl-4 pr-1.5 py-1.5 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all group"
                        >
                            <span>View Live Project</span>
                            <div className="w-7 h-7 rounded-lg bg-white dark:bg-black text-slate-950 dark:text-white flex items-center justify-center">
                                <span className="material-symbols-rounded text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">arrow_outward</span>
                            </div>
                        </a>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetailHeader;
