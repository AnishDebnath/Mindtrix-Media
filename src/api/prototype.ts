// ponytail: prototype API call
const API_BASE_URL = '/api';

export interface PrototypeFormData {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    website?: string;
    description: string;
}

export const sendPrototypeEmail = async (formData: PrototypeFormData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/prototype`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to send prototype request');
        }

        return data;
    } catch (error: any) {
        console.error('Prototype Email Error:', error);
        throw error;
    }
};
