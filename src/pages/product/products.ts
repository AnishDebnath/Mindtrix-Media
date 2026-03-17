export interface Product {
    id: string;
    title: string;
    category: string;
    image: string;
    client: string;
    industry: string;
    duration?: string;
    year?: string;
    challenge?: string;
    solution?: string;
    result?: string;
    secondaryDescription?: string;
    subtitle: string;
    description: string;
    services: string[];
    date?: string;
    liveLink: string;
    liveLabel?: string;
    buyLink?: string;
    customiseLink?: string;
    content: (
        | { type: 'image'; src: string; alt: string; className?: string }
        | { type: 'text'; title?: string; body: string }
        | { type: 'grid'; images: string[] }
    )[];
}

export const featuredProducts = [
    {
        title: "Naka",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Signal Spark",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Lumenhaus",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        featured: false
    },
    {
        title: "Drift Bloom",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
        featured: false
    }
];

export const categories = ["Prebuilt", "Customized"];

export const products: Product[] = [
    {
        id: "ecommerce-pro-template",
        title: "E-Commerce Pro Template",
        category: "Prebuilt",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        client: "The Photographer House",
        industry: "E-Commerce",
        subtitle: "Modern, conversion-optimized e-commerce template.",
        description: "A fully responsive e-commerce template with advanced features including product filtering, cart management, and seamless checkout experience. Built with modern web technologies for optimal performance.",
        services: ["UI/UX Design", "Frontend Development", "E-Commerce Integration", "Make responsive UI"],
        date: "Oct 2023",
        liveLink: "https://demo.example.com",
        liveLabel: "View Live",
        buyLink: "/contact?project=ecommerce-pro",
        customiseLink: "/contact?service=templates",
        year: "2023",
        content: [
            { type: 'text', body: "In a competitive market of vibrant colors and overwhelming visuals, our client's product was getting lost on the shelves. The brand wanted something that wouldn't blend in—something that would interrupt the shopper's line of sight." },
            { type: 'image', src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Main Hero" },
            { type: 'text', title: "The Challenge", body: "Creating a template that works for various e-commerce businesses while maintaining high performance and conversion rates. The template needed to be both beautiful and functional out of the box." },
            { type: 'image', src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80", alt: "Product Pages" },
            { type: 'text', title: "The Solution", body: "We designed a modular template system with customizable components, integrated payment gateways, and optimized for mobile-first shopping experiences. The result was a 40% increase in conversion rates for early adopters." },
            { type: 'grid', images: ["https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"] }
        ]
    },
    {
        id: "corporate-website-redesign",
        title: "Corporate Website Redesign",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        client: "TechCorp Solutions",
        industry: "Technology",
        subtitle: "Professional, modern corporate web presence.",
        description: "Complete redesign of a corporate website with focus on user experience, brand consistency, and lead generation. Implemented modern design principles and optimized for conversions.",
        services: ["Web Design", "Development", "SEO Optimization"],
        date: "Nov 2023",
        liveLink: "https://techcorp.example.com",
        liveLabel: "View Live",
        buyLink: "/contact?project=corporate-redesign",
        customiseLink: "/contact?service=custom-websites",
        duration: "8 Weeks",
        year: "2023",
        secondaryDescription: "To establish a strong digital foothold, the client requested a complete overhaul of their existing web presence, ensuring seamless user journeys and brand consistency.",
        challenge: "The old website suffered from high bounce rates and lacked clear user pathways, making it difficult for potential clients to find information.",
        solution: "We restructured the site architecture, introduced a modern aesthetic, and created clear calls-to-actions placed strategically throughout the user journey.",
        result: "Post-launch analytics showed a 60% increase in user retention and a 45% boost in lead generation inquiries within the first month.",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80", alt: "Hero" },
            { type: 'text', title: "Narrative Flow", body: "The old website lacked clear navigation and modern design. We created a streamlined user journey with clear CTAs and engaging content sections that guide visitors toward conversion." },
            { type: 'image', src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", alt: "Design System" }
        ]
    },
    {
        id: "social-media-campaign",
        title: "Social Media Growth Campaign",
        category: "Customized",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
        client: "FitLife Brand",
        industry: "Health & Fitness",
        subtitle: "Strategic social media management and growth.",
        description: "Comprehensive social media strategy and content creation that resulted in 300% follower growth and 5x engagement increase across all platforms.",
        services: ["Content Strategy", "Social Media Management", "Analytics"],
        date: "Dec 2023",
        liveLink: "https://instagram.com/fitlife",
        liveLabel: "View Profile",
        buyLink: "/contact?project=social-media",
        customiseLink: "/contact?service=social-media",
        duration: "Ongoing",
        year: "2023",
        secondaryDescription: "The brand struggled to build an authentic connection with its younger demographic, relying heavily on outdated promotional posts rather than engaging storytelling.",
        challenge: "Low engagement rates and a stagnant follower count indicated that the current social media strategy was failing to resonate with target audiences.",
        solution: "We implemented a community-first approach, focusing on user-generated content, interactive stories, and high-quality educational fitness reels.",
        result: "Within three months, organic reach increased by over 300% and daily engagement rates multiplied by 5x across all active platforms.",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80", alt: "Social Campaign" },
            { type: 'text', title: "Growth Strategy", body: "We developed a data-driven content calendar with engaging posts, stories, and reels optimized for each platform's algorithm. Consistent posting schedule and community engagement drove remarkable growth." }
        ]
    },
    {
        id: "saas-dashboard-platform",
        title: "SaaS Analytics Dashboard",
        category: "Prebuilt",
        image: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=800&q=80",
        client: "DataFlow Inc",
        industry: "Software as a Service",
        subtitle: "Powerful analytics platform for businesses.",
        description: "Built a comprehensive SaaS analytics platform from MVP to full production. Features real-time data visualization, custom reporting, and team collaboration tools.",
        services: ["SaaS Development", "UI/UX Design", "Backend Architecture"],
        date: "Jan 2024",
        liveLink: "https://dataflow.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=saas-platform",
        customiseLink: "/contact?service=saas",
        duration: "24 Weeks",
        year: "2024",
        secondaryDescription: "The company needed a robust and scalable internal tool to process millions of data points and visualize complex metrics without sacrificing performance.",
        challenge: "Existing market solutions were either too generic or too slow to handle the specific volume and complexity of the client's proprietary data pipelines.",
        solution: "We built a custom React dashboard backed by a highly optimized Node.js microservices architecture to process and stream data in real-time.",
        result: "The new platform reduced data processing times by 80% and empowered the team to make critical business decisions faster and with total confidence.",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard" }
        ]
    },
    {
        id: "portfolio-template",
        title: "Creative Portfolio Template",
        category: "Prebuilt",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        client: "Template Store",
        industry: "Creative Services",
        subtitle: "Stunning portfolio template for creatives.",
        description: "A beautiful, minimalist portfolio template designed for photographers, designers, and creative professionals. Features smooth animations and gallery layouts.",
        services: ["Template Design", "Frontend Development", "Animation"],
        date: "Feb 2024",
        liveLink: "https://portfolio-demo.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=portfolio-template",
        customiseLink: "/contact?service=templates",
        duration: "4 Weeks",
        year: "2024",
        secondaryDescription: "Creative professionals often spend more time trying to code a portfolio from scratch rather than actually showcasing their work. This template solves that.",
        challenge: "Creating a template that is opinionated enough to look beautiful out of the box, yet flexible enough to adapt to vastly different creative styles.",
        solution: "We designed a heavily modular, CSS-variables driven architecture with multiple pre-built layouts, focusing on smooth page transitions and minimalist frames.",
        result: "The template became the fastest-selling product on the marketplace, driving thousands of downloads and maintaining a perfect 5-star rating.",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80", alt: "Portfolio" }
        ]
    },
    {
        id: "restaurant-booking-app",
        title: "Restaurant Booking SaaS",
        category: "Prebuilt",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        client: "DineEasy",
        industry: "Hospitality",
        subtitle: "Complete reservation management system.",
        description: "Full-stack SaaS application for restaurant reservations with table management, customer CRM, and automated notifications. Serving 50+ restaurants.",
        services: ["Full-Stack Development", "Database Design", "API Integration"],
        date: "Mar 2024",
        liveLink: "https://dineeasy.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=booking-saas",
        customiseLink: "/contact?service=saas",
        duration: "16 Weeks",
        year: "2024",
        secondaryDescription: "DineEasy wanted to revolutionize the reservation management space by offering a lighter, faster alternative to the clunky legacy systems currently dominating restaurants.",
        challenge: "Managing real-time table availability without double-booking, while simultaneously running a robust CRM and SMS notification engine.",
        solution: "We engineered a conflict-free reservation matrix, utilizing WebSocket connections for live syncing across all terminal devices in the restaurant.",
        result: "Wait times were reduced by an average of 15 minutes per party, and no-shows dropped by 40% thanks to the automated confirmation system.",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80", alt: "App Interface" }
        ]
    }
];
