import React from 'react';
import { articles } from './blogData';
import ArticleCard from './ArticleCard';
import BlogHeader from './BlogHeader';
import { FAQ, CTA } from '../../components';

const BlogPage: React.FC = () => {
    return (
        <div className="pt-20 md:pt-24 pb-0 relative min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="py-8 md:py-12 2xl:py-16 max-w-7xl mx-auto px-4 md:px-8 2xl:px-20 relative z-10">
                <BlogHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} delay={index * 0.1} />
                    ))}
                </div>

            </div>
            <FAQ />
            <CTA />
        </div>
    );
};

export default BlogPage;
