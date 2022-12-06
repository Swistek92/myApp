import isEmail from "validator/lib/isEmail";
import nodemailer from "nodemailer";

const sendWellcomeEmail = ({ email, name }) => {
  console.log(email, name);
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "swistoklik@outlook.com",
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: "kontakt@swistoklik.pl",
    to: "swistekxd@gmail.com",
    subject: `witaj ${name}  na   Świstoklik.pl!`,
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
      console.log(error);
    } else {
      console.log("send wellcome email");
    }
  });
};

export default sendWellcomeEmail;
