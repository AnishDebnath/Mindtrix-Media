import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// @ts-ignore
import SibApiV3Sdk from 'sib-api-v3-sdk';

console.log('Server is starting up...');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Brevo SDK Setup
let apiInstance: any;

try {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    console.log('Brevo SDK initialized successfully.');
} catch (error) {
    console.error('Failed to initialize Brevo SDK:', error);
}

// Sender/Recipient settings from .env
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'hello@mindtrixmedia.com';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'hello@mindtrixmedia.com';
const RECIPIENT_NAME = process.env.RECIPIENT_NAME || 'Mindtrix Media Team';

/**
 * Reusable helper to send email via Brevo
 */
const sendEmail = async (
    to: { email: string, name: string },
    subject: string,
    htmlContent: string,
    replyTo?: { email: string, name: string }
) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { name: RECIPIENT_NAME, email: SENDER_EMAIL };
    sendSmtpEmail.to = [to];
    if (replyTo) {
        sendSmtpEmail.replyTo = replyTo;
    }
    return await apiInstance.sendTransacEmail(sendSmtpEmail);
};

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, purpose, message } = req.body;
    console.log(`Received contact form submission from: ${email}`);

    try {
        // 1. Send notification to ADMIN
        const adminHtml = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #f1f1f1; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #111111 0%, #333333 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Contact Submission</h1>
                </div>
                <div style="padding: 40px;">
                    <p style="color: #666; font-size: 16px; margin-bottom: 30px;">You've received a new message through the website contact form.</p>
                    
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                        <p style="margin: 0 0 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>
                        <p style="margin: 0;"><strong>Purpose:</strong> ${purpose}</p>
                    </div>

                    <div style="border-left: 4px solid #FF5C00; padding-left: 20px; margin: 30px 0;">
                        <p style="margin: 0 0 10px 0; color: #111; font-weight: 600;">Message:</p>
                        <p style="margin: 0; color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
                <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #f1f1f1;">
                    <p style="margin: 0; color: #888; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
                </div>
            </div>
        `;

        await sendEmail(
            { email: RECIPIENT_EMAIL, name: RECIPIENT_NAME },
            `New Contact from ${fullName}`,
            adminHtml,
            { email, name: fullName }
        );

        // 2. Send confirmation to SENDER
        const senderHtml = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #f1f1f1; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #111111 0%, #333333 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Message Received!</h1>
                </div>
                <div style="padding: 40px; text-align: center;">
                    <div style="margin-bottom: 25px;">
                        <span style="background: #e6fffa; color: #0694a2; padding: 8px 16px; border-radius: 30px; font-size: 14px; font-weight: 600;">Success</span>
                    </div>
                    <h2 style="color: #111; margin: 0 0 15px 0; font-size: 22px;">Hi ${fullName},</h2>
                    <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        Thank you for reaching out to Mindtrix Media. We've received your message regarding <strong>${purpose}</strong> and our team will get back to you within 24 hours.
                    </p>
                    <div style="display: inline-block; background: #111; color: #fff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600;">We'll talk soon!</div>
                </div>
                <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #f1f1f1;">
                    <p style="margin: 0; color: #888; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
                </div>
            </div>
        `;

        await sendEmail(
            { email, name: fullName },
            `Thanks for contacting Mindtrix Media!`,
            senderHtml
        );

        console.log(`Emails sent successfully via Brevo for contact form.`);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error: any) {
        console.error('Brevo API Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email.',
            error: error.message
        });
    }
});

// Prototype request endpoint
app.post('/api/prototype', async (req, res) => {
    const { fullName, email, phone, projectType, website, description } = req.body;
    console.log(`Received prototype request from: ${email}`);

    try {
        // 1. Send notification to ADMIN
        const adminHtml = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #f1f1f1; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #FF5C00 0%, #FF8A00 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Prototype Request</h1>
                </div>
                <div style="padding: 40px;">
                    <p style="color: #666; font-size: 16px; margin-bottom: 30px;">High Priority: A new prototype has been requested from the website.</p>
                    
                    <div style="background: #fff8f5; padding: 25px; border-radius: 12px; margin-bottom: 30px; border: 1px solid #ffe4d6;">
                        <p style="margin: 0 0 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Project Type:</strong> ${projectType}</p>
                        <p style="margin: 0;"><strong>Current Website:</strong> ${website || 'Not provided'}</p>
                    </div>

                    <div style="border-left: 4px solid #111; padding-left: 20px; margin: 30px 0;">
                        <p style="margin: 0 0 10px 0; color: #111; font-weight: 600;">Project Description:</p>
                        <p style="margin: 0; color: #444; line-height: 1.6; white-space: pre-wrap;">${description}</p>
                    </div>
                </div>
                <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #f1f1f1;">
                    <p style="margin: 0; color: #888; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
                </div>
            </div>
        `;

        await sendEmail(
            { email: RECIPIENT_EMAIL, name: RECIPIENT_NAME },
            `New Prototype Request: ${fullName}`,
            adminHtml,
            { email, name: fullName }
        );

        // 2. Send confirmation to SENDER
        const senderHtml = `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #f1f1f1; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #FF5C00 0%, #FF8A00 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Prototype Requested!</h1>
                </div>
                <div style="padding: 40px; text-align: center;">
                    <div style="margin-bottom: 25px;">
                        <span style="background: #fff5f2; color: #FF5C00; padding: 8px 16px; border-radius: 30px; font-size: 14px; font-weight: 600;">Priority Request</span>
                    </div>
                    <h2 style="color: #111; margin: 0 0 15px 0; font-size: 22px;">Hi ${fullName},</h2>
                    <p style="color: #444; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        Thank you for requesting a prototype for your <strong>${projectType}</strong> project. Our creative team has been notified and we're already starting to look into your requirements.
                    </p>
                    <p style="color: #666; font-size: 14px; margin-bottom: 35px;">
                        We'll reach out to you shortly to discuss the next steps.
                    </p>
                    <div style="display: inline-block; background: #FF5C00; color: #fff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600;">Talk to you soon!</div>
                </div>
                <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #f1f1f1;">
                    <p style="margin: 0; color: #888; font-size: 13px;">&copy; ${new Date().getFullYear()} Mindtrix Media. All rights reserved.</p>
                </div>
            </div>
        `;

        await sendEmail(
            { email, name: fullName },
            `Mindtrix Media: We received your prototype request!`,
            senderHtml
        );

        console.log(`Emails sent successfully via Brevo for prototype request.`);
        res.status(200).json({ success: true, message: 'Prototype request sent successfully!' });
    } catch (error: any) {
        console.error('Brevo API Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send request.',
            error: error.message
        });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
