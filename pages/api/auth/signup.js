import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import validateHuman from "../../../utils/Validators/humanValidation";
import mongoose from "mongoose";
import axios from "axios";
import sendWellcomeEmail from "../../../utils/sendWellcomeEmail/sendWellcomeEmail";
import { infoToast } from "../../../utils/Toasts/Toast";
const databaseUrl = process.env.DATABASE;
import isEmail from "validator/lib/isEmail";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const { name, email, password, passwordConfirm, token } = req.body;

  const human = await validateHuman(token);

  if (!human) {
    res.status(400).json({
      status: "error",
      message: "go away black power",
    });
    return;
  }

  const db = await connectDB();

  try {
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
      role: "user",
    });

    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      status: "error",
      data: { error },
    });
  }

  try {
    sendWellcomeEmail({ email, name });

    // let transporter = nodemailer.createTransport({
    //   service: "hotmail",
    //   auth: {
    //     user: "swistek_portfolio@outlook.com",
    //     pass: process.env.PASSWORD,
    //   },
    // });

    // const options = {
    //   from: "swistek_portfolio@outlook.com",
    //   to: email,
    //   subject: `wellcome  on Świstoklik.pl!`,
    //   html: `
    // <div>
    // <h1>Siema ${name}</h1>
    // <h5>miło mi Cię widzieć na mojej stronie świstoklik.pl </h5>
    // <h5>życzę miło spędzonego czasu ! :)  </h5>
    //  </div>
    // `,
    // };
    // transporter.sendMail(options, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("send wellcome email");
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
