interface ContactConfirmationData {
    fullName: string;
    purpose: string;
}

export const contactConfirmationTemplate = ({ fullName, purpose }: ContactConfirmationData) => `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; border-radius: 16px; overflow: hidden; border: 1px solid #1A1A1A; box-shadow: 0 4px 30px rgba(0,0,0,0.5);">
        <div style="background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%); padding: 30px; text-align: center; border-bottom: 1px solid #222;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Message Received!</h1>
        </div>
        <div style="padding: 40px; text-align: center;">
            <div style="margin-bottom: 25px;">
                <span style="background: #1e1b12; color: #ffc659; padding: 8px 16px; border-radius: 30px; font-size: 14px; font-weight: 600; border: 1px solid #3d341f;">Success</span>
            </div>
            <h2 style="color: #ffffff; margin: 0 0 15px 0; font-size: 22px;">Hi ${fullName},</h2>
            <p style="color: #94A3B8; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Thank you for reaching out to <strong style="color: #ffffff;">Mindtrix Media</strong>. We've received your message regarding <span style="color: #ffc659; font-weight: 600;">${purpose}</span> and our team will get back to you within 24 hours.
            </p>
            <div style="display: inline-block; background: #ffc659; color: #0A0A0A; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 16px;">We'll talk soon!</div>
        </div>
        <div style="background: linear-gradient(135deg, #111111 0%, #0A0A0A 100%); padding: 20px; text-align: center; border-top: 1px solid #1A1A1A;">
            <p style="margin: 0; color: #64748B; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
        </div>
    </div>
`;



