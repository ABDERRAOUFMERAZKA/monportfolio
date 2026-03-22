import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: 'abderraouf_merazka@hotmail.com',
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #4f46e5; margin-bottom: 8px;">New message from your portfolio</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-bottom: 24px;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] SMTP error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
