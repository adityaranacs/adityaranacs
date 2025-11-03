import nodemailer from "nodemailer";
import { z } from "zod";

// Email validation schema
const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g. "gmail"
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // Create email HTML (you can also import a React template if you prefer)
    const htmlContent = `
      <div style="font-family:sans-serif;line-height:1.6">
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${zodData.fullName}</p>
        <p><strong>Email:</strong> ${zodData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${zodData.message}</p>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_RECEIVER ?? process.env.EMAIL_USER, // where you receive it
      subject: "New contact form message from portfolio",
      html: htmlContent,
    });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
