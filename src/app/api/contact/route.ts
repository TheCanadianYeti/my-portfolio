import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required payload fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || 'podnar.dev@gmail.com';

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM || email}>`,
      replyTo: email,
      to: destinationEmail,
      subject: `[Portfolio Transmission] Message from ${name}`,
      text: `Sender Name: ${name}\nSender Email: ${email}\n\nPayload:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: 'Transmission dispatched transiently via memory buffer.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Transmission routing failure. Please retry or contact directly.' },
      { status: 500 }
    );
  }
}
