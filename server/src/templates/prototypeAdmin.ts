interface PrototypeAdminData {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    website?: string;
    description: string;
}

export const prototypeAdminTemplate = ({ fullName, email, phone, projectType, website, description }: PrototypeAdminData) => {
    const cleanPhone = phone.replace(/\D/g, '');

    return `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #f1f1f1; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #FF5C00 0%, #FF8A00 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Prototype Request</h1>
        </div>
        <div style="padding: 40px;">
            <p style="color: #666; font-size: 16px; margin-bottom: 30px;">High Priority: A new prototype has been requested from the website.</p>
            
            <div style="background: #fff8f5; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #ffe4d6;">
                <p style="margin: 0 0 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #FF5C00; text-decoration: none;">${email}</a></p>
                <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #FF5C00; text-decoration: none;">${phone}</a></p>
                <p style="margin: 0 0 10px 0;"><strong>Project Type:</strong> ${projectType}</p>
                <p style="margin: 0;"><strong>Current Website:</strong> ${website || 'Not provided'}</p>
            </div>

            <div style="border-left: 4px solid #111; padding-left: 20px; margin: 30px 0;">
                <p style="margin: 0 0 10px 0; color: #111; font-weight: 600;">Project Description:</p>
                <p style="margin: 0; color: #444; line-height: 1.6; white-space: pre-wrap;">${description}</p>
            </div>

            <div style="margin-top: 40px; border-top: 1px solid #eee; pt: 30px; padding-top: 30px;">
                <p style="color: #111; font-weight: 600; margin-bottom: 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Quick Actions:</p>
                <a href="mailto:${email}" style="background: #111; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; margin-right: 10px; margin-bottom: 10px;">Reply to Client</a>
                <a href="https://wa.me/${cleanPhone}" style="background: #25D366; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; margin-bottom: 10px;">WhatsApp Reply</a>
            </div>
        </div>
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #f1f1f1;">
            <p style="margin: 0; color: #888; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
        </div>
    </div>
`;
};

