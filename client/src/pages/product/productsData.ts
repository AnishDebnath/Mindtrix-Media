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
    },
    {
        id: "charu-enterprise",
        title: "Charu Enterprise Digital Business Card & Company Landing Page",
        category: "Customized",
        image: getCloudinaryUrl("cover_fwf41w.png"),
        client: "Charu Enterprise",
        industry: "Manufacturing & Industrial Hardware",
        subtitle: "A QR-powered digital business card and company landing page designed to showcase products, manufacturing capabilities, certifications, and business information in a professional and accessible format.",

        description: "A modern business landing page developed for Charu Enterprise, a leading manufacturer and exporter of precision fence fittings and engineering components. Designed as a digital business card, the platform allows visitors to instantly access company information by scanning a QR code from trade shows, exhibitions, stores, or business stalls. The website helps build credibility, showcase manufacturing excellence, and provide potential clients with a seamless way to explore products, certifications, and company achievements.",

        services: [
            "UI/UX Design",
            "Landing Page Design",
            "Responsive Web Design",
            "QR Code Integration",
            "Performance Optimization",
            "SEO Optimization"
        ],

        liveLink: "https://charuenterprise.netlify.app/",
        liveLabel: "View Live",
        buyLink: "/contact?project=charu-enterprise",
        customiseLink: "/contact?service=business-website",
        year: "2026",
        featured: true,
        featuredTag: "Featured",

        content: [

            {
                type: "text",
                body: "Charu Enterprise has been manufacturing and exporting precision fence fittings and engineering components since 1969. As the company regularly participates in exhibitions, trade fairs, business meetings, and industrial events, they needed a modern digital solution that could instantly provide visitors with company information. Instead of distributing printed brochures that often get misplaced, the client wanted a QR-code-enabled landing page where potential customers could access business details, product information, certifications, manufacturing capabilities, and contact information within seconds."
            },

            {
                type: "image",
                src: getCloudinaryUrl('home_u8sktx.png'),
                alt: "Charu Enterprise Landing Page Homepage"
            },

            {
                type: "text",
                title: "The Challenge",
                body: "The primary challenge was creating a platform that could act as a digital business card while maintaining the professionalism expected from a manufacturing company with more than five decades of industry experience. Visitors scanning the QR code needed immediate access to essential company information without navigating through a complex website. The platform also needed to effectively communicate the company's manufacturing expertise, global export presence, quality certifications, and product capabilities while remaining fast, mobile-friendly, and easy to navigate."
            },

            {
                type: "image",
                src: getCloudinaryUrl('about_obrqq0.png'),
                alt: "QR Code Based Business Landing Page Experience"
            },

            {
                type: "text",
                title: "Research & Strategy",
                body: "After understanding how the company interacts with prospects during exhibitions and business events, we discovered that most visitors spend less than a few minutes reviewing company information after scanning a QR code. This insight led us to design a streamlined landing page experience that prioritizes trust-building information, manufacturing achievements, certifications, product highlights, and direct contact options. The entire user journey was optimized for mobile devices, ensuring visitors could quickly access important details while standing at a trade show, retail outlet, or industrial exhibition."
            },

            {
                type: "image",
                src: getCloudinaryUrl('contact_ej4rue.png'),
                alt: "Manufacturing Excellence and Company Highlights"
            },

            {
                type: "text",
                title: "The Solution",
                body: "We designed and developed a modern responsive landing page that functions as a digital business card for Charu Enterprise. By simply scanning a QR code, visitors can instantly learn about the company's history, manufacturing capabilities, export reach, certifications, product offerings, and achievements. The landing page incorporates engaging visual elements, smooth animations, dynamic content sections, and clear calls-to-action to create a professional first impression while helping potential clients access relevant business information quickly and efficiently."
            },

            {
                type: "text",
                title: "Key Features",
                body: "The website includes QR-code-based instant access, responsive mobile-first design, company profile presentation, manufacturing capability showcase, export achievements section, certification highlights, product information display, interactive scrolling elements, modern UI animations, contact information accessibility, performance optimization, and SEO-friendly architecture. These features help Charu Enterprise communicate credibility, strengthen brand presence, and improve engagement with potential clients and business partners."
            },

            {
                type: "text",
                title: "Results & Impact",
                body: "The final solution transformed traditional business card sharing into a modern digital experience. Visitors can now access complete company information through a single QR code scan, eliminating the need for lengthy brochures or printed catalogs. The landing page provides a professional and memorable first impression, improves accessibility to company information, strengthens trust among potential clients, and supports lead generation during exhibitions, trade fairs, business meetings, and industrial events. The result is a scalable digital asset that helps Charu Enterprise present its legacy, expertise, and global reach more effectively."
            },

            {
                type: "text",
                title: "SEO & Business Value",
                body: "The landing page was built with search engine optimization and answer engine optimization best practices to improve online visibility for manufacturing services, precision fence fittings, engineering components, industrial exports, and B2B manufacturing solutions. Structured content hierarchy, mobile optimization, performance-focused development, and industry-specific messaging help the website rank for relevant searches while providing clear answers to prospective clients researching suppliers and manufacturing partners online."
            },

            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_ywdfli.png"),
                    getCloudinaryUrl("grid2_asl22j.png")
                ]
            }

        ]
    },
    {
        id: "charu-enterprise-ecommerce",
        title: "Charu Enterprise E-Commerce Platform (B2B)",
        category: "Customized",
        image: getCloudinaryUrl("cover_qw2egu.png"),
        client: "Charu Enterprise",
        industry: "Manufacturing & Industrial Hardware",
        subtitle: "A modern B2B e-commerce platform designed to help industrial buyers discover, compare, and request bulk pricing for fence fittings and hardware products worldwide.",

        description: "A professional wholesale e-commerce website developed for Charu Enterprise, a manufacturer and exporter of industrial fence fittings and hardware products. The platform enables distributors, contractors, wholesalers, and international buyers to browse products, compare specifications, request bulk quotations, and explore export-ready solutions through a fast, responsive, and user-friendly digital experience.",

        services: [
            "UI/UX Design",
            "E-Commerce Platform",
            "Product Catalog Design",
            "B2B Wholesale facility",
            "Responsive Web Design"
        ],

        liveLink: "https://charuenterprise-ecommerce.netlify.app/",
        liveLabel: "View Live",
        buyLink: "/contact?project=charu-enterprise",
        customiseLink: "/contact?service=ecommerce-development",
        year: "2025-26",
        featured: true,
        featuredTag: "Featured",

        content: [

            {
                type: "text",
                body: "Industrial hardware manufacturers often struggle to present their complete product range in a professional and organized way online. Most traditional catalog websites provide limited product information and lack features that help wholesale buyers make purchasing decisions efficiently. Charu Enterprise wanted a modern digital platform that would showcase their extensive product catalog, simplify product discovery, and encourage bulk business inquiries from domestic and international buyers."
            },

            {
                type: "image",
                src: getCloudinaryUrl("home_iemayj.png"),
                alt: "Charu Enterprise Industrial Hardware E-Commerce Website"
            },

            {
                type: "text",
                title: "The Challenge",
                body: "The client manufactures and exports a wide range of fence fittings, gate hardware, post accessories, and ornamental components. Their existing sales process relied heavily on catalogs, direct communication, and manual quotation requests. Potential buyers needed an easier way to browse products, compare specifications, understand bulk pricing, and request wholesale quotations. The website also needed to serve customers from multiple regions with support for different currencies and a seamless mobile experience."
            },

            {
                type: "image",
                src: getCloudinaryUrl("category_cfstud.png"),
                alt: "Industrial Product Catalog Interface"
            },

            {
                type: "text",
                title: "Research & Strategy",
                body: "After analyzing the purchasing journey of distributors, contractors, and wholesale buyers, we identified that product accessibility and technical clarity were critical factors in decision-making. Buyers wanted quick access to product specifications, quantity-based pricing, export information, and product comparisons before initiating contact. To address these needs, we designed a structured B2B e-commerce experience focused on product discovery, comparison tools, bulk inquiry workflows, and international buyer accessibility."
            },

            {
                type: "image",
                src: getCloudinaryUrl("product_detail_jmvovz.png"),
                alt: "Industrial Product Detail Page"
            },

            {
                type: "text",
                title: "The Solution",
                body: "We developed a modern wholesale e-commerce platform that combines an extensive industrial product catalog with business-focused purchasing features. Visitors can browse products by category, filter results, search specific items, compare multiple products side-by-side, and view detailed technical specifications. A dedicated wholesale inquiry system enables businesses to request container-load pricing and custom quotations directly from the website. Multi-currency support further improves accessibility for both domestic and international buyers."
            },

            {
                type: "image",
                src: getCloudinaryUrl("wholesale_tir9pk.png"),
                alt: "Bulk Wholesale Inquiry System"
            },

            {
                type: "text",
                title: "Key Features",
                body: "The platform includes a comprehensive industrial product catalog, category-based product browsing, advanced search and filtering, product comparison tools, dynamic bulk pricing, wholesale inquiry forms, multi-currency support (USD and INR), customer reviews, export information pages, responsive mobile experience, dark mode support, persistent shopping cart functionality, and detailed product specification management. These features create a professional purchasing experience for B2B buyers while helping the client generate qualified business inquiries."
            },

            {
                type: "text",
                title: "B2B Wholesale Experience",
                body: "Unlike traditional retail e-commerce websites, this platform was designed specifically for wholesale transactions. Buyers can evaluate products through detailed specifications, compare alternatives side-by-side, understand quantity-based discounts, and submit bulk order inquiries without unnecessary friction. This approach supports longer industrial purchasing cycles while improving lead quality for the sales team."
            },

            {
                type: "image",
                src: getCloudinaryUrl("contact_ont7ip.png"),
                alt: "Product Comparison Feature"
            },

            {
                type: "text",
                title: "Performance & User Experience",
                body: "The website was built with a performance-first approach using React, TypeScript, and modern frontend technologies. Fast page loading, responsive layouts, optimized product imagery, and intuitive navigation ensure a smooth browsing experience across desktop, tablet, and mobile devices. The result is a platform that feels modern, reliable, and aligned with the professional standards expected in international manufacturing and export industries."
            },

            {
                type: "text",
                title: "Results & Impact",
                body: "The final solution transformed Charu Enterprise's digital presence from a traditional product showcase into a modern B2B sales and lead-generation platform. Potential buyers can now explore the complete product range, compare options, understand wholesale pricing structures, and submit inquiries from a single destination. The platform improves buyer confidence, streamlines product discovery, strengthens brand credibility, and supports future growth in domestic and international markets."
            },

            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_j3foh3.png"),
                    getCloudinaryUrl("grid2_zqsre7.png")
                ]
            }

        ]
    },
    {
        id: "luxury-jewellery-ecommerce-platform",
        title: "Luxury Jewelry E-Commerce Platform",
        category: "Prebuilt",
        image: getCloudinaryUrl('cover_jbmyuv.png'),
        client: "Mindtrix Media",
        industry: "Luxury Jewelry & Retail",
        subtitle: "A premium jewelry e-commerce platform combining heritage craftsmanship, AI-powered shopping assistance, and immersive product experiences.",

        description: "A sophisticated luxury jewelry e-commerce platform designed to help premium jewelry brands showcase handcrafted collections online while delivering a personalized and engaging shopping experience. The platform combines a modern React frontend with a scalable Express.js backend, enabling seamless product management, intelligent customer assistance, and a high-converting online shopping journey.",

        services: [
            "UI/UX Design",
            "E-Commerce Platform",
            "Custom Website Design",
            "Online Presence",
            "Responsive Website Design"
        ],

        date: "2026",
        liveLink: "https://jewellery-online-store.vercel.app/",
        liveLabel: "View Live",
        buyLink: "/contact?project=luxury-jewellery-platform",
        customiseLink: "/contact?service=ecommerce-platform",
        year: "2026",
        featured: true,
        featuredTag: "Featured",

        content: [

            {
                type: "text",
                body: "Luxury jewelry shopping is deeply personal. Customers want to explore collections, compare designs, understand craftsmanship, and feel confident before making a purchase. Traditional e-commerce websites often fail to recreate the premium in-store experience that luxury jewelry buyers expect. Our client wanted a modern digital platform that could showcase handcrafted jewelry collections while delivering personalized assistance, immersive product exploration, and a seamless purchasing journey."
            },

            {
                type: "image",
                src: getCloudinaryUrl("home_kxafkz.png"),
                alt: "Luxury Jewelry E-Commerce Homepage"
            },

            {
                type: "text",
                title: "The Challenge",
                body: "The client needed more than a standard online jewelry store. They wanted a premium digital experience that reflected the elegance and heritage of their handcrafted collections. The platform had to support multiple jewelry categories including Gold, Diamond, Bridal, and Gemstone collections while maintaining exceptional performance and visual appeal. Additionally, customers often required guidance during product selection, making personalized assistance a critical component of the shopping experience. The challenge was to combine luxury branding, intelligent recommendations, virtual product visualization, and robust e-commerce functionality into a single platform."
            },

            {
                type: "image",
                src: getCloudinaryUrl("category_zo4qqk.png"),
                alt: "Luxury Jewelry Collection Showcase"
            },

            {
                type: "text",
                title: "Research & Strategy",
                body: "Our research focused on understanding the behavior of luxury jewelry buyers and identifying the factors that influence purchasing decisions. We discovered that customers spend significant time comparing designs, evaluating craftsmanship, and seeking reassurance before completing a purchase. To address these needs, we developed a strategy centered around immersive product presentation, AI-powered customer guidance, and AR-based virtual try-on experiences. The goal was to recreate the confidence and personalization of an in-store consultation within a digital environment while preserving the exclusivity associated with luxury jewelry brands."
            },

            {
                type: "image",
                src: getCloudinaryUrl("login_loyi6v.png"),
                alt: "AI Jewelry Shopping Assistant"
            },

            {
                type: "text",
                title: "The Solution",
                body: "We built a full-stack luxury jewelry e-commerce platform using React for the frontend and Express.js for the backend. The platform features a visually rich product catalog that allows customers to explore Gold, Diamond, Bridal, and Gemstone jewelry collections with ease. An AI-powered concierge, integrated through Google Gemini AI, provides personalized product recommendations, answers customer questions, and assists buyers throughout the shopping journey. To further improve purchase confidence, we implemented an augmented reality try-on experience that allows customers to visualize jewelry pieces before making a decision. Combined with secure commerce functionality and responsive design, the platform delivers a premium shopping experience across all devices."
            },

            {
                type: "image",
                src: getCloudinaryUrl("product_detail_htzane.png"),
                alt: "Jewelry Collection Details"
            },

            {
                type: "text",
                title: "Technology Architecture",
                body: "The application was developed using a modern full-stack architecture designed for scalability and long-term maintainability. The React frontend delivers fast page rendering, smooth navigation, and a responsive user experience, while the Express.js backend powers product management, category organization, order processing, and API integrations. The architecture enables efficient handling of large product inventories, dynamic content delivery, and seamless integration of AI-powered shopping assistance and AR functionality."
            },

            {
                type: "text",
                title: "Key Features",
                body: "The platform includes a luxury product catalog, AI shopping concierge powered by Google Gemini AI, AR virtual try-on functionality, responsive mobile-first design, dark and light mode support, category-based product browsing, scalable Express.js API architecture, secure order management workflows, optimized performance, SEO-friendly implementation, premium visual storytelling, and intuitive customer navigation. Together, these features create a modern jewelry shopping experience that combines technology with luxury retail expectations."
            },

            {
                type: "image",
                src: getCloudinaryUrl("cart_adaq4z.png"),
                alt: "AR Virtual Jewelry Try-On Experience"
            },

            {
                type: "text",
                title: "SEO & Customer Discovery Optimization",
                body: "The platform was designed with search visibility and customer discovery in mind. Product pages, category pages, metadata structures, image optimization, and content architecture were built to improve rankings for high-intent keywords such as luxury jewelry online, diamond jewelry collections, bridal jewelry shopping, handcrafted gold jewelry, gemstone jewelry store, virtual jewelry try-on, and premium jewelry e-commerce. Structured content and semantic page architecture also improve discoverability across modern AI-powered search experiences and answer engines."
            },

            {
                type: "text",
                title: "Results & Impact",
                body: "The completed platform successfully transformed a traditional jewelry business into a modern digital retail experience. Customers can now explore premium collections, receive personalized recommendations, virtually try on products, and make informed purchasing decisions from any device. The AI concierge reduces customer uncertainty, the AR experience increases engagement, and the premium interface strengthens brand perception. The result is a luxury e-commerce platform that enhances customer confidence, improves product discovery, and creates a scalable foundation for long-term online growth."
            },

            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_sjsaru.png"),
                    getCloudinaryUrl("grid2_ur4cpl.png")
                ]
            }

        ]
    },
    {
        id: "jewellery-crm-system",
        title: "Jewellery Management System (CRM)",
        category: "Prebuilt",
        image: getCloudinaryUrl("home_zpa3i8.png"),
        client: "Mindtrix Media",
        industry: "Jewellery, Gold & Diamond Retail",
        subtitle: "A comprehensive CRM platform designed to streamline jewellery retail operations, inventory management, financial services, and business administration from a single centralized system.",

        description: "A powerful customer relationship management (CRM) solution built specifically for jewellery retailers, gold businesses, and diamond merchants. The platform integrates POS operations, inventory management, gold loan services, accounting, artisan management, CRM, HR, and vault management into one centralized ecosystem, enabling businesses to improve operational efficiency, reduce manual work, and gain real-time visibility across every department.",

        services: [
            "Business Analysis",
            "UI/UX Design",
            "CRM Development",
            "POS System Development",
            "Inventory Management System",
            "Accounting Integration",
            "HR Management System",
            "Custom Software Development",
            "Responsive Dashboard Development"
        ],

        liveLink: "/contact?project=jewellery-crm",
        liveLabel: "Request Demo",
        buyLink: "/contact?project=jewellery-crm",
        customiseLink: "/contact?service=crm-development",
        year: "2025-26",
        featured: true,
        featuredTag: "Featured",

        content: [

            {
                type: "text",
                body: "Managing a modern jewellery business involves much more than selling products. Retailers must handle inventory tracking, custom orders, gold loans, artisan payments, customer relationships, accounting, vault management, and employee operations simultaneously. Many jewellery businesses still rely on disconnected software systems and manual processes, leading to inefficiencies, data inconsistencies, and operational risks. Our client required a centralized ERP platform that could manage every aspect of their jewellery business while providing complete visibility and control across departments."
            },

            {
                type: "image",
                src: getCloudinaryUrl("home_zpa3i8.png"),
                alt: "Jewellery CRM Dashboard"
            },

            {
                type: "text",
                title: "The Challenge",
                body: "The client operated multiple business processes that depended heavily on manual coordination between departments. Sales teams struggled with inventory synchronization, accounting records required repetitive data entry, artisan work tracking lacked transparency, and gold loan operations demanded accurate interest calculations and collateral management. Additionally, the business needed a secure vault management system, comprehensive customer relationship management tools, and real-time business reporting. The challenge was to create a unified CRM solution capable of handling complex jewellery industry workflows without increasing operational complexity."
            },

            {
                type: "image",
                src: getCloudinaryUrl("hr_payroll_y7pbrk.png"),
                alt: "Jewellery Business Operations Management"
            },

            {
                type: "text",
                title: "Research & Strategy",
                body: "Before development, we conducted an extensive analysis of jewellery retail operations, inventory workflows, customer journeys, financial processes, and artisan management systems. We identified that most inefficiencies originated from fragmented data sources and disconnected software tools. Our strategy focused on creating a centralized CRM architecture where every department could access real-time information through a unified platform. Special attention was given to industry-specific requirements such as gold loan management, jewellery inventory tracking by purity and weight, artisan production workflows, and secure vault operations."
            },

            {
                type: "image",
                src: getCloudinaryUrl("billing_ii7h1d.png"),
                alt: "Jewellery POS and Billing System"
            },

            {
                type: "text",
                title: "The Solution",
                body: "We developed a fully integrated Jewellery CRM Management System that connects sales, inventory, finance, customer management, procurement, HR, and operational workflows into a single ecosystem. The platform features an advanced Point of Sale (POS) system for seamless billing, real-time inventory management for jewellery and raw materials, purchase and order management, repair tracking, customer relationship management, accounting modules, artisan work allocation, HR management, and secure vault administration. A comprehensive analytics dashboard provides business owners with actionable insights, helping them make informed decisions and improve operational performance."
            },

            {
                type: "image",
                src: getCloudinaryUrl("accounts_eduomi.png"),
                alt: "Gold Loan Management Module"
            },

            {
                type: "text",
                title: "Industry-Specific Modules",
                body: "Unlike generic ERP platforms, this solution was specifically engineered for the jewellery industry. The Gold Loan module enables businesses to manage collateral-based loans, calculate interest automatically, monitor repayment schedules, and track pledged assets securely. The Tejori (Vault) Management module provides secure tracking of high-value jewellery and precious metals. The Artisan Management system helps assign manufacturing tasks, track production progress, calculate payments, and maintain transparency throughout the jewellery crafting process."
            },

            {
                type: "text",
                title: "Key Features",
                body: "The CRM platform includes Point of Sale (POS), jewellery inventory management, gold and diamond stock tracking, purchase management, order processing, repair workflow management, customer relationship management (CRM), lead tracking, gold loan management, accounting and financial ledgers, artisan management, partner management, HR operations, secure vault management, analytics dashboards, master data configuration, role-based access controls, automated reporting, and centralized business administration tools. Every module is designed to work seamlessly together, eliminating duplicate data entry and improving operational accuracy."
            },

            {
                type: "image",
                src: getCloudinaryUrl("settings_cjelxs.png"),
                alt: "CRM Analytics Dashboard"
            },

            {
                type: "text",
                title: "Technology & Scalability",
                body: "The platform was architected to support growing jewellery businesses ranging from single-store retailers to multi-branch enterprises. Real-time synchronization ensures accurate inventory and financial records across departments. The modular architecture allows businesses to expand functionality as operational requirements evolve while maintaining performance, security, and data integrity."
            },

            {
                type: "text",
                title: "Results & Impact",
                body: "The Jewellery CRM System transformed business operations by replacing fragmented workflows with a centralized digital ecosystem. Teams gained real-time visibility into inventory, sales, financial performance, customer activity, and production processes. Administrative overhead was significantly reduced through automation, while reporting accuracy and operational transparency improved substantially. The client now manages complex jewellery retail operations from a single platform, enabling faster decision-making, improved customer service, and sustainable business growth."
            },

            {
                type: "text",
                title: "Why Businesses Choose This Jewellery CRM",
                body: "This ERP solution is ideal for jewellery retailers, gold merchants, diamond traders, jewellery manufacturers, wholesalers, and multi-branch jewellery businesses seeking a complete digital transformation platform. By combining POS, inventory, CRM, accounting, gold loan management, artisan tracking, and business intelligence into one system, the platform eliminates operational silos and creates a more efficient, scalable, and profitable business environment."
            },

            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_gthtl9.png"),
                    getCloudinaryUrl("grid2_xmq5fm.png"),
                ]
            }

        ]
    },
    {
        id: "car-rental-erp",
        title: "Car Rental System (ERP)",
        category: "Prebuilt",
        image: getCloudinaryUrl('home_w6npmd.png'),
        client: "Mindtrix Media",
        industry: "Transportation, Driver Management & Car Rental",
        subtitle: "A comprehensive Car Rental ERP & CRM platform designed to automate operations, bookings, billing, finance management, and customer relationships from a single dashboard.",

        description: "Car Rental System is an all-in-one Car Rental Management Software built to help rental companies streamline operations, automate invoicing, manage drivers and employees, track vehicle performance, and gain real-time business insights. The platform combines ERP, CRM, Booking Automation, and Financial Reporting into a unified system that improves operational efficiency and profitability.",

        services: [
            "Product Strategy",
            "UI/UX Design",
            "Driver Management System",
            "Booking & Dispatch Automation",
            "Billing Automation",
            "Financial Reporting",
            "ERP Development",
            "Responsive Web Application"
        ],

        liveLink: "/contact?project=car-rental-system",
        liveLabel: "Request Demo",
        buyLink: "/contact?project=car-rental-system",
        customiseLink: "/contact?service=product-development",
        year: "2025-26",
        featured: true,
        featuredTag: "Featured",

        content: [

            {
                type: "text",
                body: "Managing a car rental business involves much more than booking vehicles. Companies must track fleet availability, manage drivers, monitor maintenance schedules, generate invoices accurately, maintain customer relationships, and oversee financial performance. Many rental businesses still rely on disconnected tools and spreadsheets, creating operational inefficiencies and limiting growth. FleetStream ERP was developed to centralize every critical business function into one intelligent platform that simplifies operations while improving profitability and customer satisfaction."
            },

            {
                type: "image",
                src: getCloudinaryUrl("home_w6npmd.png"),
                alt: "FleetStream ERP Dashboard"
            },

            {
                type: "text",
                title: "The Challenge",
                body: "The client required a modern ERP platform capable of handling the complete lifecycle of a vehicle rental business. Existing systems lacked centralized fleet visibility, automated billing capabilities, real-time reporting, and seamless coordination between operations, finance, HR, and customer management. The business needed a scalable solution that could manage vehicle inventory, booking workflows, drivers, employees, vendors, clients, expenses, and invoicing from a single interface while remaining intuitive and visually appealing for everyday use."
            },

            {
                type: "image",
                src: getCloudinaryUrl("car_hdcz6b.png"),
                alt: "Fleet Management Module"
            },

            {
                type: "text",
                title: "Research & Strategy",
                body: "We conducted extensive analysis of fleet management workflows, rental business operations, dispatch processes, and financial reporting requirements. The research revealed that rental companies spend significant time managing manual bookings, invoice calculations, vehicle allocation, and operational tracking. To address these challenges, we designed a modular ERP architecture where every department—from fleet operations and HR to finance and CRM—works within a unified ecosystem. The goal was to eliminate repetitive tasks, improve data accuracy, and provide decision-makers with real-time visibility into business performance."
            },

            {
                type: "image",
                src: getCloudinaryUrl("driver_za1vdr.png"),
                alt: "Booking and Dispatch Management"
            },

            {
                type: "text",
                title: "The Solution",
                body: "FleetStream ERP was built as a comprehensive business management platform tailored specifically for car rental and fleet-based organizations. The system provides end-to-end vehicle lifecycle management, client relationship management, employee administration, intelligent booking workflows, automated billing calculations, financial tracking, and advanced reporting. Through a centralized dashboard, operators can monitor vehicle status, dispatch trips, track expenses, manage customer accounts, and analyze revenue trends in real time. The platform's responsive design and full dark mode support ensure a modern user experience across desktops, tablets, and mobile devices."
            },

            {
                type: "image",
                src: getCloudinaryUrl("accounts_oaasvz.png"),
                alt: "Automated Billing Engine"
            },

            {
                type: "text",
                title: "Intelligent Billing & Revenue Optimization",
                body: "One of the most powerful components of FleetStream ERP is its intelligent billing engine. The platform automatically calculates rental charges using advanced pricing rules such as Higher of Kilometer vs Hour billing logic, client-specific pricing tiers, vehicle category multipliers, taxation rules, and arbitrage-based revenue optimization. This automation significantly reduces manual calculations, minimizes billing errors, and ensures maximum profitability on every rental transaction."
            },

            {
                type: "text",
                title: "Core Modules",
                body: "FleetStream ERP includes an Interactive Business Dashboard, Fleet Master Management, Vehicle Maintenance Tracking, Insurance & Documentation Monitoring, Client CRM, Vendor CRM, Driver Management, Employee Management, Shift Feedback Tracking, Booking & Dispatch System, Garage Out & Garage In Operations, Automated Invoice Generation, Expense Management, Fuel Tracking, Financial Reporting, Business Analytics, Tax Configuration, Pricing Management, and Operational Settings Control."
            },

            {
                type: "image",
                src: getCloudinaryUrl("user_jj4mzh.png"),
                alt: "CRM and Client Management"
            },

            {
                type: "text",
                title: "Key Features",
                body: "The platform offers real-time fleet tracking, centralized vehicle management, booking automation, driver assignment workflows, employee management, client and vendor CRM, intelligent invoice generation, configurable tax settings, fuel expense monitoring, maintenance tracking, operational analytics, revenue reporting, role-based access control, responsive design, and complete dark mode support. Every feature is designed to improve operational efficiency while providing business owners with greater control over daily activities."
            },

            {
                type: "text",
                title: "Technology & User Experience",
                body: "A major focus during development was usability. FleetStream ERP features a modern interface with intuitive navigation, data-rich dashboards, responsive layouts, and seamless dark/light mode switching. Complex operational workflows were simplified through user-friendly forms, visual indicators, automated calculations, and actionable reporting. This enables both administrators and operational staff to perform tasks efficiently without extensive training."
            },

            {
                type: "image",
                src: getCloudinaryUrl("audit_ubmwzq.png"),
                alt: "Financial Reporting Dashboard"
            },

            {
                type: "text",
                title: "Results & Impact",
                body: "FleetStream ERP transformed the rental management process by bringing operations, finance, CRM, HR, and fleet management into a single integrated system. The platform reduced manual administrative work, improved invoice accuracy, streamlined booking workflows, increased operational transparency, and enabled faster business decisions through real-time reporting. Rental businesses can now scale operations more effectively while maintaining complete visibility into vehicles, customers, employees, and financial performance."
            },

            {
                type: "text",
                title: "Why FleetStream ERP Stands Out",
                body: "Unlike generic ERP solutions, FleetStream ERP is purpose-built for the car rental and fleet management industry. Its specialized modules address real operational challenges faced by vehicle rental companies, including dispatch coordination, fleet utilization, billing automation, maintenance scheduling, driver management, and revenue optimization. The result is a scalable digital ecosystem that helps rental businesses improve efficiency, reduce costs, and accelerate growth."
            },

            {
                type: "grid",
                images: [
                    getCloudinaryUrl("grid1_hszak8.png"),
                    getCloudinaryUrl("grid2_recfrn.png"),
                ]
            }

        ]
    }

];
