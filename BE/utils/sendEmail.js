const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      //   secure: Boolean(process.env.SECURE),
      auth: {
        user: "info@archway-hk.com",
        pass: "Q4G(*&kjhkj((((5555K4Nimm",
      },
    });

    let data = await transporter.sendMail({
      from: "info@archway-hk.com",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully", transporter, data);
    return null;

  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
