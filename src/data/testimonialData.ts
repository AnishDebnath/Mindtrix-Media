export interface ImageTestimonial {
    name: string;
    title: string;
    text: string;
    image: string;
}

export interface ScrollTestimonial {
    handle: string;
    name: string;
    text: string;
    avatar: string;
}

export interface ProductTestimonial {
    name: string;
    handle: string;
    avatar: string;
    text: string;
}

export const imageTestimonials: ImageTestimonial[] = [
    {
        name: "Sarah Jenkins",
        title: "CEO, UrbanThreads",
        text: "Mindtrix Media built our e-commerce store from scratch. Our conversion rate jumped by 40% in the first month. Highly recommended for scalable online stores.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
    },
    {
        name: "David Chen",
        title: "Operations Manager, LogiFlow",
        text: "The custom CRM they developed saved our team 20+ hours of manual work every week. Their business automation systems are truly top-notch.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
    },
    {
        name: "Elena Rodriguez",
        title: "Founder, Bloom Digital",
        text: "Fast, professional, and SEO-focused. Our new website now ranks on the first page for all our target keywords. They are the best in web development.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
    }
];

export const scrollTestimonials: ScrollTestimonial[] = [
    {
        handle: "@tech_founder",
        name: "Alex Rivera",
        text: "The speed optimization on our site is insane. 99+ score on PageSpeed. Mindtrix lives up to the hype!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@ecommerce_king",
        name: "Marcus Thorne",
        text: "Finally found a partner who understands both design and business logic. The checkout flow is so smooth now.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@biz_grower",
        name: "Linda Wu",
        text: "Scaling our operations was a mess until we got our custom business dashboard. Incredible ROI.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@startup_guru",
        name: "Jameson P.",
        text: "The free prototype phase was a game-changer. We knew exactly what we were getting. Zero surprises.",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80"
    },
    {
        handle: "@retail_pro",
        name: "Sophia Lane",
        text: "Inventory management used to be a nightmare. Now it's fully automated. Thank you Mindtrix!",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80"
    }
];

export const productTestimonials: ProductTestimonial[] = [
    {
        name: "Sarah Jenkins",
        handle: "@sjenkins_ceo",
        avatar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&q=80",
        text: "Mindtrix Media completely transformed our online presence. The new UI/UX design and custom e-commerce web development skyrocketed our conversion rates overnight.",
    },
    {
        name: "David Chen",
        handle: "@davidc_tech",
        avatar: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&q=80",
        text: "Incredible custom software development! They built a scalable SaaS platform for our operations that handles thousands of daily users with zero lag. Exceptional backend architecture.",
    },
    {
        name: "Elena Rodriguez",
        handle: "@elena_digital",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
        text: "The SEO-optimized website design we received from Mindtrix pushed us to page one on Google. Their modern tech stack and attention to responsive design is simply unmatched.",
    },
    {
        name: "Marcus Thorne",
        handle: "@ecommerce_king",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        text: "I bought one of their prebuilt e-commerce templates and it was flawlessly integrated. Fastest loading speeds we've ever had—our bounce rate dropped by 30%.",
    },
    {
        name: "Jameson P.",
        handle: "@startup_guru",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
        text: "From website wireframing to full stack app development, the Mindtrix team delivered a premium digital product perfectly suited for our ambitious startup launch.",
    },
    {
        name: "Alex Rivera",
        handle: "@tech_founder",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
        text: "We needed a complete brand identity redesign along with a custom mobile application. They delivered a world-class UI that our users absolutely love logging into.",
    },
    {
        name: "Sophia Lane",
        handle: "@retail_pro",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&q=80",
        text: "Their strategic UX consulting uncovered huge gaps in our customer journey. The subsequent website redesign generated a 200% ROI within the first three months of launching.",
    },
    {
        name: "Michael Ross",
        handle: "@mross_business",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
        text: "Truly a top-tier digital agency. They seamlessly migrated our legacy platform to a modern React stack. Blazing fast web apps, clean code, and brilliant frontend design.",
    }
];
