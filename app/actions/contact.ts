// app/actions/contact.ts
"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  console.log("formData", formData);
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("FULL NAME", fullName);
  console.log("email", email);
  console.log("message", message);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@alyamama-iq.com",
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send email" };
  }
}
