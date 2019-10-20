const nodemailer = require('nodemailer');

async function mailer({
    to,
    subject,
    text,
    attach
}) {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });
    var mailOptions = {
        to,
        subject,
        text
    }
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
}

module.exports = mailer;