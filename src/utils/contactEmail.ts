const API_BASE_URL = '/api';

export const sendContactEmail = async (formData: {
    fullName: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
}) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to send contact email');
        }

        return data;
    } catch (error: any) {
        console.error('Contact Email Error:', error);
        throw error;
    }
};
