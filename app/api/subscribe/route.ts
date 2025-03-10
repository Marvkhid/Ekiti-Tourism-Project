import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Confirmed - Ekiti Tourism",
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>You will receive updates about upcoming tourism events in Ekiti.</p>
        <p>Stay tuned for exciting festivals, food fairs, and cultural celebrations!</p>
      `,
    };

  
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
