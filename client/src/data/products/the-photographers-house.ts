import { getCloudinaryUrl } from "@/utils/cloudinary";

export const thePhotographersHouse = {
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
};
