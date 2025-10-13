// email.js
import nodemailer from "nodemailer";
import 'dotenv/config';

//
export const sendEmail = async (to, subject, html = "") => {
  
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465, // SSL port
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // full Zoho email
        pass: process.env.SMTP_PASS  // Zoho app password
      },
      logger: true, // log SMTP traffic
      debug: true
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("✅ SMTP server is ready to send emails");

    const mailOptions = {
      from: `"Radical Unlearning" <${process.env.SMTP_USER}>`, 
      to,
      subject,
      html: html || "<h1>Test Email</h1><p>This is a test from Node.js + Zoho SMTP</p>",
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully" };

  } catch (error) {
    console.error("❌ Email sending error:", error);
    return { success: false, message: error.message };
  }
};


