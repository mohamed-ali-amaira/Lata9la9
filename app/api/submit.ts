// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, adress, selectedOption, referrer } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service
      auth: {
        user: 'your_email@gmail.com', // your email
        pass: 'your_email_password', // your email password or app password
      },
    });

    // Set up email data
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'liwacherif200@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nAddress: ${adress}\nSelected Option: ${selectedOption}\nReferrer: ${referrer}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
