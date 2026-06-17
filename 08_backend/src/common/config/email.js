import nodemailer from "nodemailer"
import "dotenv/config"
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendMail = async (to, subject, html) => {

    await transporter.sendMail({
        from: `${process.env.SMTP_FROM_EMAIL}`,
        to,
        subject,
        html,
        text
    })
}

const sendVerificationEmail = async (email, token) => {

    await transporter.sendMail({
        from: `${process.env.SMTP_FROM_EMAIL}`,
        email,
        subject,
        html,
        text
    })
}

export { sendMail, sendVerificationEmail }

