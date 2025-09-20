import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
    const port = parseInt(process.env.SMTP_PORT || "587", 10);

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.hostinger.com",
        port,
        secure: port === 465, // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER, // full email e.g. info@excellenceinteriors.com
            pass: process.env.SMTP_PASS, // actual password
        },
        tls: {
            rejectUnauthorized: false, // optional: helps during testing
        },
    });
};


// Email template for contact form submission
export const createContactEmailTemplate = (formData) => {
    const { firstName, email, phoneNumber, serviceNeeded, message } = formData;

    return {
        from: `"${process.env.SMTP_FROM_NAME || 'Excellense Fitout'}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // where you want to receive emails
        subject: `New Contact Form Submission - ${serviceNeeded}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #666; margin-bottom: 15px;">Contact Details:</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Name:</td>
                                <td style="padding: 8px 0; color: #333;">${firstName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    <a href="tel:${phoneNumber}" style="color: #f59e0b; text-decoration: none;">${phoneNumber}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Service:</td>
                                <td style="padding: 8px 0; color: #333;">${serviceNeeded}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
                                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #666; margin-bottom: 15px;">Message:</h3>
                        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
                            <p style="margin: 0; color: #333; line-height: 1.6;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                        <p style="color: #666; font-size: 14px; margin: 0;">
                            This email was sent from your website contact form.
                        </p>
                    </div>
                </div>
            </div>
        `,
        text: `
New Contact Form Submission

Name: ${firstName}
Email: ${email}
Phone: ${phoneNumber}
Service: ${serviceNeeded}
Submitted: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from your website contact form.
        `
    };
};

// Send email function
export const sendEmail = async (emailOptions) => {
    try {
        const transporter = createTransporter();
        const info = await transporter.sendMail(emailOptions);
        console.log("Email sent successfully:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

export { createTransporter };
