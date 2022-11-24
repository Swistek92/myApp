import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModel";
const databaseUrl = process.env.DATABASE;

const handler = async (req, res) => {
  console.log(req.method);
  console.log("connecting to mongo");
  const db = await connectDB();

  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: "user",
  });

  console.log("created document");

  res.status(201).json({
    status: "success",
    data: { newUser },
  });
};

export default handler;
