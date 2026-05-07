"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Name, email, and message are required.",
      };
    }

    const { data, error } = await resend.emails.send({
      // Resend allows sending from onboarding@resend.dev to the registered email for testing.
      // If you have a verified domain on Resend, replace this with something like: "Contact <noreply@yourdomain.com>"
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "surajkale9140@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      message: "Thanks for reaching out! I will get back to you soon.",
    };
  } catch (err: any) {
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
