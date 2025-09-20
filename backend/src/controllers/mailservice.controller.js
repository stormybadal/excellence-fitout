// Updated backend/src/controllers/mailservice.controller.js
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { sendEmail, createContactEmailTemplate } from "../configs/email.config.js";

// Contact form submission
export const submitContactForm = asyncHandler(async (req, res) => {
    const { firstName, email, phoneNumber, serviceNeeded, message } = req.body;

    // Log the form data to console
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("First Name:", firstName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Service Needed:", serviceNeeded);
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===============================");

    // Check if email configuration is set up
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log("⚠️  EMAIL CONFIGURATION MISSING!");
        console.log("Please set up SMTP_USER and SMTP_PASS in your .env file");
        console.log("Form data logged above, but email was not sent.");

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        message: "Contact form submitted successfully",
                        emailSent: false,
                        emailError: "Email configuration not set up",
                        data: {
                            firstName,
                            email,
                            phoneNumber,
                            serviceNeeded,
                            message,
                            submittedAt: new Date().toISOString()
                        }
                    },
                    "Thank you for your message! We'll get back to you within 24 hours."
                )
            );
    }

    try {
        console.log("📧 Attempting to send email...");
        console.log("📧 SMTP Host:", process.env.SMTP_HOST || "smtp.gmail.com");
        console.log("📧 SMTP Port:", process.env.SMTP_PORT || 587);
        console.log("📧 From:", process.env.SMTP_USER);
        console.log("�� To:", process.env.CONTACT_EMAIL || process.env.SMTP_USER);

        // Create email template
        const emailOptions = createContactEmailTemplate({
            firstName,
            email,
            phoneNumber,
            serviceNeeded,
            message
        });

        // Send email
        const emailResult = await sendEmail(emailOptions);
        console.log("✅ EMAIL SENT SUCCESSFULLY!");
        console.log("✅ Message ID:", emailResult.messageId);
        console.log("✅ Email delivered to:", emailOptions.to);

        // Return success response
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        message: "Contact form submitted successfully",
                        emailSent: true,
                        emailId: emailResult.messageId,
                        data: {
                            firstName,
                            email,
                            phoneNumber,
                            serviceNeeded,
                            message,
                            submittedAt: new Date().toISOString()
                        }
                    },
                    "Thank you for your message! We'll get back to you within 24 hours."
                )
            );
    } catch (emailError) {
        console.error("❌ EMAIL SENDING FAILED!");
        console.error("❌ Error details:", emailError.message);
        console.error("❌ Full error:", emailError);

        // Still return success to user, but log the email error
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        message: "Contact form submitted successfully",
                        emailSent: false,
                        emailError: emailError.message,
                        data: {
                            firstName,
                            email,
                            phoneNumber,
                            serviceNeeded,
                            message,
                            submittedAt: new Date().toISOString()
                        }
                    },
                    "Thank you for your message! We'll get back to you within 24 hours."
                )
            );
    }
});