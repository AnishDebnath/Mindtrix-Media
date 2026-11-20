import React from 'react';

interface PageBackgroundProps {
    pathname: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ pathname }) => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ambient Top Spotlight - Primary */}
            <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] opacity-70"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgb(var(--color-primary-rgb) / 0.16) 0%, rgb(var(--color-primary-rgb) / 0.06) 45%, transparent 75%)'
                }}
            />

            {/* Mid-Page Right Warm Glow - Secondary */}
            <div
                className="absolute top-[30%] -right-20 w-[700px] h-[600px] opacity-40"
                style={{
                    background: 'radial-gradient(circle at center, rgb(var(--color-secondary-rgb) / 0.14) 0%, transparent 65%)'
                }}
            />

            {/* Mid-Page Left Indigo Glow - Primary */}
            <div
                className="absolute top-[55%] -left-20 w-[800px] h-[700px] opacity-35"
                style={{
                    background: 'radial-gradient(circle at center, rgb(var(--color-primary-rgb) / 0.12) 0%, transparent 65%)'
                }}
            />

            {/* Lower-Page Ambient Depth - Primary */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] opacity-45"
                style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgb(var(--color-primary-rgb) / 0.14) 0%, transparent 70%)'
                }}
            />

            {/* Full-Page Technical Grid Lines (Subtle structure) */}
            <div
                className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:80px_80px]"
            />

            {/* Full-Page Technical Dot Grid (Light Mode - Persistent & Crisp) */}
            <div
                className="block dark:hidden absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(100,116,139,0.25)_1.2px,transparent_1.2px)] [background-size:24px_24px]"
            />

            {/* Dark Mode Dot Grid */}
            <div
                className="hidden dark:block absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
            />
        </div>
    );
};

export default PageBackground;
