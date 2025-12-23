"use server";
import nodemailer from "nodemailer";

export async function submitContactForm(state: any, formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate environment variables
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.SMTP_RECEIVER_EMAIL
  ) {
    console.error("Missing SMTP configuration");
    return { success: false, message: "Server configuration error" };
  }

  const port = parseInt(process.env.SMTP_PORT || "587");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Add timeout settings
    // connectionTimeout: 10000,
    // greetingTimeout: 10000,
  });

  try {
    // Verify connection
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_RECEIVER_EMAIL,
      subject: `طلب استشارة من موقع الشركة`,
      html: `
        <div dir="rtl">
          <p><strong>الإسم:</strong> ${fullName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    return { success: true, message: "تم إرسال الرسالة" };
  } catch (error) {
    console.error("ERROR", error);
    return { success: false, message: "Failed to send email" };
  }
}
