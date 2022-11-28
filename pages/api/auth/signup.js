import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
import validateHuman from "../../../utils/Validators/humanValidation";
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
};

export default handler;
