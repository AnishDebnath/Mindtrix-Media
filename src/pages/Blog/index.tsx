import React from 'react';
export const articles = [
    {
        id: 'tailored-crm-systems',
        tags: ['Business', 'CRM'],
        title: 'Why Custom CRM Systems are Crucial for Rapid Scaling',
        desc: "Off-the-shelf software often hinders growth. Learn how custom-built CRM solutions provide the flexibility your business needs.",
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
        content: [
            { type: 'text', body: "In a competitive market, data is your most valuable asset. However, if that data is trapped in rigid, third-party software that doesn't align with your workflow, it becomes a burden rather than an advantage. Custom CRM development allows you to build a system around your business, not the other way around." },
            { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80', alt: 'Analytics Dashboard' },
            { type: 'text', body: "With a tailored solution, you can automate lead scoring, integrate directly with your marketing stack, and generate real-time reports that actually matter to your bottom line. Scalability is baked in from day one, ensuring that as your customer base grows, your infrastructure handles the load effortlessly." }
        ]
    },
    {
        id: 'ecommerce-seo-2024',
        tags: ['SEO', 'E-commerce'],
        title: 'The Ultimate Guide to E-commerce SEO and Performance',
        desc: "Success in online retail is balanced between visibility and speed. We reveal the technical SEO must-haves for 2024.",
        img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
        content: [
            { type: 'text', body: "E-commerce SEO has evolved beyond simple keywords. Today, Google prioritizes Core Web Vitals—meaning your site speed, mobile-friendliness, and interactive stability are direct ranking factors. If your store takes more than 3 seconds to load, you're losing customers and ranking positions." },
            { type: 'image', src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80', alt: 'E-commerce Analysis' },
            { type: 'text', body: "A high-performance architecture (like Headless Commerce) can dramatically improve these metrics. By separating the frontend from the backend, your shop can serve content instantly, leading to higher search rankings and, more importantly, a significantly higher conversion rate." }
        ]
    },
    {
        id: 'automation-efficiency',
        tags: ['Efficiency', 'Automation'],
        title: 'How Business Automation Can Double Your Team’s Output',
        desc: 'Manual data entry is a relic of the past. Learn how modern automation can streamline your entire operation.',
        img: 'https://images.unsplash.com/photo-1518186239751-08183ca2032e?auto=format&fit=crop&w=1600&q=80',
        content: [
            { type: 'text', body: "The average employee spends nearly 30% of their day on repetitive, low-value tasks. Business process automation (BPA) isn't just about saving time; it's about reallocating human talent to high-impact strategy and creative problem solving." },
            { type: 'image', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80', alt: 'Team working with automation tools' },
            { type: 'text', body: "Whether it's automated invoice generation, synchronized inventory across multiple platforms, or AI-driven customer support, the ROI of automation is immediate. At Mindtrix Media, we build the bridges between your different software tools, creating a unified, self-running ecosystem." }
        ]
    }
];
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
