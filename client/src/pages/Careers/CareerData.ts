export interface Opening {
    title: string;
    type: string;
    location: string;
    description: string;
    perks: string[];
    applyEmail: string;
    whatsapp?: string;
}

export const openings: Opening[] = [
    {
        title: 'Freelance Sales Executive (Female)',
        type: 'Freelance',
        location: 'Kolkata · Work From Home',
        description: 'Mindtrix Media is looking for a passionate, self-driven, and confident Female Freelance Sales Executive to join our growing team. If you enjoy meeting new people, building relationships, and helping businesses embrace digital transformation, this opportunity is for you.',
        perks: [
            'Commission-based role with no fixed salary and unlimited earning potential.',
            'Female candidates only, based in Kolkata; graduate preferred.',
            'Fluent in English, Hindi & Bengali.',
            'Own laptop preferred.',
            'Strong communication, interpersonal & sales skills.',
            'Self-motivated; prior sales experience is a plus, not mandatory.',
        ],
        applyEmail: 'mindtrixmediaindia@gmail.com',
        whatsapp: '918910092451',
    },
];