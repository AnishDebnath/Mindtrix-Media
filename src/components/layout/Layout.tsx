import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import PageBackground from '../ui/PageBackground';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <div className="relative min-h-screen bg-canvas dark:bg-black text-slate-900 dark:text-neutral-100 transition-colors duration-500 flex flex-col selection:bg-indigo-500/30 selection:text-white">
            <PageBackground pathname={location.pathname} />

            <div className="w-full relative z-10 flex flex-col flex-grow">

                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
