const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.OAUTH_CLIENT_ID,
      process.env.OAUTH_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oAuth2Client.setCredentials({
      access_token: process.env.OAUTH_ACCESS_TOKEN,
      refresh_token: process.env.OAUTH_REFRESH_TOKEN,
    });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sh9422602@gmail.com",
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    let info = await transporter.sendMail({
      from: "StudyNotion web site",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);

    return info;
  } catch (error) {
    console.log("Error occurred while sending email:", error);
    throw error;
  }
};

module.exports = mailSender;
