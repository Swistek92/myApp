import isEmail from "validator/lib/isEmail";
import nodemailer from "nodemailer";

const sendWellcomeEmail = ({ email, name }) => {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "swistek_portfolio@outlook.com",
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: "swistek_portfolio@outlook.com",
    to: email,
    subject: `wellcome  on Świstoklik.pl!`,
    html: `
    <div>
    <h1>Siema ${name}</h1>
    <h5>miło mi Cię widzieć na mojej stronie świstoklik.pl </h5>
    <h5>życzę miło spędzonego czasu ! :)  </h5>
     </div>
    `,
  };
  transporter.sendMail(options, (error, info) => {
    if (error) {
      throw new Error("smth went wrong", 404);
    } else {
      console.log("send wellcome email");
    }
  });
};

export default sendWellcomeEmail;
