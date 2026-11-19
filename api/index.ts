import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
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
const SENDER_NAME = 'Mindtrix Media';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'mindtrixmediaindia@gmail.com';
const RECIPIENT_NAME = process.env.RECIPIENT_NAME || 'Mindtrix Media Team';

/**
 * Sends an email via the Brevo Transactional Email REST API (v3).
 * Uses axios instead of the sib-api-v3-sdk (which is CJS-only and
 * incompatible with Vercel's ESM serverless runtime).
 */
const sendEmail = async (
    to: { email: string; name: string },
    subject: string,
    htmlContent: string,
    replyTo?: { email: string; name: string }
) => {
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
        throw new Error('BREVO_API_KEY is not defined. Please check your Vercel Environment Variables.');
    }

    const payload: Record<string, unknown> = {
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [to],
        subject,
        htmlContent,
    };

    if (replyTo) {
        payload.replyTo = replyTo;
    }

    const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        payload,
        {
            headers: {
                accept: 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json',
            },
        }
    );

    return response.data;
};

// Health check endpoint
app.get('/api/health', (_req, res) => {
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
        console.error('Endpoint Error:', error?.response?.data ?? error.message);
        const detailedError = error?.response?.data ?? error.message;
        res.status(500).json({
            success: false,
            message: 'Failed to send message.',
            error: detailedError,
        });
    }
});

// Prototype request endpoint
app.post('/api/prototype', async (req, res) => {
    const { fullName, email, phone, projectType, website, description } = req.body;
    console.log(`Received prototype request from: ${email}`);

    try {
        const adminHtml = prototypeAdminTemplate({ fullName, email, phone, projectType, website, description });
        await sendEmail(
            { email: RECIPIENT_EMAIL, name: RECIPIENT_NAME },
            `New Prototype Request: ${fullName}`,
            adminHtml,
            { email, name: fullName }
        );

        const senderHtml = prototypeConfirmationTemplate({ fullName, projectType });
        await sendEmail(
            { email, name: fullName },
            `Mindtrix Media: We received your prototype request!`,
            senderHtml
        );

        console.log(`Emails sent successfully via Brevo for prototype request.`);
        res.status(200).json({ success: true, message: 'Prototype request sent successfully!' });
    } catch (error: any) {
        console.error('Endpoint Error:', error?.response?.data ?? error.message);
        const detailedError = error?.response?.data ?? error.message;
        res.status(500).json({
            success: false,
            message: 'Failed to send request.',
            error: detailedError,
        });
    }
});

// Only bind to a port in local development — Vercel handles this in production
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
