import { getCloudinaryUrl } from "@/utils/cloudinary";

export const ecommercePlatform = {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Prebuilt",
    image: getCloudinaryUrl("cover_pfkodo.png"),
    client: "Mindtrix Media",
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
            body: "We developed a fully responsive B2B e-commerce platform featuring a structured product catalog, shopping cart functionality, dynamic currency conversion, and a dedicated wholesale quote center. Customers can browse products by category, switch between Indian Rupee (Γé╣) and US Dollar ($) pricing, manage quantities within their cart, and submit bulk inquiries directly through the platform. The result is a professional digital commerce experience tailored specifically for manufacturers and exporters serving international markets."
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
};
