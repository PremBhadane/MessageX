import { resendClient, sender } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js"

// Function to send welcome email
export const sendWelcomeEmail = async (email, name, clientURL) =>{
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to MessageX!",
        html: createWelcomeEmailTemplate(name, clientURL),
    });

    if(error){
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully", data);
};