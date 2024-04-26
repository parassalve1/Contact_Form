import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, name ,subject, message } = await request.json();
        const {SMTP_EMAIL , SMTP_USER , SMTP_PASS} = process.env
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: SMTP_USER,
              pass: SMTP_PASS
            }
          });

        const mailOption = {
            from: `${email}`,
            to: SMTP_EMAIL,
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello Augustine</h3>
        <li> title: ${subject}</li>
        <li> Name: ${name}</li>
        <li> email: ${email}</li>
        <li> message: ${message}</li> 
        `
        }

        await transport.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}