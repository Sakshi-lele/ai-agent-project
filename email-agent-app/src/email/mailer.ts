import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export class Mailer {
    private transporter: nodemailer.Transporter; // Explicit type

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendEmail(to: string, subject: string, body: string): Promise<void> {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text: body,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Email sent successfully to:', to);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}