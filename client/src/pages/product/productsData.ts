import { getCloudinaryUrl } from "@/utils/cloudinary";

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
    featured?: boolean;
    featuredTag?: string;
    content: (
        | { type: 'image'; src: string; alt: string; className?: string }
        | { type: 'text'; title?: string; body: string }
        | { type: 'grid'; images: string[] }
    )[];
}

export const categories = ["Prebuilt", "Customized"];

export const products: Product[] = [
    {
        id: "the-photographers-house",
        title: "Photographer Portfolio with Booking Feature",
        category: "Customized",
        image: getCloudinaryUrl("cover_yidgjt.png"),
        client: "The Photographer House",
        industry: "Photography & Creative Services",
        subtitle: "A professional portfolio with booking feature designed for photographers to showcase organized work collections and attract new clients.",
        description: "A modern photography portfolio website built to help professional photographers showcase their work in a structured folder-based gallery view while accepting future booking requests online. The platform enables photographers to present projects professionally, improve client trust, and simplify the booking process through a single digital destination.",
        services: ["UI/UX Design", "Gallery View Style", "Booking Feature", "Customized Template", "Responsive Web Design"],
        liveLink: "https://thephotographerhouse.com/",
        liveLabel: "View Live",
        buyLink: "/contact?project=photographer-portfolio",
        customiseLink: "/contact?service=web-development",
        year: "2025",
        featured: true,
        featuredTag: "Featured",
        content: [
            {
                type: "text",
                body: "Professional photographers often struggle to present their complete body of work in an organized manner. Social media platforms compress image quality, limit presentation flexibility, and make it difficult for potential clients to explore specific project categories. Our client wanted a dedicated online portfolio where all photography projects could be showcased professionally, making it easier to share work with prospects and convert visitors into paying clients."
            },
            {
                type: "image",
                src: getCloudinaryUrl("home_wi4ew2.png"),
                alt: "Photography Portfolio Homepage"
            },
            {
                type: "text",
                title: "The Challenge",
                body: "The client needed more than a traditional portfolio website. They required a centralized platform where photography projects could be organized into folder-like collections, allowing visitors to browse work based on categories, events, or project types. Instead of displaying hundreds of images in a random gallery layout, the website needed a structured navigation system that helped potential clients quickly discover relevant work. Additionally, the client wanted an integrated booking solution so interested visitors could request future photography sessions directly through the website."
            },
            {
                type: "image",
                src: getCloudinaryUrl("gallery_oqca2o.png"),
                alt: "Folder Based Photography Gallery"
            },
            {
                type: "text",
                title: "Research & Strategy",
                body: "After understanding the photographer's workflow and client acquisition process, we discovered that prospective clients primarily wanted to view specific project categories before making a booking decision. To address this, we designed a folder-based gallery architecture that mimics familiar file management systems. This approach allows visitors to navigate wedding shoots, portraits, events, commercial projects, and other photography categories effortlessly while maintaining a clean and professional browsing experience."
            },
            {
                type: "image",
                src: getCloudinaryUrl("booking_a97ten.png"),
                alt: "Photography Booking System"
            },
            {
                type: "text",
                title: "The Solution",
                body: "We developed a fully responsive photography portfolio platform featuring organized project folders, optimized image galleries, and a streamlined booking workflow. Visitors can browse categorized photography collections, open dedicated project folders, and explore related images without feeling overwhelmed. The integrated booking system allows potential clients to submit inquiries, discuss project requirements, and schedule future sessions directly from the website. The result is a professional digital presence that strengthens credibility, improves user experience, and helps generate qualified photography leads."
            },
            {
                type: "text",
                title: "Key Features",
                body: "The platform includes folder-based project organization, high-quality image galleries, mobile-responsive design, booking request forms, project categorization, fast-loading image optimization, SEO-friendly architecture, easy portfolio management, and a user-focused navigation experience. These features help photographers showcase their work effectively while providing potential clients with a seamless browsing and inquiry process."
            },
            {
                type: "text",
                title: "Results & Impact",
                body: "The final website transformed the photographer's online presence into a professional portfolio and lead-generation platform. Instead of sending scattered social media links, the client can now share a single website that presents work in an organized and trustworthy manner. Potential clients can quickly explore relevant projects, evaluate the photographer's expertise, and submit booking requests, resulting in a more efficient client acquisition process and stronger brand credibility."
            },
            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_wvfvyo.png"),
                    getCloudinaryUrl("grid2_y2ywsq.png")
                ]
            }
        ]
    },
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        category: "Prebuilt",
        image: getCloudinaryUrl("cover_pfkodo.png"),
        client: "Unknown",
        industry: "Manufacturing & Export",
        subtitle: "A modern B2B e-commerce platform built for a global fence fitting manufacturer with multi-currency support and wholesale quote management.",
        description: "A professional e-commerce platform developed for Charu Enterprise to showcase fence fittings, gate hardware, and industrial accessories while simplifying wholesale inquiries and international customer engagement. The platform enables buyers to browse products, request bulk quotations, manage cart items, and view pricing in multiple currencies through a seamless user experience.",
        services: ["UI/UX Design", "E-Commerce Platform", "Multi-Currency Integration", "Wholesale Quote System", "Responsive Web Design"],
        liveLink: "https://charuenterprise-usa.netlify.app/",
        liveLabel: "View Live",
        buyLink: "/contact?project=ecommerce-platform",
        customiseLink: "/contact?service=web-development",
        year: "2025-26",
        featured: true,
        featuredTag: "Featured",
        content: [
            {
                type: "text",
                body: "As a manufacturer and exporter of premium fence fitting solutions, Charu Enterprise serves customers across multiple domestic and international markets. The company needed a modern digital platform capable of showcasing its growing product catalog while making it easier for distributors, contractors, and wholesale buyers to explore products and submit inquiries. Their goal was to create a centralized online destination that could strengthen brand credibility and simplify the purchasing journey for global customers."
            },
            {
                type: "image",
                src: getCloudinaryUrl("home_xumz1f.png"),
                alt: "Charu Enterprise Homepage"
            },
            {
                type: "text",
                title: "The Challenge",
                body: "The client's traditional inquiry process relied heavily on manual communication, making it difficult for potential customers to discover products efficiently. They required a professional e-commerce solution capable of organizing a large inventory of fence fittings, gate hardware, and accessories while supporting international buyers. The platform also needed a dedicated wholesale inquiry system since most customers purchase products in bulk rather than through standard retail checkout processes."
            },
            {
                type: "image",
                src: getCloudinaryUrl("category_zic41k.png"),
                alt: "Product Catalog Interface"
            },
            {
                type: "text",
                title: "Research & Strategy",
                body: "After studying the purchasing behavior of distributors, exporters, contractors, and industrial buyers, we identified that product accessibility and pricing clarity were critical factors in generating inquiries. To address this, we designed an intuitive product catalog structure with category-based navigation, advanced search functionality, and seamless currency switching. The platform was strategically optimized to help users quickly locate products and request quotations without unnecessary friction."
            },
            {
                type: "image",
                src: getCloudinaryUrl("cart_po4hu5.png"),
                alt: "Wholesale Quote Request System"
            },
            {
                type: "text",
                title: "The Solution",
                body: "We developed a fully responsive B2B e-commerce platform featuring a structured product catalog, shopping cart functionality, dynamic currency conversion, and a dedicated wholesale quote center. Customers can browse products by category, switch between Indian Rupee (₹) and US Dollar ($) pricing, manage quantities within their cart, and submit bulk inquiries directly through the platform. The result is a professional digital commerce experience tailored specifically for manufacturers and exporters serving international markets."
            },
            {
                type: "text",
                title: "Key Features",
                body: "The platform includes product catalog management, category-based navigation, advanced search functionality, dynamic multi-currency support, shopping cart management, wholesale quote request forms, quantity management tools, responsive mobile optimization, SEO-friendly architecture, and an intuitive user experience designed for both domestic and international buyers."
            },
            {
                type: "text",
                title: "Results & Impact",
                body: "The completed platform transformed Charu Enterprise's online presence into a professional product showcase and lead-generation system. Instead of relying solely on traditional communication channels, the company now has a centralized platform where buyers can discover products, compare options, request quotations, and engage with the business more efficiently. The improved user experience, organized product presentation, and multi-currency functionality help position Charu Enterprise as a trusted global supplier while supporting future business growth."
            },
            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_r7dtl5.png"),
                    getCloudinaryUrl("grid2_hgmf08.png")
                ]
            }
        ]
    }

];
