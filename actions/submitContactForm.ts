"use server";

import { transporter, mailOptions } from "@/lib/nodemailer";

export default async function submitContactForm(formData: FormData) {
  const data = formData.get("message");

  if (data) {
    const message = data.toString();

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Message From Spinnin",
        text: message,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }
}
