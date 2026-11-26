import logoImg from "@/assets/brand logo/gaurlink.png";
import coverImg from "@/assets/projects/gaurlink/cover.png";
import homeImg from "@/assets/projects/gaurlink/homepage.png";
import trustImg from "@/assets/projects/gaurlink/manufacturing-credentials.png";
import catalogueImg from "@/assets/projects/gaurlink/product-catalogue.png";
import productDetailImg from "@/assets/projects/gaurlink/product-specifications.png";
import orderingImg from "@/assets/projects/gaurlink/factory-direct-ordering-journey.png";
import logisticsImg from "@/assets/projects/gaurlink/US-freight-coverage.png";
import mobileImg from "@/assets/projects/gaurlink/wholesale-mobile-experience.png";

export const gaurLink = {
    id: "gaurlink",
    title: "Fence Hardware Website & B2C Catalogue",
    category: "Customized",
    image: coverImg,
    logo: logoImg,
    client: "GaurLink",
    industry: "Fence Hardware Manufacturing & B2C Supply",
    subtitle: "A digital platform for factory-direct fence fittings, custom hardware, and nationwide US delivery.",
    description:
        "GaurLink needed a confident B2C website that makes factory capability, product range, quality standards, and wholesale ordering easy to understand. The result positions the business as a direct manufacturer of pressed steel, malleable iron, aluminum, and custom OEM fence hardware for supply yards, distributors, contractors, and perimeter-security projects across the United States.",
    services: [
        "Website Strategy",
        "UI/UX Design",
        "B2C Website Development",
        "Product Catalogue Design",
        "RFQ Lead Generation",
        "Technical Content Architecture",
        "Responsive Web Design",
        "SEO-Ready Information Structure"
    ],
    liveLink: "https://www.gaurlink.com/",
    liveLabel: "View Live",
    buyLink: "/contact?project=gaurlink",
    customiseLink: "/contact?service=b2b-website-development",
    year: "2026",
    featured: true,
    featuredTag: "Industrial B2B Website",

    content: [
        {
            type: "text",
            body:
                "GaurLink is built for wholesale decision-making. The website immediately communicates the company’s direct-manufacturer model, core material capabilities, factory pricing, ASTM-focused production, and duty-paid delivery support for US buyers."
        },
        {
            type: "image",
            src: homeImg,
            alt: "GaurLink wholesale fence fittings manufacturing homepage design"
        },
        {
            type: "text",
            body:
                "The homepage gives fence supply yards and commercial contractors a fast route to the information they need: what is manufactured, why the hardware is dependable, how to request pricing, and how freight reaches their warehouse. The hierarchy is clear, practical, and conversion-focused."
        },
        {
            type: "image",
            src: trustImg,
            alt: "GaurLink manufacturing capability and quality credentials section"
        },
        {
            type: "text",
            body:
                "Trust is supported through specific business proof points, including 55+ years of manufacturing heritage, more than 150 million pieces produced, ISO 9001:2015 quality messaging, ASTM-aligned production, custom tooling capability, and duty-paid US freight."
        },
        {
            type: "image",
            src: catalogueImg,
            alt: "GaurLink fence fittings and hardware product catalogue"
        },
        {
            type: "text",
            body:
                "The product experience organizes fence hardware into clear, scannable product groups. Barbed arms, gate rollers, brace bands, box hinges, clamps, post caps, rail ends, and fasteners are presented as commercially useful product families instead of a generic gallery."
        },
        {
            type: "image",
            src: productDetailImg,
            alt: "GaurLink industrial product specifications and wholesale hardware detail"
        },
        {
            type: "text",
            body:
                "Detailed product content supports purchase confidence with materials, available sizes, product applications, and wholesale relevance. This gives distributors and contractors a practical reference point before sending part numbers, quantities, or custom drawings."
        },
        {
            type: "image",
            src: orderingImg,
            alt: "GaurLink factory-direct ordering process interface"
        },
        {
            type: "text",
            body:
                "A four-step ordering journey turns a complex procurement process into a simple path: send requirements, receive a direct factory quote, move through precision production and quality control, then receive duty-paid delivery at the warehouse."
        },
        {
            type: "image",
            src: logisticsImg,
            alt: "GaurLink US distribution and duty-paid freight coverage"
        },
        {
            type: "text",
            body:
                "Nationwide freight messaging makes the service footprint visible. Distribution support is framed around US wholesale buyers, pallets and container-volume orders, and delivery directly to the customer’s yard or warehouse."
        },
        {
            type: "results",
            title: "Built to Turn Technical Interest Into Qualified Wholesale Enquiries",
            body:
                "The final website combines industrial authority with an easy quote journey. It gives commercial buyers the confidence to assess product fit, validate manufacturing capability, and begin a direct factory conversation without unnecessary friction."
        },
        {
            type: "image",
            src: mobileImg,
            alt: "GaurLink wholesale mobile experience"
        }
    ]
};
