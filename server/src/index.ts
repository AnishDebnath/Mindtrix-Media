import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// @ts-ignore
import SibApiV3Sdk from 'sib-api-v3-sdk';
import { 
    contactAdminTemplate, 
    contactConfirmationTemplate, 
    prototypeAdminTemplate, 
    prototypeConfirmationTemplate 
} from './templates/index.js';


console.log('Server is starting up...');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sender/Recipient settings
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'hello@mindtrixmedia.com';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'mindtrixmediaindia@gmail.com';
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
    const apiKey = process.env.BREVO_API_KEY;
    
    if (!apiKey) {
        throw new Error('BREVO_API_KEY is not defined. Please check your Vercel Environment Variables.');
    }

    try {
        // Initialize API client in-scope for absolute reliability in serverless
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const auth = defaultClient.authentications['api-key'];
        auth.apiKey = apiKey;

        const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        
        sendSmtpEmail.subject = subject;
        sendSmtpEmail.htmlContent = htmlContent;
        sendSmtpEmail.sender = { name: RECIPIENT_NAME, email: SENDER_EMAIL };
        sendSmtpEmail.to = [to];
        
        if (replyTo) {
            sendSmtpEmail.replyTo = replyTo;
        }

        return await apiInstance.sendTransacEmail(sendSmtpEmail);
    } catch (error: any) {
        console.error('Brevo SDK Internal Error:', error);
        throw error;
    }
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
        const adminHtml = contactAdminTemplate({ fullName, email, phone, purpose, message });

        await sendEmail(
            { email: RECIPIENT_EMAIL, name: RECIPIENT_NAME },
            `New Contact from ${fullName}`,
            adminHtml,
            { email, name: fullName }
        );

        const senderHtml = contactConfirmationTemplate({ fullName, purpose });

        await sendEmail(
            { email, name: fullName },
            `Thanks for contacting Mindtrix Media!`,
            senderHtml
        );

        console.log(`Emails sent successfully via Brevo for contact form.`);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error: any) {
        console.error('Endpoint Error:', error);
        const detailedError = error.response ? JSON.parse(error.response.text) : error.message;
        res.status(500).json({
            success: false,
            message: 'Failed to send message.',
            error: detailedError
        });
    }
});

// Prototype request endpoint
app.post('/api/prototype', async (req, res) => {
    const { fullName, email, phone, projectType, website, description } = req.body;
    console.log(`Received prototype request from: ${email}`);

    try {
        // 1. Send notification to ADMIN
        const adminHtml = prototypeAdminTemplate({ fullName, email, phone, projectType, website, description });

        await sendEmail(

            { email: RECIPIENT_EMAIL, name: RECIPIENT_NAME },
            `New Prototype Request: ${fullName}`,
            adminHtml,
            { email, name: fullName }
        );

        // 2. Send confirmation to SENDER
        const senderHtml = prototypeConfirmationTemplate({ fullName, projectType });

        await sendEmail(

            { email, name: fullName },
            `Mindtrix Media: We received your prototype request!`,
            senderHtml
        );

        console.log(`Emails sent successfully via Brevo for prototype request.`);
        res.status(200).json({ success: true, message: 'Prototype request sent successfully!' });
    } catch (error: any) {
        console.error('Endpoint Error:', error);
        const detailedError = error.response ? JSON.parse(error.response.text) : error.message;
        res.status(500).json({
            success: false,
            message: 'Failed to send request.',
            error: detailedError
        });
    }
});

// Avoid app.listen on Vercel
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
