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

// Recipient settings from .env
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'mindtrixmediaindia@gmail.com';
const RECIPIENT_NAME = process.env.RECIPIENT_NAME || 'Mindtrix Media Team';

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, purpose, message } = req.body;
    console.log(`Received contact form submission from: ${email}`);

    try {
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        sendSmtpEmail.subject = `New Contact Submission from ${fullName}`;
        sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #333; border-bottom: 2px solid #FF5C00; padding-bottom: 10px;">New Contact Submission</h2>
                <div style="margin: 20px 0;">
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Purpose:</strong> ${purpose}</p>
                </div>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        `;
        // Important: Sender MUST be a validated email in your Brevo account
        sendSmtpEmail.sender = { name: RECIPIENT_NAME, email: RECIPIENT_EMAIL };
        sendSmtpEmail.to = [{ email: RECIPIENT_EMAIL, name: RECIPIENT_NAME }];
        sendSmtpEmail.replyTo = { name: fullName, email: email };

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully via Brevo.');
        res.status(200).json({ success: true, message: 'Message sent successfully!', data });
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
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        sendSmtpEmail.subject = `New Prototype Request from ${fullName}`;
        sendSmtpEmail.htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #333; border-bottom: 2px solid #FF5C00; padding-bottom: 10px;">New Prototype Request</h2>
                <div style="margin: 20px 0;">
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Project Type:</strong> ${projectType}</p>
                    <p><strong>Current Website:</strong> ${website || 'Not provided'}</p>
                </div>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <p><strong>Description:</strong></p>
                    <p style="white-space: pre-wrap;">${description}</p>
                </div>
            </div>
        `;
        // Important: Sender MUST be a validated email in your Brevo account
        sendSmtpEmail.sender = { name: RECIPIENT_NAME, email: RECIPIENT_EMAIL };
        sendSmtpEmail.to = [{ email: RECIPIENT_EMAIL, name: RECIPIENT_NAME }];
        sendSmtpEmail.replyTo = { name: fullName, email: email };

        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Prototype email sent successfully via Brevo.');
        res.status(200).json({ success: true, message: 'Prototype request sent successfully!', data });
    } catch (error: any) {
        console.error('Brevo API Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send request.',
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
