import { thePhotographersHouse } from './the-photographers-house';
import { ecommercePlatform } from './ecommerce-platform';
import { digitalBusinessCard } from './digital-business-card';
import { fenceFittingsEcommerce } from './fence-fittings-ecommerce';
import { luxuryJewelleryEcommercePlatform } from './luxury-jewellery-ecommerce-platform';
import { jewelleryCrmSystem } from './jewellery-crm-system';
import { carRentalErp } from './car-rental-erp';

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
    content: {
        type: string;
        src?: string;
        alt?: string;
        className?: string;
        title?: string;
        body?: string;
        images?: string[];
        [key: string]: any;
    }[];
}

export const categories = ["Prebuilt", "Customized"];

export const products: Product[] = [thePhotographersHouse, ecommercePlatform, digitalBusinessCard, fenceFittingsEcommerce, luxuryJewelleryEcommercePlatform, jewelleryCrmSystem, carRentalErp];
