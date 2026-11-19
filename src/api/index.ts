// ponytail: unified API client
async function postApi<T>(endpoint: string, body: unknown): Promise<T> {
    const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
}

export interface ContactFormData {
    fullName: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
}

export interface PrototypeFormData {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    website?: string;
    description: string;
}

export const sendContactEmail = (formData: ContactFormData) =>
    postApi<{ success: boolean; message: string }>('contact', formData);

export const sendPrototypeEmail = (formData: PrototypeFormData) =>
    postApi<{ success: boolean; message: string }>('prototype', formData);
