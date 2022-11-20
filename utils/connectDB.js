const databaseUrl = process.env.DATABASE;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(databaseUrl);

    console.log("connected db");
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
