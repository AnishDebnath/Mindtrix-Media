import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
    contactAdminTemplate,
    contactConfirmationTemplate,
    prototypeAdminTemplate,
    prototypeConfirmationTemplate
} from '../src/templates/emailTemplates.js';

// ponytail: silent config
dotenv.config({ quiet: true } as any);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * Sends transactional email via Resend REST API using native fetch.
 */
const sendEmail = async ({
    to,
    subject,
    html,
    replyTo
}: {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error('RESEND_API_KEY is not defined.');
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Mindtrix Media <hello@mindtrixmedia.com>';

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [to],
            subject,
            html,
            ...(replyTo && { reply_to: replyTo })
        }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to send email via Resend');
    }
    return data;
};

// Health check endpoint
app.get('/api/health', (_req, res) => {
    res.json({ status: 'server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, purpose, message } = req.body;

    try {
        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'mindtrixmediaindia@gmail.com';

        const adminHtml = contactAdminTemplate({ fullName, email, phone, purpose, message });
        await sendEmail({
            to: receiverEmail,
            subject: `New Contact from ${fullName}`,
            html: adminHtml,
            replyTo: email,
        });

        const senderHtml = contactConfirmationTemplate({ fullName, purpose });
        await sendEmail({
            to: email,
            subject: 'Thanks for contacting Mindtrix Media!',
            html: senderHtml,
        });

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error: any) {
        console.error('Contact API Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send message.',
            error: error.message,
        });
    }
});

// Prototype request endpoint
app.post('/api/prototype', async (req, res) => {
    const { fullName, email, phone, projectType, website, description } = req.body;

    try {
        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'mindtrixmediaindia@gmail.com';

        const adminHtml = prototypeAdminTemplate({ fullName, email, phone, projectType, website, description });
        await sendEmail({
            to: receiverEmail,
            subject: `New Prototype Request: ${fullName}`,
            html: adminHtml,
            replyTo: email,
        });

        const senderHtml = prototypeConfirmationTemplate({ fullName, projectType });
        await sendEmail({
            to: email,
            subject: 'Mindtrix Media: We received your prototype request!',
            html: senderHtml,
        });

        res.status(200).json({ success: true, message: 'Prototype request sent successfully!' });
    } catch (error: any) {
        console.error('Prototype API Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send request.',
            error: error.message,
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
