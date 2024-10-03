'use server'

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { to, cc, bcc, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error:any, success:any) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        const info = await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL_TO,
            to,                                    
            cc,                                    
            bcc,                                   
            subject: message.subject || 'No Subject', 
            text: message.text,        
            html: message.html,                  
        });

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(info, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });

        return NextResponse.json({ message: 'Die Email wurde erfolgreich versendet.', info }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Leider gab es einen Fehler bei der Formularübermittlung. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine Mail an beispielmail@mail.de', error: error.message }, { status: 500 });
    }
}