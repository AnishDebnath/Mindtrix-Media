import { clientProjects } from '../clients';
import { prebuiltProjects } from '../pre-built-projects';
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

export const categories = ["Clients", "Pre-built"];

export const productItems = [jewelleryCrmSystem, carRentalErp];

export const products: Product[] = [...clientProjects, ...prebuiltProjects, ...productItems];
