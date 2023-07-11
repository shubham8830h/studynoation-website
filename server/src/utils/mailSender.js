const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) => {
  console.log(process.env.MAIL_HOST);  console.log(process.env.MAIL_USER);
  console.log(process.env.MAIL_PASS);

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: "StudyNotion || CodeHelp - by Babbar",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
