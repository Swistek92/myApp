import mongoose from "mongoose";
const databaseUrl = process.env.DATABASE;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    const db = await mongoose.connect(databaseUrl);

    console.log("connected db");
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
