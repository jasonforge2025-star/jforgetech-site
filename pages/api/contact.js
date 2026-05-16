import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  const { name, email, phone, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      success: false,
      message: "Email service is not configured.",
    });
  }

  try {
    await resend.emails.send({
      from: "JForgeTech Website <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL || "jason.forge2025@gmail.com",
      replyTo: email,
      subject: `New JForgeTech Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New JForgeTech Project Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not selected"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Resend error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again.",
    });
  }
}