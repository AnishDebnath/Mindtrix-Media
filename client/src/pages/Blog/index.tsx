import React from 'react';
import { articles } from './blogData';
import ArticleCard from './ArticleCard';
import BlogHeader from './BlogHeader';
import { FAQ, CTA } from '../../components';
import useSEO from '../../utils/useSEO';

const BlogPage: React.FC = () => {
    useSEO({
        title: 'Blog | Web Development, CRM, ERP & Business Software Insights — Mindtrix Media',
        description: 'Read expert articles on custom web development, CRM & ERP systems, e-commerce growth, business automation and software architecture from the Mindtrix Media team.',
        keywords: 'web development blog, CRM insights, ERP software articles, ecommerce SEO tips, business automation blog, software development articles, Mindtrix Media blog',
        canonicalPath: '/blog',
        ogTitle: 'Blog — Insights on Web, CRM, ERP & Business Software | Mindtrix Media',
        ogDescription: 'Expert articles on website development, custom software, e-commerce growth and business automation. Stay ahead with Mindtrix Media.',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Mindtrix Media Blog',
            url: 'https://mindtrixmedia.com/blog',
            description: 'Expert insights on web development, CRM, ERP, e-commerce and business automation.',
            publisher: { '@type': 'Organization', name: 'Mindtrix Media', url: 'https://mindtrixmedia.com' },
            blogPost: articles.map(a => ({
                '@type': 'BlogPosting',
                headline: a.title,
                description: a.desc,
                url: `https://mindtrixmedia.com/blog/${a.id}`,
                image: a.img,
                keywords: a.tags.join(', '),
            })),
        },
    });
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
