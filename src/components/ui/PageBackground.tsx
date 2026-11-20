import React from 'react';

interface PageBackgroundProps {
    pathname: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ pathname }) => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ambient Top Spotlight (Aceternity Signature) */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-60 dark:opacity-80"
                style={{
                    background: 'radial-gradient(ellipse at 50% -20%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 75%)'
                }}
            />

            {/* Subtle Secondary Ambient Depth */}
            <div
                className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-20 dark:opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 70%)'
                }}
            />

            {/* Radial Vignetted Dot Grid (Dark Mode) */}
            <div
                className="hidden dark:block absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_40%,transparent_100%)]"
            />

            {/* Radial Vignetted Dot Grid (Light Mode) */}
            <div
                className="block dark:hidden absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_40%,transparent_100%)]"
            />
        </div>
    );
};

export default PageBackground;
