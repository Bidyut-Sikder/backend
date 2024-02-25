
const nodemailer = require('nodemailer')





const EmailSend = async (sentTo, emailText, emailSubject) => {

    const transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: 'info@teamrabbil.com',
            pass: '~sR4[bhaC[Qs'
        },
        tls: { rejectUnauthorized: false }

    })
    let options = {
        from: 'Bidyut Sikder <info@teamrabbil.com>',
        to: sentTo,
        subject: emailSubject,
        text: emailText
    }

    return await transporter.sendMail(options);
}





module.exports = EmailSend










































