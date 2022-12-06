import isEmail from "validator/lib/isEmail";
import nodemailer from "nodemailer";
import validateHuman from "../../../utils/Validators/humanValidation";

const handler = async (req, res) => {
  const { email, topic, content, name, token } = req.body;

  if (!isEmail(email) || topic.length < 5 || content.length < 5) {
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
      user: "swistoklik@outlook.com",
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: "swistoklik@outlook.com",
    to: "swistekxd@gmail.com",
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
