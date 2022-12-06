import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import validateHuman from "../../../utils/Validators/humanValidation";
import mongoose from "mongoose";
import axios from "axios";
import sendWellcomeEmail from "../../../utils/sendWellcomeEmail/sendWellcomeEmail";

const databaseUrl = process.env.DATABASE;

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
  } catch (error) {
    console.log(error);
  }
};

export default handler;
