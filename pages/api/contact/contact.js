import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import nodemailer from "nodemailer";

async function validateHuman(token) {
  // console.log("validating token", token);
  const secret = process.env.BACKEND_RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
}

const handler = async (req, res) => {
  const { email, topic, content, name, token } = req.body;

  if (!validator.isEmail(email) || topic.length < 5 || content.length < 5) {
    res.status(400).json({
      status: "error",
      message: "validate your data ",
    });
    return;
  }
  const human = await validateHuman(token);

  if (!human) {
    res.status(400).json({
      status: "error",
      message: "go away black power",
    });
    return;
  }
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "swistek_portfolio@outlook.com",
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: "swistek_portfolio@outlook.com",
    to: "swistek.porfolio@gmail.com",
    subject: `message from ${name}`,
    html: `
    <div>
    <h1>hello world</h1>
    <ul>
    <li>name:${name}</li>
        <li>email:${email}</li>
        <li>email:${topic}</li>
        </ul>
      <p>email:${content}</p>
     </div>

    `,
  };
  transporter.sendMail(options, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "smth went wrong" });
    } else {
      return res.status(200).json({ status: "success", message: "email send" });
    }
  });
};

export default handler;
